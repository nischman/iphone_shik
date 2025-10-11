import Image, { ImageProps } from 'next/image';

interface OptimizedImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string;
  alt: string;
  priority?: boolean;
}

/**
 * Оптимизированный компонент изображения на основе next/image
 * Автоматически применяет лучшие практики для производительности
 */
export function OptimizedImage({
  src,
  alt,
  priority = false,
  sizes,
  ...props
}: OptimizedImageProps) {
  // Устанавливаем дефолтные sizes если не указаны
  const defaultSizes = sizes || '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px';

  return (
    <Image
      src={src}
      alt={alt}
      priority={priority}
      sizes={defaultSizes}
      {...props}
    />
  );
}

interface ProductImageProps {
  src: string;
  productName: string;
  priority?: boolean;
  className?: string;
}

/**
 * Специализированный компонент для изображений продуктов
 * Использует fill mode с object-fit: contain
 */
export function ProductImage({
  src,
  productName,
  priority = false,
  className = '',
}: ProductImageProps) {
  return (
    <OptimizedImage
      src={src}
      alt={productName}
      fill
      priority={priority}
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
      style={{ objectFit: 'contain' }}
      className={className}
    />
  );
}
