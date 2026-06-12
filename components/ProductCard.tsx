'use client';

import Link from 'next/link';
import { useLang } from '@/lib/LangContext';
import { t, pick } from '@/lib/i18n';
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

  const name = pick(lang, product.name_kr, product.name_en, product.name_km);
  const desc = pick(lang, product.desc_kr, product.desc_en, product.desc_km);
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
          className="absolute top-2 left-2 sm:top-3 sm:left-3 text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full text-white"
          style={{ background: '#1e7fd4' }}
        >
          {categoryLabel}
        </span>
      </div>

      {/* Text area */}
      <div className="p-2.5 sm:p-4">
        <h2 className="font-bold text-gray-900 text-xs sm:text-sm leading-snug line-clamp-2 mb-1">{name}</h2>
        <p className="text-[10px] sm:text-xs text-gray-500 mb-1.5 line-clamp-1">
          <span className="font-semibold">{t(lang, 'volume')}: </span>
          {product.volume}
        </p>
        <p className="text-[10px] sm:text-xs text-gray-600 line-clamp-2 sm:line-clamp-3 leading-relaxed">{desc}</p>
      </div>
    </Link>
  );
}
