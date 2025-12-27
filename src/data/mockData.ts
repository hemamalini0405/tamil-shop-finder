import { Location, Shop, PriceComparison, ShopItem } from '@/types';

export const locations: Location[] = [
  { id: '1', name: 'Chennai', district: 'Chennai' },
  { id: '2', name: 'Thiruvallur', district: 'Thiruvallur' },
  { id: '3', name: 'Coimbatore', district: 'Coimbatore' },
  { id: '4', name: 'Madurai', district: 'Madurai' },
  { id: '5', name: 'Tiruchirappalli', district: 'Tiruchirappalli' },
  { id: '6', name: 'Salem', district: 'Salem' },
  { id: '7', name: 'Tirunelveli', district: 'Tirunelveli' },
  { id: '8', name: 'Erode', district: 'Erode' },
  { id: '9', name: 'Vellore', district: 'Vellore' },
  { id: '10', name: 'Thanjavur', district: 'Thanjavur' },
];

// Category-based items for each shop
const electronicsItems: ShopItem[] = [
  { id: 'e1', name: 'Samsung Galaxy S24 Ultra', category: 'Mobile', price: 134999, offer: '10% OFF', discountPercentage: 10, finalPrice: 121499, availability: 'In Stock' },
  { id: 'e2', name: 'iPhone 15 Pro Max', category: 'Mobile', price: 159900, offer: '₹10000 OFF', discountPercentage: 6, finalPrice: 149900, availability: 'In Stock' },
  { id: 'e3', name: 'OnePlus 12', category: 'Mobile', price: 69999, offer: '5% OFF', discountPercentage: 5, finalPrice: 66499, availability: 'In Stock' },
  { id: 'e4', name: 'MacBook Air M3', category: 'Laptop', price: 114900, offer: 'Free AirPods', discountPercentage: 0, finalPrice: 114900, availability: 'In Stock' },
  { id: 'e5', name: 'HP Pavilion 15', category: 'Laptop', price: 65990, offer: '15% OFF', discountPercentage: 15, finalPrice: 56091, availability: 'In Stock' },
  { id: 'e6', name: 'Dell XPS 13', category: 'Laptop', price: 129900, offer: '8% OFF', discountPercentage: 8, finalPrice: 119508, availability: 'Limited Stock' },
  { id: 'e7', name: 'Sony WH-1000XM5', category: 'Headphones', price: 29990, offer: '20% OFF', discountPercentage: 20, finalPrice: 23992, availability: 'In Stock' },
  { id: 'e8', name: 'AirPods Pro 2', category: 'Headphones', price: 24900, offer: '₹2000 OFF', discountPercentage: 8, finalPrice: 22900, availability: 'In Stock' },
  { id: 'e9', name: 'Samsung 55" Smart TV', category: 'TV', price: 54999, offer: '12% OFF', discountPercentage: 12, finalPrice: 48399, availability: 'In Stock' },
  { id: 'e10', name: 'LG Washing Machine 7kg', category: 'Appliances', price: 32990, offer: '₹3000 OFF', discountPercentage: 9, finalPrice: 29990, availability: 'In Stock' },
];

