'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import type { IPhoneModel } from '@/shared/data/iphones';

interface ProductDetailsProps {
  product: IPhoneModel;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedStorage, setSelectedStorage] = useState(product.storage[0]);

  return (
    <div className="flex flex-col gap-8">
      {/* Product Info */}
      <div className="space-y-3">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground">
          {product.name}
        </h1>
        <p className="text-2xl sm:text-3xl text-muted-foreground">{product.price}</p>
      </div>

      {/* Description */}
      <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
        {product.description}
      </p>

      {/* Color Selector */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Цвет</h3>
          <span className="text-sm text-muted-foreground">{selectedColor.name}</span>
        </div>
        <div className="flex flex-wrap gap-3">
          {product.colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color)}
              disabled={!color.available}
              className={`
                relative h-12 w-12 rounded-full transition-all duration-300
                ${!color.available ? 'cursor-not-allowed opacity-30' : 'hover:scale-110'}
                ${
                  selectedColor.name === color.name
                    ? 'ring-2 ring-primary ring-offset-2 ring-offset-background scale-110'
                    : ''
                }
              `}
              style={{ backgroundColor: color.code }}
              title={color.name}
            >
              {!color.available && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-[2px] w-full rotate-45 bg-destructive" />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Storage Selector */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Объем памяти</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {product.storage.map((storage) => (
            <button
              key={storage}
              onClick={() => setSelectedStorage(storage)}
              className={`
                rounded-2xl border-2 px-6 py-4 text-center font-medium
                transition-all duration-300 hover:scale-105
                ${
                  selectedStorage === storage
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-border bg-background text-foreground hover:border-primary/50'
                }
              `}
            >
              {storage}
            </button>
          ))}
        </div>
      </div>

      {/* Buy Button */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          size="lg"
          className="flex-1 rounded-full h-14 text-lg font-medium hover:scale-105 transition-transform duration-300"
        >
          Купить
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="flex-1 rounded-full h-14 text-lg font-medium border-2 hover:scale-105 transition-transform duration-300"
        >
          Добавить в корзину
        </Button>
      </div>

      {/* Features */}
      <div className="space-y-3 pt-4 border-t border-border">
        <h3 className="text-lg font-semibold">Ключевые особенности</h3>
        <ul className="space-y-2">
          {product.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-muted-foreground"
            >
              <svg
                className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
