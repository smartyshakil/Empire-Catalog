// ==========================================================
// EMPIRE GLASSWARE - ONLINE QUOTATION & DISPATCH DESK ENGINE
// ==========================================================

let ledgerItems = [];

document.addEventListener("DOMContentLoaded", () => {
    initClientAutocomplete();
    filterMasterProducts();
    renderLedger();
});

// --- 1. CLIENT AUTO-COMPLETE & DETAILS POPULATOR ---
function initClientAutocomplete() {
    const datalist = document.getElementById("clientSuggestions");
    if (!datalist || typeof CLIENTS === "undefined") return;

    datalist.innerHTML = "";
    CLIENTS.forEach(c => {
        const option = document.createElement("option");
        option.value = c.name;
        option.label = `${c.city ? c.city + ' | ' : ''}${c.mobile || ''}`;
        datalist.appendChild(option);
    });
}

function onClientNameSelect(val) {
    if (typeof CLIENTS === "undefined") return;
    const cleanVal = val.trim().toUpperCase();
    const matched = CLIENTS.find(c => (c.name || '').toUpperCase() === cleanVal);
    if (matched) {
        if (matched.city) document.getElementById("clientCity").value = matched.city;
        if (matched.mobile) document.getElementById("clientMobile").value = matched.mobile;
    }
}

// --- 2. MODAL HELPERS ---
function openModal(id) {
    document.getElementById(id).style.display = "block";
    document.getElementById(id + "Backdrop").style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
    document.getElementById(id + "Backdrop").style.display = "none";
}

function openWhatsAppModal() {
    document.getElementById("waRawInput").value = "";
    openModal("waModal");
    setTimeout(() => document.getElementById("waRawInput").focus(), 100);
}

function openCustomItemModal() {
    document.getElementById("custDesc").value = "";
    document.getElementById("custSpec").value = "1";
    document.getElementById("custCtn").value = "0";
    document.getElementById("custLoose").value = "0";
    document.getElementById("custPrice").value = "0.00";
    openModal("customModal");
}

// --- 3. MASTER PRODUCT EXTRACTION & QUICK LIST ---
function getProductField(p, keys) {
    for (const k of keys) {
        if (p && p[k] !== undefined && p[k] !== null && p[k] !== "") return p[k];
    }
    return "";
}

function getProductSpec(p) {
    if (!p) return 1;
    const spec = getProductField(p, ['Carton_Spec', 'carton_spec', 'ctn_spec', 'Box_Qty', 'box_qty', 'spec']);
    if (spec && !isNaN(Number(spec)) && Number(spec) > 0) return Number(spec);

    const desc = getProductField(p, ['desc', 'Description', 'name', 'Name']);
    if (desc) {
        const match = desc.toUpperCase().match(/(\d+)\s*(?:SET|SETS|PC|PCS|PIECES)\s*(?:IN\s*)?(?:CTN|CARTOON|BOX\b)/i);
        if (match && match[1]) return parseInt(match[1], 10);
    }
    return 1;
}

function filterMasterProducts() {
    const list = document.getElementById("prodMiniList");
    if (!list || typeof PRODUCTS === "undefined") return;

    const query = (document.getElementById("prodSearchInput").value || "").toLowerCase().trim();
    list.innerHTML = "";

    const filtered = PRODUCTS.filter(p => {
        const code = String(getProductField(p, ['code', 'Code', 'product_code', 'Product_Code'])).toLowerCase();
        const desc = String(getProductField(p, ['desc', 'Description', 'name', 'Name'])).toLowerCase();
        return code.includes(query) || desc.includes(query);
    }).slice(0, 40);

    filtered.forEach((p, idx) => {
        const code = String(getProductField(p, ['code', 'Code', 'product_code', 'Product_Code']));
        const desc = String(getProductField(p, ['desc', 'Description', 'name', 'Name']));

        const item = document.createElement("div");
        item.className = "prod-item";
        
        const infoDiv = document.createElement("div");
        infoDiv.innerHTML = `<div class="prod-item-code">${code}</div><div class="prod-item-desc">${desc}</div>`;
        
        const addBtn = document.createElement("button");
        addBtn.className = "t-btn";
        addBtn.style.cssText = "background:#2980b9; padding:4px 10px; font-size:11px;";
        addBtn.innerText = "➕ Add";
        addBtn.onclick = () => addFromMasterDirect(p);

        item.appendChild(infoDiv);
        item.appendChild(addBtn);
        list.appendChild(item);
    });
}

