export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  icon?: string;
  parent?: string;
  subcategories?: Category[];
  productsCount: number;
  order: number;
  isActive: boolean;
  seo?: CategorySEO;
}

export interface CategorySEO {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  icon?: string;
  subcategories?: NavigationItem[];
}

export interface MenuData {
  [key: string]: string[];
}
