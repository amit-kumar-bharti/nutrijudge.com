// NUTRIJUDGE - Main JavaScript File
// Global variables
let currentStep = 1;
let selectedProducts = [];
let cart = [];
let wishlist = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    loadCart();
    loadWishlist();
    updateCartCount();
    updateWishlistCount();
});

// Initialize application
function initializeApp() {
    // Populate product dropdowns
    populateProductDropdowns();
    
    // Initialize user manager
    window.userManager = new UserManager();
    
    // Check if user is logged in
    if (userManager.isLoggedIn()) {
        updateUserInterface();
    }
    
    // Initialize search functionality
    initializeSearch();
    
    // Initialize category filtering
    initializeCategoryFilter();
}

// Populate product dropdowns for comparison
function populateProductDropdowns() {
    const selects = ['select1', 'select2', 'select3', 'select4'];
    
    selects.forEach(selectId => {
        const select = document.getElementById(selectId);
        if (select) {
            select.innerHTML = '<option value="0">-- Select Product --</option>';
            for (let i = 1; i < product.length; i++) {
                select.innerHTML += `<option value="${i}">${product[i].title}</option>`;
            }
        }
    });
}

// Product comparison functions
function item1(a) {
    var select2 = document.getElementById("select2").value;
    if (a != select2 && a != 0) {
        document.getElementById("img1").src = product[a].image;
        document.getElementById("price1").innerHTML = product[a].price;
        document.getElementById("desc1").innerHTML = product[a].description;
        document.getElementById("brand1").innerHTML = product[a].brand;
        document.getElementById("rating1").innerHTML = generateStars(4.5);
        document.getElementById("cartBtn1").disabled = false;
        updatePriceComparison();
        updateRatingComparison();
    } else if (a == 0) {
        document.getElementById("img1").src = product[0].image;
        document.getElementById("price1").innerHTML = "N/A";
        document.getElementById("desc1").innerHTML = "N/A";
        document.getElementById("brand1").innerHTML = "N/A";
        document.getElementById("rating1").innerHTML = "N/A";
        document.getElementById("cartBtn1").disabled = true;
    } else {
        document.getElementById("select1").selectedIndex = 0;
        item1(0);
    }
}

function item2(a) {
    var select1 = document.getElementById("select1").value;
    if (a != select1 && a != 0) {
        document.getElementById("img2").src = product[a].image;
        document.getElementById("price2").innerHTML = product[a].price;
        document.getElementById("desc2").innerHTML = product[a].description;
        document.getElementById("brand2").innerHTML = product[a].brand;
        document.getElementById("rating2").innerHTML = generateStars(4.3);
        document.getElementById("cartBtn2").disabled = false;
        updatePriceComparison();
        updateRatingComparison();
    } else if (a == 0) {
        document.getElementById("img2").src = product[0].image;
        document.getElementById("price2").innerHTML = "N/A";
        document.getElementById("desc2").innerHTML = "N/A";
        document.getElementById("brand2").innerHTML = "N/A";
        document.getElementById("rating2").innerHTML = "N/A";
        document.getElementById("cartBtn2").disabled = true;
    } else {
        document.getElementById("select2").selectedIndex = 0;
        item2(0);
    }
}

function item3(a) {
    var select1 = document.getElementById("select1").value;
    var select2 = document.getElementById("select2").value;
    if (a != select1 && a != select2 && a != 0) {
        document.getElementById("img3").src = product[a].image;
        document.getElementById("price3").innerHTML = product[a].price;
        document.getElementById("desc3").innerHTML = product[a].description;
        document.getElementById("brand3").innerHTML = product[a].brand;
        document.getElementById("rating3").innerHTML = generateStars(4.1);
        document.getElementById("cartBtn3").disabled = false;
        updatePriceComparison();
        updateRatingComparison();
    } else if (a == 0) {
        document.getElementById("img3").src = product[0].image;
        document.getElementById("price3").innerHTML = "N/A";
        document.getElementById("desc3").innerHTML = "N/A";
        document.getElementById("brand3").innerHTML = "N/A";
        document.getElementById("rating3").innerHTML = "N/A";
        document.getElementById("cartBtn3").disabled = true;
    } else {
        document.getElementById("select3").selectedIndex = 0;
        item3(0);
    }
}

