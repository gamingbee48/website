let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    total += price;

    // Update the cart and display the current cart items
    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    // Clear previous cart items
    cartItemsContainer.innerHTML = '';

    // Display current cart items
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsContainer.appendChild(listItem);
    });

    // Update total
    cartTotalElement.textContent = total.toFixed(2);
}

// Function to open the cart
function openCartWindow() {
    const cartWindow = window.open('', 'Shopping Cart', 'width=400,height=400');
    const cartContent = `
        <h2>Shopping Cart</h2>
        <ul id="cart-items"></ul>
        <p>Total: $<span id="cart-total">${total.toFixed(2)}</span></p>
    `;
    cartWindow.document.body.innerHTML = cartContent;

    // Display current cart items in the new window
    const cartItemsContainer = cartWindow.document.getElementById('cart-items');
    cart.forEach(item => {
        const listItem = cartWindow.document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsContainer.appendChild(listItem);
    });
}