function addFromMasterDirect(p) {
    if (!p) return;

    const code = String(getProductField(p, ['code', 'Code', 'product_code', 'Product_Code']));
    const desc = String(getProductField(p, ['desc', 'Description', 'name', 'Name']));
    const spec = getProductSpec(p);
    const defaultPrice = parseFloat(String(getProductField(p, ['price', 'Price', 'rate', 'Rate'])).replace(/,/g, '')) || 0;

    // Prompt for CTN and Price (Just like Offline Desktop Dialog)
    const ctnsInput = prompt(`Item: ${code}\nEnter No. of Cartons (CTN):`, "1");
    if (ctnsInput === null) return; // Cancelled

    const ctnVal = parseInt(ctnsInput, 10) || 0;
    let looseVal = 0;
    if (ctnVal === 0) {
        const looseInput = prompt(`Enter Loose Qty for ${code}:`, "1");
        if (looseInput === null) return;
        looseVal = parseInt(looseInput, 10) || 0;
    }

    const priceInput = prompt(`Rate (₹) for ${code}:`, String(defaultPrice));
    const priceVal = parseFloat(priceInput) || defaultPrice;

    if (ctnVal > 0) {
        ledgerItems.push({
            code: code,
            desc: desc,
            ctn: ctnVal,
            qty: ctnVal * spec,
            price: priceVal,
            total: Math.round(ctnVal * spec * priceVal * 100) / 100,
            is_ctn: 1,
            spec: spec
        });
    } else if (looseVal > 0) {
        ledgerItems.push({
            code: code,
            desc: `${desc} (Loose)`,
            ctn: 0,
            qty: looseVal,
            price: priceVal,
            total: Math.round(looseVal * priceVal * 100) / 100,
            is_ctn: 0,
            spec: spec
        });
    }

    renderLedger();
    if (window.innerWidth <= 768) {
        switchMobileTab('ledger');
    }
}

function saveCustomItem() {
    const desc = document.getElementById("custDesc").value.trim() || "Custom Item";
    const spec = parseInt(document.getElementById("custSpec").value, 10) || 1;
    const ctns = parseInt(document.getElementById("custCtn").value, 10) || 0;
    const loose = parseInt(document.getElementById("custLoose").value, 10) || 0;
    const price = parseFloat(document.getElementById("custPrice").value) || 0;

    if (ctns > 0) {
        ledgerItems.push({
            code: "CUSTOM",
            desc: desc,
            ctn: ctns,
            qty: ctns * spec,
            price: price,
            total: Math.round(ctns * spec * price * 100) / 100,
            is_ctn: 1,
            spec: spec
        });
    }

    if (loose > 0) {
        ledgerItems.push({
            code: "CUSTOM",
            desc: `${desc} (Loose)`,
            ctn: 0,
            qty: loose,
            price: price,
            total: Math.round(loose * price * 100) / 100,
            is_ctn: 0,
            spec: spec
        });
    }

    closeModal("customModal");
    renderLedger();
}

