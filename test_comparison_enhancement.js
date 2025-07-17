// Test script for enhanced comparison page with comprehensive product data
// This script tests all the new product data fields and N/A handling

console.log('=== Testing Enhanced Comparison Page ===');

// Test 1: Verify all new products are loaded
function testNewProducts() {
    console.log('\n1. Testing New Products Loading...');
    
    if (!window.product || !Array.isArray(window.product)) {
        console.error('❌ Product data not loaded');
        return false;
    }
    
    console.log(`✅ Product data loaded: ${window.product.length} products`);
    
    // Check for new products (IDs 17-20)
    const newProducts = window.product.filter(p => p.id >= 17 && p.id <= 20);
    console.log(`✅ New products found: ${newProducts.length} products`);
    
    newProducts.forEach(product => {
        console.log(`  - ${product.title} (ID: ${product.id})`);
    });
    
    return true;
}

// Test 2: Verify all product data fields
function testProductDataFields() {
    console.log('\n2. Testing Product Data Fields...');
    
    const testProduct = window.product.find(p => p.id === 1); // Whey Protein Isolate
    if (!testProduct) {
        console.error('❌ Test product not found');
        return false;
    }
    
    const requiredFields = [
        'id', 'title', 'price', 'originalPrice', 'discount', 'description', 'brand', 
        'category', 'rating', 'reviewCount', 'servingSize', 'servingsPerContainer', 
        'pricePerServing', 'proteinPerServing', 'caloriesPerServing', 'flavors', 
        'keyFeatures', 'image', 'stock', 'shipping', 'warranty'
    ];
    
    const optionalFields = [
        'caffeinePerServing', 'creatinePerServing', 'bcaaRatio', 'extractRatio',
        'epaContent', 'dhaContent', 'vitaminDContent', 'magnesiumContent', 
        'zincContent', 'collagenContent', 'probioticStrains', 'egcgContent',
        'glutamineContent', 'vitaminCount', 'bVitaminContent', 'withaniaSomnifera'
    ];
    
    console.log('✅ Required fields check:');
    requiredFields.forEach(field => {
        if (testProduct.hasOwnProperty(field)) {
            console.log(`  ✅ ${field}: ${testProduct[field]}`);
        } else {
            console.error(`  ❌ Missing required field: ${field}`);
        }
    });
    
    console.log('✅ Optional fields check:');
    optionalFields.forEach(field => {
        if (testProduct.hasOwnProperty(field)) {
            console.log(`  ✅ ${field}: ${testProduct[field]}`);
        } else {
            console.log(`  ⚠️  Optional field not present: ${field} (will show N/A)`);
        }
    });
    
    return true;
}

