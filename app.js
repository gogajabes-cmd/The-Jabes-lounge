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
const products = [
  {
    id: 1,
    name: "Château Margaux Grand Vin",
    category: "Fine Wine",
    origin: "Bordeaux, France",
    price: 12500.00,
    rating: 4.9,
    image: "images/chateau-margaux.jpg",
    description: "An exceptional vintage with rich notes of blackcurrant, violet, and subtle oak."
  },
  {
    id: 2,
    name: "Dom Pérignon Vintage Champagne",
    category: "Fine Wine",
    origin: "Champagne, France",
    price: 24000.00,
    rating: 4.8,
    image: "images/dom-perignon.jpg",
    description: "Crisp and effervescent with a delicate balance of fruit, brioche, and minerality."
  },
  {
    id: 3,
    name: "Opus One Red Blend",
    category: "Fine Wine",
    origin: "Napa Valley, California",
    price: 35000.00,
    rating: 4.9,
    image: "images/opus-one.jpg",
    description: "A harmonious synthesis of dark fruit aromas, silky tannins, and a persistent finish."
  },
  {
    id: 4,
    name: "Cloudy Bay Sauvignon Blanc",
    category: "Fine Wine",
    origin: "Marlborough, New Zealand",
    price: 7500.00,
    rating: 4.7,
    image: "images/cloudy-bay.jpg",
    description: "Vibrant and refreshing with punchy citrus, lemongrass, and crisp herbal notes."
  },

  // --- Rare Spirits ---
  {
    id: 5,
    name: "Macallan 18 Year Sherry Oak",
    category: "Rare Spirits",
    origin: "Speyside, Scotland",
    price: 18000.00,
    rating: 5.0,
    image: "images/macallan-18.jpg",
    description: "Mature and complex, offering rich dried fruits, ginger, and hints of nutmeg."
  },
  {
    id: 6,
    name: "Hennessy Paradis Cognac",
    category: "Rare Spirits",
    origin: " France",
    price: 32000.00,
    rating: 4.9,
    image: "images/hennessy-paradis.jpg",
    description: "A harmonious blend of hundreds of exceptional eaux-de-vie aged to perfection."
  },
  {
    id: 7,
    name: "Clase Azul Reposado Tequila",
    category: "Rare Spirits",
    origin: "Jalisco, Mexico",
    price: 21000.00,
    rating: 4.9,
    image: "images/clase-azul.jpg",
    description: "Ultra-premium artisanal tequila with smooth notes of vanilla, caramel, and toasted oak."
  },
  {
    id: 8,
    name: "Hibiki Japanese Harmony Whisky",
    category: "Rare Spirits",
    origin: "Osaka, Japan",
    price: 15500.00,
    rating: 4.8,
    image: "images/hibiki-harmony.jpg",
    description: "Luminous and delicate blend showcasing orange peel, white chocolate, and subtle mizunara oak."
  }
];
