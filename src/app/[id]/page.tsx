import { notFound } from 'next/navigation';
import { ProductGallery } from '@/components/product/ProductGallery';
import { ProductDetails } from '@/components/product/ProductDetails';
import { ProductSpecs } from '@/components/product/ProductSpecs';
import { getIPhoneById, getAllIPhones } from '@/shared/data/iphones';

interface ProductPageProps {
  params: {
    id: string;
  };
}

// Generate static params for all iPhones
export function generateStaticParams() {
  const iphones = getAllIPhones();
  return iphones.map((iphone) => ({
    id: iphone.id,
  }));
}

// Generate metadata for SEO
export function generateMetadata({ params }: ProductPageProps) {
  const product = getIPhoneById(params.id);

  if (!product) {
    return {
      title: 'Продукт не найден',
    };
  }

  return {
    title: `${product.name} - ${product.price} | iPhone Shik`,
    description: product.description,
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getIPhoneById(params.id);

  if (!product) {
    notFound();
  }

  return (
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
                  По Бишкеку при заказе от 10 000 сом
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
  );
}
