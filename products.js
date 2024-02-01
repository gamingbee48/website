// Dummy product data with image URLs
const products = [
    { name: 'Bic Lighter blue', price: 0.99, image: 'product1.jpg' },
    { name: 'Golden Zippo', price: 4.99, image: 'product2.jpg' },
    { name: 'i don´t smoke Lighter', price: 1.99, image: 'product3.jpg' },
    { name: 'Gun Lighter', price: 7.99, image: 'product4.jpg' },
    { name: 'Lighter 5pcs', price: 1.99, image: 'product5.jpg' },
    { name: 'Lighter Fluid', price: 2.45, image: 'product6.jpg' },
    { name: 'Lighter Gas', price: 2.45, image: 'product7.jpg' },
    // Add more products as needed
];

// Display products on the page
document.addEventListener('DOMContentLoaded', function() {
    const productsContainer = document.getElementById('products');

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <h2>${product.name}</h2>
            <img src="${product.image}" alt="${product.name}">
            <p>Price: $${product.price}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
        `;
        productsContainer.appendChild(productElement);
    });
});