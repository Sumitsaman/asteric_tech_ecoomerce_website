// Sample product data
const products = [
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 29.99 },
    // Add more products
];

// Display products
function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button class="add-to-cart">Add to Cart</button>
        `;
        productList.appendChild(productItem);
    });
}

// User registration form
const userRegistrationForm = document.getElementById('user-registration');
userRegistrationForm.innerHTML = `
    <h2>User Registration</h2>
    <form id="registration-form">
        <input type="text" placeholder="Username" required>
        <input type="email" placeholder="Email" required>
        <input type="password" placeholder="Password" required>
        <button type="submit">Register</button>
    </form>
`;

// Add event listener for product addition to cart
document.addEventListener('click', event => {
    if (event.target.classList.contains('add-to-cart')) {
        // Implement cart functionality here
    }
});

// Initialize the page
displayProducts();
const cart = [];

function displayProducts() {
    const productContainer = document.getElementById('product-list');
    
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
        `;
        productContainer.appendChild(productElement);
    });
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    
    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price}</span>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    const cartCount = document.getElementById('cart-count');
    cartCount.innerText = cart.length.toString();
}
