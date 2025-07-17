// Centralized Cart Management System for NUTRIJUDGE
// This file handles cart operations and order summary updates across all pages

class CartManager {
    constructor() {
        this.cart = this.loadCart();
        this.appliedCoupon = null;
        this.listeners = [];
    }

    // Load cart from localStorage
    loadCart() {
        const cart = localStorage.getItem('cart');
        return cart ? JSON.parse(cart) : [];
    }

    // Save cart to localStorage
    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.notifyListeners();
    }

    // Add product to cart
    addToCart(productId, quantity = 1) {
        const product = window.product.find(p => p.id === productId);
        if (!product) {
            throw new Error('Product not found');
        }

        const existingItem = this.cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.cart.push({
                id: productId,
                title: product.title,
                price: this.extractPrice(product.price),
                brand: product.brand,
                image: product.image,
                quantity: quantity
            });
        }
        
        this.saveCart();
        return product;
    }

    // Remove product from cart
    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCart();
    }

    // Update product quantity
    updateQuantity(productId, quantity) {
        const item = this.cart.find(item => item.id === productId);
        if (item) {
            if (quantity <= 0) {
                this.removeFromCart(productId);
            } else {
                item.quantity = Math.min(quantity, 10); // Max 10 items
                this.saveCart();
            }
        }
    }

    // Clear cart
    clearCart() {
        this.cart = [];
        this.appliedCoupon = null;
        this.saveCart();
    }

    // Get cart items
    getCartItems() {
        return this.cart;
    }

    // Get cart count
    getCartCount() {
        return this.cart.reduce((total, item) => total + (item.quantity || 1), 0);
    }

    // Calculate order summary
    calculateOrderSummary() {
        const subtotal = this.cart.reduce((sum, item) => {
            const price = this.extractPrice(item.price);
            return sum + (price * (item.quantity || 1));
        }, 0);

        const shipping = subtotal > 999 ? 0 : 99;
        let discount = 0;
        
        // Apply coupon discount if any
        if (this.appliedCoupon) {
            if (this.appliedCoupon.type === 'percentage') {
                discount = (subtotal * this.appliedCoupon.value) / 100;
            } else if (this.appliedCoupon.type === 'fixed') {
                discount = this.appliedCoupon.value;
            } else if (this.appliedCoupon.type === 'shipping') {
                discount = 0; // Shipping discount handled separately
            }
            discount = Math.min(discount, subtotal); // Don't discount more than subtotal
        }

        // Handle shipping discount
        const finalShipping = this.appliedCoupon && this.appliedCoupon.type === 'shipping' ? 0 : shipping;
        
        const total = subtotal - discount + finalShipping;
        
        return {
            subtotal: subtotal,
            discount: discount,
            shipping: finalShipping,
            total: total,
            itemCount: this.getCartCount(),
            savings: this.calculateSavings()
        };
    }

    // Calculate total savings from original prices
    calculateSavings() {
        return this.cart.reduce((totalSavings, item) => {
            const product = window.product.find(p => p.id === item.id);
            if (product && product.originalPrice) {
                const originalPrice = this.extractPrice(product.originalPrice);
                const currentPrice = this.extractPrice(item.price);
                const itemSavings = (originalPrice - currentPrice) * (item.quantity || 1);
                return totalSavings + Math.max(0, itemSavings);
            }
            return totalSavings;
        }, 0);
    }

    // Apply coupon
    applyCoupon(couponCode) {
        const coupons = {
            'WELCOME10': { type: 'percentage', value: 10, description: '10% off on first order' },
            'SAVE500': { type: 'fixed', value: 500, description: '₹500 off on orders above ₹2000' },
            'FREESHIP': { type: 'shipping', value: 0, description: 'Free shipping on all orders' }
        };

        if (!couponCode) {
            throw new Error('Please enter a coupon code');
        }

        const coupon = coupons[couponCode.toUpperCase()];
        if (!coupon) {
            throw new Error('Invalid coupon code');
        }

        // Check if coupon is already applied
        if (this.appliedCoupon && this.appliedCoupon.code === couponCode.toUpperCase()) {
            throw new Error('Coupon already applied');
        }

        // Apply coupon
        this.appliedCoupon = { ...coupon, code: couponCode.toUpperCase() };
        this.notifyListeners();
        
        return coupon;
    }

    // Remove coupon
    removeCoupon() {
        this.appliedCoupon = null;
        this.notifyListeners();
    }

    // Extract numeric price from string (e.g., "₹3,499" -> 3499)
    extractPrice(priceString) {
        if (typeof priceString === 'number') return priceString;
        if (!priceString) return 0;
        
        // Remove currency symbols and commas, then convert to number
        const numericPrice = priceString.toString().replace(/[₹,]/g, '');
        return parseFloat(numericPrice) || 0;
    }

    // Add listener for cart updates
    addListener(callback) {
        this.listeners.push(callback);
    }

    // Remove listener
    removeListener(callback) {
        this.listeners = this.listeners.filter(listener => listener !== callback);
    }

    // Notify all listeners
    notifyListeners() {
        this.listeners.forEach(callback => {
            try {
                callback(this.cart, this.calculateOrderSummary());
            } catch (error) {
                console.error('Error in cart listener:', error);
            }
        });
    }

    // Update UI elements
    updateUI() {
        // Update cart count in navbar
        this.updateCartCount();
        
        // Update order summary if on cart page
        this.updateOrderSummary();
        
        // Update cart display if on cart page
        this.updateCartDisplay();
    }

    // Update cart count in navbar
    updateCartCount() {
        const cartCount = this.getCartCount();
        const cartBadges = document.querySelectorAll('.cart-count');
        
        cartBadges.forEach(badge => {
            badge.textContent = cartCount;
            badge.style.display = cartCount > 0 ? 'inline' : 'none';
        });
    }

    // Update order summary on cart page
    updateOrderSummary() {
        const summary = this.calculateOrderSummary();
        
        // Update summary elements if they exist
        const subtotalElement = document.getElementById('subtotal');
        const discountElement = document.getElementById('discount');
        const shippingElement = document.getElementById('shipping');
        const totalElement = document.getElementById('total');
        const checkoutBtn = document.getElementById('checkoutBtn');

        if (subtotalElement) {
            subtotalElement.textContent = `₹${summary.subtotal.toFixed(2)}`;
        }
        
        if (discountElement) {
            discountElement.textContent = `-₹${summary.discount.toFixed(2)}`;
        }
        
        if (shippingElement) {
            shippingElement.textContent = summary.shipping === 0 ? 'Free' : `₹${summary.shipping}`;
        }
        
        if (totalElement) {
            totalElement.textContent = `₹${summary.total.toFixed(2)}`;
        }
        
        if (checkoutBtn) {
            checkoutBtn.disabled = summary.itemCount === 0;
        }
    }

    // Update cart display on cart page
    updateCartDisplay() {
        const cartItemsContainer = document.getElementById('cartItems');
        const emptyCartDiv = document.getElementById('emptyCart');
        const cartItemCount = document.getElementById('cartItemCount');
        
        if (!cartItemsContainer || !emptyCartDiv) return;

        if (this.cart.length === 0) {
            cartItemsContainer.style.display = 'none';
            emptyCartDiv.style.display = 'block';
            if (cartItemCount) {
                cartItemCount.textContent = '0 items';
            }
            return;
        }
        
        cartItemsContainer.style.display = 'block';
        emptyCartDiv.style.display = 'none';
        
        if (cartItemCount) {
            const totalItems = this.getCartCount();
            cartItemCount.textContent = `${totalItems} item${totalItems !== 1 ? 's' : ''}`;
        }
        
        // Render cart items
        const cartHTML = this.cart.map(item => {
            const product = window.product.find(p => p.id === item.id);
            if (!product) return '';
            
            const itemTotal = this.extractPrice(item.price) * (item.quantity || 1);
            const originalPrice = this.extractPrice(product.originalPrice);
            const currentPrice = this.extractPrice(item.price);
            const savings = originalPrice ? Math.max(0, (originalPrice - currentPrice) * (item.quantity || 1)) : 0;
            
            return `
                <div class="cart-item p-3" data-id="${item.id}">
                    <div class="row align-items-center">
                        <div class="col-md-2 col-4">
                            <div class="product-image d-flex align-items-center justify-content-center">
                                <img src="${item.image}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 10px;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                                <i class="fas fa-pills fa-2x text-muted" style="display: none;"></i>
                            </div>
                        </div>
                        <div class="col-md-4 col-8">
                            <h6 class="mb-1">${item.title}</h6>
                            <p class="text-muted small mb-1">${item.brand}</p>
                            <div class="text-warning small">
                                ${'⭐'.repeat(Math.floor(product.rating || 4))} ${product.rating || 4.0}
                            </div>
                        </div>
                        <div class="col-md-2 col-6">
                            <div class="quantity-controls">
                                <button class="quantity-btn" onclick="cartManager.updateQuantity(${item.id}, ${(item.quantity || 1) - 1})">-</button>
                                <input type="number" class="quantity-input" value="${item.quantity || 1}" 
                                       min="1" max="10" onchange="cartManager.updateQuantity(${item.id}, parseInt(this.value))">
                                <button class="quantity-btn" onclick="cartManager.updateQuantity(${item.id}, ${(item.quantity || 1) + 1})">+</button>
                            </div>
                        </div>
                        <div class="col-md-2 col-6 text-center">
                            <div class="fw-bold text-primary">₹${this.extractPrice(item.price)}</div>
                            ${product.originalPrice ? `
                                <div class="text-muted text-decoration-line-through small">₹${product.originalPrice}</div>
                                <div class="savings-badge">Save ₹${Math.max(0, this.extractPrice(product.originalPrice) - this.extractPrice(item.price)).toFixed(2)}</div>
                            ` : ''}
                        </div>
                        <div class="col-md-1 col-6 text-center">
                            <div class="fw-bold">₹${itemTotal.toFixed(2)}</div>
                            ${savings > 0 ? `<div class="text-success small">Save ₹${savings.toFixed(2)}</div>` : ''}
                        </div>
                        <div class="col-md-1 col-6 text-center">
                            <button class="remove-btn" onclick="cartManager.removeFromCart(${item.id})" title="Remove item">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        
        cartItemsContainer.innerHTML = cartHTML;
    }

    // Show alert message
    showAlert(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
        notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'warning' ? 'exclamation-triangle' : 'info-circle'} me-2"></i>${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 3000);
    }

    // Initialize cart manager
    init() {
        // Add listener for UI updates
        this.addListener(() => {
            this.updateUI();
        });
        
        // Initial UI update
        this.updateUI();
        
        console.log('CartManager initialized successfully');
    }
}

// Global cart manager instance
let cartManager;

// Initialize cart manager when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    cartManager = new CartManager();
    cartManager.init();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CartManager;
} 