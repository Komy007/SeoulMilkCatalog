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
      {/* 상단 로고 바 */}
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">

          {/* 왼쪽: 서울우유 로고 */}
          <div className="flex-shrink-0">
            <SeoulMilkLogo />
          </div>

          {/* 가운데: 브랜드 타이틀 */}
          <div className="flex-1 text-center min-w-0 px-2">
            <div
              className="text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-0.5"
              style={{ color: '#1e7fd4', fontFamily: 'Montserrat, sans-serif' }}
            >
              SINCE {brand.since}
            </div>
            <h1
              className="text-base sm:text-xl font-extrabold leading-tight"
              style={{ fontFamily: 'Montserrat, sans-serif', color: '#1a1a1a' }}
            >
              {lang === 'ko' ? brand.name_kr : brand.name_en}
            </h1>
            <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5 hidden sm:block">
              {t(lang, 'heroSub')}
            </p>
          </div>

          {/* 오른쪽: FLS 로고 */}
          <div className="flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/fls-logo.svg"
              alt="Fu Lu Shou F&B Co., Ltd."
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
            />
          </div>
        </div>
      </div>

      {/* 하단 바: 언어 토글 + 번역 표기 */}
      <div
        className="max-w-7xl mx-auto px-4 py-1.5 flex items-center justify-end gap-3"
        style={{ borderTop: '1px solid #f0f4f8' }}
      >
        <p className="text-[10px] text-gray-400 leading-tight">
          {lang === 'ko'
            ? '영어로 번역 Fu Lu Shou F&B Co., Ltd.'
            : 'Translated by Fu Lu Shou F&B Co., Ltd.'}
        </p>
        <button
          onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}
          className="flex items-center rounded-full border-2 overflow-hidden cursor-pointer flex-shrink-0"
          style={{ borderColor: '#1e7fd4', fontFamily: 'Montserrat, sans-serif' }}
          aria-label="Toggle language"
        >
          <span
            className="px-3 py-1 text-xs font-bold transition-colors min-w-[52px] text-center"
            style={{
              background: lang === 'ko' ? '#1e7fd4' : 'transparent',
              color: lang === 'ko' ? '#fff' : '#1e7fd4',
            }}
          >
            한국어
          </span>
          <span
            className="px-3 py-1 text-xs font-bold transition-colors min-w-[60px] text-center"
            style={{
              background: lang === 'en' ? '#1e7fd4' : 'transparent',
              color: lang === 'en' ? '#fff' : '#1e7fd4',
            }}
          >
            ENGLISH
          </span>
        </button>
      </div>
    </header>
  );
}

function SeoulMilkLogo() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      className="w-14 h-14 sm:w-16 sm:h-16"
      aria-label="Seoul Milk"
    >
      {/* 빨간 원 배경 */}
      <circle cx="60" cy="60" r="52" fill="#E8001D" />

      {/* 태극 심볼 (흰색 원 + 곡선) */}
      <circle cx="60" cy="54" r="28" fill="white" />
      {/* 위 파란 반원 */}
      <path d="M32 54 A28 28 0 0 1 88 54 A14 14 0 0 1 60 54 A14 14 0 0 0 32 54Z" fill="#003087" />
      {/* 위 파란 작은 원 */}
      <circle cx="60" cy="40" r="7" fill="#003087" />
      {/* 아래 빨간 작은 원 */}
      <circle cx="60" cy="68" r="7" fill="#E8001D" />

      {/* 서울우유 한글 텍스트 */}
      <text
        x="60"
        y="100"
        textAnchor="middle"
        fill="white"
        fontSize="13"
        fontWeight="700"
        fontFamily="'Noto Sans KR', sans-serif"
      >
        서울우유
      </text>
    </svg>
  );
}
