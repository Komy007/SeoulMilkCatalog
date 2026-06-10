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
} as const;

export function t(lang: Lang, key: keyof (typeof ui)['ko']): string {
  return ui[lang][key];
}