function item4(a) {
    var select1 = document.getElementById("select1").value;
    var select2 = document.getElementById("select2").value;
    var select3 = document.getElementById("select3").value;
    if (a != select1 && a != select2 && a != select3 && a != 0) {
        document.getElementById("img4").src = product[a].image;
        document.getElementById("price4").innerHTML = product[a].price;
        document.getElementById("desc4").innerHTML = product[a].description;
        document.getElementById("brand4").innerHTML = product[a].brand;
        document.getElementById("rating4").innerHTML = generateStars(4.0);
        document.getElementById("cartBtn4").disabled = false;
        updatePriceComparison();
        updateRatingComparison();
    } else if (a == 0) {
        document.getElementById("img4").src = product[0].image;
        document.getElementById("price4").innerHTML = "N/A";
        document.getElementById("desc4").innerHTML = "N/A";
        document.getElementById("brand4").innerHTML = "N/A";
        document.getElementById("rating4").innerHTML = "N/A";
        document.getElementById("cartBtn4").disabled = true;
    } else {
        document.getElementById("select4").selectedIndex = 0;
        item4(0);
    }
}

// Generate star ratings
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '⭐';
    }
    
    if (hasHalfStar) {
        stars += '⭐';
    }
    
    return stars;
}

// Update price comparison
function updatePriceComparison() {
    const prices = [];
    const priceElements = ['price1', 'price2', 'price3', 'price4'];
    
    priceElements.forEach((elementId, index) => {
        const element = document.getElementById(elementId);
        if (element && element.innerHTML !== 'N/A') {
            const price = parseFloat(element.innerHTML.replace(/[^\d]/g, ''));
            prices.push({ price, index: index + 1 });
        }
    });
    
    if (prices.length > 1) {
        const minPrice = Math.min(...prices.map(p => p.price));
        const maxPrice = Math.max(...prices.map(p => p.price));
        const avgPrice = prices.reduce((sum, p) => sum + p.price, 0) / prices.length;
        
        const cheapest = prices.find(p => p.price === minPrice);
        const comparisonElement = document.getElementById('priceComparison');
        
        if (comparisonElement) {
            comparisonElement.innerHTML = `
                <div class="row">
                    <div class="col-md-4">
                        <strong>Cheapest:</strong> Product ${cheapest.index} (${cheapest.price})
                    </div>
                    <div class="col-md-4">
                        <strong>Range:</strong> ${minPrice} - ${maxPrice}
                    </div>
                    <div class="col-md-4">
                        <strong>Average:</strong> ${avgPrice.toFixed(0)}
                    </div>
                </div>
            `;
        }
    }
}

// Update rating comparison
function updateRatingComparison() {
    const ratings = [];
    const ratingElements = ['rating1', 'rating2', 'rating3', 'rating4'];
    
    ratingElements.forEach((elementId, index) => {
        const element = document.getElementById(elementId);
        if (element && element.innerHTML !== 'N/A') {
            const stars = element.innerHTML;
            const rating = (stars.match(/⭐/g) || []).length;
            ratings.push({ rating, index: index + 1 });
        }
    });
    
    if (ratings.length > 1) {
        const maxRating = Math.max(...ratings.map(r => r.rating));
        const bestRated = ratings.find(r => r.rating === maxRating);
        const comparisonElement = document.getElementById('ratingComparison');
        
        if (comparisonElement) {
            comparisonElement.innerHTML = `
                <div class="row">
                    <div class="col-md-6">
                        <strong>Best Rated:</strong> Product ${bestRated.index} (${bestRated.rating}/5)
                    </div>
                    <div class="col-md-6">
                        <strong>Average:</strong> ${(ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length).toFixed(1)}/5
                    </div>
                </div>
            `;
        }
    }
}

// Cart functionality
function addToCart(productId) {
    if (productId === 0) return;
    
    const product = getProductById(productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            title: product.title,
            price: product.price,
            image: product.image,
            brand: product.brand,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartCount();
    showNotification('Product added to cart!', 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    renderCart();
    showNotification('Product removed from cart!', 'info');
}

function updateCartQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = quantity;
            saveCart();
            updateCartCount();
            renderCart();
        }
    }
}

function saveCart() {
            localStorage.setItem('nutrijudgeCart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('nutrijudgeCart');
    cart = savedCart ? JSON.parse(savedCart) : [];
}

function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('#cartCount');
    cartCountElements.forEach(element => {
        element.textContent = cartCount;
    });
}

