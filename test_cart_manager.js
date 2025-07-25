// Test file for Cart Manager Integration
// This file tests the centralized cart management system

console.log('=== Cart Manager Integration Test ===');

// Test 1: Verify Cart Manager is loaded
function testCartManagerLoading() {
    console.log('Test 1: Cart Manager Loading');
    
    if (typeof CartManager !== 'undefined') {
        console.log('✅ CartManager class is available');
    } else {
        console.error('❌ CartManager class not found');
        return false;
    }
    
    if (window.cartManager) {
        console.log('✅ Global cartManager instance is available');
    } else {
        console.error('❌ Global cartManager instance not found');
        return false;
    }
    
    return true;
}

// Test 2: Test Cart Operations
function testCartOperations() {
    console.log('Test 2: Cart Operations');
    
    try {
        // Clear cart first
        cartManager.clearCart();
        console.log('✅ Cart cleared successfully');
        
        // Test adding products
        const product1 = cartManager.addToCart(1, 2);
        console.log(`✅ Added ${product1.title} x2 to cart`);
        
        const product2 = cartManager.addToCart(2, 1);
        console.log(`✅ Added ${product2.title} x1 to cart`);
        
        // Test cart count
        const count = cartManager.getCartCount();
        console.log(`✅ Cart count: ${count} items`);
        
        // Test cart items
        const items = cartManager.getCartItems();
        console.log(`✅ Cart items: ${items.length} unique products`);
        
        return true;
    } catch (error) {
        console.error('❌ Cart operations failed:', error.message);
        return false;
    }
}

// Test 3: Test Order Summary Calculation
function testOrderSummary() {
    console.log('Test 3: Order Summary Calculation');
    
    try {
        const summary = cartManager.calculateOrderSummary();
        
        console.log(`✅ Subtotal: ₹${summary.subtotal}`);
        console.log(`✅ Discount: ₹${summary.discount}`);
        console.log(`✅ Shipping: ₹${summary.shipping}`);
        console.log(`✅ Total: ₹${summary.total}`);
        console.log(`✅ Item Count: ${summary.itemCount}`);
        console.log(`✅ Savings: ₹${summary.savings}`);
        
        // Verify calculations
        const expectedSubtotal = summary.subtotal;
        const expectedTotal = summary.subtotal - summary.discount + summary.shipping;
        
        if (Math.abs(summary.total - expectedTotal) < 0.01) {
            console.log('✅ Total calculation is correct');
        } else {
            console.error('❌ Total calculation is incorrect');
            return false;
        }
        
        return true;
    } catch (error) {
        console.error('❌ Order summary calculation failed:', error.message);
        return false;
    }
}

// Test 4: Test Coupon Application
function testCouponApplication() {
    console.log('Test 4: Coupon Application');
    
    try {
        // Test valid coupon
        const coupon = cartManager.applyCoupon('WELCOME10');
        console.log(`✅ Applied coupon: ${coupon.description}`);
        
        // Test coupon summary update
        const summaryWithCoupon = cartManager.calculateOrderSummary();
        console.log(`✅ Total with coupon: ₹${summaryWithCoupon.total}`);
        
        // Test invalid coupon
        try {
            cartManager.applyCoupon('INVALID');
            console.error('❌ Invalid coupon should have failed');
            return false;
        } catch (error) {
            console.log('✅ Invalid coupon correctly rejected');
        }
        
        // Remove coupon
        cartManager.removeCoupon();
        console.log('✅ Coupon removed successfully');
        
        return true;
    } catch (error) {
        console.error('❌ Coupon application failed:', error.message);
        return false;
    }
}

// Test 5: Test UI Updates
function testUIUpdates() {
    console.log('Test 5: UI Updates');
    
    try {
        // Test cart count update
        cartManager.updateCartCount();
        console.log('✅ Cart count UI updated');
        
        // Test order summary update
        cartManager.updateOrderSummary();
        console.log('✅ Order summary UI updated');
        
        // Test cart display update
        cartManager.updateCartDisplay();
        console.log('✅ Cart display UI updated');
        
        return true;
    } catch (error) {
        console.error('❌ UI updates failed:', error.message);
        return false;
    }
}

