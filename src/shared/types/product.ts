export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  images: string[];
  category: string;
  subcategory?: string;
  brand: string;
  inStock: boolean;
  stockQuantity: number;
  specifications: ProductSpecification[];
  colors?: ProductColor[];
  storage?: string[];
  rating?: number;
  reviewsCount?: number;
  isFeatured?: boolean;
  isNew?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductSpecification {
  key: string;
  value: string;
  group?: string;
}

export interface ProductColor {
  name: string;
  code: string;
  available: boolean;
}

export interface ProductFilters {
  category?: string;
  subcategory?: string;
  brand?: string[];
  priceRange?: {
    min: number;
    max: number;
  };
  inStock?: boolean;
  colors?: string[];
  storage?: string[];
  rating?: number;
  search?: string;
}

export interface ProductSort {
  field: 'price' | 'name' | 'rating' | 'createdAt';
  order: 'asc' | 'desc';
}