function renderCart() {
    const cartContainer = document.getElementById('cartItems');
    if (!cartContainer) return;
    
    if (cart.length === 0) {
        document.getElementById('emptyCart').style.display = 'block';
        cartContainer.innerHTML = '';
        return;
    }
    
    document.getElementById('emptyCart').style.display = 'none';
    
    cartContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-header">
                <div class="row align-items-center">
                    <div class="col-md-2">
                        <img src="${item.image}" alt="${item.title}" class="cart-item-image">
                    </div>
                    <div class="col-md-4">
                        <h5 class="mb-1">${item.title}</h5>
                        <p class="text-muted mb-0">${item.brand}</p>
                    </div>
                    <div class="col-md-2">
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})" aria-label="Decrease quantity">-</button>
                            <input type="number" class="quantity-input" value="${item.quantity}" min="1" max="10" onchange="updateCartQuantity(${item.id}, parseInt(this.value))" aria-label="Quantity">
                            <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})" aria-label="Increase quantity">+</button>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <span class="price-highlight">${item.price}</span>
                    </div>
                    <div class="col-md-2 text-end">
                        <button class="btn btn-outline-danger btn-sm" onclick="removeFromCart(${item.id})" aria-label="Remove from cart">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    updateCartSummary();
}

function updateCartSummary() {
    const subtotal = cart.reduce((total, item) => {
        const price = parseFloat(item.price.replace(/[^\d]/g, ''));
        return total + (price * item.quantity);
    }, 0);
    
    const shipping = subtotal > 4000 ? 0 : 200;
    const tax = subtotal * 0.18; // 18% GST
    const total = subtotal + shipping + tax;
    
    document.getElementById('subtotal').textContent = `₹${subtotal.toFixed(0)}`;
    document.getElementById('shipping').textContent = shipping === 0 ? 'Free' : `₹${shipping}`;
    document.getElementById('tax').textContent = `₹${tax.toFixed(0)}`;
    document.getElementById('total').textContent = `₹${total.toFixed(0)}`;
    
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.disabled = cart.length === 0;
    }
}

// Wishlist functionality
function addToWishlist(productId) {
    if (productId === 0) return;
    
    const product = getProductById(productId);
    if (!product) return;
    
    if (!wishlist.find(item => item.id === productId)) {
        wishlist.push({
            id: productId,
            title: product.title,
            price: product.price,
            image: product.image,
            brand: product.brand,
            addedDate: new Date().toISOString()
        });
        
        saveWishlist();
        updateWishlistCount();
        showNotification('Product added to wishlist!', 'success');
    } else {
        showNotification('Product already in wishlist!', 'warning');
    }
}

function removeFromWishlist(productId) {
    wishlist = wishlist.filter(item => item.id !== productId);
    saveWishlist();
    updateWishlistCount();
    renderWishlist();
    showNotification('Product removed from wishlist!', 'info');
}

function saveWishlist() {
            localStorage.setItem('nutrijudgeWishlist', JSON.stringify(wishlist));
}

function loadWishlist() {
    const savedWishlist = localStorage.getItem('nutrijudgeWishlist');
    wishlist = savedWishlist ? JSON.parse(savedWishlist) : [];
}

function updateWishlistCount() {
    const wishlistCountElements = document.querySelectorAll('#wishlistCount');
    wishlistCountElements.forEach(element => {
        element.textContent = wishlist.length;
    });
}

