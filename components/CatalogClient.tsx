'use client';

import { useState } from 'react';
import { useLang } from '@/lib/LangContext';
import { t } from '@/lib/i18n';
import CategoryBar from './CategoryBar';
import SearchBar from './SearchBar';
import ProductCard from './ProductCard';
import type { CatalogData } from '@/lib/types';

export default function CatalogClient({ data }: { data: CatalogData }) {
  const { lang } = useLang();
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = data.categories
    .filter((c) => activeCategory === 'all' || c.name_en === activeCategory)
    .flatMap((c) =>
      c.products
        .filter(
          (p) =>
            !search ||
            p.name_kr.includes(search) ||
            p.name_en.toLowerCase().includes(search.toLowerCase())
        )
        .map((p) => ({
          product: p,
          categoryLabel: lang === 'ko' ? c.name_kr : c.name_en,
        }))
    );

  return (
    <>
      <CategoryBar
        categories={data.categories}
        active={activeCategory}
        onChange={setActiveCategory}
      />

      <main className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6 flex-1">
        {/* Search + count bar */}
        <div className="no-print flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
          <SearchBar value={search} onChange={setSearch} />
          <span className="text-xs sm:text-sm text-gray-400 sm:flex-shrink-0">
            {filtered.length} {lang === 'ko' ? '개 제품' : 'products'}
          </span>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-24 text-gray-400 text-sm">{t(lang, 'noResults')}</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
            {filtered.map(({ product, categoryLabel }) => (
              <ProductCard key={product.id} product={product} categoryLabel={categoryLabel} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
