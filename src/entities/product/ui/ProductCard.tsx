import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/shared/types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg overflow-hidden"
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded">
            Новинка
          </span>
        )}
        {discount > 0 && (
          <span className="absolute top-2 right-2 bg-destructive text-destructive-foreground text-xs font-medium px-2 py-1 rounded">
            -{discount}%
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
          {product.name}
        </h3>

        {product.rating && (
          <div className="flex items-center gap-1 mb-2">
            <span className="text-yellow-500">★</span>
            <span className="text-sm text-muted-foreground">
              {product.rating} {product.reviewsCount && `(${product.reviewsCount})`}
            </span>
          </div>
        )}

        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-foreground">
            {product.price.toLocaleString()} ₽
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {product.originalPrice.toLocaleString()} ₽
            </span>
          )}
        </div>

        {!product.inStock && <p className="text-sm text-destructive mt-2">Нет в наличии</p>}
      </div>
    </Link>
  );
}
