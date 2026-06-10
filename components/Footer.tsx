'use client';

import { useLang } from '@/lib/LangContext';
import { t } from '@/lib/i18n';

export default function Footer() {
  const { lang } = useLang();

  return (
    <footer
      className="no-print mt-auto py-8 text-center text-xs text-gray-400 border-t border-gray-100"
    >
      <p className="font-semibold text-gray-600">{t(lang, 'footerName')}</p>
      <p className="mt-1">{t(lang, 'footerAddr')}</p>
      <p className="mt-1">{t(lang, 'footerSource')}</p>
      <p className="mt-2">© {new Date().getFullYear()} Seoul Milk Cooperative. All rights reserved.</p>
    </footer>
  );
}
