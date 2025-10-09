'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-muted/30">
        <Image
          src={images[selectedImage]}
          alt={`${productName} - изображение ${selectedImage + 1}`}
          fill
          className="object-contain p-8 transition-opacity duration-300"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`
              relative aspect-square overflow-hidden rounded-2xl bg-muted/30
              transition-all duration-300 hover:scale-105
              ${
                selectedImage === index
                  ? 'ring-2 ring-primary ring-offset-2 ring-offset-background'
                  : 'opacity-60 hover:opacity-100'
              }
            `}
          >
            <Image
              src={image}
              alt={`${productName} - миниатюра ${index + 1}`}
              fill
              className="object-contain p-2"
              sizes="(max-width: 768px) 25vw, 12vw"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
