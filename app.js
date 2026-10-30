document.addEventListener('DOMContentLoaded', () =>{
    const loginForm = document.getElementById('login-form');
    const loginMessage = document.getElementById('login-message');


    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            e.preventDefault();

            const usernameInput = document.getElementById('username').value.trim();
            const passwordInput = document.getElementById('password').value.trim();

            if (usernameInput === '' || passwordInput === '') {
                loginMessage.style.color = '#ff6b6b';
                loginMessage.textContent = 'Please fill in all fields.';
                return;
            }
            loginMessage.textContent = 'Login successful! Redirecting...';

        
            setTimeout(() => {
                window.location.href = 'products.html';
            }, 1500);
        });

    }

})
const container = document.getElementById('product-container');
        let htmlContent = '';
        productsData.forEach(product => {
            htmlContent += `
                    <img src="${product.image}" alt="${product.name}" width="150"><br>
                    <h3>${product.name}</h3>
                    <p>Category: ${product.category}</p>
                    <p><strong>Price: ${product.price}</strong></p>
                    <button type="button">Add to Cart</button>
                </div>
            `;
        });
        container.innerHTML = htmlContent;
      
       document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { name: "Single Malt Reserve", price: 750, category: "Whisky" },
        { name: "Viceroy Brandy", price: 12500, category: "Brandy" },
    ];
    const productContainer = document.getElementById("product-container");
if (productContainer) {
    productContainer.innerHTML = "";
    productsData.forEach((product, index) => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name} "style="width:100px; height:100px; object-fit:cover;">
            <h2>${product.name}</h2>
            <p>Category: ${product.category}</p>
            <p>Price: ksh ${product.price}</p>
            <button data-index="${index}">Add to Cart</button>
        `;
        productContainer.appendChild(card);
        });
    }
    document.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON" && e.target.textContent.trim().toLowerCase() === "add to cart") {
            const card = e.target.closest(".product-card");
            if (!card) return;

            const name = card.querySelector("h2").textContent.trim();
            const priceText = card.querySelector("p:nth-of-type(2)").textContent.replace(/[^0-9]/g, "");
            const price = parseInt(priceText, 10);

            let cart = JSON.parse(localStorage.getItem("jabesCart")) || [];
            const existingItem = cart.find(item => item.name === name);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ name, price, quantity: 1 });
            }

            localStorage.setItem("jabesCart", JSON.stringify(cart));
            alert(`${name} added to cart!`);
        }
    });
});