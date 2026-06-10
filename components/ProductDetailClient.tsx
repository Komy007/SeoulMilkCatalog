'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLang } from '@/lib/LangContext';
import { t } from '@/lib/i18n';
import { translateNutritionKey, translateNutritionBasis } from '@/lib/data';
import ProductImage from './ProductImage';
import type { Product } from '@/lib/types';

interface Props {
  product: Product;
  category?: { name_kr: string; name_en: string };
}

export default function ProductDetailClient({ product, category }: Props) {
  const { lang } = useLang();
  const [activeImg, setActiveImg] = useState(0);

  const primaryName = lang === 'ko' ? product.name_kr : product.name_en;
  const secondaryName = lang === 'ko' ? product.name_en : product.name_kr;
  const desc = lang === 'ko' ? product.desc_kr : product.desc_en;
  const catLabel = category ? (lang === 'ko' ? category.name_kr : category.name_en) : '';

  return (
    <main className="max-w-5xl mx-auto px-4 py-8 flex-1 w-full">
      {/* Back link */}
      <Link
        href={`/?lang=${lang}`}
        className="no-print inline-flex items-center gap-1 text-sm mb-6 font-semibold"
        style={{ color: '#1e7fd4' }}
      >
        ← {t(lang, 'backToList')}
      </Link>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Gallery */}
        <div>
          <div
            className="w-full aspect-square rounded-2xl overflow-hidden mb-3"
            style={{
              background: 'radial-gradient(ellipse at center, #ffffff 30%, #dbeafe 100%)',
              borderRadius: '16px',
            }}
          >
            {product.images.length > 0 ? (
              <ProductImage
                src={product.images[activeImg]}
                alt={primaryName}
                className="w-full h-full"
              />
            ) : (
              <div className="w-full h-full img-placeholder" />
            )}
          </div>
          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="no-print flex gap-2 flex-wrap">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className="w-14 h-14 rounded-lg overflow-hidden border-2 transition-colors cursor-pointer"
                  style={{
                    borderColor: i === activeImg ? '#1e7fd4' : '#e5e7eb',
                    background: 'radial-gradient(ellipse, #f0f9ff, #dbeafe)',
                  }}
                >
                  <ProductImage src={img} alt={`${primaryName} ${i + 1}`} className="w-full h-full" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div>
          {catLabel && (
            <span
              className="inline-block text-xs font-bold px-3 py-1 rounded-full text-white mb-3"
              style={{ background: '#1e7fd4' }}
            >
              {catLabel}
            </span>
          )}
          <h1 className="text-2xl font-extrabold text-gray-900 leading-tight mb-1">
            {primaryName}
          </h1>
          <p className="text-sm text-gray-400 mb-4 font-medium">{secondaryName}</p>

          <div className="space-y-2 mb-6">
            <div className="flex gap-2 text-sm">
              <span className="font-semibold text-gray-600 w-20 flex-shrink-0">{t(lang, 'volume')}</span>
              <span className="text-gray-800">{product.volume}</span>
            </div>
            {catLabel && (
              <div className="flex gap-2 text-sm">
                <span className="font-semibold text-gray-600 w-20 flex-shrink-0">{t(lang, 'category')}</span>
                <span className="text-gray-800">{catLabel}</span>
              </div>
            )}
          </div>

          <p className="text-sm text-gray-700 leading-relaxed mb-6">{desc}</p>

          <div
            className="no-print inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white cursor-default"
            style={{ background: '#1e7fd4' }}
          >
            {t(lang, 'contactForPrice')}
          </div>
        </div>
      </div>

      {/* Nutrition */}
      {product.nutrition && (
        <div className="rounded-2xl border border-gray-100 shadow-sm overflow-hidden" style={{ borderRadius: '16px' }}>
          <div
            className="px-6 py-4"
            style={{ background: '#1e7fd4' }}
          >
            <h2 className="font-extrabold text-white text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t(lang, 'nutritionFacts')}
            </h2>
            <p className="text-blue-100 text-xs mt-0.5">
              {t(lang, 'servingBasis')}: {translateNutritionBasis(product.nutrition.기준, lang)}
            </p>
          </div>
          <table className="w-full text-sm">
            <tbody>
              {Object.entries(product.nutrition.항목).map(([key, value], i) => (
                <tr key={key} className={i % 2 === 0 ? 'bg-white' : 'bg-blue-50/30'}>
                  <td className="px-6 py-2 font-medium text-gray-700">
                    {translateNutritionKey(key, lang)}
                  </td>
                  <td className="px-6 py-2 text-right text-gray-900 font-semibold">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
