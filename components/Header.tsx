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
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <div
            className="text-xs font-bold tracking-widest uppercase mb-1"
            style={{ color: '#1e7fd4', fontFamily: 'Montserrat, sans-serif' }}
          >
            SEOUL MILK · SINCE {brand.since}
          </div>
          <h1
            className="text-2xl font-extrabold leading-tight"
            style={{ fontFamily: 'Montserrat, sans-serif', color: '#1a1a1a' }}
          >
            {lang === 'ko' ? brand.name_kr : brand.name_en}
          </h1>
          <p className="text-sm text-gray-500 mt-0.5">{t(lang, 'heroSub')}</p>
        </div>

        <div className="flex flex-col items-end gap-2">
          {/* 언어 토글 스위치 */}
          <button
            onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}
            className="flex items-center gap-0 rounded-full border-2 overflow-hidden cursor-pointer"
            style={{ borderColor: '#1e7fd4', fontFamily: 'Montserrat, sans-serif' }}
            aria-label="Toggle language"
          >
            <span
              className="px-3 py-1.5 text-xs font-bold transition-colors"
              style={{
                background: lang === 'ko' ? '#1e7fd4' : 'transparent',
                color: lang === 'ko' ? '#fff' : '#1e7fd4',
              }}
            >
              한국어
            </span>
            <span
              className="px-3 py-1.5 text-xs font-bold transition-colors"
              style={{
                background: lang === 'en' ? '#1e7fd4' : 'transparent',
                color: lang === 'en' ? '#fff' : '#1e7fd4',
              }}
            >
              ENGLISH
            </span>
          </button>

          {/* 번역 제공사 표기 */}
          <p className="text-xs text-gray-400 text-right leading-tight">
            {lang === 'ko'
              ? '영어로 번역 Fu Lu Shou F&B Co., Ltd.'
              : 'Translated into English by Fu Lu Shou F&B Co., Ltd.'}
          </p>
        </div>
      </div>
    </header>
  );
}
