'use client';

import { useLang } from '@/lib/LangContext';
import { t } from '@/lib/i18n';

export default function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const { lang } = useLang();

  return (
    <div className="no-print relative max-w-md w-full">
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <circle cx="11" cy="11" r="8" strokeWidth="2" />
        <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t(lang, 'searchPlaceholder')}
        className="w-full pl-9 pr-4 py-2 rounded-full border border-gray-200 text-sm focus:outline-none focus:ring-2 bg-white"
        style={{ ['--tw-ring-color' as string]: '#1e7fd4' }}
      />
    </div>
  );
}
