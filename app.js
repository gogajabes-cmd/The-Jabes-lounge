document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginMessage = document.getElementById('login-message');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            e.preventDefault(); // Prevents the page from reloading

            const usernameInput = document.getElementById('username').value.trim();
            const passwordInput = document.getElementById('password').value.trim();

            if (usernameInput === '' || passwordInput === '') {
                loginMessage.style.color = '#ff6b6b';
                loginMessage.textContent = 'Please fill in all fields.';
                return;
            }

            // Simulate successful login
            loginMessage.textContent = 'Login successful! Redirecting...';

            // Redirect to products page after 1.5 seconds
            setTimeout(() => {
                window.location.href = 'products.html';
            }, 1500);
        });
    }