
/* =========================================
   HAIR HAVEN ACCESSORIES
   Activity 8.4: Make Your Shop Decide
========================================= */

// 1. Shop name and current year
const shopName = "Hair Haven Accessories";
const currentYear = new Date().getFullYear();

// 2. Running total for product prices
let runningTotal = 0;

// 3. Display shop name
const shopNameElement = document.getElementById("shopName");

if (shopNameElement) {
    shopNameElement.textContent = shopName;
}

// 4. Display dynamic copyright
const copyrightElement = document.getElementById("copyright");

if (copyrightElement) {
    copyrightElement.textContent =
        `© ${currentYear} ${shopName}. Created by Darryl Naval.`;
}

// 5. Count products and calculate listed prices
const productCards = document.querySelectorAll(".product-card");

productCards.forEach(function (card) {
    const price = Number(card.dataset.price);

    if (Number.isFinite(price) && price > 0) {
        runningTotal += price;
    }
});

const productCountElement = document.getElementById("productCount");
const productTotalElement = document.getElementById("productTotal");

if (productCountElement) {
    productCountElement.textContent = productCards.length;
}

if (productTotalElement) {
    productTotalElement.textContent = `₱${runningTotal.toFixed(2)}`;
}

// =========================================
// ACTIVITY 8.4 — DECISION 1: STOCK STATUS
// =========================================

// Change this value to test the different stock messages.
const stockCount = 8;

let stockMessage;

if (stockCount > 10) {
    stockMessage = "In stock";
} else if (stockCount >= 1 && stockCount <= 10) {
    stockMessage = "Only a few left";
} else if (stockCount === 0) {
    stockMessage = "Sold out";
} else {
    stockMessage = "Invalid stock count";
}

const stockCountElement = document.getElementById("stockCount");
const stockStatusElement = document.getElementById("stockStatus");

if (stockCountElement) {
    stockCountElement.textContent = stockCount;
}

if (stockStatusElement) {
    stockStatusElement.textContent = stockMessage;
}

// =========================================
// ACTIVITY 8.4 — DECISION 2: FREE DELIVERY
// =========================================

// Sample order details.
// Free delivery requires an order of at least ₱500
// AND the customer must be a member.
const orderTotal = 600;
const isMember = true;

const qualifiesForFreeDelivery =
    orderTotal >= 500 && isMember === true;

// Ternary operator sets the delivery fee.
const deliveryFee = qualifiesForFreeDelivery ? 0 : 150;

// Calculate the final amount.
const finalTotal = orderTotal + deliveryFee;

const orderTotalElement = document.getElementById("orderTotal");
const memberStatusElement = document.getElementById("memberStatus");
const deliveryFeeElement = document.getElementById("deliveryFee");
const finalTotalElement = document.getElementById("finalTotal");
const deliveryMessageElement = document.getElementById("deliveryMessage");

if (orderTotalElement) {
    orderTotalElement.textContent = `₱${orderTotal.toFixed(2)}`;
}

if (memberStatusElement) {
    memberStatusElement.textContent = isMember === true ? "Yes" : "No";
}

if (deliveryFeeElement) {
    deliveryFeeElement.textContent = `₱${deliveryFee.toFixed(2)}`;
}

if (finalTotalElement) {
    finalTotalElement.textContent = `₱${finalTotal.toFixed(2)}`;
}

if (deliveryMessageElement) {
    deliveryMessageElement.textContent = qualifiesForFreeDelivery
        ? "Congratulations! You qualify for free delivery."
        : "A ₱150 delivery fee applies.";
}

// =========================================
// ACTIVITY 8.4 — DECISION 3: SHOP STATUS
// =========================================

// Change to false to test the closed status.
const isShopOpen = true;

// Ternary operator displays the shop status.
const shopStatusMessage = isShopOpen === true
    ? "Open today"
    : "Closed today";

const shopStatusElement = document.getElementById("shopStatus");

if (shopStatusElement) {
    shopStatusElement.textContent = shopStatusMessage;
}

// =========================================
// EXISTING CONTACT FORM
// =========================================

const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

if (contactForm && successMessage) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        successMessage.hidden = false;
        contactForm.reset();
    });
}

// =========================================
// EXISTING ORDER ENQUIRY FORM
// =========================================

const orderForm = document.getElementById("orderForm");
const orderSuccessMessage =
    document.getElementById("orderSuccessMessage");
const quantityInput = document.getElementById("quantity");
const orderSubtotalElement =
    document.getElementById("orderSubtotal");

const clawClipPrice = 50;

function updateOrderSubtotal() {
    if (!quantityInput || !orderSubtotalElement) {
        return;
    }

    const quantity = Number(quantityInput.value);
    const subtotal = (Number.isFinite(quantity) ? quantity : 0)
        * clawClipPrice;

    orderSubtotalElement.textContent = `₱${subtotal.toFixed(2)}`;
}

if (quantityInput && orderSubtotalElement) {
    quantityInput.addEventListener("input", updateOrderSubtotal);
    updateOrderSubtotal();
}

if (orderForm && orderSuccessMessage) {
    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();

        updateOrderSubtotal();
        orderSuccessMessage.hidden = false;
        orderForm.reset();
        updateOrderSubtotal();
    });
}

// =========================================
// CONSOLE OUTPUTS
// =========================================

console.log("Shop name:", shopName);
console.log("Current year:", currentYear);
console.log("Number of products:", productCards.length);
console.log("Running total of listed product prices:", runningTotal);
console.log("Stock status:", stockMessage);
console.log("Order subtotal:", orderTotal);
console.log("Delivery fee:", deliveryFee);
console.log("Final total:", finalTotal);
console.log("Shop status:", shopStatusMessage);
