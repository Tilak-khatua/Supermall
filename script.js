document.querySelector('.cta-btn').addEventListener('click', function() {
    window.location.href = "stores.html";
});

// Search Functionality
document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const storeCards = document.querySelectorAll('.store-card');

    storeCards.forEach(card => {
        const storeName = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = storeName.includes(query) ? '' : 'none';
    });
});
// Add to Cart Functionality
let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.parentElement.querySelector('h3').textContent;
        cart.push(productName);
        alert(`${productName} has been added to your cart!`);
    });
});
// Update the cart display
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = item;
        cartItemsContainer.appendChild(itemElement);
    });

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    }
}

// Call this function whenever an item is added to the cart
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.parentElement.querySelector('h3').textContent;
        cart.push(productName);
        alert(`${productName} has been added to your cart!`);
        updateCartDisplay();
    });
});

// Checkout button functionality (for demonstration)
document.getElementById('checkout').addEventListener('click', function() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Proceeding to checkout...');
        // You can implement further checkout functionality here
    }
});

// Initial display of cart items when the cart page loads
updateCartDisplay();
// Add review functionality to products
function addReview(productName, reviewText) {
    const reviewsContainer = document.querySelector('.reviews');
    const reviewElement = document.createElement('div');
    reviewElement.textContent = `${reviewText} - Anonymous`;
    reviewsContainer.appendChild(reviewElement);
}

// Example: Add review on button click (you can create a review form for real use)
document.querySelector('.add-review').addEventListener('click', function() {
    const reviewText = prompt('Enter your review:');
    if (reviewText) {
        addReview('Stylish Dress', reviewText); // Replace with dynamic product name
    }
});
