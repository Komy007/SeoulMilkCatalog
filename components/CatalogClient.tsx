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

      <main className="max-w-7xl mx-auto px-4 py-6 flex-1">
        {/* Search + count bar */}
        <div className="no-print flex items-center justify-between gap-4 mb-6 flex-wrap">
          <SearchBar value={search} onChange={setSearch} />
          <span className="text-sm text-gray-500">
            {filtered.length} {lang === 'ko' ? '개 제품' : 'products'}
          </span>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-24 text-gray-400">{t(lang, 'noResults')}</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtered.map(({ product, categoryLabel }) => (
              <ProductCard key={product.id} product={product} categoryLabel={categoryLabel} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
