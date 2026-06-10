'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import type { Lang } from './types';

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const Ctx = createContext<LangCtx>({ lang: 'ko', setLang: () => {} });

export function LangProvider({
  children,
  initial,
}: {
  children: React.ReactNode;
  initial: Lang;
}) {
  const [lang, setLangState] = useState<Lang>(initial);

  useEffect(() => {
    const stored = localStorage.getItem('lang') as Lang | null;
    if (stored === 'ko' || stored === 'en') setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem('lang', l);
    const url = new URL(window.location.href);
    url.searchParams.set('lang', l);
    window.history.replaceState({}, '', url.toString());
  };

  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}

export function useLang() {
  return useContext(Ctx);
}