const groceryItems: ShopItem[] = [
  { id: 'g1', name: 'Basmati Rice (5kg)', category: 'Rice', price: 899, offer: '20% OFF', discountPercentage: 20, finalPrice: 719, availability: 'In Stock' },
  { id: 'g2', name: 'Ponni Rice (5kg)', category: 'Rice', price: 599, offer: '15% OFF', discountPercentage: 15, finalPrice: 509, availability: 'In Stock' },
  { id: 'g3', name: 'Brown Rice (2kg)', category: 'Rice', price: 349, offer: '10% OFF', discountPercentage: 10, finalPrice: 314, availability: 'In Stock' },
  { id: 'g4', name: 'Boiled Rice (5kg)', category: 'Rice', price: 499, offer: 'Flat ₹50 OFF', discountPercentage: 10, finalPrice: 449, availability: 'In Stock' },
  { id: 'g5', name: 'Sunflower Oil (5L)', category: 'Oil', price: 749, offer: '₹100 OFF', discountPercentage: 13, finalPrice: 649, availability: 'In Stock' },
  { id: 'g6', name: 'Groundnut Oil (5L)', category: 'Oil', price: 999, offer: '10% OFF', discountPercentage: 10, finalPrice: 899, availability: 'In Stock' },
  { id: 'g7', name: 'Coconut Oil (1L)', category: 'Oil', price: 299, offer: '5% OFF', discountPercentage: 5, finalPrice: 284, availability: 'In Stock' },
  { id: 'g8', name: 'Toor Dal (1kg)', category: 'Dal', price: 189, offer: '8% OFF', discountPercentage: 8, finalPrice: 174, availability: 'In Stock' },
  { id: 'g9', name: 'Moong Dal (1kg)', category: 'Dal', price: 159, offer: '10% OFF', discountPercentage: 10, finalPrice: 143, availability: 'In Stock' },
  { id: 'g10', name: 'Chana Dal (1kg)', category: 'Dal', price: 129, offer: '5% OFF', discountPercentage: 5, finalPrice: 122, availability: 'In Stock' },
  { id: 'g11', name: 'Sugar (5kg)', category: 'Sugar', price: 249, offer: '₹20 OFF', discountPercentage: 8, finalPrice: 229, availability: 'In Stock' },
  { id: 'g12', name: 'Wheat Flour (5kg)', category: 'Wheat', price: 299, offer: '15% OFF', discountPercentage: 15, finalPrice: 254, availability: 'In Stock' },
  { id: 'g13', name: 'Atta (10kg)', category: 'Wheat', price: 549, offer: '10% OFF', discountPercentage: 10, finalPrice: 494, availability: 'In Stock' },
  { id: 'g14', name: 'Lays Chips Combo', category: 'Snacks', price: 99, offer: 'Buy 2 Get 1', discountPercentage: 33, finalPrice: 66, availability: 'In Stock' },
  { id: 'g15', name: 'Kurkure Party Pack', category: 'Snacks', price: 149, offer: '20% OFF', discountPercentage: 20, finalPrice: 119, availability: 'In Stock' },
  { id: 'g16', name: 'Biscuit Combo Pack', category: 'Snacks', price: 199, offer: '25% OFF', discountPercentage: 25, finalPrice: 149, availability: 'Limited Stock' },
];

const mobileShopItems: ShopItem[] = [
  { id: 'm1', name: 'Samsung Galaxy S24 Ultra', category: 'Mobile', price: 134999, offer: '₹8000 OFF + EMI', discountPercentage: 6, finalPrice: 126999, availability: 'In Stock' },
  { id: 'm2', name: 'iPhone 15 Pro Max', category: 'Mobile', price: 159900, offer: '₹12000 OFF', discountPercentage: 7, finalPrice: 147900, availability: 'Limited Stock' },
  { id: 'm3', name: 'OnePlus 12', category: 'Mobile', price: 69999, offer: '₹5000 OFF', discountPercentage: 7, finalPrice: 64999, availability: 'In Stock' },
  { id: 'm4', name: 'Vivo X100', category: 'Mobile', price: 59999, offer: '10% OFF', discountPercentage: 10, finalPrice: 53999, availability: 'In Stock' },
  { id: 'm5', name: 'Realme GT 5', category: 'Mobile', price: 44999, offer: '15% OFF', discountPercentage: 15, finalPrice: 38249, availability: 'In Stock' },
  { id: 'm6', name: 'Xiaomi 14', category: 'Mobile', price: 49999, offer: '₹4000 OFF', discountPercentage: 8, finalPrice: 45999, availability: 'In Stock' },
  { id: 'm7', name: 'Phone Case Premium', category: 'Accessories', price: 999, offer: 'Buy 1 Get 1', discountPercentage: 50, finalPrice: 499, availability: 'In Stock' },
  { id: 'm8', name: 'Screen Protector Pack', category: 'Accessories', price: 499, offer: '30% OFF', discountPercentage: 30, finalPrice: 349, availability: 'In Stock' },
  { id: 'm9', name: 'Fast Charger 65W', category: 'Accessories', price: 1999, offer: '₹300 OFF', discountPercentage: 15, finalPrice: 1699, availability: 'In Stock' },
  { id: 'm10', name: 'Wireless Earbuds', category: 'Accessories', price: 2999, offer: '20% OFF', discountPercentage: 20, finalPrice: 2399, availability: 'In Stock' },
];

