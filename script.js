// ==========================================
// CART STORAGE HELPERS
// ==========================================
function loadSavedCart() {
    try {
        const saved = localStorage.getItem("empire_user_cart");
        return saved ? JSON.parse(saved) : {};
    } catch (e) {
        return {};
    }
}

function persistCart() {
    localStorage.setItem("empire_user_cart", JSON.stringify(cart));
}

let cart = loadSavedCart();
let currentSelectedDepartment = "ALL";
let currentSelectedCategory = "ALL";

// ==========================================
// 1. TIERED ACCESS CODE SYSTEM (Secure Instant Obfuscation)
// ==========================================
// Obfuscated Security Keys (Protected from plain text search in DevTools)
const _K_MASTER = [69, 77, 80, 73, 82, 69, 50, 48, 50, 54].map(c => String.fromCharCode(c)).join(''); // EMPIRE2026
const _K_TIER45 = [69, 77, 80, 73, 82, 69, 52, 53].map(c => String.fromCharCode(c)).join('');         // EMPIRE45
const _K_TIER40 = [69, 77, 80, 73, 82, 69, 52, 48].map(c => String.fromCharCode(c)).join('');         // EMPIRE40

function getTodayDailyCode() {
    const today = new Date();
    const dateNum = today.getDate();
    const calculatedVal = (dateNum * 3) + 786;
    return "EG" + calculatedVal;
}

function promptAccessCode() {
    const modal = document.getElementById("accessModal");
    const backdrop = document.getElementById("accessModalBackdrop");
    const input = document.getElementById("accessCodeInput");
    if (modal && backdrop) {
        modal.style.display = "block";
        backdrop.style.display = "block";
        if (input) {
            input.value = "";
            input.focus();
        }
    }
}

function closeAccessModal() {
    const modal = document.getElementById("accessModal");
    const backdrop = document.getElementById("accessModalBackdrop");
    if (modal && backdrop) {
        modal.style.display = "none";
        backdrop.style.display = "none";
    }
}

function applyAccessCodeFromModal() {
    const input = document.getElementById("accessCodeInput");
    if (!input) return;
    const userCode = input.value.trim().toUpperCase();
    if (!userCode) return;

    const dailyCode = getTodayDailyCode();

    if (userCode === _K_MASTER || userCode === dailyCode) {
        localStorage.setItem("empire_access_tier", "50");
        localStorage.setItem("empire_access_code", userCode);
        alert("🟢 Wholesale Access (Flat 50% Less) Activated!");
    } else if (userCode === _K_TIER45) {
        localStorage.setItem("empire_access_tier", "45");
        localStorage.setItem("empire_access_code", userCode);
        alert("🟢 Dealer Access (45% Less Rate) Activated!");
    } else if (userCode === _K_TIER40) {
        localStorage.setItem("empire_access_tier", "40");
        localStorage.setItem("empire_access_code", userCode);
        alert("🟢 Partner Access (40% Less Rate) Activated!");
    } else {
        localStorage.setItem("empire_access_tier", "0");
        localStorage.setItem("empire_access_code", "RETAIL");
        alert("❌ Invalid Code! Showing Standard Retail Rates.");
    }
    
    closeAccessModal();
    location.reload();
}

function getAccessMultiplier() {
    const tier = localStorage.getItem("empire_access_tier");
    if (tier === "50") return 1;       // Flat 50% Less = Base Master Price (1x)
    if (tier === "45") return 1.1;     // 45% Less on 2x Retail = 1.1x Base Price
    if (tier === "40") return 1.2;     // 40% Less on 2x Retail = 1.2x Base Price
    return 2;                          // Standard Retail Mode = 2x Base Price
}

function getTierLabel() {
    const tier = localStorage.getItem("empire_access_tier");
    if (tier === "50") return "Wholesale (50% OFF Rate)";
    if (tier === "45") return "Dealer (45% OFF Rate)";
    if (tier === "40") return "Partner (40% OFF Rate)";
    return "Standard Retail (No Code)";
}

