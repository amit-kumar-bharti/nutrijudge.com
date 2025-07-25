// Unified Login System for NUTRIJUDGE
// This file provides consistent login functionality across all pages

class UnifiedLogin {
    constructor() {
        this.currentOTP = '';
        this.otpTimer = null;
        this.currentPhone = '';
        this.isInitialized = false;
    }

    // Initialize the login system
    init() {
        if (this.isInitialized) return;
        
        this.createLoginModals();
        this.setupEventListeners();
        this.updateLoginState();
        this.isInitialized = true;
        
        console.log('✅ Unified Login System initialized');
    }

    // Create login modals if they don't exist
    createLoginModals() {
        // Check if modals already exist
        if (document.getElementById('authModal')) return;

        // Create login modal
        const loginModalHTML = `
            <div class="modal fade" id="authModal" tabindex="-1" aria-labelledby="authModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header" style="background-color: var(--primary-color); color: white;">
                            <h5 class="modal-title" id="authModalLabel">
                                <i class="fas fa-user-circle me-2"></i>Welcome to NUTRIJUDGE
                            </h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body" style="background: #fff6fa;">
                            <!-- Login Section -->
                            <div class="text-center mb-4">
                                <h5 class="fw-bold" style="color: var(--primary-color);">
                                    <i class="fas fa-sign-in-alt me-2"></i>Login with Phone Number
                                </h5>
                                <p class="text-muted">Enter your phone number to receive OTP</p>
                            </div>
                            
                            <!-- Login Form -->
                            <form id="loginForm" class="mt-4">
                                <div class="mb-3">
                                    <label for="loginPhone" class="form-label" style="color: var(--primary-color); font-weight: 600;">
                                        Phone Number <span class="text-danger">*</span>
                                    </label>
                                    <div class="input-group">
                                        <span class="input-group-text" style="background: var(--primary-color); color: white; border: none;">+91</span>
                                        <input type="tel" class="form-control" id="loginPhone" placeholder="Enter your 10-digit phone number" required maxlength="10" pattern="[0-9]{10}">
                                    </div>
                                    <div class="invalid-feedback">
                                        Please enter a valid 10-digit phone number.
                                    </div>
                                </div>
                                <div class="d-grid">
                                    <button type="submit" class="btn btn-lg" style="background: var(--primary-color); border: none; color: white; font-weight: 600; border-radius: 25px;">
                                        <i class="fas fa-mobile-alt me-2"></i>Send OTP
                                    </button>
                                </div>
                                <div class="text-center mt-3">
                                    <small class="text-muted">We'll send a 6-digit OTP to your phone number</small>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Create OTP modal
        const otpModalHTML = `
            <div class="modal fade" id="otpModal" tabindex="-1" aria-labelledby="otpModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header" style="background-color: var(--primary-color); color: white;">
                            <h5 class="modal-title" id="otpModalLabel">
                                <i class="fas fa-shield-alt me-2"></i>Verify OTP
                            </h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="text-center mb-4">
                                <div class="mb-3">
                                    <i class="fas fa-mobile-alt fa-3x" style="color: var(--primary-color);"></i>
                                </div>
                                <h6>OTP Sent Successfully!</h6>
                                <p class="text-muted">We've sent a 6-digit OTP to <strong id="otpPhoneNumber"></strong></p>
                                <div class="alert alert-info">
                                    <i class="fas fa-info-circle me-2"></i>
                                    <strong>Demo OTP:</strong> <span id="demoOTP" class="fw-bold">123456</span>
                                </div>
                            </div>
                            
                            <form id="otpForm">
                                <div class="mb-4">
                                    <label for="otpInput" class="form-label" style="color: var(--primary-color); font-weight: 600;">Enter 6-digit OTP</label>
                                    <div class="otp-input-container">
                                        <input type="text" class="form-control form-control-lg text-center" id="otpInput" 
                                               placeholder="000000" maxlength="6" pattern="[0-9]{6}" required
                                               style="font-size: 1.5rem; font-weight: bold; letter-spacing: 0.5rem;">
                                    </div>
                                    <div class="invalid-feedback">
                                        Please enter the 6-digit OTP.
                                    </div>
                                </div>
                                
                                <div class="d-grid gap-2">
                                    <button type="submit" class="btn btn-lg" style="background: var(--primary-color); border: none; color: white; font-weight: 600;">
                                        <i class="fas fa-check me-2"></i>Verify & Login
                                    </button>
                                    <button type="button" class="btn btn-outline-secondary" onclick="unifiedLogin.resendOTP()">
                                        <i class="fas fa-redo me-2"></i>Resend OTP
                                    </button>
                                </div>
                            </form>
                            
                            <div class="text-center mt-3">
                                <small class="text-muted">
                                    <i class="fas fa-clock me-1"></i>
                                    OTP expires in <span id="otpTimer" class="fw-bold">05:00</span>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Add modals to body
        document.body.insertAdjacentHTML('beforeend', loginModalHTML);
        document.body.insertAdjacentHTML('beforeend', otpModalHTML);
    }

