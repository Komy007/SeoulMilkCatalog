export interface Nutrition {
  기준: string;
  항목: Record<string, string>;
}

export interface Product {
  id: string;
  name_kr: string;
  name_en: string;
  name_km?: string;
  type_kr: string;
  type_en: string;
  volume: string;
  desc_kr: string;
  desc_en: string;
  desc_km?: string;
  images: string[];
  nutrition: Nutrition | null;
}

export interface Category {
  name_kr: string;
  name_en: string;
  name_km?: string;
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

export type Lang = 'ko' | 'en' | 'km';
