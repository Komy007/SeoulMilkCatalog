'use client';

import Link from 'next/link';
import { useLang } from '@/lib/LangContext';
import { t } from '@/lib/i18n';
import ProductImage from './ProductImage';
import type { Product } from '@/lib/types';

export default function ProductCard({
  product,
  categoryLabel,
}: {
  product: Product;
  categoryLabel: string;
}) {
  const { lang } = useLang();

  const name = lang === 'ko' ? product.name_kr : product.name_en;
  const desc = lang === 'ko' ? product.desc_kr : product.desc_en;
  const image = product.images[0];

  return (
    <Link
      href={`/product/${product.id}?lang=${lang}`}
      className="group block rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow"
      style={{ borderRadius: '16px' }}
    >
      {/* Image area */}
      <div
        className="relative w-full aspect-square overflow-hidden"
        style={{ background: 'radial-gradient(ellipse at center, #ffffff 30%, #dbeafe 100%)' }}
      >
        {image ? (
          <ProductImage
            src={image}
            alt={name}
            className="w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div
            className="w-full h-full img-placeholder"
            style={{ background: 'radial-gradient(ellipse at center, #f0f9ff 0%, #dbeafe 100%)' }}
          />
        )}
        <span
          className="absolute top-3 left-3 text-xs font-bold px-2 py-0.5 rounded-full text-white"
          style={{ background: '#1e7fd4' }}
        >
          {categoryLabel}
        </span>
      </div>

      {/* Text area */}
      <div className="p-4">
        <h2 className="font-bold text-gray-900 text-sm leading-snug line-clamp-2 mb-1">{name}</h2>
        <p className="text-xs text-gray-500 mb-2">
          <span className="font-semibold">{t(lang, 'volume')}: </span>
          {product.volume}
        </p>
        <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">{desc}</p>
      </div>
    </Link>
  );
}
