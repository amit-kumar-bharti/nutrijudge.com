// Comprehensive Product Database for NUTRIJUDGE
// This file contains unified product data used across all pages

var product = [
    {
        "id": 1,
        "title": "Whey Protein Isolate",
        "price": "₹3,499",
        "originalPrice": "₹4,299",
        "discount": "19%",
        "description": "Premium whey protein isolate with 90% protein content. Low in carbs and fat, perfect for muscle building and recovery.",
        "brand": "MuscleMax Pro",
        "category": "protein",
        "rating": 4.8,
        "reviewCount": 1247,
        "servingSize": "30g",
        "servingsPerContainer": 30,
        "pricePerServing": "₹117",
        "proteinPerServing": "27g",
        "caloriesPerServing": 120,
        "flavors": ["Chocolate", "Vanilla", "Strawberry", "Cookies & Cream"],
        "keyFeatures": [
            "90% protein content",
            "Low lactose",
            "Fast absorption",
            "BCAAs included",
            "No artificial sweeteners"
        ],
        "reviews": [
            {
                "user": "FitnessFreak23",
                "rating": 5,
                "date": "2024-12-15",
                "title": "Best protein I've tried!",
                "content": "Amazing taste and mixes perfectly. No bloating and great results in just 2 weeks.",
                "helpful": 89
            },
            {
                "user": "GymRat2024",
                "rating": 4,
                "date": "2024-12-10",
                "title": "Good quality protein",
                "content": "Good taste and texture. Price is a bit high but quality justifies it.",
                "helpful": 45
            }
        ],
        "image": "src/IMG-20250706-WA0021.jpg",
        "stock": "In Stock",
        "shipping": "Free",
        "warranty": "30 days"
    },
    {
        "id": 2,
        "title": "Mass Gainer Pro",
        "price": "₹2,999",
        "originalPrice": "₹3,599",
        "discount": "17%",
        "description": "High-calorie mass gainer with complex carbs and quality protein. Perfect for hard gainers and bulking phase.",
        "brand": "BulkSupplements",
        "category": "gainers",
        "rating": 4.6,
        "reviewCount": 892,
        "servingSize": "150g",
        "servingsPerContainer": 20,
        "pricePerServing": "₹150",
        "proteinPerServing": "50g",
        "caloriesPerServing": 650,
        "flavors": ["Chocolate", "Vanilla", "Banana"],
        "keyFeatures": [
            "50g protein per serving",
            "650 calories",
            "Complex carbohydrates",
            "Creatine included",
            "Easy to digest"
        ],
        "reviews": [
            {
                "user": "HardGainer99",
                "rating": 5,
                "date": "2024-12-12",
                "title": "Finally gaining weight!",
                "content": "After trying many gainers, this one actually works. Gained 5kg in 2 months.",
                "helpful": 156
            },
            {
                "user": "FitnessNewbie",
                "rating": 4,
                "date": "2024-12-08",
                "title": "Good for beginners",
                "content": "Easy to mix and tastes decent. Good value for money.",
                "helpful": 67
            }
        ],
        "image": "src/IMG-20250706-WA0020.jpg",
        "stock": "In Stock",
        "shipping": "Free",
        "warranty": "30 days"
    },
    {
        "id": 3,
        "title": "Pre-Workout Explosion",
        "price": "₹1,899",
        "originalPrice": "₹2,299",
        "discount": "17%",
        "description": "Advanced pre-workout formula with caffeine, creatine, and beta-alanine. Maximize your workout performance.",
        "brand": "PowerFuel",
        "category": "pre-workout",
        "rating": 4.7,
        "reviewCount": 1103,
        "servingSize": "15g",
        "servingsPerContainer": 30,
        "pricePerServing": "₹63",
        "caffeinePerServing": "300mg",
        "creatinePerServing": "5g",
        "flavors": ["Fruit Punch", "Blue Raspberry", "Watermelon"],
        "keyFeatures": [
            "300mg caffeine",
            "5g creatine",
            "Beta-alanine",
            "L-citrulline",
            "No crash"
        ],
        "reviews": [
            {
                "user": "GymBeast2024",
                "rating": 5,
                "date": "2024-12-14",
                "title": "Incredible energy boost!",
                "content": "Amazing pump and energy. No jitters and great focus during workouts.",
                "helpful": 234
            },
            {
                "user": "WorkoutWarrior",
                "rating": 4,
                "date": "2024-12-11",
                "title": "Solid pre-workout",
                "content": "Good energy boost and pump. Taste is decent but could be better.",
                "helpful": 89
            }
        ],
        "image": "src/IMG-20250706-WA0019.jpg",
        "stock": "In Stock",
        "shipping": "Free",
        "warranty": "30 days"
    },
    {
        "id": 4,
        "title": "BCAA Recovery",
        "price": "₹1,599",
        "originalPrice": "₹1,899",
        "discount": "16%",
        "description": "Essential amino acids for muscle recovery and growth. Perfect for post-workout and during fasting.",
        "brand": "RecoveryPlus",
        "category": "post-workout",
        "rating": 4.5,
        "reviewCount": 756,
        "servingSize": "10g",
        "servingsPerContainer": 30,
        "pricePerServing": "₹53",
        "bcaaRatio": "2:1:1",
        "caloriesPerServing": 40,
        "flavors": ["Lemon Lime", "Orange Mango", "Cherry"],
        "keyFeatures": [
            "2:1:1 BCAA ratio",
            "Zero calories",
            "Instant recovery",
            "No artificial colors",
            "Vegan friendly"
        ],
        "reviews": [
            {
                "user": "RecoveryKing",
                "rating": 5,
                "date": "2024-12-13",
                "title": "Great for recovery!",
                "content": "Helps with muscle soreness and recovery. Taste is amazing too!",
                "helpful": 123
            },
            {
                "user": "FitnessFanatic",
                "rating": 4,
                "date": "2024-12-09",
                "title": "Good BCAA supplement",
                "content": "Effective for recovery and tastes good. Price is reasonable.",
                "helpful": 67
            }
        ],
        "image": "src/IMG-20250706-WA0018.jpg",
        "stock": "In Stock",
        "shipping": "Free",
        "warranty": "30 days"
    },
    {
        "id": 5,
        "title": "Ashwagandha KSM-66",
        "price": "₹1,299",
        "originalPrice": "₹1,599",
        "discount": "19%",
        "description": "Premium ashwagandha extract for stress relief and energy. Supports cortisol balance and natural vitality.",
        "brand": "AyurVeda Pro",
        "category": "ayurveda",
        "rating": 4.8,
        "reviewCount": 943,
        "servingSize": "600mg",
        "servingsPerContainer": 60,
        "pricePerServing": "₹22",
        "extractRatio": "5:1",
        "withaniaSomnifera": "600mg",
        "keyFeatures": [
            "KSM-66 extract",
            "5:1 concentration",
            "Stress relief",
            "Energy support",
            "Natural adaptogen"
        ],
        "reviews": [
            {
                "user": "StressFree2024",
                "rating": 5,
                "date": "2024-12-16",
                "title": "Amazing stress relief!",
                "content": "Helps me stay calm and focused throughout the day. Natural and effective.",
                "helpful": 178
            },
            {
                "user": "WellnessSeeker",
                "rating": 4,
                "date": "2024-12-12",
                "title": "Good quality ashwagandha",
                "content": "Noticeable improvement in stress levels and sleep quality.",
                "helpful": 92
            }
        ],
        "image": "src/IMG-20250706-WA0017.jpg",
        "stock": "In Stock",
        "shipping": "Free",
        "warranty": "30 days"
    },
    {
        "id": 6,
        "title": "Creatine Monohydrate",
        "price": "₹1,799",
        "originalPrice": "₹2,199",
        "discount": "18%",
        "description": "Pure creatine monohydrate for increased strength and power. The most researched and effective form of creatine.",
        "brand": "PowerFuel",
        "category": "pre-workout",
        "rating": 4.7,
        "reviewCount": 890,
        "servingSize": "5g",
        "servingsPerContainer": 60,
        "pricePerServing": "₹30",
        "creatineContent": "5g",
        "caloriesPerServing": 20,
        "flavors": ["Unflavored"],
        "keyFeatures": [
            "Pure creatine monohydrate",
            "5g per serving",
            "No fillers",
            "Scientifically proven",
            "Mix with any beverage"
        ],
        "reviews": [
            {
                "user": "StrengthBuilder",
                "rating": 5,
                "date": "2024-12-14",
                "title": "Incredible strength gains!",
                "content": "Noticeable increase in strength and power within 2 weeks. Best creatine I've used.",
                "helpful": 145
            },
            {
                "user": "GymEnthusiast",
                "rating": 4,
                "date": "2024-12-10",
                "title": "Solid creatine supplement",
                "content": "Good quality and effective. Mixes well and no side effects.",
                "helpful": 78
            }
        ],
        "image": "src/IMG-20250706-WA0016.jpg",
        "stock": "In Stock",
        "shipping": "Free",
        "warranty": "30 days"
    },
    {
        "id": 7,
        "title": "Omega-3 Fish Oil",
        "price": "₹2,099",
        "originalPrice": "₹2,599",
        "discount": "19%",
        "description": "High-potency fish oil with EPA and DHA for heart and brain health. Supports cognitive function and joint health.",
        "brand": "PureHealth",
        "category": "supplement",
        "rating": 4.7,
        "reviewCount": 750,
        "servingSize": "2 capsules",
        "servingsPerContainer": 45,
        "pricePerServing": "₹47",
        "epaContent": "360mg",
        "dhaContent": "240mg",
        "caloriesPerServing": 20,
        "flavors": ["Unflavored"],
        "keyFeatures": [
            "High EPA/DHA content",
            "No fishy aftertaste",
            "Mercury tested",
            "Heart health support",
            "Brain function support"
        ],
        "reviews": [
            {
                "user": "HealthConscious",
                "rating": 5,
                "date": "2024-12-15",
                "title": "Excellent quality fish oil!",
                "content": "No fishy taste and great for heart health. Noticeable improvement in joint health.",
                "helpful": 112
            },
            {
                "user": "WellnessAdvocate",
                "rating": 4,
                "date": "2024-12-11",
                "title": "Good omega-3 supplement",
                "content": "High quality and effective. Good value for money.",
                "helpful": 65
            }
        ],
        "image": "src/IMG-20250706-WA0015.jpg",
        "stock": "In Stock",
        "shipping": "Free",
        "warranty": "30 days"
    },
    {
        "id": 8,
        "title": "Vitamin D3",
        "price": "₹1,599",
        "originalPrice": "₹1,899",
        "discount": "16%",
        "description": "High-potency vitamin D3 for immune support and bone health. Essential for overall wellness and vitality.",
        "brand": "SunVit",
        "category": "supplement",
        "rating": 4.3,
        "reviewCount": 420,
        "servingSize": "1 tablet",
        "servingsPerContainer": 90,
        "pricePerServing": "₹18",
        "vitaminDContent": "2000 IU",
        "caloriesPerServing": 5,
        "flavors": ["Unflavored"],
        "keyFeatures": [
            "2000 IU per serving",
            "Immune support",
            "Bone health",
            "High potency",
            "Daily essential"
        ],
        "reviews": [
            {
                "user": "ImmunityFocused",
                "rating": 4,
                "date": "2024-12-13",
                "title": "Great for immunity!",
                "content": "Helps with immune support and energy levels. Good quality supplement.",
                "helpful": 89
            },
            {
                "user": "HealthSeeker",
                "rating": 4,
                "date": "2024-12-09",
                "title": "Effective vitamin D",
                "content": "Noticeable improvement in energy and mood. Good value.",
                "helpful": 56
            }
        ],
        "image": "src/IMG-20250706-WA0014.jpg",
        "stock": "In Stock",
        "shipping": "Free",
        "warranty": "30 days"
    },
    {
        "id": 9,
        "title": "Magnesium Complex",
        "price": "₹2,299",
        "originalPrice": "₹2,699",
        "discount": "15%",
        "description": "Complete magnesium blend for muscle and nerve function. Supports sleep, stress relief, and muscle recovery.",
        "brand": "MineralMax",
        "category": "supplement",
        "rating": 4.2,
        "reviewCount": 380,
        "servingSize": "2 tablets",
        "servingsPerContainer": 45,
        "pricePerServing": "₹51",
        "magnesiumContent": "400mg",
        "caloriesPerServing": 10,
        "flavors": ["Unflavored"],
        "keyFeatures": [
            "400mg magnesium",
            "Muscle function",
            "Nerve health",
            "Sleep support",
            "Stress relief"
        ],
        "reviews": [
            {
                "user": "SleepBetter",
                "rating": 4,
                "date": "2024-12-12",
                "title": "Great for sleep!",
                "content": "Helps with sleep quality and muscle relaxation. Good for recovery.",
                "helpful": 67
            },
            {
                "user": "StressRelief",
                "rating": 4,
                "date": "2024-12-08",
                "title": "Good stress relief",
                "content": "Helps with stress and muscle tension. Effective supplement.",
                "helpful": 45
            }
        ],
        "image": "src/IMG-20250706-WA0012.jpg",
        "stock": "In Stock",
        "shipping": "Free",
        "warranty": "30 days"
    },
    {
        "id": 10,
        "title": "B-Complex Vitamins",
        "price": "₹1,899",
        "originalPrice": "₹2,199",
        "discount": "14%",
        "description": "Complete B-vitamin complex for energy and metabolism. Supports nerve function and cellular energy production.",
        "brand": "VitaLife",
        "category": "supplement",
        "rating": 4.1,
        "reviewCount": 320,
        "servingSize": "1 tablet",
        "servingsPerContainer": 60,
        "pricePerServing": "₹32",
        "bVitaminContent": "Complete B-Complex",
        "caloriesPerServing": 5,
        "flavors": ["Unflavored"],
        "keyFeatures": [
            "Complete B-complex",
            "Energy support",
            "Metabolism boost",
            "Nerve function",
            "Cellular energy"
        ],
        "reviews": [
            {
                "user": "EnergyBoost",
                "rating": 4,
                "date": "2024-12-11",
                "title": "Great energy boost!",
                "content": "Noticeable improvement in energy levels and metabolism. Good quality.",
                "helpful": 78
            },
            {
                "user": "VitalitySeeker",
                "rating": 4,
                "date": "2024-12-07",
                "title": "Effective B-complex",
                "content": "Helps with energy and overall vitality. Good value for money.",
                "helpful": 52
            }
        ],
        "image": "src/IMG-20250706-WA0021.jpg",
        "stock": "In Stock",
        "shipping": "Free",
        "warranty": "30 days"
    },
    {
        "id": 11,
        "title": "Zinc Supplement",
        "price": "₹1,299",
        "originalPrice": "₹1,599",
        "discount": "19%",
        "description": "Essential zinc for immune support and wound healing. Supports skin health and antioxidant function.",
        "brand": "MineralMax",
        "category": "supplement",
        "rating": 4.0,
        "reviewCount": 280,
        "servingSize": "1 tablet",
        "servingsPerContainer": 60,
        "pricePerServing": "₹22",
        "zincContent": "15mg",
        "caloriesPerServing": 5,
        "flavors": ["Unflavored"],
        "keyFeatures": [
            "15mg zinc",
            "Immune support",
            "Wound healing",
            "Skin health",
            "Antioxidant"
        ],
        "reviews": [
            {
                "user": "ImmunityFocused",
                "rating": 4,
                "date": "2024-12-10",
                "title": "Good for immunity",
                "content": "Helps with immune support and skin health. Effective supplement.",
                "helpful": 45
            },
            {
                "user": "HealthConscious",
                "rating": 4,
                "date": "2024-12-06",
                "title": "Quality zinc supplement",
                "content": "Good quality and effective for immune support.",
                "helpful": 38
            }
        ],
        "image": "src/IMG-20250706-WA0020.jpg",
        "stock": "In Stock",
        "shipping": "Free",
        "warranty": "30 days"
    },
    {
        "id": 12,
        "title": "Collagen Peptides",
        "price": "₹3,299",
        "originalPrice": "₹3,899",
        "discount": "15%",
        "description": "Hydrolyzed collagen peptides for skin, hair, and joint health. Supports anti-aging and tissue repair.",
        "brand": "BeautySupp",
        "category": "gainers",
        "rating": 4.5,
        "reviewCount": 680,
        "servingSize": "10g",
        "servingsPerContainer": 30,
        "pricePerServing": "₹110",
        "collagenContent": "10g",
        "caloriesPerServing": 40,
        "flavors": ["Unflavored", "Vanilla"],
        "keyFeatures": [
            "10g collagen peptides",
            "Skin health",
            "Hair growth",
            "Joint support",
            "Anti-aging"
        ],
        "reviews": [
            {
                "user": "BeautySeeker",
                "rating": 5,
                "date": "2024-12-14",
                "title": "Amazing for skin!",
                "content": "Noticeable improvement in skin texture and hair quality. Great anti-aging supplement.",
                "helpful": 134
            },
            {
                "user": "WellnessAdvocate",
                "rating": 4,
                "date": "2024-12-10",
                "title": "Good collagen supplement",
                "content": "Helps with skin and joint health. Good quality product.",
                "helpful": 89
            }
        ],
        "image": "src/IMG-20250706-WA0019.jpg",
        "stock": "In Stock",
        "shipping": "Free",
        "warranty": "30 days"
    },
    {
        "id": 13,
        "title": "Probiotic Blend",
        "price": "₹2,699",
        "originalPrice": "₹3,199",
        "discount": "16%",
        "description": "Advanced probiotic blend for digestive health and gut flora balance. Supports immune system and digestion.",
        "brand": "GutHealth",
        "category": "supplement",
        "rating": 4.4,
        "reviewCount": 520,
        "servingSize": "1 capsule",
        "servingsPerContainer": 30,
        "pricePerServing": "₹90",
        "probioticStrains": "10 strains",
        "caloriesPerServing": 5,
        "flavors": ["Unflavored"],
        "keyFeatures": [
            "10 probiotic strains",
            "Digestive health",
            "Gut flora balance",
            "Immune support",
            "Digestion aid"
        ],
        "reviews": [
            {
                "user": "DigestiveHealth",
                "rating": 4,
                "date": "2024-12-13",
                "title": "Great for digestion!",
                "content": "Helps with digestive issues and gut health. Noticeable improvement in digestion.",
                "helpful": 98
            },
            {
                "user": "GutHealthAdvocate",
                "rating": 4,
                "date": "2024-12-09",
                "title": "Effective probiotic",
                "content": "Good quality probiotic blend. Helps with gut health and immunity.",
                "helpful": 67
            }
        ],
        "image": "src/IMG-20250706-WA0018.jpg",
        "stock": "In Stock",
        "shipping": "Free",
        "warranty": "30 days"
    },
    {
        "id": 14,
        "title": "Green Tea Extract",
        "price": "₹1,499",
        "originalPrice": "₹1,799",
        "discount": "17%",
        "description": "High-potency green tea extract for metabolism and fat burning. Rich in antioxidants and natural energy.",
        "brand": "PureHealth",
        "category": "fat-loss",
        "rating": 4.3,
        "reviewCount": 450,
        "servingSize": "1 capsule",
        "servingsPerContainer": 60,
        "pricePerServing": "₹25",
        "egcgContent": "200mg",
        "caloriesPerServing": 5,
        "flavors": ["Unflavored"],
        "keyFeatures": [
            "200mg EGCG",
            "Metabolism boost",
            "Fat burning",
            "Antioxidant rich",
            "Natural energy"
        ],
        "reviews": [
            {
                "user": "FatLossJourney",
                "rating": 4,
                "date": "2024-12-12",
                "title": "Good for metabolism",
                "content": "Helps with metabolism and energy levels. Good for weight management.",
                "helpful": 76
            },
            {
                "user": "HealthOptimizer",
                "rating": 4,
                "date": "2024-12-08",
                "title": "Effective green tea extract",
                "content": "Good quality and effective for metabolism support.",
                "helpful": 54
            }
        ],
        "image": "src/IMG-20250706-WA0017.jpg",
        "stock": "In Stock",
        "shipping": "Free",
        "warranty": "30 days"
    },
    {
        "id": 15,
        "title": "L-Glutamine",
        "price": "₹1,899",
        "originalPrice": "₹2,299",
        "discount": "17%",
        "description": "Pure L-glutamine for muscle recovery and immune support. Essential amino acid for post-workout recovery.",
        "brand": "RecoveryPlus",
        "category": "post-workout",
        "rating": 4.6,
        "reviewCount": 380,
        "servingSize": "5g",
        "servingsPerContainer": 50,
        "pricePerServing": "₹38",
        "glutamineContent": "5g",
        "caloriesPerServing": 20,
        "flavors": ["Unflavored"],
        "keyFeatures": [
            "5g L-glutamine",
            "Muscle recovery",
            "Immune support",
            "Gut health",
            "Post-workout"
        ],
        "reviews": [
            {
                "user": "RecoveryFocused",
                "rating": 5,
                "date": "2024-12-11",
                "title": "Excellent for recovery!",
                "content": "Great for muscle recovery and immune support. Noticeable difference in recovery time.",
                "helpful": 89
            },
            {
                "user": "GymEnthusiast",
                "rating": 4,
                "date": "2024-12-07",
                "title": "Good recovery supplement",
                "content": "Helps with muscle recovery and immune function. Good quality product.",
                "helpful": 67
            }
        ],
        "image": "src/IMG-20250706-WA0015.jpg",
        "stock": "In Stock",
        "shipping": "Free",
        "warranty": "30 days"
    },
    {
        "id": 16,
        "title": "Multivitamin Complete",
        "price": "₹2,499",
        "originalPrice": "₹2,999",
        "discount": "17%",
        "description": "Complete multivitamin with minerals for overall health and wellness. Supports daily nutritional needs.",
        "brand": "VitaLife",
        "category": "supplement",
        "rating": 4.4,
        "reviewCount": 620,
        "servingSize": "2 tablets",
        "servingsPerContainer": 30,
        "pricePerServing": "₹83",
        "vitaminCount": "25+ vitamins",
        "caloriesPerServing": 10,
        "flavors": ["Unflavored"],
        "keyFeatures": [
            "25+ vitamins & minerals",
            "Daily nutrition",
            "Immune support",
            "Energy support",
            "Complete formula"
        ],
        "reviews": [
            {
                "user": "HealthOptimizer",
                "rating": 4,
                "date": "2024-12-10",
                "title": "Complete nutrition",
                "content": "Great comprehensive multivitamin. Covers all daily nutritional needs.",
                "helpful": 112
            },
            {
                "user": "WellnessSeeker",
                "rating": 4,
                "date": "2024-12-06",
                "title": "Good multivitamin",
                "content": "Complete formula with good quality ingredients. Effective daily supplement.",
                "helpful": 78
            }
        ],
        "image": "src/IMG-20250706-WA0014.jpg",
        "stock": "In Stock",
        "shipping": "Free",
        "warranty": "30 days"
    },
    {
        "id": 17,
        "title": "Whey Protein Concentrate",
        "price": "₹2,899",
        "originalPrice": "₹3,499",
        "discount": "17%",
        "description": "High-quality whey protein concentrate with 80% protein content. Perfect for muscle building and recovery.",
        "brand": "MuscleMax Pro",
        "category": "protein",
        "rating": 4.6,
        "reviewCount": 890,
        "servingSize": "30g",
        "servingsPerContainer": 30,
        "pricePerServing": "₹97",
        "proteinPerServing": "24g",
        "caloriesPerServing": 130,
        "flavors": ["Chocolate", "Vanilla", "Strawberry", "Banana"],
        "keyFeatures": [
            "80% protein content",
            "Fast absorption",
            "BCAAs included",
            "Great taste",
            "Value for money"
        ],
        "reviews": [
            {
                "user": "ProteinLover",
                "rating": 5,
                "date": "2024-12-15",
                "title": "Excellent protein!",
                "content": "Great taste and mixes well. Good value for money compared to isolate.",
                "helpful": 156
            },
            {
                "user": "FitnessEnthusiast",
                "rating": 4,
                "date": "2024-12-12",
                "title": "Good quality protein",
                "content": "Effective for muscle building and recovery. Taste is decent.",
                "helpful": 89
            }
        ],
        "image": "src/IMG-20250706-WA0021.jpg",
        "stock": "In Stock",
        "shipping": "Free",
        "warranty": "30 days"
    },
    {
        "id": 18,
        "title": "Casein Protein",
        "price": "₹3,199",
        "originalPrice": "₹3,799",
        "discount": "16%",
        "description": "Slow-release casein protein for overnight muscle recovery. Perfect for bedtime consumption.",
        "brand": "MuscleMax Pro",
        "category": "protein",
        "rating": 4.5,
        "reviewCount": 670,
        "servingSize": "30g",
        "servingsPerContainer": 30,
        "pricePerServing": "₹107",
        "proteinPerServing": "25g",
        "caloriesPerServing": 120,
        "flavors": ["Chocolate", "Vanilla", "Cookies & Cream"],
        "keyFeatures": [
            "Slow-release protein",
            "Overnight recovery",
            "Anti-catabolic",
            "Smooth texture",
            "Bedtime formula"
        ],
        "reviews": [
            {
                "user": "NightRecovery",
                "rating": 5,
                "date": "2024-12-14",
                "title": "Perfect for night!",
                "content": "Great for overnight recovery. Smooth texture and good taste.",
                "helpful": 134
            },
            {
                "user": "MuscleBuilder",
                "rating": 4,
                "date": "2024-12-10",
                "title": "Good casein protein",
                "content": "Effective for muscle recovery during sleep. Good quality product.",
                "helpful": 78
            }
        ],
        "image": "src/IMG-20250706-WA0020.jpg",
        "stock": "In Stock",
        "shipping": "Free",
        "warranty": "30 days"
    },
    {
        "id": 19,
        "title": "Weight Gainer Extreme",
        "price": "₹3,499",
        "originalPrice": "₹4,199",
        "discount": "17%",
        "description": "Ultra-high calorie weight gainer for extreme muscle building. Perfect for hard gainers and bulking.",
        "brand": "BulkSupplements",
        "category": "gainers",
        "rating": 4.7,
        "reviewCount": 450,
        "servingSize": "200g",
        "servingsPerContainer": 15,
        "pricePerServing": "₹233",
        "proteinPerServing": "60g",
        "caloriesPerServing": 800,
        "flavors": ["Chocolate", "Vanilla", "Strawberry"],
        "keyFeatures": [
            "800 calories per serving",
            "60g protein",
            "Complex carbs",
            "Creatine included",
            "Extreme bulking"
        ],
        "reviews": [
            {
                "user": "HardGainerPro",
                "rating": 5,
                "date": "2024-12-13",
                "title": "Extreme weight gain!",
                "content": "Gained 8kg in 3 months! Perfect for hard gainers like me.",
                "helpful": 234
            },
            {
                "user": "BulkMaster",
                "rating": 4,
                "date": "2024-12-09",
                "title": "Great for bulking",
                "content": "High calories and good protein content. Effective for muscle building.",
                "helpful": 156
            }
        ],
        "image": "src/IMG-20250706-WA0019.jpg",
        "stock": "In Stock",
        "shipping": "Free",
        "warranty": "30 days"
    },
    {
        "id": 20,
        "title": "Pre-Workout Elite",
        "price": "₹2,299",
        "originalPrice": "₹2,799",
        "discount": "18%",
        "description": "Elite pre-workout formula with advanced ingredients for maximum performance and pump.",
        "brand": "PowerFuel",
        "category": "pre-workout",
        "rating": 4.8,
        "reviewCount": 780,
        "servingSize": "15g",
        "servingsPerContainer": 30,
        "pricePerServing": "₹77",
        "caffeinePerServing": "350mg",
        "creatinePerServing": "5g",
        "flavors": ["Fruit Punch", "Blue Raspberry", "Watermelon", "Orange Mango"],
        "keyFeatures": [
            "350mg caffeine",
            "5g creatine",
            "Beta-alanine",
            "L-citrulline",
            "Nitric oxide boost"
        ],
        "reviews": [
            {
                "user": "EliteAthlete",
                "rating": 5,
                "date": "2024-12-16",
                "title": "Elite performance!",
                "content": "Incredible energy and pump. Best pre-workout I've ever used.",
                "helpful": 289
            },
            {
                "user": "PerformanceSeeker",
                "rating": 4,
                "date": "2024-12-12",
                "title": "Great performance boost",
                "content": "Amazing energy and focus. Great for intense workouts.",
                "helpful": 167
            }
        ],
        "image": "src/IMG-20250706-WA0018.jpg",
        "stock": "In Stock",
        "shipping": "Free",
        "warranty": "30 days"
    }
];