// --- 4. ADVANCED WHATSAPP ORDER PARSER ---
function parseWhatsAppText() {
    const raw = document.getElementById("waRawInput").value.trim();
    if (!raw || typeof PRODUCTS === "undefined") {
        alert("Please paste WhatsApp order text!");
        return;
    }

    const validCodesMap = {};
    PRODUCTS.forEach(p => {
        const code = getProductField(p, ['code', 'Code', 'product_code', 'Product_Code']);
        if (code) validCodesMap[String(code).trim().toUpperCase()] = p;
    });

    const lines = raw.split("\n").map(l => l.trim()).filter(Boolean);
    let imported = 0;

    for (let i = 0; i < lines.length; i++) {
        const cleanLine = lines[i].replace(/\*/g, "").trim().toUpperCase();

        let matchedProduct = null;
        for (const codeKey in validCodesMap) {
            const pattern = new RegExp(`(?<![A-Za-z0-9\\-])${codeKey.replace(/[-\\/\\\\^$*+?.()|[\\]{}]/g, '\\$&')}(?![A-Za-z0-9\\-])`, 'i');
            if (pattern.test(cleanLine)) {
                matchedProduct = validCodesMap[codeKey];
                break;
            }
        }

        if (matchedProduct) {
            let qtyVal = 0;
            let unitType = "CTN";

            for (let j = i; j < Math.min(i + 4, lines.length); j++) {
                const target = lines[j].replace(/\*/g, "");
                const qtyMatch = target.match(/Qty[:\s]*(\d+)\s*([A-Za-z\s/]+)?/i);
                if (qtyMatch) {
                    qtyVal = parseInt(qtyMatch[1], 10);
                    if (qtyMatch[2]) unitType = qtyMatch[2].trim().toUpperCase();
                    break;
                }
            }

            if (qtyVal > 0) {
                const code = String(getProductField(matchedProduct, ['code', 'Code', 'product_code', 'Product_Code']));
                const desc = String(getProductField(matchedProduct, ['desc', 'Description', 'name', 'Name']));
                const spec = getProductSpec(matchedProduct);
                const price = parseFloat(String(getProductField(matchedProduct, ['price', 'Price', 'rate', 'Rate'])).replace(/,/g, '')) || 0;

                let ctn_qty = 0, total_qty = 0, is_ctn = 1, item_desc = desc;

                if (unitType.includes("SET") || unitType.includes("BOX") || unitType.includes("LOOSE") || unitType.includes("PC")) {
                    ctn_qty = 0;
                    total_qty = qtyVal;
                    is_ctn = 0;
                    item_desc = `${desc} (Loose)`;
                } else {
                    ctn_qty = qtyVal;
                    total_qty = ctn_qty * spec;
                    is_ctn = 1;
                }

                ledgerItems.push({
                    code: code,
                    desc: item_desc,
                    ctn: ctn_qty,
                    qty: total_qty,
                    price: price,
                    total: Math.round(total_qty * price * 100) / 100,
                    is_ctn: is_ctn,
                    spec: spec
                });
                imported++;
            }
        }
    }

    closeModal("waModal");
    renderLedger();
    alert(`🟢 ${imported} items successfully imported into quotation!`);
}

