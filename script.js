```javascript
// ==========================
// CART FUNCTIONALITY
// ==========================

let cartCount = localStorage.getItem("cartCount") || 0;

const cartCounter = document.getElementById("cart-count");

if (cartCounter) {
    cartCounter.textContent = cartCount;
}

const addCartButtons = document.querySelectorAll(".add-cart");

addCartButtons.forEach((button) => {

    button.addEventListener("click", () => {

        cartCount++;

        localStorage.setItem("cartCount", cartCount);

        cartCounter.textContent = cartCount;

        showToast("Product added to cart!");

    });

});

// ==========================
// TOAST NOTIFICATION
// ==========================

function showToast(message) {

    const toast = document.createElement("div");

    toast.classList.add("custom-toast");

    toast.innerHTML = `
        <i class="bi bi-check-circle-fill"></i>
        ${message}
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show-toast");
    }, 100);

    setTimeout(() => {
        toast.classList.remove("show-toast");

        setTimeout(() => {
            toast.remove();
        }, 300);

    }, 2500);
}

// ==========================
// SEARCH FUNCTIONALITY
// ==========================

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const value = searchInput.value.toLowerCase();

        const cards = document.querySelectorAll(".product-card");

        cards.forEach((card) => {

            const title = card
                .querySelector(".card-title")
                .innerText
                .toLowerCase();

            if (title.includes(value)) {
                card.parentElement.style.display = "block";
            } else {
                card.parentElement.style.display = "none";
            }

        });

    });

}

// ==========================
// CLEAR CART
// ==========================

function clearCart() {

    localStorage.removeItem("cartCount");

    cartCount = 0;

    if (cartCounter) {
        cartCounter.textContent = cartCount;
    }

    showToast("Cart cleared!");

}

// ==========================
// SMOOTH SCROLL LINKS
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// ==========================
// NAVBAR SHADOW ON SCROLL
// ==========================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.15)";

    } else {

        navbar.style.boxShadow = "none";

    }

});

// ==========================
// CURRENT YEAR AUTO UPDATE
// ==========================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

// ==========================
// PAGE LOADED
// ==========================

window.addEventListener("load", () => {

    console.log("ShopEase Loaded Successfully");

});
```