export const getShopsByLocation = (locationName: string): Shop[] => {
  const baseShops: Shop[] = [
    {
      id: '1',
      name: 'Reliance Digital',
      address: {
        street: 'No. 45, Mount Road',
        area: 'T. Nagar',
        city: locationName,
        district: locationName,
        pincode: '600017',
      },
      phone: '+91 98765 43210',
      openingHours: '10 AM – 10 PM',
      offers: [
        { id: 'o1', title: 'Flat 10% OFF on Mobiles', discount: '10%', type: 'percentage' },
        { id: 'o2', title: 'Free Earbuds with Laptops', discount: 'Free Gift', type: 'special' },
      ],
      rating: 4.5,
      category: 'Electronics',
      items: electronicsItems,
    },
    {
      id: '2',
      name: 'Croma Electronics',
      address: {
        street: 'No. 78, Anna Salai',
        area: 'Nungambakkam',
        city: locationName,
        district: locationName,
        pincode: '600034',
      },
      phone: '+91 98765 12345',
      openingHours: '10 AM – 9 PM',
      offers: [
        { id: 'o3', title: 'Flat ₹500 OFF on Electronics', discount: '₹500', type: 'flat' },
        { id: 'o4', title: 'Exchange Bonus up to ₹5000', discount: '₹5000', type: 'special' },
      ],
      rating: 4.3,
      category: 'Electronics',
      items: electronicsItems.map((item, idx) => ({
        ...item,
        id: `c${idx + 1}`,
        price: item.price + Math.floor(Math.random() * 1000) - 500,
        finalPrice: item.finalPrice + Math.floor(Math.random() * 800) - 400,
      })),
    },
    {
      id: '3',
      name: 'Vijay Sales',
      address: {
        street: 'No. 112, Gandhi Road',
        area: 'Pondy Bazaar',
        city: locationName,
        district: locationName,
        pincode: '600018',
      },
      phone: '+91 99887 65432',
      openingHours: '10:30 AM – 9:30 PM',
      offers: [
        { id: 'o5', title: 'Buy 1 Get 1 Free on Accessories', discount: 'BOGO', type: 'bogo' },
        { id: 'o6', title: '15% OFF on Premium Headphones', discount: '15%', type: 'percentage' },
      ],
      rating: 4.2,
      category: 'Electronics',
      items: electronicsItems.slice(0, 8).map((item, idx) => ({
        ...item,
        id: `v${idx + 1}`,
        offer: '15% OFF',
        discountPercentage: 15,
        finalPrice: Math.round(item.price * 0.85),
      })),
    },
    {
      id: '4',
      name: 'Big Bazaar',
      address: {
        street: 'No. 56, Trunk Road',
        area: 'Perambur',
        city: locationName,
        district: locationName,
        pincode: '600012',
      },
      phone: '+91 98123 45678',
      openingHours: '9 AM – 10 PM',
      offers: [
        { id: 'o7', title: 'Festival Special: 20% OFF on Groceries', discount: '20%', type: 'percentage' },
        { id: 'o8', title: 'Flat ₹200 OFF on ₹2000+', discount: '₹200', type: 'flat' },
      ],
      rating: 4.0,
      category: 'Grocery & General',
      items: groceryItems,
    },
    {
      id: '5',
      name: 'Poorvika Mobiles',
      address: {
        street: 'No. 23, Cathedral Road',
        area: 'Gopalapuram',
        city: locationName,
        district: locationName,
        pincode: '600086',
      },
      phone: '+91 97531 24680',
      openingHours: '10 AM – 8 PM',
      offers: [
        { id: 'o9', title: 'EMI Starting at ₹999/month', discount: 'Easy EMI', type: 'special' },
        { id: 'o10', title: 'Flat ₹1000 OFF on Smartphones', discount: '₹1000', type: 'flat' },
      ],
      rating: 4.4,
      category: 'Mobile Phones',
      items: mobileShopItems,
    },
    {
      id: '6',
      name: 'Spencer\'s Hypermarket',
      address: {
        street: 'No. 89, Poonamallee High Road',
        area: 'Kilpauk',
        city: locationName,
        district: locationName,
        pincode: '600010',
      },
      phone: '+91 98456 78901',
      openingHours: '9 AM – 9 PM',
      offers: [
        { id: 'o11', title: 'Weekend Special: 25% OFF on Fresh Produce', discount: '25%', type: 'percentage' },
        { id: 'o12', title: 'Buy 2 Get 1 Free on Beverages', discount: 'B2G1', type: 'bogo' },
      ],
      rating: 4.1,
      category: 'Grocery & General',
      items: groceryItems.map((item, idx) => ({
        ...item,
        id: `s${idx + 1}`,
        price: item.price + Math.floor(Math.random() * 50) - 25,
        finalPrice: item.finalPrice + Math.floor(Math.random() * 30) - 15,
      })),
    },
  ];

  return baseShops;
};

export const getShopById = (shopId: string, locationName: string): Shop | undefined => {
  const shops = getShopsByLocation(locationName);
  return shops.find(shop => shop.id === shopId);
};

