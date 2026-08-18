let cart = {};
let currentSelectedCategory = "ALL";

// ==========================================
// 1. DUAL ACCESS CODE SYSTEM (Master & Complex Daily Code)
// ==========================================
const MASTER_CODE = "EMPIRE2026";

function getTodayDailyCode() {
    const today = new Date();
    const dateNum = today.getDate();
    const calculatedVal = (dateNum * 3) + 786;
    return "EG" + calculatedVal;
}

function promptAccessCode() {
    const userCode = prompt("Enter Wholesale Access Code:");
    if (!userCode) return;
    
    const dailyCode = getTodayDailyCode();
    const cleanCode = userCode.trim().toUpperCase();

    if (cleanCode === MASTER_CODE || cleanCode === dailyCode) {
        localStorage.setItem("empire_access_mode", "WHOLESALE");
        alert("🟢 Wholesale Access Granted!");
    } else {
        localStorage.setItem("empire_access_mode", "RETAIL");
        alert("❌ Invalid Code! Showing Retail Rates.");
    }
    location.reload();
}

function getAccessMultiplier() {
    const mode = localStorage.getItem("empire_access_mode");
    return (mode === "WHOLESALE") ? 1 : 2;
}

function updateAccessHeader() {
    const badge = document.getElementById("accessBadge");
    if (!badge) return;
    const mode = localStorage.getItem("empire_access_mode");
    if (mode === "WHOLESALE") {
        badge.className = "access-badge wholesale";
        badge.innerText = "🟢 Wholesale Active";
    } else {
        badge.className = "access-badge";
        badge.innerText = "🔑 Wholesale Access";
    }
}

// ==========================================
// 2. DYNAMIC MOQ RULES (Price-Based Minimums)
// ==========================================
function getMinSetLimit(price) {
    if (price < 150) return 12;
    if (price <= 399) return 4;
    return 2;
}

// ==========================================
// 3. CARTON PACKING RESOLVER
// ==========================================
function getCtnPackingSize(item) {
    if (!item) return 1;

    const explicitSpec = item.Carton_Spec || item.carton_spec || item.ctn_spec;
    if (explicitSpec && !isNaN(Number(explicitSpec)) && Number(explicitSpec) > 0) {
        return Number(explicitSpec);
    }

    if (item.desc) {
        const cleanDesc = item.desc.toUpperCase();
        const match = cleanDesc.match(/(\d+)\s*(?:SET|SETS|PC|PCS|PIECES)\s*(?:IN\s*)?(?:CTN|CARTOON|BOX\b)/i);
        if (match && match[1]) {
            return parseInt(match[1], 10);
        }
    }

    return 1;
}

// ==========================================
// 4. CATEGORY PILLS BAR & RENDER
// ==========================================
function initCategoryPills() {
    const pillsBar = document.getElementById("categoryPillsBar");
    if (!pillsBar || typeof PRODUCTS === 'undefined') return;

    const categoriesInProducts = [...new Set(PRODUCTS.map(p => p.category))];
    
    const sortedCategories = categoriesInProducts.sort((a, b) => {
        if (typeof MASTER_SORT_ORDER === 'undefined') return 0;
        let indexA = MASTER_SORT_ORDER.indexOf(a);
        let indexB = MASTER_SORT_ORDER.indexOf(b);
        if (indexA === -1) indexA = 999;
        if (indexB === -1) indexB = 999;
        return indexA - indexB;
    });

    sortedCategories.forEach(cat => {
        if (cat) {
            const pill = document.createElement("div");
            pill.className = "cat-pill";
            pill.innerText = cat;
            pill.onclick = () => selectCategory(cat, pill);
            pillsBar.appendChild(pill);
        }
    });
}

function selectCategory(cat, element) {
    currentSelectedCategory = cat;
    
    document.querySelectorAll(".cat-pill").forEach(p => p.classList.remove("active"));
    if (element) element.classList.add("active");
    
    filterProducts();
}