function renderWishlist() {
    const wishlistContainer = document.getElementById('wishlistItems');
    if (!wishlistContainer) return;
    
    if (wishlist.length === 0) {
        document.getElementById('emptyWishlist').style.display = 'block';
        wishlistContainer.innerHTML = '';
        return;
    }
    
    document.getElementById('emptyWishlist').style.display = 'none';
    
    wishlistContainer.innerHTML = wishlist.map(item => `
        <div class="wishlist-card">
            <div class="row align-items-center">
                <div class="col-md-2">
                    <img src="${item.image}" alt="${item.title}" class="product-image">
                </div>
                <div class="col-md-4">
                    <h5 class="mb-1">${item.title}</h5>
                    <p class="text-muted mb-0">${item.brand}</p>
                </div>
                <div class="col-md-2">
                    <span class="price-highlight">${item.price}</span>
                </div>
                <div class="col-md-2">
                    <div class="rating-stars">⭐⭐⭐⭐⭐</div>
                </div>
                <div class="col-md-2 text-end">
                    <button class="btn btn-success btn-sm me-2" onclick="addToCart(${item.id})" aria-label="Add to cart">
                        <i class="fas fa-shopping-cart"></i>
                    </button>
                    <button class="btn btn-outline-danger btn-sm" onclick="removeFromWishlist(${item.id})" aria-label="Remove from wishlist">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    updateWishlistStats();
}

function updateWishlistStats() {
    const totalItems = wishlist.length;
    const totalValue = wishlist.reduce((total, item) => {
        const price = parseFloat(item.price.replace(/[^\d]/g, ''));
        return total + price;
    }, 0);
    
    document.getElementById('totalItems').textContent = totalItems;
    document.getElementById('totalValue').textContent = `₹${totalValue.toFixed(0)}`;
    document.getElementById('avgRating').textContent = '4.5';
    document.getElementById('brands').textContent = new Set(wishlist.map(item => item.brand)).size;
}

// Search functionality
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            if (query.length > 2) {
                showSearchSuggestions(query);
            } else {
                hideSearchSuggestions();
            }
        });
    }
}

function showSearchSuggestions(query) {
    const suggestions = product.filter(p => 
        p.title.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
    ).slice(0, 5);
    
    const suggestionsContainer = document.getElementById('searchSuggestions');
    if (suggestionsContainer) {
        suggestionsContainer.innerHTML = suggestions.map(item => `
            <div class="search-suggestion-item" onclick="selectSearchSuggestion(${item.id})">
                <div class="d-flex align-items-center">
                    <img src="${item.image}" alt="${item.title}" style="width: 40px; height: 40px; object-fit: cover; border-radius: 5px; margin-right: 10px;">
                    <div>
                        <div class="fw-bold">${item.title}</div>
                        <div class="text-muted small">${item.brand} - ${item.price}</div>
                    </div>
                </div>
            </div>
        `).join('');
        suggestionsContainer.style.display = 'block';
    }
}

function hideSearchSuggestions() {
    const suggestionsContainer = document.getElementById('searchSuggestions');
    if (suggestionsContainer) {
        suggestionsContainer.style.display = 'none';
    }
}

function selectSearchSuggestion(productId) {
    hideSearchSuggestions();
    // Navigate to product page or show product details
    showProductDetails(productId);
}

function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput ? searchInput.value : '';
    
    if (query.trim()) {
        const results = product.filter(p => 
            p.title.toLowerCase().includes(query.toLowerCase()) ||
            p.brand.toLowerCase().includes(query.toLowerCase()) ||
            p.description.toLowerCase().includes(query.toLowerCase())
        );
        
        showSearchResults(results, query);
    }
}

function showSearchResults(results, query) {
    // Create modal or navigate to results page
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.innerHTML = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Search Results for "${query}"</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    ${results.length > 0 ? results.map(item => `
                        <div class="card mb-3">
                            <div class="row g-0">
                                <div class="col-md-3">
                                    <img src="${item.image}" class="img-fluid rounded-start" alt="${item.title}">
                                </div>
                                <div class="col-md-9">
                                    <div class="card-body">
                                        <h5 class="card-title">${item.title}</h5>
                                        <p class="card-text">${item.description}</p>
                                        <p class="card-text"><small class="text-muted">${item.brand} - ${item.price}</small></p>
                                        <button class="btn btn-primary btn-sm" onclick="addToCart(${item.id})">Add to Cart</button>
                                        <button class="btn btn-outline-primary btn-sm" onclick="addToWishlist(${item.id})">Add to Wishlist</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('') : '<p class="text-center">No products found matching your search.</p>'}
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
    
    modal.addEventListener('hidden.bs.modal', function() {
        document.body.removeChild(modal);
    });
}

// Category filtering
function initializeCategoryFilter() {
    // Add event listeners for category buttons
    const categoryButtons = document.querySelectorAll('.category-item');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            filterByCategory(category);
        });
    });
}

function filterByCategory(category) {
    // Filter products by category and show results
    const categoryProducts = getProductsByCategory(category);
    showCategoryResults(category, categoryProducts);
}

