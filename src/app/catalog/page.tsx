'use client';

import Link from 'next/link';
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
        <header className="catalog-header">
          <h1>
            All models. <span className="subtitle">Take your pick.</span>
          </h1>
        </header>

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
                  <img
                    src={iphone.images[0]}
                    alt={iphone.name}
                    loading="lazy"
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
