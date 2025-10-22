'use client';

import Link from 'next/link';
import { ProductImage } from '@/components/ui/optimized-image';
import { getAllMacs } from '@/shared/data/macs';
import './mac-apple-style.scss';

export default function MacCatalogPage() {
  const macs = getAllMacs();

  // Определяем новые модели (M3 серия 2024 года)
  const newModels = ['macbook-air-m3-15', 'macbook-air-m3-13'];

  return (
    <div className="mac-catalog-page">
      {/* Hero Section */}
      <section className="mac-hero">
        <h1 className="mac-hero-title">Mac</h1>
        <p className="mac-hero-subtitle">
          Невероятная производительность. Потрясающий дизайн.
        </p>
      </section>

      {/* Catalog Section */}
      <section className="mac-catalog-container">
        <div className="mac-grid">
          {macs.map((mac) => {
            const isNew = newModels.includes(mac.id);

            return (
              <Link
                key={mac.id}
                href={`/mac/${mac.id}`}
                className="mac-card"
              >
                {/* New Badge */}
                {isNew && <span className="mac-badge-new">NEW</span>}

                {/* Product Image */}
                <div className="mac-card-image-wrapper">
                  <ProductImage
                    src={mac.images[0]}
                    productName={mac.name}
                    priority={false}
                    className="mac-card-image"
                  />
                </div>

                {/* Card Content */}
                <div className="mac-card-content">
                  {/* Title */}
                  <h2 className="mac-card-title">{mac.name}</h2>

                  {/* Description */}
                  <p className="mac-card-description">
                    {mac.description}
                  </p>

                  {/* Short Specs */}
                  {mac.shortSpecs && (
                    <div className="mac-card-specs">
                      {mac.shortSpecs.split(' • ').map((spec, index, array) => (
                        <span key={index}>
                          {spec}
                          {index < array.length - 1 && (
                            <span className="mac-card-specs-divider"> • </span>
                          )}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Color Selector */}
                  <div className="mac-card-colors">
                    {mac.colors.slice(0, 5).map((color, index) => (
                      <div
                        key={index}
                        className="mac-color-dot"
                        style={{ backgroundColor: color.code }}
                        title={color.name}
                        role="img"
                        aria-label={color.name}
                      />
                    ))}
                    {mac.colors.length > 5 && (
                      <span className="mac-card-specs" style={{ fontSize: '12px' }}>
                        +{mac.colors.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Footer with Price and Button */}
                  <div className="mac-card-footer">
                    <div className="mac-card-price">
                      <span className="mac-card-price-from">от </span>
                      {mac.price}
                    </div>
                    <p className="mac-card-installment">или в рассрочку 0%</p>

                    <div className="mac-buy-button">
                      Купить
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