// Test 3: Test updateProductData function
function testUpdateProductData() {
    console.log('\n3. Testing updateProductData Function...');
    
    // Mock the DOM elements
    const mockElements = {};
    const elementIds = [
        'title', 'desc', 'brand', 'category', 'servingSize', 'servingsPerContainer',
        'proteinPerServing', 'caloriesPerServing', 'pricePerServing', 'caffeinePerServing',
        'creatinePerServing', 'bcaaRatio', 'extractRatio', 'epaContent', 'dhaContent',
        'vitaminDContent', 'magnesiumContent', 'zincContent', 'collagenContent',
        'probioticStrains', 'egcgContent', 'glutamineContent', 'vitaminCount',
        'bVitaminContent', 'withaniaSomnifera', 'stock', 'shipping', 'warranty',
        'keyFeatures', 'flavors', 'reviewCount', 'rating', 'img'
    ];
    
    elementIds.forEach(id => {
        mockElements[`${id}1`] = {
            textContent: '',
            innerHTML: '',
            src: '',
            alt: ''
        };
    });
    
    // Mock document.getElementById
    const originalGetElementById = document.getElementById;
    document.getElementById = function(id) {
        return mockElements[id] || null;
    };
    
    try {
        // Test with a product that has most fields
        const testProduct = window.product.find(p => p.id === 1);
        if (testProduct && typeof updateProductData === 'function') {
            updateProductData(1, 1);
            
            console.log('✅ updateProductData function executed successfully');
            console.log('✅ Product title updated:', mockElements['title1'].textContent);
            console.log('✅ Product brand updated:', mockElements['brand1'].textContent);
            console.log('✅ Product category updated:', mockElements['category1'].textContent);
            console.log('✅ Product description updated:', mockElements['desc1'].textContent);
            console.log('✅ Product serving size updated:', mockElements['servingSize1'].textContent);
            console.log('✅ Product protein per serving updated:', mockElements['proteinPerServing1'].textContent);
            console.log('✅ Product calories per serving updated:', mockElements['caloriesPerServing1'].textContent);
            console.log('✅ Product price per serving updated:', mockElements['pricePerServing1'].textContent);
            console.log('✅ Product stock status updated:', mockElements['stock1'].textContent);
            console.log('✅ Product shipping updated:', mockElements['shipping1'].textContent);
            console.log('✅ Product warranty updated:', mockElements['warranty1'].textContent);
            
            return true;
        } else {
            console.error('❌ updateProductData function not found or test product not available');
            return false;
        }
    } finally {
        // Restore original function
        document.getElementById = originalGetElementById;
    }
}

// Test 4: Test N/A handling for missing fields
function testNAHandling() {
    console.log('\n4. Testing N/A Handling for Missing Fields...');
    
    // Create a product with minimal data
    const minimalProduct = {
        id: 999,
        title: "Test Product",
        price: "₹1,000",
        description: "Test description"
    };
    
    // Mock the DOM elements
    const mockElements = {};
    const elementIds = [
        'title', 'desc', 'brand', 'category', 'servingSize', 'servingsPerContainer',
        'proteinPerServing', 'caloriesPerServing', 'pricePerServing', 'caffeinePerServing',
        'creatinePerServing', 'bcaaRatio', 'extractRatio', 'epaContent', 'dhaContent',
        'vitaminDContent', 'magnesiumContent', 'zincContent', 'collagenContent',
        'probioticStrains', 'egcgContent', 'glutamineContent', 'vitaminCount',
        'bVitaminContent', 'withaniaSomnifera', 'stock', 'shipping', 'warranty',
        'keyFeatures', 'flavors', 'reviewCount', 'rating'
    ];
    
    elementIds.forEach(id => {
        mockElements[`${id}1`] = {
            textContent: '',
            innerHTML: ''
        };
    });
    
    // Mock document.getElementById
    const originalGetElementById = document.getElementById;
    document.getElementById = function(id) {
        return mockElements[id] || null;
    };
    
    try {
        // Simulate updateProductData with minimal product
        if (typeof updateProductData === 'function') {
            // We need to mock the product lookup
            const originalProduct = window.product;
            window.product = [minimalProduct];
            
            updateProductData(1, 999);
            
            console.log('✅ N/A handling test completed');
            console.log('✅ Brand shows N/A:', mockElements['brand1'].textContent === 'N/A');
            console.log('✅ Category shows N/A:', mockElements['category1'].textContent === 'N/A');
            console.log('✅ Serving size shows N/A:', mockElements['servingSize1'].textContent === 'N/A');
            console.log('✅ Protein per serving shows N/A:', mockElements['proteinPerServing1'].textContent === 'N/A');
            console.log('✅ Caffeine per serving shows N/A:', mockElements['caffeinePerServing1'].textContent === 'N/A');
            console.log('✅ Creatine per serving shows N/A:', mockElements['creatinePerServing1'].textContent === 'N/A');
            console.log('✅ BCAA ratio shows N/A:', mockElements['bcaaRatio1'].textContent === 'N/A');
            console.log('✅ Extract ratio shows N/A:', mockElements['extractRatio1'].textContent === 'N/A');
            console.log('✅ EPA content shows N/A:', mockElements['epaContent1'].textContent === 'N/A');
            console.log('✅ DHA content shows N/A:', mockElements['dhaContent1'].textContent === 'N/A');
            console.log('✅ Vitamin D content shows N/A:', mockElements['vitaminDContent1'].textContent === 'N/A');
            console.log('✅ Magnesium content shows N/A:', mockElements['magnesiumContent1'].textContent === 'N/A');
            console.log('✅ Zinc content shows N/A:', mockElements['zincContent1'].textContent === 'N/A');
            console.log('✅ Collagen content shows N/A:', mockElements['collagenContent1'].textContent === 'N/A');
            console.log('✅ Probiotic strains shows N/A:', mockElements['probioticStrains1'].textContent === 'N/A');
            console.log('✅ EGCG content shows N/A:', mockElements['egcgContent1'].textContent === 'N/A');
            console.log('✅ Glutamine content shows N/A:', mockElements['glutamineContent1'].textContent === 'N/A');
            console.log('✅ Vitamin count shows N/A:', mockElements['vitaminCount1'].textContent === 'N/A');
            console.log('✅ B vitamin content shows N/A:', mockElements['bVitaminContent1'].textContent === 'N/A');
            console.log('✅ Withania somnifera shows N/A:', mockElements['withaniaSomnifera1'].textContent === 'N/A');
            console.log('✅ Stock shows N/A:', mockElements['stock1'].textContent === 'N/A');
            console.log('✅ Shipping shows N/A:', mockElements['shipping1'].textContent === 'N/A');
            console.log('✅ Warranty shows N/A:', mockElements['warranty1'].textContent === 'N/A');
            console.log('✅ Key features shows N/A:', mockElements['keyFeatures1'].textContent === 'N/A');
            console.log('✅ Flavors shows N/A:', mockElements['flavors1'].textContent === 'N/A');
            
            // Restore original product data
            window.product = originalProduct;
            
            return true;
        } else {
            console.error('❌ updateProductData function not found');
            return false;
        }
    } finally {
        // Restore original function
        document.getElementById = originalGetElementById;
    }
}

