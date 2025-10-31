'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Smartphone, Tablet, Laptop, Watch, Headphones } from 'lucide-react';
import { getAllIPhones } from '@/shared/data/iphones';
import { ProductImage } from '@/components/ui/optimized-image';
import './page.scss';

export default function HomePage() {
  const iphones = getAllIPhones();
  const popularIPhones = iphones.slice(0, 4); // Первые 4 модели

  const newModels = ['iphone-17-pro', 'iphone-17-pro-max', 'iphone-17', 'iphone-17-air'];
  const intelligenceModels = ['iphone-17-pro', 'iphone-17-pro-max', 'iphone-16-pro', 'iphone-16-pro-max'];
  return (
    <main className="min-h-screen">
      

      {/* Apple.com Style Hero - iPhone 17 Pro */}
      <section className="first-section relative w-full overflow-hidden bg-black text-white">
        <div className="first-section__inner relative w-full h-screen">
          <div className="relative w-full h-full">
            {/* Full-screen clickable link overlay */}
            <Link
              href="/iphone-17-pro"
              className="absolute inset-0 z-10"
              aria-hidden="true"
              tabIndex={-1}
            >
              <span className="sr-only">Learn more about iPhone 17 Pro</span>
            </Link>

            {/* Content wrapper - positioned at top center */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 text-center px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-3 sm:mb-4">
                iPhone 17 Pro
              </h2>
              <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-300 mb-5 sm:mb-6">
                Все на профессиональном уровне.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center relative z-30">
                <Link
                  href="/iphone-17-pro"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 h-10 rounded-full text-sm font-semibold transition-colors shadow-lg flex items-center justify-center"
                  aria-label="Learn more, iPhone 17 Pro"
                >
                  Узнать больше
                </Link>

                <Link
                  href="/catalog"
                  className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 h-10 rounded-full text-sm font-semibold transition-colors flex items-center justify-center"
                  aria-label="Buy, iPhone 17 Pro"
                >
                  Купить
                </Link>
              </div>
            </div>

            {/* Image at bottom - Apple style panoramic */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0 w-full flex justify-center overflow-hidden">
              <figure
                className="unitImageIphone17Pro"
                role="img"
                aria-label="iPhone 17 Pro in cosmic orange finish, Pro Fusion camera system, 3 lenses, microphone, flash"
              >
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section - iPhone 17 Pro */}
      {/* <section className="relative bg-black text-white overflow-hidden min-h-[550px] sm:min-h-[650px] lg:min-h-[700px] flex items-center">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative z-10">
          <div className="text-center space-y-6 max-w-5xl mx-auto">
            <div className="space-y-3">
              <p className="text-sm sm:text-base font-medium text-gray-300 uppercase tracking-wider">
                Новинка
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                iPhone 17 Pro
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-medium">
                Титановый. Прочный. Легкий.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-shadow">
                <Link href="/catalog">
                  Купить
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-blue-600 text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white rounded-full px-8 h-12 text-base font-semibold"
              >
                <Link href="/catalog">Узнать больше</Link>
              </Button>
            </div>
            <div className="text-sm sm:text-base text-gray-400 pt-4">
              От 95 990 ₽ или в рассрочку 0%
            </div>
          </div>
        </div>
      </section> */}

      {/* iPhone 17 Banner with Background */}
      <section className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-pink-950/20 dark:via-purple-950/20 dark:to-blue-950/20 overflow-hidden min-h-[500px] sm:min-h-[600px] lg:min-h-[650px] flex items-center">
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-22 relative z-10">
          <div className="text-center space-y-6 max-w-5xl mx-auto">
            <div className="space-y-3">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                iPhone 17
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground font-medium">
                Новый дизайн. Яркие цвета. A18.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" asChild variant="default" className="rounded-full px-8 h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-shadow">
                <Link href="/catalog">
                  Купить
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-blue-600 text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white rounded-full px-8 h-12 text-base font-semibold"
              >
                <Link href="/catalog">Узнать больше</Link>
              </Button>
            </div>
            <div className="text-sm sm:text-base text-muted-foreground pt-3">
              От 79 990 ₽ или в рассрочку 0%
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {/* iPhone */}
            <Link
              href="/catalog"
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 p-8 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <Smartphone className="w-12 h-12 text-blue-600" />
                <div>
                  <h3 className="text-xl font-bold mb-1">iPhone</h3>
                  <p className="text-sm text-muted-foreground">От 44 990 ₽</p>
                </div>
              </div>
            </Link>

            {/* iPad */}
            <Link
              href="/catalog"
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-800 dark:to-purple-900 p-8 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <Tablet className="w-12 h-12 text-purple-600" />
                <div>
                  <h3 className="text-xl font-bold mb-1">iPad</h3>
                  <p className="text-sm text-muted-foreground">Скоро в продаже</p>
                </div>
              </div>
            </Link>

            {/* Mac */}
            <Link
              href="/mac"
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-8 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <Laptop className="w-12 h-12 text-gray-600" />
                <div>
                  <h3 className="text-xl font-bold mb-1">Mac</h3>
                  <p className="text-sm text-muted-foreground">От 67 990 ₽</p>
                </div>
              </div>
            </Link>

            {/* Apple Watch */}
            <Link
              href="/catalog"
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-100 to-red-200 dark:from-red-800 dark:to-red-900 p-8 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <Watch className="w-12 h-12 text-red-600" />
                <div>
                  <h3 className="text-xl font-bold mb-1">Apple Watch</h3>
                  <p className="text-sm text-muted-foreground">Скоро в продаже</p>
                </div>
              </div>
            </Link>

            {/* AirPods */}
            <Link
              href="/catalog"
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-100 to-green-200 dark:from-green-800 dark:to-green-900 p-8 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <Headphones className="w-12 h-12 text-green-600" />
                <div>
                  <h3 className="text-xl font-bold mb-1">AirPods</h3>
                  <p className="text-sm text-muted-foreground">Скоро в продаже</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Promo Banners */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Trade-in Banner */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 to-pink-500 p-8 sm:p-12 text-white">
              <div className="relative z-10 space-y-4">
                <h3 className="text-3xl sm:text-4xl font-bold">Trade-in</h3>
                <p className="text-lg sm:text-xl opacity-90">
                  Обменяйте старое устройство на новое с выгодой
                </p>
                <Button
                  size="lg"
                  variant="secondary"
                  asChild
                  className="bg-white text-orange-600 hover:bg-gray-100 rounded-full px-8 h-12 text-base font-semibold"
                >
                  <Link href="/about">
                    Узнать больше
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Installment Banner */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 p-8 sm:p-12 text-white">
              <div className="relative z-10 space-y-4">
                <h3 className="text-3xl sm:text-4xl font-bold">Рассрочка 0%</h3>
                <p className="text-lg sm:text-xl opacity-90">
                  Покупайте технику Apple в рассрочку до 12 месяцев без переплаты
                </p>
                <Button
                  size="lg"
                  variant="secondary"
                  asChild
                  className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 h-12 text-base font-semibold"
                >
                  <Link href="/about">
                    Узнать условия
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Почему выбирают iPhone Shik
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Официальный магазин Apple техники в России
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Feature 1 */}
            <div className="text-center space-y-4 p-6 rounded-2xl hover:bg-muted/50 transition-colors">
              <div className="w-16 h-16 mx-auto rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">100% Оригинал</h3>
              <p className="text-muted-foreground">
                Только официальные товары Apple с гарантией производителя
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center space-y-4 p-6 rounded-2xl hover:bg-muted/50 transition-colors">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Быстрая доставка</h3>
              <p className="text-muted-foreground">
                Бесплатная доставка по Омску от 50 000 ₽
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center space-y-4 p-6 rounded-2xl hover:bg-muted/50 transition-colors">
              <div className="w-16 h-16 mx-auto rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Рассрочка 0%</h3>
              <p className="text-muted-foreground">
                Покупайте в рассрочку до 12 месяцев без переплаты
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center space-y-4 p-6 rounded-2xl hover:bg-muted/50 transition-colors">
              <div className="w-16 h-16 mx-auto rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Поддержка 24/7</h3>
              <p className="text-muted-foreground">
                Профессиональная консультация и помощь в любое время
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 sm:mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
                Популярные товары
              </h2>
              <p className="text-lg text-muted-foreground">
                Самые продаваемые устройства Apple
              </p>
            </div>
            <Button variant="ghost" asChild className="hidden sm:flex">
              <Link href="/catalog" className="flex items-center gap-2">
                Смотреть все
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularIPhones.map((iphone) => {
              const isNew = newModels.includes(iphone.id);
              const hasIntelligence = intelligenceModels.includes(iphone.id);

              return (
                <Link
                  key={iphone.id}
                  href={`/${iphone.id}`}
                  className="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 p-6 hover:shadow-2xl transition-shadow duration-300 border border-border/50"
                >
                  {/* Badge */}
                  <div className="mb-3 min-h-[20px]">
                    {isNew && (
                      <span className="text-xs font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-wider">
                        NEW
                      </span>
                    )}
                    {hasIntelligence && !isNew && (
                      <span className="inline-block bg-gray-600 dark:bg-gray-500 text-white text-[10px] font-semibold px-2 py-1 rounded-lg uppercase tracking-wider">
                        Apple Intelligence
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 text-center">
                    {iphone.name}
                  </h3>

                  {/* Image */}
                  <div className="relative w-full h-64 mb-4 flex items-center justify-center">
                    <ProductImage
                      src={iphone.images[0]}
                      productName={iphone.name}
                    />
                  </div>

                  {/* Colors */}
                  <div className="flex gap-2 justify-center mb-4 flex-wrap">
                    {iphone.colors.slice(0, 5).map((color, index) => (
                      <div
                        key={index}
                        className="w-4 h-4 rounded-full border-2 border-transparent"
                        style={{ backgroundColor: color.code }}
                        title={color.name}
                      />
                    ))}
                  </div>

                  {/* Price and Button */}
                  <div className="flex items-center justify-between gap-3 mt-auto pt-4">
                    <p className="text-sm text-foreground flex-1">
                      От {iphone.price} или в рассрочку
                    </p>
                    <span className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors">
                      Купить
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Button variant="default" asChild className="rounded-full">
              <Link href="/catalog">
                Смотреть все товары
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Найдите свой идеальный iPhone
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 max-w-3xl mx-auto">
            13 моделей на выбор - от классического iPhone 11 до новейшего iPhone 17 Pro Max
          </p>
          <Button size="lg" asChild className="bg-white text-black hover:bg-gray-200 rounded-full px-10 h-14 text-lg font-semibold">
            <Link href="/catalog">
              Смотреть каталог
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
