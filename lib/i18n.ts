import type { Lang } from './types';

export const ui = {
  ko: {
    catalogTitle: '제품 카탈로그',
    heroSub: '대한민국 No.1 유제품 협동조합 — 1937년부터 신선함을 지킵니다.',
    allCategories: '전체',
    searchPlaceholder: '제품명 검색...',
    noResults: '검색 결과가 없습니다.',
    volume: '용량',
    category: '카테고리',
    nutritionFacts: '영양성분표',
    servingBasis: '기준',
    backToList: '목록으로',
    contactForPrice: '가격 문의',
    footerName: '서울우유협동조합',
    footerAddr: '서울특별시 중랑구 중랑천로 71',
    footerSource: '출처: seoulmilk.co.kr',
  },
  en: {
    catalogTitle: 'Product Catalog',
    heroSub: "Korea's No.1 Dairy Cooperative — Delivering Freshness Since 1937.",
    allCategories: 'All',
    searchPlaceholder: 'Search products...',
    noResults: 'No products found.',
    volume: 'Volume',
    category: 'Category',
    nutritionFacts: 'Nutrition Facts',
    servingBasis: 'Basis',
    backToList: 'Back to List',
    contactForPrice: 'Contact for Pricing',
    footerName: 'Seoul Milk Cooperative',
    footerAddr: '71 Jungnangcheon-ro, Jungnang-gu, Seoul, Korea',
    footerSource: 'Source: seoulmilk.co.kr',
  },
  km: {
    catalogTitle: 'កាតាឡុកផលិតផល',
    heroSub: 'សហករណ៍ទឹកដោះគោលេខ១របស់កូរ៉េ — រក្សាភាពស្រស់តាំងពីឆ្នាំ 1937',
    allCategories: 'ទាំងអស់',
    searchPlaceholder: 'ស្វែងរកផលិតផល...',
    noResults: 'រកមិនឃើញផលិតផលទេ។',
    volume: 'ចំណុះ',
    category: 'ប្រភេទ',
    nutritionFacts: 'តារាងសារធាតុចិញ្ចឹម',
    servingBasis: 'មូលដ្ឋាន',
    backToList: 'ត្រឡប់ទៅបញ្ជី',
    contactForPrice: 'ទាក់ទងសម្រាប់តម្លៃ',
    footerName: 'សហករណ៍ទឹកដោះគោសេអ៊ូល',
    footerAddr: '71 Jungnangcheon-ro, Jungnang-gu, Seoul, Korea',
    footerSource: 'ប្រភព: seoulmilk.co.kr',
  },
} as const;

export function t(lang: Lang, key: keyof (typeof ui)['ko']): string {
  return ui[lang][key];
}

/** ko → kr값, en/km → en값 (km 전용값 있으면 우선) */
export function pick(lang: Lang, kr: string, en: string, km?: string): string {
  if (lang === 'ko') return kr;
  if (lang === 'km' && km) return km;
  return en;
}
