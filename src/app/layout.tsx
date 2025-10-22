import type { Metadata, Viewport } from 'next';
import { Header, Footer } from '@/widgets';
import './globals.scss';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'iPhone Shik - Официальный магазин Apple в России',
  description:
    'Официальный магазин Apple в Омске. iPhone, Mac, iPad, Apple Watch, AirPods и аксессуары. Гарантия, доставка, Trade-in. Лучшие цены на технику Apple.',
  keywords: 'iPhone, Mac, iPad, Apple Watch, AirPods, Apple, Омск, Россия, магазин Apple',
  authors: [{ name: 'iPhone Shik' }],
  alternates: {
    canonical: 'https://iphoneshik.ru',
  },
  openGraph: {
    title: 'iPhone Shik - Официальный магазин Apple',
    description:
      'Официальный магазин Apple в Омске. iPhone, Mac, iPad, Apple Watch, AirPods и аксессуары.',
    type: 'website',
    locale: 'ru_RU',
    url: 'https://iphoneshik.ru',
    siteName: 'iPhone Shik',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'iPhone Shik - Официальный магазин Apple',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iPhone Shik - Официальный магазин Apple',
    description:
      'Официальный магазин Apple в Омске. Гарантия, доставка, Trade-in.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://optim.tildacdn.one" />
        <link rel="dns-prefetch" href="https://optim.tildacdn.one" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
