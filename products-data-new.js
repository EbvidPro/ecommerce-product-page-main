// Products data structure with 48 products using unique online image URLs
// Products are mixed throughout to show variety of men's, women's, and kids' shoes
const products = [
  // Product 1 - Men
  {
    id: 1,
    name: "Fall Limited Edition Sneakers",
    brand: "SNEAKER COMPANY",
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    price: 250.00,
    discount: 50,
    discountPrice: 125.00,
    category: "sneakers",
    gender: "men",
    sizes: ["7", "8", "9", "10", "11", "12"],
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=200",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200"
    ]
  },
  // Product 2 - Women
  {
    id: 2,
    name: "Women's Comfort Flats",
    brand: "GRACEFUL STEPS",
    description: "Elegant flat shoes perfect for everyday wear. Comfortable and stylish with a modern design.",
    price: 95.00,
    discount: 20,
    discountPrice: 76.00,
    category: "casual",
    gender: "women",
    sizes: ["5", "6", "7", "8", "9", "10"],
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800",
      "https://images.unsplash.com/photo-1544966503-7cc75cbd0367?w=800",
      "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=200",
      "https://images.unsplash.com/photo-1544966503-7cc75cbd0367?w=200",
      "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=200"
    ]
  },
  // Product 3 - Men
  {
    id: 3,
    name: "Classic Running Shoes",
    brand: "SPORT BRAND",
    description: "Comfortable and durable running shoes perfect for daily workouts and long-distance runs. Lightweight design with excellent cushioning.",
    price: 180.00,
    discount: 30,
    discountPrice: 126.00,
    category: "running",
    gender: "men",
    sizes: ["7", "8", "9", "10", "11", "12"],
    images: [
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=200",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=200"
    ]
  },
  // Product 4 - Kids
  {
    id: 4,
    name: "Kids' Colorful Sneakers",
    brand: "FUN FEET",
    description: "Bright and vibrant sneakers that kids love. Durable construction for active play and daily adventures.",
    price: 45.00,
    discount: 20,
    discountPrice: 36.00,
    category: "sneakers",
    gender: "kids",
    sizes: ["1", "2", "3", "4", "5", "6"],
    images: [
      "https://images.unsplash.com/photo-1544966503-7cc75cbd0367?w=800",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800",
      "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1544966503-7cc75cbd0367?w=200",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=200",
      "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=200"
    ]
  },
  // Product 5 - Men
  {
    id: 5,
    name: "Premium Leather Boots",
    brand: "LUXURY FOOTWEAR",
    description: "Handcrafted leather boots with premium materials. Perfect for both casual and formal occasions. Built to last for years.",
    price: 350.00,
    discount: 25,
    discountPrice: 262.50,
    category: "boots",
    gender: "men",
    sizes: ["7", "8", "9", "10", "11", "12"],
    images: [
      "https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800",
      "https://images.unsplash.com/photo-1608256246200-53e6092ff2be?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=200",
      "https://images.unsplash.com/photo-1608256246200-53e6092ff2be?w=200"
    ]
  },
  // Product 6 - Women
  {
    id: 6,
    name: "Women's Athletic Sneakers",
    brand: "FITNESS QUEEN",
    description: "High-performance athletic sneakers designed specifically for women. Perfect for workouts and active lifestyles.",
    price: 145.00,
    discount: 30,
    discountPrice: 101.50,
    category: "training",
    gender: "women",
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    images: [
      "https://images.unsplash.com/photo-1578912991728-ef86c44a04b9?w=800",
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800",
      "https://images.unsplash.com/photo-1556012018-50c5c0da73bf?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1578912991728-ef86c44a04b9?w=200",
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=200",
      "https://images.unsplash.com/photo-1556012018-50c5c0da73bf?w=200"
    ]
  },
  // Product 7 - Men
  {
    id: 7,
    name: "Casual Canvas Sneakers",
    brand: "URBAN STYLE",
    description: "Stylish canvas sneakers for everyday wear. Comfortable fit with a modern design that complements any outfit.",
    price: 90.00,
    discount: 20,
    discountPrice: 72.00,
    category: "sneakers",
    gender: "men",
    sizes: ["6", "7", "8", "9", "10", "11"],
    images: [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=200",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200"
    ]
  },
  // Product 8 - Kids
  {
    id: 8,
    name: "Kids' Sports Shoes",
    brand: "TINY ATHLETE",
    description: "Sports shoes designed for young athletes. Perfect for soccer, basketball, and playground activities.",
    price: 48.00,
    discount: 25,
    discountPrice: 36.00,
    category: "training",
    gender: "kids",
    sizes: ["1", "2", "3", "4", "5", "6"],
    images: [
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=200",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=200"
    ]
  },
  // Product 9 - Men
  {
    id: 9,
    name: "Athletic Training Shoes",
    brand: "FITNESS PRO",
    description: "High-performance training shoes designed for athletes. Features advanced support and flexibility for intense workouts.",
    price: 220.00,
    discount: 35,
    discountPrice: 143.00,
    category: "training",
    gender: "men",
    sizes: ["7", "8", "9", "10", "11", "12", "13"],
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200"
    ]
  },
  // Product 10 - Women
  {
    id: 10,
    name: "Women's Fashion Boots",
    brand: "STYLISH FEET",
    description: "Trendy fashion boots that combine style and comfort. Perfect for autumn and winter seasons.",
    price: 165.00,
    discount: 25,
    discountPrice: 123.75,
    category: "boots",
    gender: "women",
    sizes: ["5", "6", "7", "8", "9", "10"],
    images: [
      "https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800",
      "https://images.unsplash.com/photo-1544966503-7cc75cbd0367?w=800",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=200",
      "https://images.unsplash.com/photo-1544966503-7cc75cbd0367?w=200",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=200"
    ]
  },
  // Product 11 - Men
  {
    id: 11,
    name: "Designer High-Tops",
    brand: "STREET FASHION",
    description: "Bold and trendy high-top sneakers that make a statement. Perfect for fashion-forward individuals who want to stand out.",
    price: 200.00,
    discount: 15,
    discountPrice: 170.00,
    category: "sneakers",
    gender: "men",
    sizes: ["7", "8", "9", "10", "11"],
    images: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200"
    ]
  },
  // Product 12 - Women
  {
    id: 12,
    name: "Women's Minimalist White Sneakers",
    brand: "CLEAN DESIGN",
    description: "Simple, elegant white sneakers that go with everything. Perfect for a minimalist wardrobe.",
    price: 120.00,
    discount: 0,
    discountPrice: 120.00,
    category: "sneakers",
    gender: "women",
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=200"
    ]
  },
  // Product 13 - Men
  {
    id: 13,
    name: "Trail Running Shoes",
    brand: "OUTDOOR GEAR",
    description: "Rugged trail running shoes with superior grip and protection. Built for off-road adventures.",
    price: 160.00,
    discount: 20,
    discountPrice: 128.00,
    category: "running",
    gender: "men",
    sizes: ["7", "8", "9", "10", "11", "12"],
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
      "https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200",
      "https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=200"
    ]
  },
  // Product 14 - Kids
  {
    id: 14,
    name: "Kids' Light-Up Sneakers",
    brand: "BRIGHT STEPS",
    description: "Fun light-up sneakers that kids adore. Perfect for evenings and special occasions. Durable and comfortable.",
    price: 55.00,
    discount: 20,
    discountPrice: 44.00,
    category: "sneakers",
    gender: "kids",
    sizes: ["1", "2", "3", "4", "5", "6"],
    images: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=200"
    ]
  },
  // Product 15 - Men
  {
    id: 15,
    name: "Basketball High-Tops",
    brand: "SPORTS PRO",
    description: "Professional-grade basketball shoes with ankle support and superior traction for the court.",
    price: 180.00,
    discount: 30,
    discountPrice: 126.00,
    category: "basketball",
    gender: "men",
    sizes: ["8", "9", "10", "11", "12", "13", "14"],
    images: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200"
    ]
  },
  // Product 16 - Women
  {
    id: 16,
    name: "Women's Running Shoes",
    brand: "FITNESS LADY",
    description: "Lightweight running shoes specifically designed for women. Perfect cushioning and support for active lifestyles.",
    price: 150.00,
    discount: 25,
    discountPrice: 112.50,
    category: "running",
    gender: "women",
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    images: [
      "https://images.unsplash.com/photo-1578912991728-ef86c44a04b9?w=800",
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1578912991728-ef86c44a04b9?w=200",
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=200"
    ]
  },
  // Product 17 - Men
  {
    id: 17,
    name: "Comfort Walking Shoes",
    brand: "EVERYDAY COMFORT",
    description: "Ultra-comfortable walking shoes designed for all-day wear. Perfect for long walks and daily activities.",
    price: 100.00,
    discount: 25,
    discountPrice: 75.00,
    category: "casual",
    gender: "men",
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    images: [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=200",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200"
    ]
  },
  // Product 18 - Women
  {
    id: 18,
    name: "Women's Fashion Heels",
    brand: "ELEGANCE FOOTWEAR",
    description: "Stylish high-heel sneakers that elevate any outfit. Perfect for both casual and semi-formal occasions.",
    price: 180.00,
    discount: 20,
    discountPrice: 144.00,
    category: "fashion",
    gender: "women",
    sizes: ["5", "6", "7", "8", "9", "10"],
    images: [
      "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=800",
      "https://images.unsplash.com/photo-1544966503-7cc75cbd0367?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=200",
      "https://images.unsplash.com/photo-1544966503-7cc75cbd0367?w=200"
    ]
  },
  // Product 19 - Men
  {
    id: 19,
    name: "Retro Running Sneakers",
    brand: "VINTAGE STYLE",
    description: "Classic retro design with modern comfort technology. A perfect blend of style and performance.",
    price: 140.00,
    discount: 15,
    discountPrice: 119.00,
    category: "sneakers",
    gender: "men",
    sizes: ["7", "8", "9", "10", "11"],
    images: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200"
    ]
  },
  // Product 20 - Kids
  {
    id: 20,
    name: "Kids' Running Shoes",
    brand: "LITTLE ATHLETE",
    description: "Comfortable running shoes for active kids. Perfect for sports, play, and daily activities.",
    price: 55.00,
    discount: 25,
    discountPrice: 41.25,
    category: "running",
    gender: "kids",
    sizes: ["1", "2", "3", "4", "5", "6"],
    images: [
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=200",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=200"
    ]
  },
  // Product 21 - Men
  {
    id: 21,
    name: "Waterproof Hiking Boots",
    brand: "ADVENTURE GEAR",
    description: "Waterproof hiking boots with excellent ankle support and grip. Perfect for mountain trails and outdoor adventures.",
    price: 280.00,
    discount: 20,
    discountPrice: 224.00,
    category: "boots",
    gender: "men",
    sizes: ["7", "8", "9", "10", "11", "12", "13"],
    images: [
      "https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800",
      "https://images.unsplash.com/photo-1608256246200-53e6092ff2be?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=200",
      "https://images.unsplash.com/photo-1608256246200-53e6092ff2be?w=200"
    ]
  },
  // Product 22 - Women
  {
    id: 22,
    name: "Women's Athletic Training Shoes",
    brand: "ACTIVE WOMAN",
    description: "High-performance training shoes for women. Designed for gym workouts, yoga, and fitness activities.",
    price: 130.00,
    discount: 30,
    discountPrice: 91.00,
    category: "training",
    gender: "women",
    sizes: ["5", "6", "7", "8", "9", "10"],
    images: [
      "https://images.unsplash.com/photo-1556012018-50c5c0da73bf?w=800",
      "https://images.unsplash.com/photo-1578912991728-ef86c44a04b9?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1556012018-50c5c0da73bf?w=200",
      "https://images.unsplash.com/photo-1578912991728-ef86c44a04b9?w=200"
    ]
  },
  // Product 23 - Men
  {
    id: 23,
    name: "Slip-On Sneakers",
    brand: "EASY WEAR",
    description: "Convenient slip-on design with elastic sides. Perfect for quick errands and casual outings.",
    price: 85.00,
    discount: 10,
    discountPrice: 76.50,
    category: "casual",
    gender: "men",
    sizes: ["7", "8", "9", "10", "11"],
    images: [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=200",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200"
    ]
  },
  // Product 24 - Kids
  {
    id: 24,
    name: "Kids' School Sneakers",
    brand: "SCHOOL DAYS",
    description: "Durable school sneakers that can handle active kids. Easy to clean and long-lasting.",
    price: 50.00,
    discount: 15,
    discountPrice: 42.50,
    category: "casual",
    gender: "kids",
    sizes: ["1", "2", "3", "4", "5", "6"],
    images: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200"
    ]
  },
  // Product 25 - Men
  {
    id: 25,
    name: "Tennis Court Shoes",
    brand: "RACKET SPORTS",
    description: "Specialized tennis shoes with lateral support and court-specific traction. Designed for quick movements.",
    price: 130.00,
    discount: 0,
    discountPrice: 130.00,
    category: "tennis",
    gender: "men",
    sizes: ["7", "8", "9", "10", "11", "12"],
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200"
    ]
  },
  // Product 26 - Women
  {
    id: 26,
    name: "Women's Fashion Sneakers",
    brand: "TRENDY FOOTWEAR",
    description: "Stylish sneakers that combine fashion and function. Perfect for the modern urban lifestyle.",
    price: 150.00,
    discount: 25,
    discountPrice: 112.50,
    category: "sneakers",
    gender: "women",
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    images: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200"
    ]
  },
  // Product 27 - Men
  {
    id: 27,
    name: "Cross-Training Shoes",
    brand: "FITNESS MAX",
    description: "Versatile cross-training shoes perfect for gym workouts, HIIT, and various fitness activities.",
    price: 170.00,
    discount: 30,
    discountPrice: 119.00,
    category: "training",
    gender: "men",
    sizes: ["7", "8", "9", "10", "11", "12"],
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=200"
    ]
  },
  // Product 28 - Women
  {
    id: 28,
    name: "Women's Yoga Shoes",
    brand: "ZEN FOOTWEAR",
    description: "Flexible yoga shoes perfect for yoga, pilates, and meditation. Lightweight and breathable design.",
    price: 75.00,
    discount: 15,
    discountPrice: 63.75,
    category: "casual",
    gender: "women",
    sizes: ["5", "6", "7", "8", "9", "10"],
    images: [
      "https://images.unsplash.com/photo-1544966503-7cc75cbd0367?w=800",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1544966503-7cc75cbd0367?w=200",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=200"
    ]
  },
  // Product 29 - Men
  {
    id: 29,
    name: "Casual Leather Sneakers",
    brand: "PREMIUM CASUAL",
    description: "Sophisticated leather sneakers that elevate your casual look. Perfect for smart-casual occasions.",
    price: 240.00,
    discount: 20,
    discountPrice: 192.00,
    category: "sneakers",
    gender: "men",
    sizes: ["7", "8", "9", "10", "11"],
    images: [
      "https://images.unsplash.com/photo-1608256246200-53e6092ff2be?w=800",
      "https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1608256246200-53e6092ff2be?w=200",
      "https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=200"
    ]
  },
  // Product 30 - Kids
  {
    id: 30,
    name: "Kids' Velcro Sneakers",
    brand: "EASY STEPS",
    description: "Convenient velcro fastening sneakers for kids. Easy to put on and take off. Perfect for independent little ones.",
    price: 42.00,
    discount: 15,
    discountPrice: 35.70,
    category: "casual",
    gender: "kids",
    sizes: ["1", "2", "3", "4", "5", "6"],
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200"
    ]
  },
  // Product 31 - Men
  {
    id: 31,
    name: "Marathon Running Shoes",
    brand: "ENDURANCE PRO",
    description: "Lightweight marathon shoes with maximum cushioning and energy return. Built for long-distance runners.",
    price: 200.00,
    discount: 25,
    discountPrice: 150.00,
    category: "running",
    gender: "men",
    sizes: ["7", "8", "9", "10", "11", "12", "13"],
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=200"
    ]
  },
  // Product 32 - Women
  {
    id: 32,
    name: "Women's Platform Sneakers",
    brand: "ELEVATED STYLE",
    description: "Stylish platform sneakers that add height and comfort. Trendy design perfect for fashion-forward women.",
    price: 125.00,
    discount: 30,
    discountPrice: 87.50,
    category: "fashion",
    gender: "women",
    sizes: ["5", "6", "7", "8", "9", "10"],
    images: [
      "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=800",
      "https://images.unsplash.com/photo-1544966503-7cc75cbd0367?w=800",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=200",
      "https://images.unsplash.com/photo-1544966503-7cc75cbd0367?w=200",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=200"
    ]
  },
  // Product 33 - Men
  {
    id: 33,
    name: "Skateboarding Shoes",
    brand: "SKATE CULTURE",
    description: "Durable skate shoes with reinforced toe caps and grippy soles. Built for skateboarders.",
    price: 110.00,
    discount: 15,
    discountPrice: 93.50,
    category: "skateboarding",
    gender: "men",
    sizes: ["7", "8", "9", "10", "11", "12"],
    images: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200"
    ]
  },
  // Product 34 - Women
  {
    id: 34,
    name: "Women's Walking Shoes",
    brand: "COMFORT WALK",
    description: "Ultra-comfortable walking shoes designed for women. Perfect for long walks, travel, and everyday comfort.",
    price: 110.00,
    discount: 25,
    discountPrice: 82.50,
    category: "casual",
    gender: "women",
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    images: [
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800",
      "https://images.unsplash.com/photo-1578912991728-ef86c44a04b9?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=200",
      "https://images.unsplash.com/photo-1578912991728-ef86c44a04b9?w=200"
    ]
  },
  // Product 35 - Men
  {
    id: 35,
    name: "Golf Shoes",
    brand: "GOLF PRO",
    description: "Professional golf shoes with spiked soles for excellent grip on the course. Waterproof and breathable.",
    price: 190.00,
    discount: 20,
    discountPrice: 152.00,
    category: "golf",
    gender: "men",
    sizes: ["7", "8", "9", "10", "11", "12"],
    images: [
      "https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800",
      "https://images.unsplash.com/photo-1608256246200-53e6092ff2be?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=200",
      "https://images.unsplash.com/photo-1608256246200-53e6092ff2be?w=200"
    ]
  },
  // Product 36 - Women
  {
    id: 36,
    name: "Women's Casual Sneakers",
    brand: "CHIC STYLE",
    description: "Trendy casual sneakers perfect for everyday wear. Comfortable and fashionable design.",
    price: 110.00,
    discount: 25,
    discountPrice: 82.50,
    category: "casual",
    gender: "women",
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200"
    ]
  },
  // Product 37 - Men
  {
    id: 37,
    name: "Soccer Cleats",
    brand: "FOOTBALL PRO",
    description: "Professional soccer cleats with studded soles for optimal grip on grass. Lightweight and responsive.",
    price: 160.00,
    discount: 30,
    discountPrice: 112.00,
    category: "soccer",
    gender: "men",
    sizes: ["7", "8", "9", "10", "11", "12"],
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200"
    ]
  },
  // Product 38 - Women
  {
    id: 38,
    name: "Women's Elegant Sneakers",
    brand: "FEMININE STYLE",
    description: "Beautiful and comfortable sneakers designed for women. Stylish design that combines fashion with comfort.",
    price: 140.00,
    discount: 30,
    discountPrice: 98.00,
    category: "sneakers",
    gender: "women",
    sizes: ["5", "6", "7", "8", "9", "10"],
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=200"
    ]
  },
  // Product 39 - Men
  {
    id: 39,
    name: "Cycling Shoes",
    brand: "BIKE GEAR",
    description: "Clip-in cycling shoes with stiff soles for efficient power transfer. Perfect for road and mountain biking.",
    price: 140.00,
    discount: 25,
    discountPrice: 105.00,
    category: "cycling",
    gender: "men",
    sizes: ["7", "8", "9", "10", "11", "12"],
    images: [
      "https://images.unsplash.com/photo-1608256246200-53e6092ff2be?w=800",
      "https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1608256246200-53e6092ff2be?w=200",
      "https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=200"
    ]
  },
  // Product 40 - Kids
  {
    id: 40,
    name: "Kids' Colorful Sneakers",
    brand: "FUN FOOTWEAR",
    description: "Bright and colorful sneakers designed for kids. Durable, comfortable, and fun to wear.",
    price: 60.00,
    discount: 20,
    discountPrice: 48.00,
    category: "sneakers",
    gender: "kids",
    sizes: ["1", "2", "3", "4", "5", "6"],
    images: [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=200",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200"
    ]
  },
  // Product 41 - Men
  {
    id: 41,
    name: "Dress Casual Shoes",
    brand: "FORMAL CASUAL",
    description: "Elegant dress-casual shoes that bridge the gap between formal and casual. Perfect for business casual settings.",
    price: 220.00,
    discount: 15,
    discountPrice: 187.00,
    category: "dress",
    gender: "men",
    sizes: ["7", "8", "9", "10", "11", "12"],
    images: [
      "https://images.unsplash.com/photo-1608256246200-53e6092ff2be?w=800",
      "https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1608256246200-53e6092ff2be?w=200",
      "https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=200"
    ]
  },
  // Product 42 - Women
  {
    id: 42,
    name: "Women's Minimalist Black Sneakers",
    brand: "MONOCHROME",
    description: "Sleek black sneakers with a minimalist design. Versatile and timeless, perfect for any wardrobe.",
    price: 130.00,
    discount: 20,
    discountPrice: 104.00,
    category: "sneakers",
    gender: "women",
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    images: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200"
    ]
  },
  // Product 43 - Men
  {
    id: 43,
    name: "Workout Training Shoes",
    brand: "GYM ESSENTIALS",
    description: "Versatile training shoes for weightlifting, cardio, and functional fitness. Stable and supportive.",
    price: 150.00,
    discount: 30,
    discountPrice: 105.00,
    category: "training",
    gender: "men",
    sizes: ["7", "8", "9", "10", "11", "12"],
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=200"
    ]
  },
  // Product 44 - Women
  {
    id: 44,
    name: "Women's Comfort Plus Walking Shoes",
    brand: "COMFORT FIRST",
    description: "Maximum comfort walking shoes with extra cushioning. Perfect for people who are on their feet all day.",
    price: 120.00,
    discount: 15,
    discountPrice: 102.00,
    category: "casual",
    gender: "women",
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    images: [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=200",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200"
    ]
  },
  // Product 45 - Men
  {
    id: 45,
    name: "Trail Hiking Sneakers",
    brand: "OUTDOOR ADVENTURE",
    description: "Lightweight hiking sneakers perfect for day hikes and light trails. Comfortable and breathable.",
    price: 140.00,
    discount: 25,
    discountPrice: 105.00,
    category: "hiking",
    gender: "men",
    sizes: ["7", "8", "9", "10", "11", "12"],
    images: [
      "https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=800",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=200",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200"
    ]
  },
  // Product 46 - Kids
  {
    id: 46,
    name: "Kids' Skateboarding Shoes",
    brand: "SKATE KIDS",
    description: "Durable skate shoes designed for young skaters. Reinforced toe caps and grippy soles for safety and performance.",
    price: 52.00,
    discount: 20,
    discountPrice: 41.60,
    category: "skateboarding",
    gender: "kids",
    sizes: ["1", "2", "3", "4", "5", "6"],
    images: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200"
    ]
  },
  // Product 47 - Men
  {
    id: 47,
    name: "Fashion Forward Sneakers",
    brand: "TREND SETTER",
    description: "Bold and unique sneakers that make a fashion statement. For those who want to stand out from the crowd.",
    price: 180.00,
    discount: 20,
    discountPrice: 144.00,
    category: "sneakers",
    gender: "men",
    sizes: ["7", "8", "9", "10", "11"],
    images: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200"
    ]
  },
  // Product 48 - Women
  {
    id: 48,
    name: "Women's Performance Running Shoes",
    brand: "SPEED RUNNER",
    description: "Lightweight performance running shoes designed for speed. Advanced cushioning and energy return technology.",
    price: 160.00,
    discount: 30,
    discountPrice: 112.00,
    category: "running",
    gender: "women",
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    images: [
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800",
      "https://images.unsplash.com/photo-1556012018-50c5c0da73bf?w=800"
    ],
    thumbnails: [
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=200",
      "https://images.unsplash.com/photo-1556012018-50c5c0da73bf?w=200"
    ]
  }
];