function handleImageFallback(imgElem, code) {
    const extensions = ['.jpeg', '.png', '.jpg', '.JPG', '.JPEG', '.PNG', '.webp'];
    let currentIndex = parseInt(imgElem.getAttribute('data-err-idx') || '0', 10);

    if (currentIndex < extensions.length) {
        imgElem.setAttribute('data-err-idx', currentIndex + 1);
        imgElem.src = `images/glassware/${code}${extensions[currentIndex]}`;
    } else {
        imgElem.onerror = null;
    }
}

function copyItemCode(code) {
    navigator.clipboard.writeText(code).then(() => {
        showToast(`Copied: ${code}`);
    }).catch(() => {
        showToast(code);
    });
}

function showToast(msg) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.innerText = msg;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 1800);
}

function renderProducts(items) {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = "";

    if (items.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                <p style="font-weight:600; font-size:14px;">No products found</p>
                <p style="font-size:12px; margin-top:4px;">Try checking for spelling or select another category.</p>
            </div>
        `;
        return;
    }

    const multiplier = getAccessMultiplier();

    items.forEach(p => {
        const itemData = cart[p.code] || { ctn: 0, set: 0 };
        const effectivePrice = Number(p.price) * multiplier;
        const minSet = getMinSetLimit(effectivePrice);

        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <div class="card-img-wrapper">
                <span class="stock-tag"><span class="stock-dot"></span> In Stock</span>
                <img src="images/glassware/${p.code}.jpg" 
                     loading="lazy"
                     data-err-idx="0"
                     onerror="handleImageFallback(this, '${p.code}')" 
                     alt="${p.code}" 
                     onclick="openLightbox(this.src, '${p.code} - ${p.desc}')">
            </div>
            <div>
                <div class="p-code" onclick="copyItemCode('${p.code}')" title="Click to Copy Code">${p.code} 📋</div>
                <div class="p-desc">${p.desc}</div>
                <div class="p-price">Rs. ${effectivePrice} <span>${p.unit}</span></div>
                <div class="moq-tag">Min. SET: ${minSet}</div>
            </div>
            
            <div class="counter-section">
                <!-- Carton Counter -->
                <div class="counter-row">
                    <span class="counter-label">CTN</span>
                    <button class="qty-btn" onclick="updateItemQty('${p.code}', 'ctn', -1, ${effectivePrice})">-</button>
                    <span class="qty-val" id="ctn-${p.code}">${itemData.ctn}</span>
                    <button class="qty-btn" onclick="updateItemQty('${p.code}', 'ctn', 1, ${effectivePrice})">+</button>
                </div>

                <!-- Set Counter -->
                <div class="counter-row">
                    <span class="counter-label">SET</span>
                    <button class="qty-btn" onclick="updateItemQty('${p.code}', 'set', -1, ${effectivePrice})">-</button>
                    <span class="qty-val" id="set-${p.code}">${itemData.set}</span>
                    <button class="qty-btn" onclick="updateItemQty('${p.code}', 'set', 1, ${effectivePrice})">+</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ==========================================
// 5. QUANTITY UPDATE & ESTIMATED TOTAL
// ==========================================
function updateItemQty(code, type, change, price) {
    if (!cart[code]) {
        cart[code] = { ctn: 0, set: 0 };
    }

    const minSetLimit = getMinSetLimit(price);

    if (type === 'ctn') {
        cart[code].ctn += change;
        if (cart[code].ctn < 0) cart[code].ctn = 0;
    } else if (type === 'set') {
        if (cart[code].set === 0 && change > 0) {
            cart[code].set = minSetLimit;
        } else {
            cart[code].set += change;
            if (cart[code].set < minSetLimit && change < 0) {
                cart[code].set = 0;
            }
        }
    }

    const ctnElem = document.getElementById(`ctn-${code}`);
    const setElem = document.getElementById(`set-${code}`);

    if (cart[code].ctn === 0 && cart[code].set === 0) {
        delete cart[code];
        if (ctnElem) ctnElem.innerText = 0;
        if (setElem) setElem.innerText = 0;
    } else {
        if (ctnElem) ctnElem.innerText = cart[code].ctn;
        if (setElem) setElem.innerText = cart[code].set;
    }

    updateCartBar();
}

function calculateCurrentTotal() {
    const keys = Object.keys(cart);
    const multiplier = getAccessMultiplier();
    let estTotalAmount = 0;

    keys.forEach(code => {
        const item = PRODUCTS.find(p => p.code === code);
        if (item) {
            const unitPrice = Number(item.price) * multiplier;
            const packingSize = getCtnPackingSize(item);

            if (cart[code].set > 0) {
                estTotalAmount += (cart[code].set * unitPrice);
            }
            if (cart[code].ctn > 0) {
                estTotalAmount += (cart[code].ctn * packingSize * unitPrice);
            }
        }
    });

    return estTotalAmount;
}

function updateCartBar() {
    const totalCount = Object.keys(cart).length;
    document.getElementById("totalItems").innerText = totalCount;

    const estTotalAmount = calculateCurrentTotal();
    const totalDisplay = document.getElementById("cartEstTotal");
    if (totalDisplay) {
        totalDisplay.innerText = `Rs. ${estTotalAmount.toLocaleString('en-IN')}`;
    }
}

// ==========================================
// 6. ORDER SUMMARY DRAWER & CART MANAGEMENT
// ==========================================
function openOrderDrawer() {
    const keys = Object.keys(cart);
    if (keys.length === 0) {
        alert("Pehle kisi item ki Quantity select karein!");
        return;
    }

    renderDrawerItems();
    document.getElementById("drawerBackdrop").style.display = "block";
    document.getElementById("orderDrawer").classList.add("open");
}

function renderDrawerItems() {
    const listContainer = document.getElementById("drawerItemsList");
    listContainer.innerHTML = "";

    const keys = Object.keys(cart);
    if (keys.length === 0) {
        closeOrderDrawer();
        return;
    }

    const multiplier = getAccessMultiplier();

    keys.forEach(code => {
        const item = PRODUCTS.find(p => p.code === code);
        const orderData = cart[code];
        const unitPrice = Number(item.price) * multiplier;
        const packingSize = getCtnPackingSize(item);

        let itemTotal = 0;
        let qtyText = [];

        if (orderData.ctn > 0) {
            qtyText.push(`${orderData.ctn} CTN`);
            itemTotal += (orderData.ctn * packingSize * unitPrice);
        }
        if (orderData.set > 0) {
            qtyText.push(`${orderData.set} SET`);
            itemTotal += (orderData.set * unitPrice);
        }

        const row = document.createElement("div");
        row.className = "drawer-item-row";
        row.innerHTML = `
            <div class="drawer-item-info">
                <div class="drawer-item-code">${code}</div>
                <div class="drawer-item-qty">${qtyText.join(" + ")}</div>
            </div>
            <div class="drawer-item-right">
                <div class="drawer-item-price">Rs. ${itemTotal.toLocaleString('en-IN')}</div>
                <button class="drawer-trash-btn" onclick="removeSingleItemFromCart('${code}')" title="Remove Item">🗑️</button>
            </div>
        `;
        listContainer.appendChild(row);
    });

    const totalAmount = calculateCurrentTotal();
    document.getElementById("drawerEstTotal").innerText = `Rs. ${totalAmount.toLocaleString('en-IN')}`;
}

function removeSingleItemFromCart(code) {
    if (cart[code]) {
        delete cart[code];
        
        const ctnElem = document.getElementById(`ctn-${code}`);
        const setElem = document.getElementById(`set-${code}`);
        if (ctnElem) ctnElem.innerText = 0;
        if (setElem) setElem.innerText = 0;
        
        updateCartBar();
        renderDrawerItems();
    }
}

function clearFullCart() {
    if (confirm("Kya aap pura Cart reset karna chahte hain?")) {
        cart = {};
        document.querySelectorAll(".qty-val").forEach(el => el.innerText = "0");
        updateCartBar();
        closeOrderDrawer();
    }
}

function closeOrderDrawer() {
    document.getElementById("drawerBackdrop").style.display = "none";
    document.getElementById("orderDrawer").classList.remove("open");
}

function onSearchInput() {
    const searchVal = document.getElementById("searchInput").value;
    const clearBtn = document.getElementById("searchClearBtn");
    if (clearBtn) {
        clearBtn.style.display = searchVal.length > 0 ? "block" : "none";
    }
    filterProducts();
}

function clearSearch() {
    const searchInput = document.getElementById("searchInput");
    searchInput.value = "";
    document.getElementById("searchClearBtn").style.display = "none";
    filterProducts();
}

function filterProducts() {
    const query = document.getElementById("searchInput").value.toLowerCase().trim();
    const sortVal = document.getElementById("sortSelect").value;

    let filtered = PRODUCTS.filter(p => {
        const matchesCat = (currentSelectedCategory === "ALL") || (p.category === currentSelectedCategory);
        const matchesQuery = p.code.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query);
        return matchesCat && matchesQuery;
    });

    if (sortVal === "PRICE_LOW") {
        filtered.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sortVal === "PRICE_HIGH") {
        filtered.sort((a, b) => Number(b.price) - Number(a.price));
    }

    renderProducts(filtered);
}

// ==========================================
// 7. WHATSAPP SENDER (SEPARATE LINES FOR PYTHON PARSER)
// ==========================================
function sendWhatsAppOrder() {
    const keys = Object.keys(cart);
    if (keys.length === 0) {
        alert("Pehle kisi item ki Quantity select karein!");
        return;
    }

    let message = "🛍️ *NEW CATALOG ORDER - EMPIRE GLASSWARE*\n\n";
    let lineCount = 1;

    keys.forEach((code) => {
        const item = PRODUCTS.find(p => p.code === code);
        const orderData = cart[code];

        if (orderData.ctn > 0) {
            message += `${lineCount}. *${code}* - ${item.desc}\n   👉 *Qty:* ${orderData.ctn} CTN\n\n`;
            lineCount++;
        }

        if (orderData.set > 0) {
            message += `${lineCount}. *${code}* - ${item.desc}\n   👉 *Qty:* ${orderData.set} SET\n\n`;
            lineCount++;
        }
    });

    message += "Please confirm order & invoice.";

    const phone = "919601693938"; 
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// ==========================================
// 8. PHOTO LIGHTBOX / ZOOM LOGIC
// ==========================================
let isLightboxOpen = false;

function openLightbox(imgSrc, titleText) {
    const modal = document.getElementById("lightboxModal");
    const img = document.getElementById("lightboxImg");
    const title = document.getElementById("lightboxTitle");
    
    img.src = imgSrc;
    title.innerText = titleText;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";

    if (!isLightboxOpen) {
        isLightboxOpen = true;
        history.pushState({ lightbox: true }, "");
    }
}

function closeLightbox(fromHistory = false) {
    const modal = document.getElementById("lightboxModal");
    if (!modal) return;

    modal.style.display = "none";
    document.body.style.overflow = "auto";

    if (isLightboxOpen) {
        isLightboxOpen = false;
        if (!fromHistory && history.state && history.state.lightbox) {
            history.back();
        }
    }
}

window.addEventListener("popstate", (e) => {
    if (isLightboxOpen) {
        closeLightbox(true);
    }
});

// ==========================================
// INIT ON LOAD
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    updateAccessHeader();
    if (typeof PRODUCTS !== 'undefined') {
        initCategoryPills();
        renderProducts(PRODUCTS);
    }
});