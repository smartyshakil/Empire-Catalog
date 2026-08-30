const CACHE_NAME = 'empire-catalog-v3.2';
const IMAGE_CACHE_NAME = 'empire-images-v3.2';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './script.js',
  './products_data.js',
  './manifest.json'
];

// Install Event - Pre-cache critical app shell
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate Event - Clean old caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME && key !== IMAGE_CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch Event - Smart Strategy
self.addEventListener('fetch', (e) => {
  const requestUrl = new URL(e.request.url);

  // Ignore non-GET, analytics, or external API calls
  if (e.request.method !== 'GET' || requestUrl.origin.includes('google-analytics') || requestUrl.origin.includes('googletagmanager')) {
    return;
  }

  // Strategy for Images: Cache-First with Dynamic Caching
  if (e.request.destination === 'image' || requestUrl.pathname.includes('/images/')) {
    e.respondWith(
      caches.match(e.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(e.request).then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }
          const responseToCache = networkResponse.clone();
          caches.open(IMAGE_CACHE_NAME).then((cache) => {
            cache.put(e.request, responseToCache);
          });
          return networkResponse;
        }).catch(() => {
          // If offline and image not cached, fallback gracefully
          return caches.match(e.request);
        });
      })
    );
    return;
  }

  // Strategy for App Shell & Scripts: Stale-While-Revalidate (Instant load + background refresh)
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      const fetchPromise = fetch(e.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(e.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => cachedResponse);

      return cachedResponse || fetchPromise;
    })
  );
});