// Cart management
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(productId, quantity = 1, size = null, color = null) {
  const product = products.find(p => p.id === productId);
  if (!product) return false;

  if (!size && product.sizes && product.sizes.length > 0) {
    // Size is required but not provided
    return false;
  }

  const existingItem = cart.find(item => 
    item.id === productId && 
    item.size === size && 
    item.color === color
  );
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.discountPrice,
      image: product.thumbnails[0],
      quantity: quantity,
      size: size,
      color: color || null
    });
  }
  
  saveCart();
  updateCartUI();
  return true;
}

function removeFromCart(productId, size = null, color = null) {
  if (size !== null || color !== null) {
    cart = cart.filter(item => !(
      item.id === productId && 
      item.size === size && 
      item.color === color
    ));
  } else {
    cart = cart.filter(item => item.id !== productId);
  }
  saveCart();
  updateCartUI();
  // Refresh product cards if function exists
  if (typeof refreshProductCards === 'function') {
    refreshProductCards();
  }
}

function updateCartQuantity(productId, quantity, size = null, color = null) {
  const item = cart.find(item => 
    item.id === productId && 
    (size === null || item.size === size) &&
    (color === null || item.color === color)
  );
  if (item) {
    item.quantity = quantity;
    if (item.quantity <= 0) {
      removeFromCart(productId, size, color);
    } else {
      saveCart();
      updateCartUI();
    }
  }
}

