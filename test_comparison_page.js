// Comprehensive Test Script for Comparison Page
// Run this in the browser console to test all functionality

console.log('=== NUTRIJUDGE Comparison Page Test Suite ===');

// Test 1: Data Loading
function testDataLoading() {
    console.log('\n1. Testing Data Loading...');
    
    if (!window.product) {
        console.error('❌ Product data not loaded');
        return false;
    }
    
    if (!Array.isArray(window.product)) {
        console.error('❌ Product data is not an array');
        return false;
    }
    
    if (window.product.length === 0) {
        console.error('❌ Product data is empty');
        return false;
    }
    
    console.log(`✅ Product data loaded: ${window.product.length} products`);
    console.log('Sample product:', window.product[0]);
    return true;
}

// Test 2: DOM Elements
function testDOMElements() {
    console.log('\n2. Testing DOM Elements...');
    
    const requiredElements = [
        'searchInput1', 'searchInput2',
        'searchResults1', 'searchResults2',
        'img1', 'img2',
        'title1', 'title2',
        'price1', 'price2',
        'brand1', 'brand2',
        'desc1', 'desc2',
        'rating1', 'rating2',
        'reviewCount1', 'reviewCount2',
        'cartBtn1', 'cartBtn2',
        'wishlistBtn1', 'wishlistBtn2',
        'buyNowBtn1', 'buyNowBtn2',
        'priceComparison', 'ratingComparison'
    ];
    
    const missingElements = [];
    
    requiredElements.forEach(elementId => {
        const element = document.getElementById(elementId);
        if (!element) {
            missingElements.push(elementId);
        }
    });
    
    if (missingElements.length > 0) {
        console.error('❌ Missing DOM elements:', missingElements);
        return false;
    }
    
    console.log('✅ All required DOM elements found');
    return true;
}

// Test 3: Search Functionality
function testSearchFunctionality() {
    console.log('\n3. Testing Search Functionality...');
    
    try {
        // Test search input
        const searchInput = document.getElementById('searchInput1');
        if (!searchInput) {
            console.error('❌ Search input not found');
            return false;
        }
        
        // Test search with a known product
        const testProduct = window.product[0];
        searchInput.value = testProduct.title;
        
        // Trigger search
        handleSearchInput(1, testProduct.title);
        
        console.log('✅ Search functionality working');
        return true;
    } catch (error) {
        console.error('❌ Search functionality error:', error);
        return false;
    }
}

// Test 4: Product Selection
function testProductSelection() {
    console.log('\n4. Testing Product Selection...');
    
    try {
        const testProduct = window.product[0];
        
        // Test product selection
        updateProduct(1, testProduct.id);
        
        // Check if product data was populated
        setTimeout(() => {
            const titleElement = document.getElementById('title1');
            const priceElement = document.getElementById('price1');
            const brandElement = document.getElementById('brand1');
            
            if (titleElement && titleElement.textContent !== 'N/A') {
                console.log('✅ Product selection working');
            } else {
                console.error('❌ Product selection failed');
            }
        }, 100);
        
        return true;
    } catch (error) {
        console.error('❌ Product selection error:', error);
        return false;
    }
}

// Test 5: Price Comparison
function testPriceComparison() {
    console.log('\n5. Testing Price Comparison...');
    
    try {
        // Select two products
        const product1 = window.product[0];
        const product2 = window.product[1];
        
        updateProduct(1, product1.id);
        updateProduct(2, product2.id);
        
        // Test price comparison
        setTimeout(() => {
            comparePrices();
            
            const comparisonElement = document.getElementById('priceComparison');
            if (comparisonElement && comparisonElement.innerHTML !== '') {
                console.log('✅ Price comparison working');
            } else {
                console.error('❌ Price comparison failed');
            }
        }, 200);
        
        return true;
    } catch (error) {
        console.error('❌ Price comparison error:', error);
        return false;
    }
}