// Category keywords mapping for better search
const categoryKeywords: Record<string, string[]> = {
  'Rice': ['rice', 'basmati', 'ponni', 'boiled rice', 'brown rice', 'biryani rice'],
  'Oil': ['oil', 'sunflower', 'groundnut', 'coconut oil', 'cooking oil', 'refined oil'],
  'Dal': ['dal', 'toor', 'moong', 'chana', 'urad', 'masoor', 'lentils'],
  'Sugar': ['sugar', 'jaggery', 'sweetener'],
  'Wheat': ['wheat', 'atta', 'flour', 'maida', 'sooji'],
  'Snacks': ['snacks', 'chips', 'kurkure', 'biscuit', 'namkeen', 'mixture'],
  'Mobile': ['mobile', 'phone', 'smartphone', 'iphone', 'samsung', 'oneplus', 'xiaomi', 'vivo', 'realme'],
  'Laptop': ['laptop', 'macbook', 'notebook', 'dell', 'hp', 'lenovo'],
  'Headphones': ['headphone', 'earphone', 'earbud', 'airpods', 'sony', 'audio'],
  'TV': ['tv', 'television', 'smart tv', 'led'],
  'Appliances': ['washing', 'refrigerator', 'fridge', 'ac', 'microwave'],
  'Accessories': ['case', 'cover', 'charger', 'cable', 'protector', 'accessories'],
};

const getCategoryFromQuery = (query: string): string | null => {
  const queryLower = query.toLowerCase();
  for (const [category, keywords] of Object.entries(categoryKeywords)) {
    for (const keyword of keywords) {
      if (queryLower.includes(keyword) || keyword.includes(queryLower)) {
        return category;
      }
    }
  }
  return null;
};

export const getProductComparisons = (productQuery: string, locationName: string): PriceComparison[] => {
  const shops = getShopsByLocation(locationName);
  const queryLower = productQuery.toLowerCase();
  const matchedCategory = getCategoryFromQuery(queryLower);
  
  let comparisons: PriceComparison[] = [];

  // Search through all shops and their items
  shops.forEach(shop => {
    shop.items.forEach(item => {
      const itemNameLower = item.name.toLowerCase();
      const itemCategoryLower = item.category.toLowerCase();
      
      // Check if the item matches the search query
      let matches = false;
      
      // Direct name match
      if (itemNameLower.includes(queryLower) || queryLower.includes(itemNameLower.split(' ')[0])) {
        matches = true;
      }
      
      // Category match
      if (matchedCategory && item.category === matchedCategory) {
        matches = true;
      }
      
      // Keyword match for the category
      if (matchedCategory === null) {
        // Check if query matches item category
        if (itemCategoryLower.includes(queryLower)) {
          matches = true;
        }
      }

      if (matches) {
        comparisons.push({
          id: `${shop.id}-${item.id}`,
          productName: item.name,
          shopName: shop.name,
          shopAddress: `${shop.address.street}, ${shop.address.area}, ${shop.address.city} – ${shop.address.pincode}`,
          originalPrice: item.price,
          offer: item.offer || 'No offer',
          discountPercentage: item.discountPercentage || 0,
          finalPrice: item.finalPrice,
          rating: shop.rating,
          availability: item.availability,
          shopId: shop.id,
          category: item.category,
        });
      }
    });
  });

  // Remove duplicates based on product name and shop
  const uniqueComparisons = comparisons.reduce((acc, curr) => {
    const key = `${curr.productName}-${curr.shopId}`;
    if (!acc.find(c => `${c.productName}-${c.shopId}` === key)) {
      acc.push(curr);
    }
    return acc;
  }, [] as PriceComparison[]);

  // Mark best deal and highest discount
  if (uniqueComparisons.length > 0) {
    const sortedByPrice = [...uniqueComparisons].sort((a, b) => a.finalPrice - b.finalPrice);
    const sortedByDiscount = [...uniqueComparisons].sort((a, b) => b.discountPercentage - a.discountPercentage);
    
    return uniqueComparisons.map(c => ({
      ...c,
      isBestDeal: c.id === sortedByPrice[0].id,
      isHighestDiscount: c.id === sortedByDiscount[0].id && sortedByDiscount[0].discountPercentage > 0,
    }));
  }

  return uniqueComparisons;
};

// Get product categories for filter chips
export const getProductCategories = (): string[] => {
  return ['Rice', 'Oil', 'Dal', 'Wheat', 'Sugar', 'Snacks', 'Mobile', 'Laptop', 'Headphones', 'TV', 'Appliances'];
};
