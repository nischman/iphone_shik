'use client';

import Link from 'next/link';
import { ProductImage } from '@/components/ui/optimized-image';
import { getAllIPhones } from '@/shared/data/iphones';
import './catalog.css';

export default function CatalogPage() {
  const iphones = getAllIPhones();

  // Определяем новые модели (iPhone 17 серия)
  const newModels = ['iphone-17-pro', 'iphone-17-pro-max', 'iphone-17', 'iphone-17-air'];

  // Определяем модели с Apple Intelligence (iPhone 17 и 16 Pro серия)
  const intelligenceModels = ['iphone-17-pro', 'iphone-17-pro-max', 'iphone-16-pro', 'iphone-16-pro-max'];

  return (
    <main className="min-h-screen bg-apple-gray">
      <section className="iphone-catalog">
        <div className="catalog-header">
          <div className='catalog-shop'>
            <h1 className='catalog-shop-title'>Купить iPhone</h1>
          </div>
          <h2 className='catalog-title'>Все модели. <span className="subtitle">Сделай свой выбор.</span>
          </h2>
        </div>

        <div className="products-grid">
          {iphones.map((iphone) => {
            const isNew = newModels.includes(iphone.id);
            const hasIntelligence = intelligenceModels.includes(iphone.id);

            return (
              <article key={iphone.id} className="product-card">
                {isNew && <span className="badge-new">NEW</span>}
                {hasIntelligence && !isNew && (
                  <span className="badge-intelligence">APPLE INTELLIGENCE</span>
                )}

                <h2 className="product-title">{iphone.name}</h2>

                <div className="product-image">
                  <ProductImage
                    src={iphone.images[0]}
                    productName={iphone.name}
                  />
                </div>

                <div className="color-selector">
                  {iphone.colors.map((color, index) => (
                    <div
                      key={index}
                      className="color-dot"
                      style={{ backgroundColor: color.code }}
                      title={color.name}
                    />
                  ))}
                </div>

                <div className="price-buy-container">
                  <p className="product-price">
                    От {iphone.price} или в рассрочку
                  </p>

                  <Link href={`/${iphone.id}`} className="btn-buy">
                    Купить
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
