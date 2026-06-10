import catalogData from '@/public/data.json';
import type { CatalogData, Product } from './types';

export const data = catalogData as unknown as CatalogData;

export function getAllProducts(): Product[] {
  return data.categories.flatMap((c) => c.products);
}

export function getProductById(id: string): Product | undefined {
  return getAllProducts().find((p) => p.id === id);
}

export function getCategoryForProduct(id: string): { name_kr: string; name_en: string } | undefined {
  for (const cat of data.categories) {
    if (cat.products.find((p) => p.id === id)) return cat;
  }
}

export const nutritionLabelMap: Record<string, string> = {
  열량: 'Energy',
  나트륨: 'Sodium',
  탄수화물: 'Carbohydrates',
  당류: 'Sugars',
  지방: 'Fat',
  트랜스지방: 'Trans Fat',
  포화지방: 'Saturated Fat',
  단백질: 'Protein',
  칼슘: 'Calcium',
  콜레스테롤: 'Cholesterol',
  식이섬유: 'Dietary Fiber',
  아연: 'Zinc',
  '비타민 A': 'Vitamin A',
  '비타민 B1': 'Vitamin B1',
  '비타민 B2': 'Vitamin B2',
  '비타민 B6': 'Vitamin B6',
  '비타민 B12': 'Vitamin B12',
  '비타민 C': 'Vitamin C',
  '비타민 D': 'Vitamin D',
  '비타민 E': 'Vitamin E',
  '비타민 K': 'Vitamin K',
};

export function translateNutritionKey(key: string, lang: 'ko' | 'en'): string {
  if (lang === 'ko') return key;
  return nutritionLabelMap[key] ?? key;
}