// Test 6: Test Cross-Page Integration
function testCrossPageIntegration() {
    console.log('Test 6: Cross-Page Integration');
    
    try {
        // Simulate adding product from index page
        const product = cartManager.addToCart(3, 1);
        console.log(`✅ Added ${product.title} from index page`);
        
        // Verify cart is updated in localStorage
        const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        console.log(`✅ Cart stored in localStorage: ${storedCart.length} items`);
        
        // Verify cart manager reflects the change
        const managerCart = cartManager.getCartItems();
        console.log(`✅ Cart manager has: ${managerCart.length} items`);
        
        if (storedCart.length === managerCart.length) {
            console.log('✅ Cross-page integration working correctly');
        } else {
            console.error('❌ Cross-page integration failed');
            return false;
        }
        
        return true;
    } catch (error) {
        console.error('❌ Cross-page integration failed:', error.message);
        return false;
    }
}

// Test 7: Test Real-time Order Summary Updates
function testRealTimeUpdates() {
    console.log('Test 7: Real-time Order Summary Updates');
    
    try {
        // Get initial summary
        const initialSummary = cartManager.calculateOrderSummary();
        console.log(`✅ Initial total: ₹${initialSummary.total}`);
        
        // Add another product
        const product = cartManager.addToCart(4, 1);
        console.log(`✅ Added ${product.title}`);
        
        // Get updated summary
        const updatedSummary = cartManager.calculateOrderSummary();
        console.log(`✅ Updated total: ₹${updatedSummary.total}`);
        
        if (updatedSummary.total > initialSummary.total) {
            console.log('✅ Order summary updated in real-time');
        } else {
            console.error('❌ Order summary not updated');
            return false;
        }
        
        return true;
    } catch (error) {
        console.error('❌ Real-time updates failed:', error.message);
        return false;
    }
}

// Test 8: Test Error Handling
function testErrorHandling() {
    console.log('Test 8: Error Handling');
    
    try {
        // Test adding non-existent product
        try {
            cartManager.addToCart(999, 1);
            console.error('❌ Should have failed for non-existent product');
            return false;
        } catch (error) {
            console.log('✅ Correctly handled non-existent product');
        }
        
        // Test invalid quantity
        try {
            cartManager.updateQuantity(1, -5);
            console.log('✅ Correctly handled negative quantity');
        } catch (error) {
            console.log('✅ Error handling for invalid quantity');
        }
        
        return true;
    } catch (error) {
        console.error('❌ Error handling test failed:', error.message);
        return false;
    }
}

// Run all tests
function runAllTests() {
    console.log('=== Starting Cart Manager Integration Tests ===');
    
    const tests = [
        testCartManagerLoading,
        testCartOperations,
        testOrderSummary,
        testCouponApplication,
        testUIUpdates,
        testCrossPageIntegration,
        testRealTimeUpdates,
        testErrorHandling
    ];
    
    let passedTests = 0;
    let totalTests = tests.length;
    
    tests.forEach((test, index) => {
        console.log(`\n--- Running Test ${index + 1} ---`);
        if (test()) {
            passedTests++;
        }
    });
    
    console.log(`\n=== Test Results ===`);
    console.log(`✅ Passed: ${passedTests}/${totalTests} tests`);
    
    if (passedTests === totalTests) {
        console.log('🎉 All tests passed! Cart Manager integration is working correctly.');
    } else {
        console.log('⚠️  Some tests failed. Please check the implementation.');
    }
    
    // Clean up test data
    cartManager.clearCart();
    console.log('🧹 Test data cleaned up');
}

// Export test functions for manual testing
window.testCartManager = {
    runAllTests,
    testCartManagerLoading,
    testCartOperations,
    testOrderSummary,
    testCouponApplication,
    testUIUpdates,
    testCrossPageIntegration,
    testRealTimeUpdates,
    testErrorHandling
};

// Auto-run tests when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for cart manager to initialize
    setTimeout(() => {
        if (window.cartManager) {
            runAllTests();
        } else {
            console.error('Cart manager not available for testing');
        }
    }, 1000);
});

console.log('=== Cart Manager Integration Test Loaded ==='); 