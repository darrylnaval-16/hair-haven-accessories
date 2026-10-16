
/* =========================================
   HAIR HAVEN ACCESSORIES
   Activity 8.2: Add JavaScript to Your Shop
   ========================================= */

// 1. Shop name and current year
const shopName = "Hair Haven Accessories";
const currentYear = new Date().getFullYear();

// 2. Running total starts at zero
let runningTotal = 0;

// 3. Display the shop name
const shopNameElement = document.getElementById("shopName");

if (shopNameElement) {
    shopNameElement.textContent = shopName;
}

// 4. Display a dynamic copyright line
const copyrightElement = document.getElementById("copyright");

if (copyrightElement) {
    copyrightElement.textContent =
        `© ${currentYear} ${shopName}. Created by Darryl Naval.`;
}

// 5. Count products and compute the total of listed product prices
const productCards = document.querySelectorAll(".product-card");

if (productCards.length > 0) {
    let productCount = productCards.length;

    productCards.forEach(function (card) {
        const price = Number(card.dataset.price);

        if (Number.isFinite(price) && price > 0) {
            runningTotal += price;
        }
    });

    const productCountElement =
        document.getElementById("productCount");

    if (productCountElement) {
        productCountElement.textContent = productCount;
    }

    const productTotalElement =
        document.getElementById("productTotal");

    if (productTotalElement) {
        productTotalElement.textContent =
            `₱${runningTotal.toFixed(2)}`;
    }
}

// 6. Contact form
const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

if (contactForm && successMessage) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        successMessage.hidden = false;
        contactForm.reset();
    });
}

// 7. Order enquiry form and computed subtotal
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

    const quantity = Math.max(0, Number(quantityInput.value) || 0);
    const subtotal = quantity * clawClipPrice;

    orderSubtotalElement.textContent =
        `₱${subtotal.toFixed(2)}`;
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

// 8. Three labelled console messages
console.log("Shop name:", shopName);
console.log("Current year:", currentYear);
console.log("Running total of listed product prices:", runningTotal);