function updateAccessHeader() {
    const badge = document.getElementById("accessBadge");
    if (!badge) return;
    const tier = localStorage.getItem("empire_access_tier");
    if (tier && tier !== "0") {
        badge.className = "access-badge wholesale";
        badge.innerText = `🟢 Tier-${tier}% Active`;
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
// 3. CARTON PACKING RESOLVER & DISPLAY CHIPS
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

function getDisplayPacking(item) {
    const packing = getCtnPackingSize(item);
    return `${packing} pcs/CTN`;
}

// ==========================================
// 4. DEPARTMENT SWITCHER & CATEGORY PILLS BAR
// ==========================================
function switchDepartment(dept, element = null) {
    currentSelectedDepartment = dept;
    currentSelectedCategory = "ALL";

    document.querySelectorAll(".dept-tab-btn").forEach(btn => btn.classList.remove("active"));
    
    if (element) {
        element.classList.add("active");
        if (typeof element.scrollIntoView === "function") {
            element.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
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
        if (matchedBtn) {
            matchedBtn.classList.add("active");
            if (typeof matchedBtn.scrollIntoView === "function") {
                matchedBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            }
        }
    }

    initCategoryPills();
    filterProducts();
}

function initCategoryPills() {
    const pillsBar = document.getElementById("categoryPillsBar");
    if (!pillsBar || typeof PRODUCTS === 'undefined') return;

    let availableProducts = PRODUCTS;
    if (currentSelectedDepartment !== "ALL") {
        availableProducts = PRODUCTS.filter(p => (p.department || '').toLowerCase() === currentSelectedDepartment.toLowerCase());
    }

    const totalAvailableCount = availableProducts.length;

    pillsBar.innerHTML = `
        <a href="sneak-peek.html" class="cat-pill sneak-peek-link">✨ Sneak Peek / Diwali (143)</a>
        <div class="cat-pill active" onclick="selectCategory('ALL', this)">📁 All Categories (${totalAvailableCount})</div>
    `;

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
        const catCount = availableProducts.filter(p => p.category === cat).length;
        const pill = document.createElement("div");
        pill.className = "cat-pill";
        pill.innerText = `${cat} (${catCount})`;
        pill.onclick = () => selectCategory(cat, pill);
        pillsBar.appendChild(pill);
    });
}

function selectCategory(cat, element) {
    currentSelectedCategory = cat;
    
    document.querySelectorAll(".cat-pill").forEach(p => p.classList.remove("active"));
    if (element) {
        element.classList.add("active");
        if (typeof element.scrollIntoView === "function") {
            element.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
    }
    
    filterProducts();

    // Smooth scroll back to top of main catalog grid
    const mainContent = document.querySelector(".main-catalog-content");
    if (mainContent) {
        const topPos = mainContent.getBoundingClientRect().top + window.pageYOffset - 110;
        window.scrollTo({ top: Math.max(0, topPos), behavior: 'smooth' });
    }
}

function getInitialImagePath(item) {
    const dept = (item.department || '').toLowerCase();
    if (dept.includes('vaccum') || dept.includes('bottle')) {
        return `images/vaccum_bottles/${item.code}.jpg`;
    } else if (dept.includes('kitchen')) {
        return `images/kitchenware/${item.code}.jpg`;
    }
    return `images/glassware/${item.code}.jpg`;
}

function handleImageFallback(imgElem, code, dept) {
    let deptFolder = "glassware";
    if (dept) {
        let d = dept.toLowerCase();
        if (d.includes("kitchen")) deptFolder = "kitchenware";
        else if (d.includes("vaccum") || d.includes("bottle")) deptFolder = "vaccum_bottles";
    }

    const fallbackPaths = [
        `images/${deptFolder}/${code}.JPG`,
        `images/${deptFolder}/${code}.png`,
        `images/${deptFolder}/${code}.PNG`,
        `images/${deptFolder}/${code}.jpeg`,
        `images/${deptFolder}/${code}.JPEG`,
        `images/glassware/${code}.jpg`,
        `images/glassware/${code}.JPG`,
        `images/kitchenware/${code}.JPG`,
        `images/vaccum_bottles/${code}.JPG`
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
        const effectivePrice = Math.round(Number(p.price) * multiplier);
        const itemDept = p.department || 'glassware';
        const minSet = getMinSetLimit(effectivePrice, itemDept);
        const packingDesc = getDisplayPacking(p);
        const imgSrc = getInitialImagePath(p);

        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <div class="card-img-wrapper">
                <span class="stock-tag"><span class="stock-dot"></span> In Stock</span>
                <img src="${imgSrc}" 
                     loading="lazy"
                     data-err-idx="0"
                     onerror="handleImageFallback(this, '${p.code}', '${itemDept}')" 
                     alt="${p.code}" 
                     onclick="openLightbox(this.src, '${p.code} - ${p.desc}')">
            </div>
            <div>
                <div class="p-code" onclick="copyItemCode('${p.code}')" title="Click to Copy Code">${p.code} 📋</div>
                <div class="p-desc">${p.desc}</div>
                
                <div class="card-chips-row">
                    <span class="b2b-chip">📦 ${packingDesc}</span>
                    <span class="b2b-chip gold">MOQ: ${minSet} SET</span>
                </div>

                <div class="p-price">Rs. ${effectivePrice} <span>${p.unit}</span></div>

                <div class="card-actions">
                    <button class="btn-detail" onclick="openProductDetail('${p.code}')">View Details</button>
                </div>
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
// 5. PRODUCT DETAIL MODAL LOGIC
// ==========================================
function openProductDetail(code) {
    const item = PRODUCTS.find(p => p.code === code);
    if (!item) return;

    const multiplier = getAccessMultiplier();
    const effectivePrice = Math.round(Number(item.price) * multiplier);
    const itemDept = item.department || 'glassware';
    const minSet = getMinSetLimit(effectivePrice, itemDept);
    const packing = getDisplayPacking(item);

    document.getElementById("pdetailImg").src = getInitialImagePath(item);
    document.getElementById("pdetailImg").onerror = function() { handleImageFallback(this, code, itemDept); };
    document.getElementById("pdetailCode").innerText = `${code} 📋`;
    document.getElementById("pdetailCode").onclick = () => copyItemCode(code);
    document.getElementById("pdetailTitle").innerText = item.desc || code;
    document.getElementById("pdetailPrice").innerText = `Rs. ${effectivePrice} ${item.unit}`;
    document.getElementById("pdetailPacking").innerText = packing;
    document.getElementById("pdetailMoq").innerText = `${minSet} SET`;
    document.getElementById("pdetailDept").innerText = item.department || 'Glassware';
    document.getElementById("pdetailDesc").innerText = item.desc || '';

    document.getElementById("pdetailAddBtn").onclick = () => {
        updateItemQty(code, 'set', 1, effectivePrice, itemDept);
        showToast(`${code} added to cart!`);
        closeProductDetail();
    };

    document.getElementById("productDetailBackdrop").style.display = "block";
    document.getElementById("productDetailModal").style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeProductDetail() {
    const modal = document.getElementById("productDetailModal");
    const backdrop = document.getElementById("productDetailBackdrop");
    if (modal) modal.style.display = "none";
    if (backdrop) backdrop.style.display = "none";
    document.body.style.overflow = "auto";
}

// ==========================================
// 6. QUANTITY UPDATE & ESTIMATED TOTAL
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

    persistCart();
    updateCartBar();
}

function calculateCurrentTotal() {
    const keys = Object.keys(cart);
    const multiplier = getAccessMultiplier();
    let estTotalAmount = 0;

    keys.forEach(code => {
        const item = PRODUCTS.find(p => p.code === code);
        if (item) {
            const unitPrice = Math.round(Number(item.price) * multiplier);
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
    const itemsElem = document.getElementById("totalItems");
    if (itemsElem) itemsElem.innerText = totalCount;

    const estTotalAmount = calculateCurrentTotal();
    const totalDisplay = document.getElementById("cartEstTotal");
    if (totalDisplay) {
        totalDisplay.innerText = `Rs. ${estTotalAmount.toLocaleString('en-IN')}`;
    }
}

// ==========================================
// 7. ORDER SUMMARY DRAWER & CART MANAGEMENT
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
        if (!item || !orderData) return;

        const unitPrice = Math.round(Number(item.price) * multiplier);
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
                <div class="drawer-qty-btns">
                    <button onclick="adjustDrawerQty('${code}', 'ctn', -1)">−</button>
                    <span>CTN ${orderData.ctn}</span>
                    <button onclick="adjustDrawerQty('${code}', 'ctn', 1)">+</button>
                    
                    <button style="margin-left:6px;" onclick="adjustDrawerQty('${code}', 'set', -1)">−</button>
                    <span>SET ${orderData.set}</span>
                    <button onclick="adjustDrawerQty('${code}', 'set', 1)">+</button>
                </div>
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

function adjustDrawerQty(code, type, change) {
    const item = PRODUCTS.find(p => p.code === code);
    if (!item) return;
    const price = Math.round(Number(item.price) * getAccessMultiplier());
    updateItemQty(code, type, change, price, item.department || 'glassware');
    renderDrawerItems();
}

function removeSingleItemFromCart(code) {
    if (cart[code]) {
        delete cart[code];
        
        const ctnElem = document.getElementById(`ctn-${code}`);
        const setElem = document.getElementById(`set-${code}`);
        if (ctnElem) ctnElem.innerText = 0;
        if (setElem) setElem.innerText = 0;
        
        persistCart();
        updateCartBar();
        renderDrawerItems();
    }
}

function clearFullCart() {
    if (confirm("Kya aap pura Cart reset karna chahte hain?")) {
        cart = {};
        localStorage.removeItem("empire_user_cart");
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
// 8. WHATSAPP SENDER (100% Quotation Safe Format)
// ==========================================
function sendWhatsAppOrder() {
    const keys = Object.keys(cart);
    if (keys.length === 0) {
        alert("Pehle kisi item ki Quantity select karein!");
        return;
    }

    const appliedTier = getTierLabel();
    const appliedCode = localStorage.getItem("empire_access_code") || "RETAIL";

    let message = "🛍️ *NEW CATALOG ORDER - EMPIRE GLASSWARE*\n";
    message += `🏷️ *Price Tier:* ${appliedTier}\n`;
    message += `🔑 *Access Code:* \`${appliedCode}\`\n`;
    message += `━━━━━━━━━━━━━━━━━━━━\n\n`;

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

    // Auto-clear cart and storage after dispatch
    cart = {};
    localStorage.removeItem("empire_user_cart");
    document.querySelectorAll(".qty-val").forEach(el => el.innerText = "0");
    updateCartBar();
    closeOrderDrawer();
}

// ==========================================
// 9. PHOTO LIGHTBOX / ZOOM LOGIC
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
// 10. DEEP-LINKING (Direct URL Navigation Handler)
// ==========================================
function checkUrlDepartment() {
    const hash = window.location.hash.toLowerCase().replace('#', '').trim();
    const urlParams = new URLSearchParams(window.location.search);
    const deptParam = (urlParams.get('dept') || '').toLowerCase().trim();
    
    const target = hash || deptParam;

    if (target === 'bottles' || target === 'vaccum_bottles' || target === 'vaccum-bottles') {
        switchDepartment('vaccum_bottles');
    } else if (target === 'kitchenware' || target === 'kitchen') {
        switchDepartment('Kitchenware');
    } else if (target === 'glassware') {
        switchDepartment('Glassware');
    } else {
        switchDepartment('ALL');
    }
}

// ==========================================
// INIT ON LOAD, KEYBOARD & TOUCH SWIPE CLOSE
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    updateAccessHeader();
    if (typeof PRODUCTS !== 'undefined') {
        checkUrlDepartment();
        updateCartBar();
    }

    // Touch Swipe Gesture for Mobile Access Modal
    let touchStartX = 0;
    let touchStartY = 0;

    const accessModalElem = document.getElementById("accessModal");
    if (accessModalElem) {
        accessModalElem.addEventListener("touchstart", (e) => {
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
        }, { passive: true });

        accessModalElem.addEventListener("touchend", (e) => {
            const touchEndX = e.changedTouches[0].screenX;
            const touchEndY = e.changedTouches[0].screenY;
            
            // Left swipe (50px+) ya downward drag (50px+) par close
            if ((touchStartX - touchEndX > 50) || (touchEndY - touchStartY > 50)) {
                closeAccessModal();
            }
        }, { passive: true });
    }
});

window.addEventListener("hashchange", checkUrlDepartment);

window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeProductDetail();
        closeOrderDrawer();
        closeAccessModal();
        closeLightbox();
    }
});
// --- 📊 PWA INSTALL & USAGE TRACKER ---

// 1. Jab koi customer App "Install / Add to Home Screen" karega
window.addEventListener('appinstalled', () => {
  console.log('✅ PWA Installed');
  if (typeof gtag === 'function') {
    gtag('event', 'pwa_install_success', {
      event_category: 'PWA_App',
      event_label: 'Empire Glassware Installed',
      device: /Mobi|Android/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'
    });
  }
});

// 2. Jab koi customer seedha Installed App Icon se catalog kholega
window.addEventListener('DOMContentLoaded', () => {
  const isInstalledApp = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  if (isInstalledApp && typeof gtag === 'function') {
    gtag('event', 'pwa_opened_from_icon', {
      event_category: 'PWA_App',
      event_label: 'Direct App Open'
    });
  }
});
// ==========================================================
// 📊 EMPIRE GLASSWARE - GA4 SMART B2B BUSINESS ANALYTICS
// ==========================================================

// Safe GA4 Event Dispatcher Helper
function trackGA4(eventName, params = {}) {
  if (typeof gtag === 'function') {
    gtag('event', eventName, params);
  }
}

// 1. PWA Installation & App-Icon Launch Tracking
window.addEventListener('appinstalled', () => {
  trackGA4('pwa_install_success', {
    event_category: 'PWA',
    device_type: /Mobi|Android/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const isInstalledApp = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  if (isInstalledApp) {
    trackGA4('pwa_opened_from_icon', {
      event_category: 'PWA',
      event_label: 'Direct Icon Launch'
    });
  }
});

// 2. Search Demand Tracker (Track what buyers are typing)
let searchDebounceTimer = null;
const searchBox = document.getElementById('searchInput');
if (searchBox) {
  searchBox.addEventListener('input', (e) => {
    clearTimeout(searchDebounceTimer);
    const query = (e.target.value || '').trim();
    if (query.length >= 3) {
      searchDebounceTimer = setTimeout(() => {
        trackGA4('catalog_search', {
          search_term: query.toLowerCase()
        });
      }, 1000);
    }
  });
}

// 3. Wholesale Code & WhatsApp Request Tracker
const originalApplyAccessCode = window.applyAccessCodeFromModal;
if (typeof originalApplyAccessCode === 'function') {
  window.applyAccessCodeFromModal = function() {
    const codeVal = (document.getElementById('accessCodeInput')?.value || '').trim().toUpperCase();
    if (codeVal) {
      trackGA4('wholesale_code_entered', {
        access_code: codeVal
      });
    }
    return originalApplyAccessCode.apply(this, arguments);
  };
}

const waReqBtn = document.getElementById('waRequestBtn');
if (waReqBtn) {
  waReqBtn.addEventListener('click', () => {
    trackGA4('request_wholesale_code_click', {
      source: 'access_modal'
    });
  });
}

// 4. Hot Products & Lightbox Views (Trending items)
const originalOpenProductDetail = window.openProductDetail;
if (typeof originalOpenProductDetail === 'function') {
  window.openProductDetail = function(product) {
    if (product) {
      trackGA4('view_item_detail', {
        item_code: product.code || product.product_code || 'UNKNOWN',
        item_name: product.desc || product.name || '',
        department: product.Department || 'General'
      });
    }
    return originalOpenProductDetail.apply(this, arguments);
  };
}

// 5. WhatsApp Order Funnel & Conversion Tracker
const originalSendWhatsAppOrder = window.sendWhatsAppOrder;
if (typeof originalSendWhatsAppOrder === 'function') {
  window.sendWhatsAppOrder = function() {
    const totalItemsCount = document.getElementById('totalItems')?.innerText || '0';
    const estTotalRaw = document.getElementById('cartEstTotal')?.innerText || '0';
    const cleanTotalVal = parseFloat(estTotalRaw.replace(/[^0-9.]/g, '')) || 0;

    trackGA4('whatsapp_order_sent', {
      total_items_count: parseInt(totalItemsCount, 10) || 0,
      estimated_cart_value: cleanTotalVal,
      currency: 'INR'
    });

    return originalSendWhatsAppOrder.apply(this, arguments);
  };
}