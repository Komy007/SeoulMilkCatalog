'use client';

import { useLang } from '@/lib/LangContext';
import { t } from '@/lib/i18n';
import type { Category } from '@/lib/types';

export default function CategoryBar({
  categories,
  active,
  onChange,
}: {
  categories: Category[];
  active: string;
  onChange: (v: string) => void;
}) {
  const { lang } = useLang();

  const tabs = [
    { key: 'all', label: t(lang, 'allCategories') },
    ...categories.map((c) => ({
      key: c.name_en,
      label: lang === 'ko' ? c.name_kr : c.name_en,
    })),
  ];

  return (
    <div
      className="no-print sticky top-0 z-20 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-1 overflow-x-auto py-2 scrollbar-hide">
          {tabs.map((tab) => {
            const isActive = active === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => onChange(tab.key)}
                className="whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer flex-shrink-0"
                style={
                  isActive
                    ? { background: '#1e7fd4', color: '#fff' }
                    : { background: '#f3f4f6', color: '#374151' }
                }
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
