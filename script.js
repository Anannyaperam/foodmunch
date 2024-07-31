let cart = [];

function addToCart(product) {
    cart.push(product);
    updateCartCount();
    displayCartItems();
    alert(product + ' has been added to your cart.');
}

function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

function displayCartItems() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    if (cart.length === 0) {
        cartItems.innerHTML = '<li>No items in cart.</li>';
    } else {
        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.innerText = item;
            const removeButton = document.createElement('button');
            removeButton.innerText = 'Remove';
            removeButton.onclick = () => removeFromCart(index);
            li.appendChild(removeButton);
            cartItems.appendChild(li);
        });
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    displayCartItems();
}

function clearCart() {
    cart = [];
    updateCartCount();
    displayCartItems();
}
