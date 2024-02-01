function openCartModal() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = 'block';
    updateCart(); // Aktualisiere den Warenkorb beim Öffnen des Modals
}

function closeCartModal() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = 'none';
}