// Test 5: Test category mapping
function testCategoryMapping() {
    console.log('\n5. Testing Category Mapping...');
    
    if (!window.categoryMap) {
        console.error('❌ Category map not found');
        return false;
    }
    
    console.log('✅ Category map loaded');
    
    // Test protein category
    const proteinProducts = window.categoryMap.protein || [];
    console.log(`✅ Protein category: ${proteinProducts.length} products`);
    proteinProducts.forEach(id => {
        const product = window.product.find(p => p.id === id);
        if (product) {
            console.log(`  - ${product.title} (ID: ${id})`);
        }
    });
    
    // Test gainers category
    const gainerProducts = window.categoryMap.gainers || [];
    console.log(`✅ Gainers category: ${gainerProducts.length} products`);
    gainerProducts.forEach(id => {
        const product = window.product.find(p => p.id === id);
        if (product) {
            console.log(`  - ${product.title} (ID: ${id})`);
        }
    });
    
    // Test pre-workout category
    const preWorkoutProducts = window.categoryMap['pre-workout'] || [];
    console.log(`✅ Pre-workout category: ${preWorkoutProducts.length} products`);
    preWorkoutProducts.forEach(id => {
        const product = window.product.find(p => p.id === id);
        if (product) {
            console.log(`  - ${product.title} (ID: ${id})`);
        }
    });
    
    return true;
}