function getProductsByCategory(category) {
    // Map categories to product IDs (this would be more sophisticated in a real app)
    const categoryMap = {
        'protein': [2, 11], // Protein Plus, Creatine
        'gainers': [1, 5], // Green Jar, Collagen
        'pre-workout': [11, 12], // Creatine, Ashwagandha
        'post-workout': [2, 8], // Protein Plus, Magnesium
        'ayurveda': [12], // Ashwagandha
        'fit-food': [1, 6], // Green Jar, Probiotic
        'supplement': [3, 7, 9, 10], // VitaBoost, Vitamin D3, B-Complex, Zinc
        'fat-loss': [1, 6], // Green Jar, Probiotic
        'accessories': [] // No accessories in current data
    };
    
    const productIds = categoryMap[category] || [];
    return productIds.map(id => product.find(p => p.id === id)).filter(Boolean);
}

function showCategoryResults(category, products) {
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.innerHTML = `
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">${category.charAt(0).toUpperCase() + category.slice(1)} Products</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        ${products.map(item => `
                            <div class="col-md-6 col-lg-4 mb-4">
                                <div class="card h-100">
                                    <img src="${item.image}" class="card-img-top" alt="${item.title}" style="height: 200px; object-fit: cover;">
                                    <div class="card-body">
                                        <h5 class="card-title">${item.title}</h5>
                                        <p class="card-text">${item.description}</p>
                                        <p class="card-text"><strong>${item.brand}</strong> - ${item.price}</p>
                                        <div class="d-flex gap-2">
                                            <button class="btn btn-primary btn-sm" onclick="addToCart(${item.id})">Add to Cart</button>
                                            <button class="btn btn-outline-primary btn-sm" onclick="addToWishlist(${item.id})">Wishlist</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
    
    modal.addEventListener('hidden.bs.modal', function() {
        document.body.removeChild(modal);
    });
}

// Utility functions
function getProductById(id) {
    return product.find(p => p.id === id);
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 3000);
}

function updateUserInterface() {
    const user = userManager.getCurrentUser();
    if (user) {
        // Update profile information
        const profileName = document.getElementById('profileName');
        if (profileName) {
            profileName.textContent = `${user.firstName} ${user.lastName}`;
        }
        
        const profileEmail = document.getElementById('profileEmail');
        if (profileEmail) {
            profileEmail.textContent = user.email;
        }
        
        const profileReferralCode = document.getElementById('profileReferralCode');
        if (profileReferralCode) {
            profileReferralCode.textContent = user.referralCode;
        }
        
        // Update referral stats
        const stats = userManager.getReferralStats(user.id);
        const profileReferrals = document.getElementById('profileReferrals');
        if (profileReferrals) {
            profileReferrals.textContent = stats.totalReferrals;
        }
        
        const profileEarned = document.getElementById('profileEarned');
        if (profileEarned) {
            profileEarned.textContent = `₹${stats.totalEarned}`;
        }
    }
}

// Navigation functions
function viewCart() {
    window.location.href = 'cart.html';
}

function viewWishlist() {
    window.location.href = 'wishlist.html';
}

function viewProfile() {
    window.location.href = 'profile.html';
}

function showProductDetails(productId) {
    window.location.href = `product.html?id=${productId}`;
}

// Comparison step navigation
function goToNextStep() {
    if (currentStep < 4) {
        currentStep++;
        updateStepIndicator();
    }
}

function goToPreviousStep() {
    if (currentStep > 1) {
        currentStep--;
        updateStepIndicator();
    }
}

function updateStepIndicator() {
    const steps = document.querySelectorAll('.step');
    const progressBar = document.getElementById('progressBar');
    
    steps.forEach((step, index) => {
        if (index + 1 < currentStep) {
            step.classList.remove('active');
            step.classList.add('completed');
        } else if (index + 1 === currentStep) {
            step.classList.remove('completed');
            step.classList.add('active');
        } else {
            step.classList.remove('active', 'completed');
        }
    });
    
    if (progressBar) {
        const progress = (currentStep / 4) * 100;
        progressBar.style.width = `${progress}%`;
        progressBar.setAttribute('aria-valuenow', progress);
    }
    
    // Update navigation buttons
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) prevBtn.disabled = currentStep === 1;
    if (nextBtn) nextBtn.disabled = currentStep === 4;
}

// Initialize step indicator on page load
document.addEventListener('DOMContentLoaded', function() {
    updateStepIndicator();
});