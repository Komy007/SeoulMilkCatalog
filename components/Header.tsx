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

        <button
          onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}
          className="flex items-center gap-2 px-4 py-2 rounded-full border-2 font-semibold text-sm transition-colors cursor-pointer"
          style={{
            borderColor: '#1e7fd4',
            color: '#1e7fd4',
            fontFamily: 'Montserrat, sans-serif',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = '#1e7fd4';
            (e.currentTarget as HTMLButtonElement).style.color = '#fff';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
            (e.currentTarget as HTMLButtonElement).style.color = '#1e7fd4';
          }}
        >
          {lang === 'ko' ? 'ENGLISH' : '한국어'}
        </button>
      </div>
    </header>
  );
}