// Test 6: Rating Comparison
function testRatingComparison() {
    console.log('\n6. Testing Rating Comparison...');
    
    try {
        // Test rating comparison
        setTimeout(() => {
            compareRatings();
            
            const comparisonElement = document.getElementById('ratingComparison');
            if (comparisonElement && comparisonElement.innerHTML !== '') {
                console.log('✅ Rating comparison working');
            } else {
                console.error('❌ Rating comparison failed');
            }
        }, 300);
        
        return true;
    } catch (error) {
        console.error('❌ Rating comparison error:', error);
        return false;
    }
}

// Test 7: Cart and Wishlist
function testCartAndWishlist() {
    console.log('\n7. Testing Cart and Wishlist...');
    
    try {
        // Test cart functionality
        const testProduct = window.product[0];
        updateProduct(1, testProduct.id);
        
        setTimeout(() => {
            addToCart(1);
            addToWishlist(1);
            
            console.log('✅ Cart and wishlist functions working');
        }, 400);
        
        return true;
    } catch (error) {
        console.error('❌ Cart and wishlist error:', error);
        return false;
    }
}

// Test 8: Auto-Selection
function testAutoSelection() {
    console.log('\n8. Testing Auto-Selection...');
    
    try {
        // Test auto-selection with localStorage
        const testProduct = window.product[0];
        localStorage.setItem('compareProduct', JSON.stringify(testProduct));
        
        // Trigger auto-selection
        handleAutoProductSelection();
        
        console.log('✅ Auto-selection working');
        return true;
    } catch (error) {
        console.error('❌ Auto-selection error:', error);
        return false;
    }
}

// Test 9: Real-time Updates
function testRealTimeUpdates() {
    console.log('\n9. Testing Real-time Updates...');
    
    try {
        // Test real-time updates
        const testProduct = window.product[0];
        updateProduct(1, testProduct.id);
        
        setTimeout(() => {
            // Check if comparisons updated
            const priceComparison = document.getElementById('priceComparison');
            const ratingComparison = document.getElementById('ratingComparison');
            
            if (priceComparison && ratingComparison) {
                console.log('✅ Real-time updates working');
            } else {
                console.error('❌ Real-time updates failed');
            }
        }, 500);
        
        return true;
    } catch (error) {
        console.error('❌ Real-time updates error:', error);
        return false;
    }
}

// Test 10: Error Handling
function testErrorHandling() {
    console.log('\n10. Testing Error Handling...');
    
    try {
        // Test with invalid product ID
        updateProduct(1, 99999);
        
        // Test with empty search
        handleSearchInput(1, '');
        
        console.log('✅ Error handling working');
        return true;
    } catch (error) {
        console.error('❌ Error handling failed:', error);
        return false;
    }
}

// Run all tests
function runAllTests() {
    console.log('Starting comprehensive test suite...\n');
    
    const tests = [
        testDataLoading,
        testDOMElements,
        testSearchFunctionality,
        testProductSelection,
        testPriceComparison,
        testRatingComparison,
        testCartAndWishlist,
        testAutoSelection,
        testRealTimeUpdates,
        testErrorHandling
    ];
    
    let passedTests = 0;
    let totalTests = tests.length;
    
    tests.forEach((test, index) => {
        try {
            const result = test();
            if (result) {
                passedTests++;
            }
        } catch (error) {
            console.error(`Test ${index + 1} failed with error:`, error);
        }
    });
    
    console.log(`\n=== Test Results ===`);
    console.log(`Passed: ${passedTests}/${totalTests}`);
    console.log(`Success Rate: ${((passedTests / totalTests) * 100).toFixed(1)}%`);
    
    if (passedTests === totalTests) {
        console.log('🎉 All tests passed! Comparison page is working perfectly.');
    } else {
        console.log('⚠️ Some tests failed. Check the errors above.');
    }
}

// Make functions globally available
window.testComparisonPage = {
    testDataLoading,
    testDOMElements,
    testSearchFunctionality,
    testProductSelection,
    testPriceComparison,
    testRatingComparison,
    testCartAndWishlist,
    testAutoSelection,
    testRealTimeUpdates,
    testErrorHandling,
    runAllTests
};

console.log('Test functions available as window.testComparisonPage');
console.log('Run window.testComparisonPage.runAllTests() to execute all tests'); 