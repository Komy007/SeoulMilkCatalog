export interface Nutrition {
  기준: string;
  항목: Record<string, string>;
}

export interface Product {
  id: string;
  name_kr: string;
  name_en: string;
  type_kr: string;
  type_en: string;
  volume: string;
  desc_kr: string;
  desc_en: string;
  images: string[];
  nutrition: Nutrition | null;
}

export interface Category {
  name_kr: string;
  name_en: string;
  products: Product[];
}

export interface CatalogData {
  brand: {
    name_kr: string;
    name_en: string;
    since: number;
    source: string;
  };
  categories: Category[];
}

export type Lang = 'ko' | 'en';
