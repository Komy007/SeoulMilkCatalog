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
  // 기본 영양소
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
  마그네슘: 'Magnesium',
  철분: 'Iron',
  유당: 'Lactose',
  // 비타민 — 공백 있는 형태
  '비타민 A': 'Vitamin A',
  '비타민 B1': 'Vitamin B1',
  '비타민 B2': 'Vitamin B2',
  '비타민 B6': 'Vitamin B6',
  '비타민 B12': 'Vitamin B12',
  '비타민 C': 'Vitamin C',
  '비타민 D': 'Vitamin D',
  '비타민 D3': 'Vitamin D3',
  '비타민 E': 'Vitamin E',
  '비타민 K': 'Vitamin K',
  // 비타민 — 공백 없는 형태
  비타민A: 'Vitamin A',
  비타민B1: 'Vitamin B1',
  비타민B2: 'Vitamin B2',
  비타민B6: 'Vitamin B6',
  비타민B12: 'Vitamin B12',
  비타민C: 'Vitamin C',
  비타민D: 'Vitamin D',
  비타민D3: 'Vitamin D3',
  '비타민D₃': 'Vitamin D3',
  비타민E: 'Vitamin E',
  비타민K: 'Vitamin K',
  // 아미노산
  로이신: 'Leucine',
  이소로이신: 'Isoleucine',
  발린: 'Valine',
  아르기닌: 'Arginine',
  타우린: 'Taurine',
  // 지방산
  'DHA': 'DHA',
  '알파-리놀렌산': 'Alpha-Linolenic Acid',
  // 기타
  나이아신: 'Niacin',
  엽산: 'Folate',
  바이오틴: 'Biotin',
  판토텐산: 'Pantothenic Acid',
  판테토산: 'Pantothenic Acid',
  알룰로스: 'Allulose',
  알룰로오스: 'Allulose',
};

export function translateNutritionKey(key: string, lang: 'ko' | 'en'): string {
  if (lang === 'ko') return key;
  if (nutritionLabelMap[key]) return nutritionLabelMap[key];
  // 미등록 비타민 패턴 처리: "비타민 X123" or "비타민X123" → "Vitamin X123"
  const vitaminMatch = key.match(/^비타민\s*(.+)$/);
  if (vitaminMatch) return `Vitamin ${vitaminMatch[1]}`;
  return key;
}

export function translateNutritionBasis(basis: string, lang: 'ko' | 'en'): string {
  if (lang === 'ko') return basis;
  // "100mL당 함량" → "per 100mL"
  const mlMatch = basis.match(/(\d+(?:\.\d+)?mL)/);
  if (mlMatch) return `Per ${mlMatch[1]}`;
  const gMatch = basis.match(/(\d+(?:\.\d+)?g)/);
  if (gMatch) return `Per ${gMatch[1]}`;
  return basis;
}