// Category mapping for easy filtering
var categoryMap = {
    'protein': [1, 17, 18],
    'gainers': [2, 12, 19],
    'pre-workout': [3, 6, 20],
    'post-workout': [4, 15],
    'ayurveda': [5],
    'supplement': [7, 8, 9, 10, 11, 13, 16],
    'fat-loss': [14],
    'accessories': []
};

// Utility functions for product data
var productUtils = {
    // Get product by ID
    getProductById: function(id) {
        return product.find(p => p.id === id);
    },
    
    // Get products by category
    getProductsByCategory: function(category) {
        return product.filter(p => p.category === category);
    },
    
    // Search products
    searchProducts: function(query) {
        const searchTerm = query.toLowerCase();
        return product.filter(p => 
            p.title.toLowerCase().includes(searchTerm) ||
            p.brand.toLowerCase().includes(searchTerm) ||
            p.description.toLowerCase().includes(searchTerm) ||
            p.category.toLowerCase().includes(searchTerm)
        );
    },
    
    // Get products by price range
    getProductsByPriceRange: function(minPrice, maxPrice) {
        return product.filter(p => {
            const price = parseFloat(p.price.replace(/[^0-9,]/g, '').replace(',', ''));
            return price >= minPrice && price <= maxPrice;
        });
    },
    
    // Get top rated products
    getTopRatedProducts: function(limit = 10) {
        return product
            .sort((a, b) => b.rating - a.rating)
            .slice(0, limit);
    },
    
    // Get products on sale
    getProductsOnSale: function() {
        return product.filter(p => p.discount && p.discount !== "0%");
    },
    
    // Get featured products
    getFeaturedProducts: function() {
        return product.filter(p => p.rating >= 4.5);
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { product, categoryMap, productUtils };
}