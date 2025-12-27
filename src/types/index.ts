export interface User {
  email: string;
  isAuthenticated: boolean;
}

export interface Location {
  id: string;
  name: string;
  district: string;
}

export interface Offer {
  id: string;
  title: string;
  discount: string;
  type: 'percentage' | 'flat' | 'bogo' | 'special';
  expiryDate?: string;
}

export interface ShopItem {
  id: string;
  name: string;
  category: string;
  price: number;
  offer?: string;
  discountPercentage?: number;
  finalPrice: number;
  availability: 'In Stock' | 'Limited Stock' | 'Out of Stock';
}

export interface Shop {
  id: string;
  name: string;
  address: {
    street: string;
    area: string;
    city: string;
    district: string;
    pincode: string;
  };
  phone: string;
  openingHours: string;
  offers: Offer[];
  rating: number;
  image?: string;
  category: string;
  items: ShopItem[];
}

export interface Product {
  id: string;
  name: string;
  category: string;
  image?: string;
}

export interface PriceComparison {
  id: string;
  productName: string;
  shopName: string;
  shopAddress: string;
  originalPrice: number;
  offer: string;
  discountPercentage: number;
  finalPrice: number;
  rating: number;
  availability: 'In Stock' | 'Limited Stock' | 'Out of Stock';
  shopId: string;
  isBestDeal?: boolean;
  isHighestDiscount?: boolean;
  category: string;
}
