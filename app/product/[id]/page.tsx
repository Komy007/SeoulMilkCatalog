import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { data, getProductById, getCategoryForProduct } from '@/lib/data';
import { LangProvider } from '@/lib/LangContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductDetailClient from '@/components/ProductDetailClient';
import type { Lang } from '@/lib/types';

export async function generateStaticParams() {
  return data.categories
    .flatMap((c) => c.products)
    .map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return {};
  return {
    title: `${product.name_en} — Seoul Milk Catalog`,
    description: product.desc_en,
    openGraph: {
      title: `${product.name_en} — Seoul Milk`,
      description: product.desc_en,
      images: product.images[0] ? [product.images[0]] : [],
    },
  };
}

export default async function ProductPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ lang?: string }>;
}) {
  const { id } = await params;
  const sp = await searchParams;
  const product = getProductById(id);
  if (!product) notFound();

  const category = getCategoryForProduct(id);
  const initial: Lang = sp.lang === 'en' ? 'en' : sp.lang === 'km' ? 'km' : 'ko';

  return (
    <LangProvider initial={initial}>
      <div className="min-h-screen flex flex-col">
        <Header brand={data.brand} />
        <ProductDetailClient
          product={product}
          category={category}
        />
        <Footer />
      </div>
    </LangProvider>
  );
}