function getCartItemQuantity(productId, size = null, color = null) {
  const item = cart.find(item => 
    item.id === productId && 
    item.size === size && 
    item.color === color
  );
  return item ? item.quantity : 0;
}

function getCartTotal() {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function getCartItemCount() {
  // Return the number of unique items in cart (not total quantity)
  return cart.length;
}

function updateCartUI() {
  const quantityBadge = document.querySelector('.quantity-badge');
  const cartBasket = document.querySelector('.cartBasket');
  const emptyCart = document.querySelector('.empty');
  const hiddenCart = document.querySelector('.hidden-cart');
  const cartItemsContainer = document.querySelector('.cart-items-container');
  
  const itemCount = getCartItemCount();
  
  // Update quantity badge
  if (quantityBadge) {
    if (itemCount > 0) {
      quantityBadge.textContent = itemCount;
    } else {
      quantityBadge.textContent = '';
    }
  }
  
  // Update cart content
  if (cartBasket) {
    if (cart.length === 0) {
      if (emptyCart) emptyCart.style.display = 'block';
      if (hiddenCart) hiddenCart.style.display = 'none';
    } else {
      if (emptyCart) emptyCart.style.display = 'none';
      if (hiddenCart) hiddenCart.style.display = 'block';
      
      // Update cart items if container exists
      if (cartItemsContainer) {
        renderCartItems(cartItemsContainer);
      }
    }
  }
}

function renderCartItems(container) {
  if (!container) return;
  
  container.innerHTML = '';
  
  cart.forEach(item => {
    const sizeText = item.size ? `Size: ${item.size}` : '';
    const colorText = item.color ? `Color: ${item.color}` : '';
    const detailsText = [sizeText, colorText].filter(Boolean).join(', ');
    const itemHTML = `
      <div class="order-space" data-product-id="${item.id}" data-size="${item.size || ''}" data-color="${item.color || ''}">
        <div class="product-in-order">
          <img src="${item.image}" alt="${item.name}" />
          <div class="order-prize">
            <p class="order-name">${item.name}${detailsText ? ` (${detailsText})` : ''}</p>
            <div class="descount-area">
              <p class="descont-prize">$${item.price.toFixed(2)}</p>
              <p class="descount-area-x">x</p>
              <p class="product-qts">${item.quantity}</p>
              <p class="total-prize">$${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        </div>
        <img
          class="delete-item"
          src="images/icon-delete.svg"
          alt="Delete"
          data-product-id="${item.id}"
          data-size="${item.size || ''}"
          data-color="${item.color || ''}"
        />
      </div>
    `;
    container.insertAdjacentHTML('beforeend', itemHTML);
  });
  
  // Add checkout button
  const checkoutBtn = document.createElement('div');
  checkoutBtn.className = 'checkout-btn';
  checkoutBtn.innerHTML = '<p>Checkout</p>';
  checkoutBtn.addEventListener('click', () => {
    alert(`Total: $${getCartTotal().toFixed(2)}\n\nThis is a demo. Checkout functionality would be implemented here.`);
  });
  container.appendChild(checkoutBtn);
  
  // Attach delete event listeners
  container.querySelectorAll('.delete-item').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const productId = parseInt(e.target.getAttribute('data-product-id'));
      const size = e.target.getAttribute('data-size') || null;
      const color = e.target.getAttribute('data-color') || null;
      removeFromCart(productId, size, color);
    });
  });
}

// Initialize cart UI on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', updateCartUI);
} else {
  updateCartUI();
}
