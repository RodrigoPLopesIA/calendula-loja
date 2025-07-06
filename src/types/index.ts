export interface Product {
  id: string;
  name: string;
  size: string;
  colors: string[];
  price: number;
  image: string;
  description: string;
  category: string;
}

export interface CartItem {
  product: Product;
  selectedColor: string;
  customColor?: string;
  quantity: number;
}

export interface Filters {
  search: string;
  minPrice: number;
  maxPrice: number;
  colors: string[];
  sizes: string[];
  category: string;
}