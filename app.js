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
      
    