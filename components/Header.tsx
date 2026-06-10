'use client';

import { useLang } from '@/lib/LangContext';
import { t } from '@/lib/i18n';
import type { CatalogData } from '@/lib/types';

export default function Header({ brand }: { brand: CatalogData['brand'] }) {
  const { lang, setLang } = useLang();

  return (
    <header
      className="no-print bg-white border-b border-gray-100 shadow-sm"
      style={{ borderBottom: '3px solid #1e7fd4' }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-start justify-between gap-3">
        {/* 브랜드 영역 */}
        <div className="min-w-0 flex-1">
          <div
            className="text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-0.5"
            style={{ color: '#1e7fd4', fontFamily: 'Montserrat, sans-serif' }}
          >
            SEOUL MILK · SINCE {brand.since}
          </div>
          <h1
            className="text-lg sm:text-2xl font-extrabold leading-tight truncate"
            style={{ fontFamily: 'Montserrat, sans-serif', color: '#1a1a1a' }}
          >
            {lang === 'ko' ? brand.name_kr : brand.name_en}
          </h1>
          <p className="text-[11px] sm:text-sm text-gray-500 mt-0.5 leading-snug hidden sm:block">
            {t(lang, 'heroSub')}
          </p>
        </div>

        {/* 우측: 언어 토글 + 번역 표기 */}
        <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
          <button
            onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}
            className="flex items-center rounded-full border-2 overflow-hidden cursor-pointer"
            style={{ borderColor: '#1e7fd4', fontFamily: 'Montserrat, sans-serif' }}
            aria-label="Toggle language"
          >
            <span
              className="px-3 py-1.5 text-xs font-bold transition-colors min-w-[54px] text-center"
              style={{
                background: lang === 'ko' ? '#1e7fd4' : 'transparent',
                color: lang === 'ko' ? '#fff' : '#1e7fd4',
              }}
            >
              한국어
            </span>
            <span
              className="px-3 py-1.5 text-xs font-bold transition-colors min-w-[62px] text-center"
              style={{
                background: lang === 'en' ? '#1e7fd4' : 'transparent',
                color: lang === 'en' ? '#fff' : '#1e7fd4',
              }}
            >
              ENGLISH
            </span>
          </button>
          <p className="text-[10px] text-gray-400 text-right leading-tight max-w-[180px]">
            {lang === 'ko'
              ? '영어로 번역 Fu Lu Shou F&B Co., Ltd.'
              : 'Translated by Fu Lu Shou F&B Co., Ltd.'}
          </p>
        </div>
      </div>
    </header>
  );
}
