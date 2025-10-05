import type { Metadata } from 'next';
import { Header, Footer } from '@/widgets';
import './globals.css';

export const metadata: Metadata = {
  title: 'iPhone Shik - Официальный магазин Apple в Кыргызстане',
  description:
    'Официальный магазин Apple в Бишкеке. iPhone, Mac, iPad, Apple Watch, AirPods и аксессуары. Гарантия, доставка, Trade-in. Лучшие цены на технику Apple.',
  keywords: 'iPhone, Mac, iPad, Apple Watch, AirPods, Apple, Бишкек, Кыргызстан, магазин Apple',
  authors: [{ name: 'iPhone Shik' }],
  openGraph: {
    title: 'iPhone Shik - Официальный магазин Apple',
    description:
      'Официальный магазин Apple в Бишкеке. iPhone, Mac, iPad, Apple Watch, AirPods и аксессуары.',
    type: 'website',
    locale: 'ru_KG',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="flex flex-col min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
