import catalogData from '@/public/data.json';
import type { CatalogData, Lang, Product } from './types';

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
  DHA: 'DHA',
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

export const nutritionLabelMapKm: Record<string, string> = {
  열량: 'ថាមពល',
  나트륨: 'សូដ្យូម',
  탄수화물: 'កាបូអ៊ីដ្រាត',
  당류: 'ស្ករ',
  지방: 'ខ្លាញ់',
  트랜스지방: 'ខ្លាញ់ត្រង់ស៍',
  포화지방: 'ខ្លាញ់ឆ្អែត',
  단백질: 'ប្រូតេអ៊ីន',
  칼슘: 'កាល់ស្យូម',
  콜레스테롤: 'កូឡេស្តេរ៉ុល',
  식이섬유: 'ជាតិសរសៃ',
  아연: 'ស័ង្កសី',
  마그네슘: 'ម៉ាញ៉េស្យូម',
  철분: 'ជាតិដែក',
  유당: 'ឡាក់តូស',
  로이신: 'លូស៊ីន',
  이소로이신: 'អ៊ីសូលូស៊ីន',
  발린: 'វ៉ាលីន',
  아르기닌: 'អាហ្ស៊ីនីន',
  타우린: 'ថូរីន',
  DHA: 'DHA',
  '알파-리놀렌산': 'អាស៊ីតអាល់ហ្វា-លីណូឡេនិក',
  나이아신: 'នីអាស៊ីន',
  엽산: 'អាស៊ីតហ្វូលិក',
  바이오틴: 'ប៊ីយ៉ូទីន',
  판토텐산: 'អាស៊ីតប៉ង់តូតេនិក',
  판테토산: 'អាស៊ីតប៉ង់តូតេនិក',
  알룰로스: 'អាលូឡូស',
  알룰로오스: 'អាលូឡូស',
};

export function translateNutritionKey(key: string, lang: Lang): string {
  if (lang === 'ko') return key;
  if (lang === 'km') {
    if (nutritionLabelMapKm[key]) return nutritionLabelMapKm[key];
    // 비타민 패턴: 비타민X / 비타민 X → វីតាមីន X
    const vitaminMatchKm = key.match(/^비타민\s*(.+)$/);
    if (vitaminMatchKm) return `វីតាមីន ${vitaminMatchKm[1]}`;
    // 영어 매핑으로 폴백
    if (nutritionLabelMap[key]) return nutritionLabelMap[key];
    return key;
  }
  // en
  if (nutritionLabelMap[key]) return nutritionLabelMap[key];
  const vitaminMatch = key.match(/^비타민\s*(.+)$/);
  if (vitaminMatch) return `Vitamin ${vitaminMatch[1]}`;
  return key;
}

export function translateNutritionBasis(basis: string, lang: Lang): string {
  if (lang === 'ko') return basis;
  const mlMatch = basis.match(/(\d+(?:\.\d+)?mL)/);
  const gMatch = basis.match(/(\d+(?:\.\d+)?g)/);
  const unit = mlMatch ? mlMatch[1] : gMatch ? gMatch[1] : null;
  if (!unit) return basis;
  if (lang === 'km') return `ក្នុង ${unit}`;
  return `Per ${unit}`;
}
