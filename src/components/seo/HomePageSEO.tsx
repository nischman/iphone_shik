export function HomePageSEO() {
  return (
    <section className="bg-background py-12 sm:py-16 lg:py-20 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Main SEO Block */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Магазин Apple в Омске — официальная продукция с гарантией
            </h2>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                <strong className="text-foreground">iPhone Shik</strong> — крупнейший магазин техники Apple в Омске,
                где вы можете купить iPhone, MacBook, iPad, AirPods и Apple Watch по выгодным ценам.
                Мы предлагаем только оригинальную продукцию Apple с официальной гарантией производителя.
              </p>

              <p>
                В нашем каталоге представлены все актуальные модели iPhone 2025 года:
                от бюджетного iPhone SE до флагманского iPhone 16 Pro Max.
                Каждое устройство проходит проверку качества и поставляется в оригинальной упаковке.
              </p>
            </div>
          </div>

          {/* Key Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                100% Оригинальная техника Apple
              </h3>
              <p className="text-muted-foreground">
                Работаем только с официальными поставщиками. Каждый iPhone имеет серийный номер,
                который проверяется в системе Apple. Гарантия производителя — 1 год.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Доставка по Омску в день заказа
              </h3>
              <p className="text-muted-foreground">
                Бесплатная курьерская доставка при заказе от 10 000 ₽.
                Также возможен самовывоз из нашего магазина в центре Омска.
                Оплата наличными или картой при получении.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                Рассрочка 0% на 12 месяцев
              </h3>
              <p className="text-muted-foreground">
                Покупайте iPhone в рассрочку без переплат и процентов.
                Оформление за 15 минут, минимальный пакет документов.
                Одобрение заявки в течение 5 минут.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Trade-in: обменяйте старый iPhone
              </h3>
              <p className="text-muted-foreground">
                Программа Trade-in позволяет обменять ваш старый iPhone на новый с доплатой.
                Моментальная оценка устройства, честная цена, прозрачные условия обмена.
              </p>
            </div>
          </div>

          {/* Product Range Section */}
          <div className="space-y-6 pt-8 border-t border-border">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Каталог техники Apple в Омске
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">iPhone</h3>
                <p className="text-sm text-muted-foreground">
                  Актуальные модели 2025 года: iPhone 16 Pro Max, iPhone 16 Pro, iPhone 16, iPhone 15,
                  iPhone 14, iPhone 13, iPhone SE. Все цвета и объемы памяти в наличии.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">MacBook</h3>
                <p className="text-sm text-muted-foreground">
                  Ноутбуки Apple на чипах M3 и M2: MacBook Air 13" и 15", MacBook Pro 14" и 16".
                  Идеальны для работы, учебы и творчества.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">iPad</h3>
                <p className="text-sm text-muted-foreground">
                  Планшеты для любых задач: iPad Pro с M2, iPad Air, iPad и iPad mini.
                  В комплекте Apple Pencil и Magic Keyboard.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">AirPods</h3>
                <p className="text-sm text-muted-foreground">
                  Беспроводные наушники: AirPods Pro 2 с активным шумоподавлением,
                  AirPods 3, AirPods Max. Кристально чистый звук.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Apple Watch</h3>
                <p className="text-sm text-muted-foreground">
                  Умные часы для здоровья и фитнеса: Apple Watch Ultra 2, Series 9, SE.
                  Контроль активности, здоровья и уведомлений.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Аксессуары</h3>
                <p className="text-sm text-muted-foreground">
                  Оригинальные чехлы, зарядки, кабели и защитные стекла для iPhone и iPad.
                  Совместимость 100%.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="space-y-6 pt-8 border-t border-border">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Почему выбирают iPhone Shik в Омске?
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Более 5 лет на рынке Омска.</strong> За это время мы помогли
                тысячам клиентов выбрать и купить iPhone, MacBook и другую технику Apple.
                Наш магазин входит в ТОП-3 продавцов Apple-техники в регионе.
              </p>

              <p>
                <strong className="text-foreground">Низкие цены и акции.</strong> Мы работаем напрямую с дистрибьюторами,
                поэтому можем предложить конкурентные цены на iPhone и другие устройства.
                Регулярные акции и специальные предложения для постоянных клиентов.
              </p>

              <p>
                <strong className="text-foreground">Профессиональная консультация.</strong> Наши специалисты помогут
                подобрать оптимальную модель iPhone, расскажут о всех функциях и возможностях,
                оформят рассрочку или Trade-in. Поддержка 24/7 через мессенджеры.
              </p>

              <p>
                <strong className="text-foreground">Гарантийное обслуживание.</strong> При любой неисправности
                мы произведем ремонт или замену устройства в рамках гарантии Apple.
                Официальный сервисный центр в Омске.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="pt-8 border-t border-border text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Купите iPhone в Омске с выгодой до 15%
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Успейте приобрести новый iPhone по акционной цене! Действуют специальные предложения
              на модели iPhone 16 Pro и iPhone 15. Бесплатная доставка и настройка устройства.
            </p>
          </div>

          {/* Footer Note */}
          <div className="pt-6 text-sm text-muted-foreground text-center border-t border-border">
            <p>
              iPhone Shik — официальный магазин Apple в Омске. Адрес: Омск, ул. Ленина, 1.
              Режим работы: ежедневно с 10:00 до 21:00. Телефон: +7 (3812) 123-456.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