    // Setup event listeners
    setupEventListeners() {
        // Login form submission
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => this.handleLoginSubmit(e));
        }

        // OTP form submission
        const otpForm = document.getElementById('otpForm');
        if (otpForm) {
            otpForm.addEventListener('submit', (e) => this.handleOTPSubmit(e));
        }

        // Update login state on page load
        document.addEventListener('DOMContentLoaded', () => {
            this.updateLoginState();
        });
    }

    // Handle login form submission
    handleLoginSubmit(e) {
        e.preventDefault();
        
        const phone = document.getElementById('loginPhone').value.trim();
        
        // Basic validation
        if (!phone) {
            this.showAlert('Please enter your phone number.', 'danger');
            return;
        }
        
        if (!/^[0-9]{10}$/.test(phone)) {
            this.showAlert('Please enter a valid 10-digit phone number.', 'danger');
            return;
        }
        
        // Generate OTP
        this.currentOTP = this.generateOTP();
        this.currentPhone = phone;
        
        // Show OTP modal
        document.getElementById('otpPhoneNumber').textContent = `+91 ${phone}`;
        document.getElementById('demoOTP').textContent = this.currentOTP;
        
        // Hide login modal and show OTP modal
        const authModal = bootstrap.Modal.getInstance(document.getElementById('authModal'));
        if (authModal) authModal.hide();
        
        setTimeout(() => {
            const otpModal = new bootstrap.Modal(document.getElementById('otpModal'));
            otpModal.show();
            
            // Start timer
            this.startOTPTimer();
            
            // Focus on OTP input
            setTimeout(() => {
                document.getElementById('otpInput').focus();
            }, 500);
        }, 500);
        
        this.showAlert(`OTP sent to +91 ${phone}`, 'success');
    }

    // Handle OTP form submission
    handleOTPSubmit(e) {
        e.preventDefault();
        
        const enteredOTP = document.getElementById('otpInput').value.trim();
        
        if (!enteredOTP) {
            this.showAlert('Please enter the OTP.', 'danger');
            return;
        }
        
        if (enteredOTP !== this.currentOTP) {
            this.showAlert('Invalid OTP. Please check and try again.', 'danger');
            document.getElementById('otpInput').value = '';
            document.getElementById('otpInput').focus();
            return;
        }
        
        // OTP is correct - simulate user login
        const mockUser = {
            firstName: 'User',
            lastName: 'Demo',
            phone: this.currentPhone,
            email: `user${this.currentPhone}@demo.com`,
            lastLogin: new Date().toISOString()
        };
        
        // Store user in localStorage
        localStorage.setItem('currentUser', JSON.stringify(mockUser));
        
        // Clear timer
        if (this.otpTimer) {
            clearInterval(this.otpTimer);
        }
        
        // Show success message
        this.showAlert(`Login successful! Welcome back, ${mockUser.firstName}.`, 'success');
        
        // Clear forms
        document.getElementById('loginForm').reset();
        document.getElementById('otpForm').reset();
        
        // Hide OTP modal
        const otpModal = bootstrap.Modal.getInstance(document.getElementById('otpModal'));
        if (otpModal) otpModal.hide();
        
        // Update UI to show logged-in state
        this.updateLoginState();
        
        // Reset OTP variables
        this.currentOTP = '';
        this.currentPhone = '';
    }

    // Generate a random 6-digit OTP
    generateOTP() {
        return Math.floor(100000 + Math.random() * 900000).toString();
    }

    // Start OTP timer
    startOTPTimer() {
        let timeLeft = 300; // 5 minutes in seconds
        const timerElement = document.getElementById('otpTimer');
        
        this.otpTimer = setInterval(() => {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            if (timeLeft <= 0) {
                clearInterval(this.otpTimer);
                timerElement.textContent = '00:00';
                this.showAlert('OTP has expired. Please request a new one.', 'warning');
            }
            timeLeft--;
        }, 1000);
    }

    // Resend OTP function
    resendOTP() {
        if (!this.currentPhone) {
            this.showAlert('Please enter your phone number first.', 'warning');
            return;
        }
        
        // Generate new OTP
        this.currentOTP = this.generateOTP();
        document.getElementById('demoOTP').textContent = this.currentOTP;
        
        // Reset timer
        if (this.otpTimer) {
            clearInterval(this.otpTimer);
        }
        this.startOTPTimer();
        
        this.showAlert(`New OTP sent to +91 ${this.currentPhone}`, 'success');
    }

    // Open login modal
    openAuthModal() {
        const modal = new bootstrap.Modal(document.getElementById('authModal'));
        modal.show();
    }

    // Update login state in UI
    updateLoginState() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
        const hamburgerMenu = document.getElementById('hamburgerMenu');
        
        if (currentUser && hamburgerMenu) {
            // Update hamburger menu for logged-in user
            hamburgerMenu.innerHTML = `
                <i class="fas fa-user-circle me-1"></i>${currentUser.firstName}
            `;
            
            // Update dropdown menu
            const dropdownMenu = hamburgerMenu.nextElementSibling;
            if (dropdownMenu) {
                dropdownMenu.innerHTML = `
                    <li><a class="dropdown-item" href="profile.html"><i class="fas fa-user me-2"></i>Profile</a></li>
                    <li><a class="dropdown-item" href="wishlist.html">
                        <i class="fas fa-heart me-2"></i>Wishlist
                        <span class="badge ms-2 wishlist-count" style="display: none; background-color: var(--primary-color);">0</span>
                    </a></li>
                    <li><a class="dropdown-item" href="cart.html">
                        <i class="fas fa-shopping-cart me-2"></i>Cart
                        <span class="badge ms-2 cart-count" style="display: none; background-color: var(--primary-color);">0</span>
                    </a></li>
                    <li><a class="dropdown-item" href="orders.html"><i class="fas fa-box me-2"></i>Orders</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="policies.html"><i class="fas fa-file-contract me-2"></i>Policies</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="https://wa.me/1234567890?text=Hi%20NUTRIJUDGE%20Support,%20I%20need%20help" target="_blank" rel="noopener"><i class="fab fa-whatsapp me-2"></i>WhatsApp Support</a></li>
                    <li><a class="dropdown-item" href="admin.html"><i class="fas fa-user-cog me-2"></i>Admin</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#" onclick="unifiedLogin.logoutUser()"><i class="fas fa-sign-out-alt me-2"></i>Logout</a></li>
                `;
            }
        } else if (hamburgerMenu) {
            // Reset to default state
            hamburgerMenu.innerHTML = '<i class="fas fa-bars"></i>';
            
            const dropdownMenu = hamburgerMenu.nextElementSibling;
            if (dropdownMenu) {
                dropdownMenu.innerHTML = `
                    <li><a class="dropdown-item" href="#" onclick="unifiedLogin.openAuthModal()"><i class="fas fa-sign-in-alt me-2"></i>Login</a></li>
                    <li><a class="dropdown-item" href="wishlist.html">
                        <i class="fas fa-heart me-2"></i>Wishlist
                        <span class="badge ms-2 wishlist-count" style="display: none; background-color: var(--primary-color);">0</span>
                    </a></li>
                    <li><a class="dropdown-item" href="cart.html">
                        <i class="fas fa-shopping-cart me-2"></i>Cart
                        <span class="badge ms-2 cart-count" style="display: none; background-color: var(--primary-color);">0</span>
                    </a></li>
                    <li><a class="dropdown-item" href="profile.html"><i class="fas fa-user me-2"></i>Profile</a></li>
                    <li><a class="dropdown-item" href="orders.html"><i class="fas fa-box me-2"></i>Orders</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="policies.html"><i class="fas fa-file-contract me-2"></i>Policies</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="https://wa.me/1234567890?text=Hi%20NUTRIJUDGE%20Support,%20I%20need%20help" target="_blank" rel="noopener"><i class="fab fa-whatsapp me-2"></i>WhatsApp Support</a></li>
                    <li><a class="dropdown-item" href="admin.html"><i class="fas fa-user-cog me-2"></i>Admin</a></li>
                `;
            }
        }
    }

    // Logout function
    logoutUser() {
        localStorage.removeItem('currentUser');
        this.updateLoginState();
        this.showAlert('Logged out successfully.', 'info');
    }

    // Check if user is logged in
    isLoggedIn() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
        return currentUser !== null;
    }

    // Get current user
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('currentUser') || 'null');
    }

    // Show alert notification
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

    // Auto-login prompt for new users
    autoLoginPrompt() {
        if (!this.isLoggedIn()) {
            setTimeout(() => {
                this.openAuthModal();
            }, 2000); // Show after 2 seconds
        }
    }
}

// Create global instance
const unifiedLogin = new UnifiedLogin();

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        unifiedLogin.init();
    });
} else {
    unifiedLogin.init();
}

// Make functions globally available
window.openAuthModal = () => unifiedLogin.openAuthModal();
window.logoutUser = () => unifiedLogin.logoutUser();
window.isLoggedIn = () => unifiedLogin.isLoggedIn();
window.getCurrentUser = () => unifiedLogin.getCurrentUser(); 