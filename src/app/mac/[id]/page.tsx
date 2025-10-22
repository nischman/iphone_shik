import { notFound } from 'next/navigation';
import { ProductGallery } from '@/components/product/ProductGallery';
import { ProductDetails } from '@/components/product/ProductDetails';
import { ProductSpecs } from '@/components/product/ProductSpecs';
import { getMacById, getAllMacs } from '@/shared/data/macs';

interface MacPageProps {
  params: Promise<{
    id: string;
  }>;
}

// Generate static params for all Macs
export function generateStaticParams() {
  const macs = getAllMacs();
  return macs.map((mac) => ({
    id: mac.id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: MacPageProps) {
  const { id } = await params;
  const product = getMacById(id);

  if (!product) {
    return {
      title: 'Продукт не найден',
    };
  }

  return {
    title: `${product.name} - ${product.price} | iPhone Shik`,
    description: product.description,
    alternates: {
      canonical: `https://iphoneshik.kg/mac/${id}`,
    },
    openGraph: {
      title: `${product.name} - ${product.price}`,
      description: product.description,
      url: `https://iphoneshik.kg/mac/${id}`,
      type: 'website',
      siteName: 'iPhone Shik',
      images: [
        {
          url: product.images[0],
          width: 800,
          height: 800,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} - ${product.price}`,
      description: product.description,
      images: [product.images[0]],
    },
  };
}

export default async function MacPage({ params }: MacPageProps) {
  const { id } = await params;
  const product = getMacById(id);

  if (!product) {
    notFound();
  }

  // JSON-LD для структурированных данных
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images,
    brand: {
      '@type': 'Brand',
      name: 'Apple',
    },
    offers: {
      '@type': 'Offer',
      price: product.priceValue,
      priceCurrency: 'RUB',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'iPhone Shik',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '85',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-background">
        {/* Product Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto">
          {/* Gallery */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ProductGallery images={product.images} productName={product.name} />
          </div>

          {/* Product Details */}
          <div>
            <ProductDetails product={product} />
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <ProductSpecs specs={product.specs} />
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="bg-muted/30 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="rounded-2xl border border-border bg-card p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <svg
                    className="w-10 h-10 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Бесплатная доставка</h3>
                <p className="text-sm text-muted-foreground">
                  По Омску при заказе от 10 000 ₽
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <svg
                    className="w-10 h-10 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Официальная гарантия</h3>
                <p className="text-sm text-muted-foreground">
                  1 год гарантии от Apple
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <svg
                    className="w-10 h-10 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Рассрочка 0%</h3>
                <p className="text-sm text-muted-foreground">
                  До 12 месяцев без переплаты
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
