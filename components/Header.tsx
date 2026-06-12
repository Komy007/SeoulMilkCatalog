'use client';

import { useLang } from '@/lib/LangContext';
import { t, pick } from '@/lib/i18n';
import type { CatalogData, Lang } from '@/lib/types';

export default function Header({ brand }: { brand: CatalogData['brand'] }) {
  const { lang, setLang } = useLang();

  const brandName = pick(lang, brand.name_kr, brand.name_en);

  const translatorNote = {
    ko: '영어·크메르어 번역 Fu Lu Shou F&B Co., Ltd.',
    en: 'Translated by Fu Lu Shou F&B Co., Ltd.',
    km: 'បកប្រែដោយ Fu Lu Shou F&B Co., Ltd.',
  }[lang];

  const segments: { key: Lang; label: string }[] = [
    { key: 'ko', label: '한국어' },
    { key: 'en', label: 'ENGLISH' },
    { key: 'km', label: 'ខ្មែរ' },
  ];

  return (
    <header
      className="no-print bg-white border-b border-gray-100 shadow-sm"
      style={{ borderBottom: '3px solid #1e7fd4' }}
    >
      {/* 상단 로고 바 */}
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">

          {/* 서울우유 로고 */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/seoulmilk-logo.png"
            alt="Seoul Milk"
            className="w-52 h-auto sm:w-56 sm:h-36 object-contain"
          />

          {/* 브랜드 타이틀 */}
          <div className="text-center sm:flex-1 sm:min-w-0 sm:px-2">
            <div
              className="text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-0.5"
              style={{ color: '#1e7fd4', fontFamily: 'Montserrat, sans-serif' }}
            >
              SINCE {brand.since}
            </div>
            <h1
              className="text-lg sm:text-xl font-extrabold leading-tight"
              style={{ fontFamily: 'Montserrat, sans-serif', color: '#1a1a1a' }}
            >
              {brandName}
            </h1>
            <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5">
              {t(lang, 'heroSub')}
            </p>
          </div>

          {/* FLS 로고 */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/fls-logo.svg"
            alt="Fu Lu Shou F&B Co., Ltd."
            className="w-20 h-20 sm:w-20 sm:h-20 object-contain"
          />
        </div>
      </div>

      {/* 하단 바: 언어 토글 + 번역 표기 */}
      <div
        className="max-w-7xl mx-auto px-4 py-1.5 flex items-center justify-end gap-3"
        style={{ borderTop: '1px solid #f0f4f8' }}
      >
        <p className="text-[10px] text-gray-400 leading-tight">{translatorNote}</p>

        {/* 3분할 pill 토글 */}
        <div
          className="flex items-center rounded-full border-2 overflow-hidden flex-shrink-0"
          style={{ borderColor: '#1e7fd4', fontFamily: 'Montserrat, sans-serif' }}
        >
          {segments.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setLang(key)}
              className="px-3 py-1 text-xs font-bold transition-colors cursor-pointer"
              style={{
                background: lang === key ? '#1e7fd4' : 'transparent',
                color: lang === key ? '#fff' : '#1e7fd4',
                minWidth: key === 'km' ? '52px' : key === 'en' ? '60px' : '52px',
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
