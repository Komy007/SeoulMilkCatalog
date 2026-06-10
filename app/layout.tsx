import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Seoul Milk — Product Catalog',
  description: "Official B2B product catalog of Seoul Milk Cooperative, Korea's No.1 dairy brand since 1937.",
  openGraph: {
    title: 'Seoul Milk — Product Catalog',
    description: "Official B2B product catalog of Seoul Milk Cooperative, Korea's No.1 dairy brand since 1937.",
    siteName: 'Seoul Milk Catalog',
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Noto+Sans+KR:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
