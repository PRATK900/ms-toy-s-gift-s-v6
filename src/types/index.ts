export type StoreId = 'shop1' | 'shop2' | 'shop3';

export interface StoreInfo {
  id: StoreId;
  name: string;
  shortName: string;
  tagline: string;
  departments: string[];
  hours: string;
  daysOpen: string;
  locationCity: string;
  addressNotice: string;
  accentColor: string;
  highlight: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  brand: string;
  stores: StoreId[];
  price: number;
  originalPrice?: number;
  featured: boolean;
  newArrival: boolean;
  description: string;
  image: string;
  ageRange?: string;
  rating?: number;
  inStock: boolean;
  tags?: string[];
  specs?: Record<string, string>;
}

export interface CategoryItem {
  id: string;
  name: string;
  description: string;
  itemCount: number;
  image: string;
  icon: string;
}

export interface FilterState {
  search: string;
  category: string;
  subcategory: string;
  store: StoreId | 'all';
  onlyFeatured: boolean;
  onlyNewArrival: boolean;
  sortBy: 'featured' | 'price-low' | 'price-high' | 'name';
}
