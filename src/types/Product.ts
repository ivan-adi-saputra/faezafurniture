export interface Product {
  id: number;
  uuid: string;
  category_id: number;
  category_name: string;
  title: string;
  description: string;
  discount: number;
  price_discount: number;
  price: number;
  rating: number;
  specifications: Specification[];
  galleries: Gallery[];
}

interface Specification {
  key: string;
  value: string;
}

interface Gallery {
  url: string;
}

export interface ProductFilters {
  search: string;
  categories: number[];
  minPrice: string;
  maxPrice: string;
  minDiscount: string;
  maxDiscount: string;
  sort: SortFilter;
}

export enum SortFilter {
  MostSuitable = "most-suitable",
  Latest = "latest",
  HighestPrice = "highest-price",
  LowestPrice = "lowest-price",
}