// --- 5. DUAL RENDER ENGINE ---
function renderLedger() {
    const desktopTbody = document.getElementById("ledgerBodyDesktop");
    const mobileCards = document.getElementById("ledgerBodyMobile");

    if (desktopTbody) desktopTbody.innerHTML = "";
    if (mobileCards) mobileCards.innerHTML = "";

    document.getElementById("ledgerItemCount").innerText = ledgerItems.length;
    const mCount = document.getElementById("mTabCount");
    if (mCount) mCount.innerText = ledgerItems.length;

    ledgerItems.forEach((item, idx) => {
        // Desktop Row
        if (desktopTbody) {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td><b>${item.code}</b></td>
                <td><input type="text" class="form-control" style="font-size:11px; padding:3px;" value="${item.desc}" onchange="updateItemDesc(${idx}, this.value)"></td>
                <td><input type="number" class="table-input" value="${item.ctn}" min="0" onchange="updateItemCtn(${idx}, this.value)"></td>
                <td><input type="number" class="table-input" value="${item.qty}" min="0" onchange="updateItemQtyDirect(${idx}, this.value)"></td>
                <td><input type="number" class="table-input price" value="${item.price}" step="0.01" onchange="updateItemPrice(${idx}, this.value)"></td>
                <td style="text-align: right; font-weight: bold;">₹${item.total.toFixed(2)}</td>
                <td><button class="btn-row-del" onclick="deleteItem(${idx})" title="Delete">🗑️</button></td>
            `;
            desktopTbody.appendChild(tr);
        }

        // Mobile Card
        if (mobileCards) {
            const card = document.createElement("div");
            card.className = "m-ledger-card";
            card.innerHTML = `
                <div class="m-card-header">
                    <span class="m-card-code">${item.code}</span>
                    <div>
                        <span class="m-card-total">₹${item.total.toFixed(2)}</span>
                        <button class="btn-row-del" style="margin-left: 8px;" onclick="deleteItem(${idx})">🗑️</button>
                    </div>
                </div>
                <input type="text" class="m-card-desc" value="${item.desc}" onchange="updateItemDesc(${idx}, this.value)">
                <div class="m-card-grid">
                    <div class="m-input-box">
                        <label>CTN</label>
                        <input type="number" value="${item.ctn}" min="0" onchange="updateItemCtn(${idx}, this.value)">
                    </div>
                    <div class="m-input-box">
                        <label>Total Qty</label>
                        <input type="number" value="${item.qty}" min="0" onchange="updateItemQtyDirect(${idx}, this.value)">
                    </div>
                    <div class="m-input-box">
                        <label>Rate (₹)</label>
                        <input type="number" value="${item.price}" step="0.01" onchange="updateItemPrice(${idx}, this.value)">
                    </div>
                </div>
            `;
            mobileCards.appendChild(card);
        }
    });

    calculateLiveTotals();
}

function updateItemDesc(idx, val) {
    ledgerItems[idx].desc = val;
}

function updateItemCtn(idx, val) {
    const c = parseInt(val, 10) || 0;
    ledgerItems[idx].ctn = c;
    if (c > 0) {
        ledgerItems[idx].is_ctn = 1;
        ledgerItems[idx].qty = c * ledgerItems[idx].spec;
        if (ledgerItems[idx].desc.includes(" (Loose)")) {
            ledgerItems[idx].desc = ledgerItems[idx].desc.replace(" (Loose)", "");
        }
    } else {
        ledgerItems[idx].is_ctn = 0;
    }
    ledgerItems[idx].total = Math.round(ledgerItems[idx].qty * ledgerItems[idx].price * 100) / 100;
    renderLedger();
}

function updateItemQtyDirect(idx, val) {
    const q = parseInt(val, 10) || 0;
    ledgerItems[idx].qty = q;
    ledgerItems[idx].total = Math.round(q * ledgerItems[idx].price * 100) / 100;
    renderLedger();
}

function updateItemPrice(idx, val) {
    const p = parseFloat(val) || 0;
    ledgerItems[idx].price = p;
    ledgerItems[idx].total = Math.round(ledgerItems[idx].qty * p * 100) / 100;
    renderLedger();
}

function deleteItem(idx) {
    ledgerItems.splice(idx, 1);
    renderLedger();
}

function resetDesk() {
    if (confirm("Reset current quotation workspace?")) {
        ledgerItems = [];
        document.getElementById("discountPercent").value = "0";
        renderLedger();
    }
}

// --- 6. LIVE TOTAL CALCULATIONS ---
function calculateLiveTotals() {
    let t_ctn = 0, t_loose = 0, sub = 0;

    ledgerItems.forEach(item => {
        sub += item.total;
        if (item.is_ctn === 1) t_ctn += item.ctn;
        else t_loose += item.qty;
    });

    const disc = parseFloat(document.getElementById("discountPercent").value) || 0;
    const discountAmount = (sub * disc) / 100;
    const grandTotal = Math.round(sub - discountAmount);

    document.getElementById("statCtn").innerText = t_ctn;
    document.getElementById("statLoose").innerText = t_loose;
    document.getElementById("statGrandTotal").innerText = `Rs. ${grandTotal.toLocaleString("en-IN")}.00`;
}

// --- 7. PRINT & PDF GENERATION ---
function printDocument(mode = "QUOTE") {
    if (ledgerItems.length === 0) {
        alert("Pehle ledger me items add karein!");
        return;
    }

    const client = document.getElementById("clientName").value.trim() || "CASH / COUNTER";
    const city = document.getElementById("clientCity").value.trim();
    const mob = document.getElementById("clientMobile").value.trim();
    
    const now = new Date();
    const d_date = `${String(now.getDate()).padStart(2, '0')}-${String(now.getMonth() + 1).padStart(2, '0')}-${now.getFullYear()}`;
    const docTitle = mode === "QUOTE" ? "QUOTATION" : "DISPATCH NOTE";

    let t_ctn = 0, t_loose = 0, sub = 0;
    ledgerItems.forEach(r => {
        sub += r.total;
        if (r.is_ctn === 1) t_ctn += r.ctn;
        else t_loose += r.qty;
    });

    const disc = parseFloat(document.getElementById("discountPercent").value) || 0;
    const da = (sub * disc) / 100;
    const gt = Math.round(sub - da);

    let html = `
        <div class="print-doc-header">
            <h2>E.G</h2>
            <h3>${docTitle}</h3>
            <p><b>Account:</b> ${client} ${city ? '(' + city + ')' : ''} ${mob ? '| Mob: ' + mob : ''} | <b>Date:</b> ${d_date}</p>
        </div>
    `;

    if (mode === "DISPATCH") {
        html += `
            <table class="print-table">
                <thead>
                    <tr>
                        <th style="width: 120px;">Code</th>
                        <th>Description</th>
                        <th style="width: 80px; text-align:center;">Ctn</th>
                        <th style="width: 80px; text-align:center;">Qty</th>
                    </tr>
                </thead>
                <tbody>
        `;
        ledgerItems.forEach(r => {
            html += `<tr><td>${r.code}</td><td>${r.desc}</td><td style="text-align:center;">${r.ctn}</td><td style="text-align:center;">${r.qty}</td></tr>`;
        });
        html += `
                <tr class="print-summary-row">
                    <td></td>
                    <td><b>TOTAL SUMMARY:</b></td>
                    <td style="text-align:center;"><b>CTNS: ${t_ctn}</b></td>
                    <td style="text-align:center;"><b>LOOSE: ${t_loose}</b></td>
                </tr>
            </tbody></table>
        `;
    } else {
        html += `
            <table class="print-table">
                <thead>
                    <tr>
                        <th style="width: 90px;">Code</th>
                        <th>Description</th>
                        <th style="width: 45px; text-align:center;">Ctn</th>
                        <th style="width: 50px; text-align:center;">Qty</th>
                        <th style="width: 70px; text-align:right;">Price</th>
                        <th style="width: 85px; text-align:right;">Total</th>
                    </tr>
                </thead>
                <tbody>
        `;
        ledgerItems.forEach(r => {
            html += `<tr>
                <td>${r.code}</td>
                <td>${r.desc}</td>
                <td style="text-align:center;">${r.ctn}</td>
                <td style="text-align:center;">${r.qty}</td>
                <td style="text-align:right;">${r.price.toFixed(2)}</td>
                <td style="text-align:right;">${r.total.toFixed(2)}</td>
            </tr>`;
        });

        if (disc > 0) {
            html += `
                <tr class="print-summary-row">
                    <td></td><td>SUMMARY: CTN: ${t_ctn} | LOOSE: ${t_loose}</td><td></td><td></td>
                    <td style="text-align:right;">SUB TOTAL</td><td style="text-align:right;">${sub.toFixed(2)}</td>
                </tr>
                <tr>
                    <td colspan="4"></td>
                    <td style="text-align:right;">LESS: (${disc}%)</td><td style="text-align:right;">-${da.toFixed(2)}</td>
                </tr>
                <tr class="print-summary-row">
                    <td colspan="4"></td>
                    <td style="text-align:right;"><b>GRAND TOTAL</b></td><td style="text-align:right;"><b>Rs. ${gt.toLocaleString('en-IN')}</b></td>
                </tr>
            `;
        } else {
            html += `
                <tr class="print-summary-row">
                    <td></td><td>SUMMARY: CTN: ${t_ctn} | LOOSE: ${t_loose}</td><td></td><td></td>
                    <td style="text-align:right;"><b>TOTAL</b></td><td style="text-align:right;"><b>Rs. ${sub.toFixed(2)}</b></td>
                </tr>
            `;
        }
        html += `</tbody></table>`;
    }

    document.getElementById("printableArea").innerHTML = html;
    window.print();
}

// --- 8. OFFLINE DESKTOP CSV EXPORT ---
function exportCsvForDesktop() {
    if (ledgerItems.length === 0) {
        alert("No items to export!");
        return;
    }

    const client = document.getElementById("clientName").value.trim().replace(/[\/\\]/g, "_") || "CLIENT";
    
    let csvContent = "data:text/csv;charset=utf-8,";
    ledgerItems.forEach(r => {
        const row = [
            `"${r.code}"`,
            `"${r.desc.replace(/"/g, '""')}"`,
            r.qty,
            r.ctn,
            r.price,
            r.total,
            r.is_ctn
        ].join(",");
        csvContent += row + "\r\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `draft_${client}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function copyUpdatedWhatsAppOrder() {
    if (ledgerItems.length === 0) {
        alert("No items in ledger!");
        return;
    }

    const client = document.getElementById("clientName").value.trim() || "VALUED CLIENT";
    let text = `🛍️ *ORDER CONFIRMATION - ${client}*\n`;
    text += `━━━━━━━━━━━━━━━━━━━━\n\n`;

    let i = 1;
    ledgerItems.forEach(r => {
        if (r.ctn > 0) {
            text += `${i}. *${r.code}* - ${r.desc}\n   👉 *Qty:* ${r.ctn} CTN\n\n`;
            i++;
        } else if (r.qty > 0) {
            text += `${i}. *${r.code}* - ${r.desc}\n   👉 *Qty:* ${r.qty} SET\n\n`;
            i++;
        }
    });

    navigator.clipboard.writeText(text).then(() => {
        alert("🟢 Updated WhatsApp order text copied to clipboard!");
    });
}