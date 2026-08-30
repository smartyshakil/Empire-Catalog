importScripts('https://www.gstatic.com/firebasejs/12.18.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.18.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyC5X4TMCds_atY_wi67b24D6pCT9pq83Z8",
  authDomain: "empirequotationdesk.firebaseapp.com",
  projectId: "empirequotationdesk",
  storageBucket: "empirequotationdesk.firebasestorage.app",
  messagingSenderId: "165921209421",
  appId: "1:165921209421:web:7a7088d18aec2ff0dd7004"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'images/icon-192.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});