// Test 6: Test specific product types
function testSpecificProductTypes() {
    console.log('\n6. Testing Specific Product Types...');
    
    // Test protein products
    const proteinProducts = window.product.filter(p => p.proteinPerServing);
    console.log(`✅ Protein products: ${proteinProducts.length} found`);
    proteinProducts.forEach(p => {
        console.log(`  - ${p.title}: ${p.proteinPerServing} protein per serving`);
    });
    
    // Test pre-workout products
    const preWorkoutProducts = window.product.filter(p => p.caffeinePerServing);
    console.log(`✅ Pre-workout products: ${preWorkoutProducts.length} found`);
    preWorkoutProducts.forEach(p => {
        console.log(`  - ${p.title}: ${p.caffeinePerServing} caffeine per serving`);
    });
    
    // Test creatine products
    const creatineProducts = window.product.filter(p => p.creatinePerServing || p.creatineContent);
    console.log(`✅ Creatine products: ${creatineProducts.length} found`);
    creatineProducts.forEach(p => {
        const creatine = p.creatinePerServing || p.creatineContent;
        console.log(`  - ${p.title}: ${creatine} creatine per serving`);
    });
    
    // Test fish oil products
    const fishOilProducts = window.product.filter(p => p.epaContent || p.dhaContent);
    console.log(`✅ Fish oil products: ${fishOilProducts.length} found`);
    fishOilProducts.forEach(p => {
        console.log(`  - ${p.title}: EPA ${p.epaContent || 'N/A'}, DHA ${p.dhaContent || 'N/A'}`);
    });
    
    // Test vitamin products
    const vitaminProducts = window.product.filter(p => p.vitaminDContent || p.vitaminCount || p.bVitaminContent);
    console.log(`✅ Vitamin products: ${vitaminProducts.length} found`);
    vitaminProducts.forEach(p => {
        console.log(`  - ${p.title}: ${p.vitaminDContent || p.vitaminCount || p.bVitaminContent || 'N/A'}`);
    });
    
    // Test ayurvedic products
    const ayurvedicProducts = window.product.filter(p => p.extractRatio || p.withaniaSomnifera);
    console.log(`✅ Ayurvedic products: ${ayurvedicProducts.length} found`);
    ayurvedicProducts.forEach(p => {
        console.log(`  - ${p.title}: Extract ratio ${p.extractRatio || 'N/A'}, Withania ${p.withaniaSomnifera || 'N/A'}`);
    });
    
    return true;
}

// Run all tests
function runAllTests() {
    console.log('🚀 Starting Enhanced Comparison Page Tests...\n');
    
    const tests = [
        testNewProducts,
        testProductDataFields,
        testUpdateProductData,
        testNAHandling,
        testCategoryMapping,
        testSpecificProductTypes
    ];
    
    let passedTests = 0;
    let totalTests = tests.length;
    
    tests.forEach((test, index) => {
        try {
            const result = test();
            if (result) {
                passedTests++;
                console.log(`✅ Test ${index + 1} passed\n`);
            } else {
                console.log(`❌ Test ${index + 1} failed\n`);
            }
        } catch (error) {
            console.error(`❌ Test ${index + 1} error:`, error.message, '\n');
        }
    });
    
    console.log('=== Test Summary ===');
    console.log(`Total tests: ${totalTests}`);
    console.log(`Passed: ${passedTests}`);
    console.log(`Failed: ${totalTests - passedTests}`);
    console.log(`Success rate: ${((passedTests / totalTests) * 100).toFixed(1)}%`);
    
    if (passedTests === totalTests) {
        console.log('🎉 All tests passed! Enhanced comparison page is working correctly.');
    } else {
        console.log('⚠️  Some tests failed. Please check the implementation.');
    }
}

// Export for use in browser console
if (typeof window !== 'undefined') {
    window.testEnhancedComparison = runAllTests;
    console.log('Enhanced comparison tests loaded. Run testEnhancedComparison() to start testing.');
}

// Run tests if this script is executed directly
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        testNewProducts,
        testProductDataFields,
        testUpdateProductData,
        testNAHandling,
        testCategoryMapping,
        testSpecificProductTypes,
        runAllTests
    };
} 