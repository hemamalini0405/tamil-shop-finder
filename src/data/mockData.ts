import { Location, Shop, PriceComparison } from '@/types';

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
    },
  ];

  return baseShops;
};

export const getProductComparisons = (productQuery: string, locationName: string): PriceComparison[] => {
  const productLower = productQuery.toLowerCase();
  
  let comparisons: PriceComparison[] = [];

  if (productLower.includes('mobile') || productLower.includes('phone') || productLower.includes('smartphone')) {
    comparisons = [
      {
        id: 'pc1',
        productName: 'Samsung Galaxy S24 Ultra',
        shopName: 'Reliance Digital',
        shopAddress: `No. 45, Mount Road, T. Nagar, ${locationName}`,
        originalPrice: 134999,
        offer: '10% OFF + Free Cover',
        discountPercentage: 10,
        finalPrice: 121499,
        rating: 4.5,
        availability: 'In Stock',
        shopId: '1',
      },
      {
        id: 'pc2',
        productName: 'Samsung Galaxy S24 Ultra',
        shopName: 'Croma Electronics',
        shopAddress: `No. 78, Anna Salai, Nungambakkam, ${locationName}`,
        originalPrice: 134999,
        offer: '₹5000 OFF + Exchange Bonus',
        discountPercentage: 4,
        finalPrice: 129999,
        rating: 4.3,
        availability: 'In Stock',
        shopId: '2',
      },
      {
        id: 'pc3',
        productName: 'Samsung Galaxy S24 Ultra',
        shopName: 'Poorvika Mobiles',
        shopAddress: `No. 23, Cathedral Road, Gopalapuram, ${locationName}`,
        originalPrice: 134999,
        offer: '₹8000 OFF + No Cost EMI',
        discountPercentage: 6,
        finalPrice: 126999,
        rating: 4.4,
        availability: 'Limited Stock',
        shopId: '5',
      },
      {
        id: 'pc4',
        productName: 'iPhone 15 Pro Max',
        shopName: 'Reliance Digital',
        shopAddress: `No. 45, Mount Road, T. Nagar, ${locationName}`,
        originalPrice: 159900,
        offer: 'Flat ₹10000 OFF',
        discountPercentage: 6,
        finalPrice: 149900,
        rating: 4.5,
        availability: 'In Stock',
        shopId: '1',
      },
      {
        id: 'pc5',
        productName: 'iPhone 15 Pro Max',
        shopName: 'Croma Electronics',
        shopAddress: `No. 78, Anna Salai, Nungambakkam, ${locationName}`,
        originalPrice: 159900,
        offer: '5% OFF + Cashback',
        discountPercentage: 5,
        finalPrice: 151905,
        rating: 4.3,
        availability: 'In Stock',
        shopId: '2',
      },
    ];
  } else if (productLower.includes('laptop')) {
    comparisons = [
      {
        id: 'pc6',
        productName: 'MacBook Air M3',
        shopName: 'Reliance Digital',
        shopAddress: `No. 45, Mount Road, T. Nagar, ${locationName}`,
        originalPrice: 114900,
        offer: 'Free AirPods Worth ₹14900',
        discountPercentage: 0,
        finalPrice: 114900,
        rating: 4.5,
        availability: 'In Stock',
        shopId: '1',
      },
      {
        id: 'pc7',
        productName: 'MacBook Air M3',
        shopName: 'Croma Electronics',
        shopAddress: `No. 78, Anna Salai, Nungambakkam, ${locationName}`,
        originalPrice: 114900,
        offer: '₹8000 Instant Discount',
        discountPercentage: 7,
        finalPrice: 106900,
        rating: 4.3,
        availability: 'In Stock',
        shopId: '2',
      },
      {
        id: 'pc8',
        productName: 'HP Pavilion 15',
        shopName: 'Vijay Sales',
        shopAddress: `No. 112, Gandhi Road, Pondy Bazaar, ${locationName}`,
        originalPrice: 65990,
        offer: '15% OFF',
        discountPercentage: 15,
        finalPrice: 56091,
        rating: 4.2,
        availability: 'In Stock',
        shopId: '3',
      },
    ];
  } else if (productLower.includes('headphone') || productLower.includes('earphone') || productLower.includes('earbud')) {
    comparisons = [
      {
        id: 'pc9',
        productName: 'Sony WH-1000XM5',
        shopName: 'Reliance Digital',
        shopAddress: `No. 45, Mount Road, T. Nagar, ${locationName}`,
        originalPrice: 29990,
        offer: '20% OFF',
        discountPercentage: 20,
        finalPrice: 23992,
        rating: 4.5,
        availability: 'In Stock',
        shopId: '1',
      },
      {
        id: 'pc10',
        productName: 'Sony WH-1000XM5',
        shopName: 'Vijay Sales',
        shopAddress: `No. 112, Gandhi Road, Pondy Bazaar, ${locationName}`,
        originalPrice: 29990,
        offer: 'Buy 1 Get Carry Case Free',
        discountPercentage: 0,
        finalPrice: 29990,
        rating: 4.2,
        availability: 'Limited Stock',
        shopId: '3',
      },
      {
        id: 'pc11',
        productName: 'AirPods Pro 2',
        shopName: 'Croma Electronics',
        shopAddress: `No. 78, Anna Salai, Nungambakkam, ${locationName}`,
        originalPrice: 24900,
        offer: '₹2000 OFF',
        discountPercentage: 8,
        finalPrice: 22900,
        rating: 4.3,
        availability: 'In Stock',
        shopId: '2',
      },
    ];
  } else if (productLower.includes('grocery') || productLower.includes('food') || productLower.includes('rice') || productLower.includes('oil')) {
    comparisons = [
      {
        id: 'pc12',
        productName: 'Organic Basmati Rice (5kg)',
        shopName: 'Big Bazaar',
        shopAddress: `No. 56, Trunk Road, Perambur, ${locationName}`,
        originalPrice: 899,
        offer: '20% OFF',
        discountPercentage: 20,
        finalPrice: 719,
        rating: 4.0,
        availability: 'In Stock',
        shopId: '4',
      },
      {
        id: 'pc13',
        productName: 'Organic Basmati Rice (5kg)',
        shopName: 'Spencer\'s Hypermarket',
        shopAddress: `No. 89, Poonamallee High Road, Kilpauk, ${locationName}`,
        originalPrice: 949,
        offer: '15% OFF',
        discountPercentage: 15,
        finalPrice: 806,
        rating: 4.1,
        availability: 'In Stock',
        shopId: '6',
      },
      {
        id: 'pc14',
        productName: 'Sunflower Oil (5L)',
        shopName: 'Big Bazaar',
        shopAddress: `No. 56, Trunk Road, Perambur, ${locationName}`,
        originalPrice: 749,
        offer: 'Flat ₹100 OFF',
        discountPercentage: 13,
        finalPrice: 649,
        rating: 4.0,
        availability: 'In Stock',
        shopId: '4',
      },
    ];
  } else {
    // Default products
    comparisons = [
      {
        id: 'pc15',
        productName: `${productQuery} - Premium`,
        shopName: 'Reliance Digital',
        shopAddress: `No. 45, Mount Road, T. Nagar, ${locationName}`,
        originalPrice: 9999,
        offer: '10% OFF',
        discountPercentage: 10,
        finalPrice: 8999,
        rating: 4.5,
        availability: 'In Stock',
        shopId: '1',
      },
      {
        id: 'pc16',
        productName: `${productQuery} - Standard`,
        shopName: 'Croma Electronics',
        shopAddress: `No. 78, Anna Salai, Nungambakkam, ${locationName}`,
        originalPrice: 7999,
        offer: '5% OFF',
        discountPercentage: 5,
        finalPrice: 7599,
        rating: 4.3,
        availability: 'In Stock',
        shopId: '2',
      },
      {
        id: 'pc17',
        productName: `${productQuery} - Budget`,
        shopName: 'Vijay Sales',
        shopAddress: `No. 112, Gandhi Road, Pondy Bazaar, ${locationName}`,
        originalPrice: 5999,
        offer: '15% OFF',
        discountPercentage: 15,
        finalPrice: 5099,
        rating: 4.2,
        availability: 'Limited Stock',
        shopId: '3',
      },
    ];
  }

  // Mark best deal and highest discount
  if (comparisons.length > 0) {
    const sortedByPrice = [...comparisons].sort((a, b) => a.finalPrice - b.finalPrice);
    const sortedByDiscount = [...comparisons].sort((a, b) => b.discountPercentage - a.discountPercentage);
    
    comparisons = comparisons.map(c => ({
      ...c,
      isBestDeal: c.id === sortedByPrice[0].id,
      isHighestDiscount: c.id === sortedByDiscount[0].id && sortedByDiscount[0].discountPercentage > 0,
    }));
  }

  return comparisons;
};
