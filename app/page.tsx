import { data } from '@/lib/data';
import { LangProvider } from '@/lib/LangContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CatalogClient from '@/components/CatalogClient';
import type { Lang } from '@/lib/types';

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const params = await searchParams;
  const initial: Lang = params.lang === 'en' ? 'en' : params.lang === 'km' ? 'km' : 'ko';

  return (
    <LangProvider initial={initial}>
      <div className="min-h-screen flex flex-col">
        <Header brand={data.brand} />
        <CatalogClient data={data} />
        <Footer />
      </div>
    </LangProvider>
  );
}
