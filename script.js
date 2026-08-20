let cart = {};
let currentSelectedDepartment = "ALL";
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
function getMinSetLimit(price, department = 'glassware') {
    const dept = (department || '').toLowerCase();

    // Vacuum Bottles MOQ Rule
    if (dept === 'vaccum_bottles' || dept === 'vaccum bottles' || dept === 'bottles') {
        if (price < 100) return 100;
        return 12;
    }

    // Glassware & Other Items Default MOQ Rule
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
// 4. DEPARTMENT SWITCHER & CATEGORY PILLS BAR
// ==========================================
function switchDepartment(dept, element = null) {
    currentSelectedDepartment = dept;
    currentSelectedCategory = "ALL";

    // 1. Remove active class from all department buttons
    document.querySelectorAll(".dept-tab-btn").forEach(btn => btn.classList.remove("active"));
    
    // 2. Add active class to selected department button
    if (element) {
        element.classList.add("active");
    } else {
        const allBtns = Array.from(document.querySelectorAll('.dept-tab-btn'));
        const matchedBtn = allBtns.find(b => {
            const onclickAttr = (b.getAttribute('onclick') || '').toLowerCase();
            const textAttr = b.textContent.toLowerCase();
            
            if (dept === 'ALL' && (onclickAttr.includes("'all'") || textAttr.includes('all'))) return true;
            if ((dept.toLowerCase() === 'vaccum_bottles' || dept.toLowerCase() === 'bottles') && 
                (onclickAttr.includes('vaccum') || textAttr.includes('vaccum'))) return true;
            if ((dept.toLowerCase() === 'kitchenware & other' || dept.toLowerCase() === 'kitchenware') && 
                (onclickAttr.includes('kitchenware') || textAttr.includes('kitchenware'))) return true;
            if (dept.toLowerCase() === 'glassware' && (onclickAttr.includes('glassware') || textAttr.includes('glassware'))) return true;
            return false;
        });
        if (matchedBtn) matchedBtn.classList.add("active");
    }

    // 3. Refresh categories and product grid
    initCategoryPills();
    filterProducts();
}

function initCategoryPills() {
    const pillsBar = document.getElementById("categoryPillsBar");
    if (!pillsBar || typeof PRODUCTS === 'undefined') return;

    pillsBar.innerHTML = `
        <a href="sneak-peek.html" class="cat-pill sneak-peek-link">✨ Sneak Peek / Diwali (143)</a>
        <div class="cat-pill active" onclick="selectCategory('ALL', this)">📁 All Categories</div>
    `;

    let availableProducts = PRODUCTS;
    if (currentSelectedDepartment !== "ALL") {
        availableProducts = PRODUCTS.filter(p => (p.department || '').toLowerCase() === currentSelectedDepartment.toLowerCase());
    }

    const categoriesInProducts = [...new Set(availableProducts.map(p => p.category).filter(Boolean))];
    
    const sortedCategories = categoriesInProducts.sort((a, b) => {
        if (typeof MASTER_SORT_ORDER === 'undefined') return 0;
        let indexA = MASTER_SORT_ORDER.indexOf(a);
        let indexB = MASTER_SORT_ORDER.indexOf(b);
        if (indexA === -1) indexA = 999;
        if (indexB === -1) indexB = 999;
        return indexA - indexB;
    });

    sortedCategories.forEach(cat => {
        const pill = document.createElement("div");
        pill.className = "cat-pill";
        pill.innerText = cat;
        pill.onclick = () => selectCategory(cat, pill);
        pillsBar.appendChild(pill);
    });
}

function selectCategory(cat, element) {
    currentSelectedCategory = cat;
    
    document.querySelectorAll(".cat-pill").forEach(p => p.classList.remove("active"));
    if (element) element.classList.add("active");
    
    filterProducts();
}

function getInitialImagePath(item) {
    const dept = (item.department || '').toLowerCase();
    if (dept === 'vaccum_bottles' || dept === 'vaccum bottles' || dept === 'bottles') {
        return `images/vaccum_bottles/${item.code}.jpg`;
    } else if (dept === 'kitchenware & other' || dept === 'kitchenware') {
        return `images/kitchenware/${item.code}.jpg`;
    }
    return `images/glassware/${item.code}.jpg`;
}

function handleImageFallback(imgElem, code) {
    const fallbackPaths = [
        `images/glassware/${code}.jpeg`,
        `images/glassware/${code}.png`,
        `images/glassware/${code}.JPG`,
        `images/vaccum_bottles/${code}.jpg`,
        `images/vaccum_bottles/${code}.jpeg`,
        `images/vaccum_bottles/${code}.png`,
        `images/kitchenware/${code}.jpg`,
        `images/kitchenware/${code}.jpeg`,
        `images/kitchenware/${code}.png`
    ];

    let currentIndex = parseInt(imgElem.getAttribute('data-err-idx') || '0', 10);

    if (currentIndex < fallbackPaths.length) {
        imgElem.setAttribute('data-err-idx', currentIndex + 1);
        imgElem.src = fallbackPaths[currentIndex];
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
        const itemDept = p.department || 'glassware';
        const minSet = getMinSetLimit(effectivePrice, itemDept);
        const imgSrc = getInitialImagePath(p);

        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <div class="card-img-wrapper">
                <span class="stock-tag"><span class="stock-dot"></span> In Stock</span>
                <img src="${imgSrc}" 
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
                    <button class="qty-btn" onclick="updateItemQty('${p.code}', 'ctn', -1, ${effectivePrice}, '${itemDept}')">-</button>
                    <span class="qty-val" id="ctn-${p.code}">${itemData.ctn}</span>
                    <button class="qty-btn" onclick="updateItemQty('${p.code}', 'ctn', 1, ${effectivePrice}, '${itemDept}')">+</button>
                </div>

                <!-- Set Counter -->
                <div class="counter-row">
                    <span class="counter-label">SET</span>
                    <button class="qty-btn" onclick="updateItemQty('${p.code}', 'set', -1, ${effectivePrice}, '${itemDept}')">-</button>
                    <span class="qty-val" id="set-${p.code}">${itemData.set}</span>
                    <button class="qty-btn" onclick="updateItemQty('${p.code}', 'set', 1, ${effectivePrice}, '${itemDept}')">+</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ==========================================
// 5. QUANTITY UPDATE & ESTIMATED TOTAL
// ==========================================
function updateItemQty(code, type, change, price, department = 'glassware') {
    if (!cart[code]) {
        cart[code] = { ctn: 0, set: 0 };
    }

    const minSetLimit = getMinSetLimit(price, department);

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
        const itemDept = (p.department || '').toLowerCase();
        const matchesDept = (currentSelectedDepartment === "ALL") || (itemDept === currentSelectedDepartment.toLowerCase());
        const matchesCat = (currentSelectedCategory === "ALL") || (p.category === currentSelectedCategory);
        const matchesQuery = p.code.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query);
        return matchesDept && matchesCat && matchesQuery;
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
// 9. DEEP-LINKING (Direct URL Navigation Handler)
// ==========================================
function checkUrlDepartment() {
    const hash = window.location.hash.toLowerCase().replace('#', '').trim();
    const urlParams = new URLSearchParams(window.location.search);
    const deptParam = (urlParams.get('dept') || '').toLowerCase().trim();
    
    const target = hash || deptParam;

    if (target === 'bottles' || target === 'vaccum_bottles' || target === 'vaccum-bottles') {
        switchDepartment('vaccum_bottles');
    } else if (target === 'kitchenware' || target === 'kitchen') {
        switchDepartment('Kitchenware & Other');
    } else if (target === 'glassware') {
        switchDepartment('Glassware');
    } else {
        switchDepartment('ALL');
    }
}

// ==========================================
// INIT ON LOAD
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    updateAccessHeader();
    if (typeof PRODUCTS !== 'undefined') {
        // Direct deep-link execution
        checkUrlDepartment();
    }
});

window.addEventListener("hashchange", checkUrlDepartment);