export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
          <div className="text-center space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground animate-fade-in-up">
              iPhone Shik
            </h1>
            <p
              className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              Официальный магазин Apple в Кыргызстане
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
                Смотреть каталог
              </button>
              <button className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-all duration-300 transform hover:scale-105">
                Узнать больше
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы предлагаем только оригинальную продукцию Apple с гарантией качества
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'Оригинальная продукция',
                description: 'Только официальные товары Apple с полной гарантией',
                icon: '✓',
              },
              {
                title: 'Быстрая доставка',
                description: 'Доставляем по всему Кыргызстану в кратчайшие сроки',
                icon: '🚚',
              },
              {
                title: 'Профессиональная поддержка',
                description: 'Наши специалисты помогут с выбором и настройкой',
                icon: '🎧',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 bg-card rounded-lg border hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Готовы начать покупки?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Изучите наш каталог и найдите идеальное устройство Apple для себя
          </p>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
            Перейти в каталог
          </button>
        </div>
      </section>
    </main>
  );
}
