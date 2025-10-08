import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Apple style */}
      <section className="relative overflow-hidden bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-40">
          <div className="text-center space-y-5">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground">
              iPhone Shik
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto font-normal">
              Официальный магазин Apple в Кыргызстане
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button size="lg" asChild className="rounded-full px-6 h-12 text-base">
                <Link href="/catalog">Смотреть каталог</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-full px-6 h-12 text-base border-2"
              >
                <Link href="/about">Узнать больше</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Apple style cards */}
      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-5">
              Почему выбирают нас
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Мы предлагаем только оригинальную продукцию Apple с гарантией качества
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Оригинальная продукция',
                description: 'Только официальные товары Apple с полной гарантией',
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                title: 'Быстрая доставка',
                description: 'Доставляем по всему Кыргызстану в кратчайшие сроки',
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
              },
              {
                title: 'Профессиональная поддержка',
                description: 'Наши специалисты помогут с выбором и настройкой',
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-4 text-primary">{feature.icon}</div>
                  <CardTitle className="text-2xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Apple style */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground mb-5">
            Готовы начать покупки?
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Изучите наш каталог и найдите идеальное устройство Apple для себя
          </p>
          <Button size="lg" asChild className="rounded-full px-8 h-12 text-base">
            <Link href="/catalog">Перейти в каталог</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
