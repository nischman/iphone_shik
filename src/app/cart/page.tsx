'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useCartStore } from '@/shared/lib/store';
import { CartItem } from '@/entities/cart/ui/CartItem';
import { Button } from '@/shared/ui/Button';
import { ShoppingBag, ArrowLeft } from 'lucide-react';

export default function CartPage() {
  const router = useRouter();
  const { items, totalItems, total, updateQuantity, removeItem } = useCartStore();

  // Если корзина пустая
  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
                <ShoppingBag className="w-12 h-12 text-muted-foreground" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Корзина пуста</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Добавьте товары в корзину, чтобы продолжить покупки
            </p>
            <Link href="/catalog">
              <Button size="lg" className="gap-2">
                <ArrowLeft className="w-5 h-5" />
                Перейти в каталог
              </Button>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Продолжить покупки
            </Link>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Корзина
              <span className="text-muted-foreground ml-3 text-2xl sm:text-3xl">
                ({totalItems} {totalItems === 1 ? 'товар' : totalItems > 4 ? 'товаров' : 'товара'})
              </span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl border border-border p-4 sm:p-6">
                <div className="space-y-4">
                  {items.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      onUpdateQuantity={updateQuantity}
                      onRemove={removeItem}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl border border-border p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-6">Итого</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-base">
                    <span className="text-muted-foreground">Товаров:</span>
                    <span className="font-medium">{totalItems}</span>
                  </div>
                  <div className="flex justify-between text-base">
                    <span className="text-muted-foreground">Сумма:</span>
                    <span className="font-medium">{total.toLocaleString()} ₽</span>
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between text-lg sm:text-xl font-bold">
                      <span>Итого:</span>
                      <span>{total.toLocaleString()} ₽</span>
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  onClick={() => router.push('/checkout')}
                  className="w-full rounded-full h-12 sm:h-14 text-base sm:text-lg font-semibold"
                >
                  Оформить заказ
                </Button>

                <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Бесплатная доставка от 50 000 ₽</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Официальная гарантия Apple</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Рассрочка 0% до 12 месяцев</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
