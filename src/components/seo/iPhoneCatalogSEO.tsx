export function iPhoneCatalogSEO() {
  return (
    <section className="bg-background py-12 sm:py-16 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Купить iPhone в Омске
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Официальный магазин Apple техники. В наличии все актуальные модели iPhone 2025 года
              с гарантией производителя. Доставка по Омску в день заказа, рассрочка 0%.
            </p>
          </div>

          {/* Current Models Section */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Актуальные модели iPhone 2025 года
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* iPhone 16 Series */}
              <div className="p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  iPhone 16 Pro и Pro Max — новинка 2024
                </h3>
                <p className="text-muted-foreground mb-4">
                  Флагманские смартфоны с титановым корпусом, революционным чипом A18 Pro
                  и профессиональной камерой 48 Мп. Доступны в 4 цветах: титановый черный,
                  натуральный, белый и пустынный.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Дисплей ProMotion 120 Гц с защитой Ceramic Shield</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Тройная камера Pro с режимом Action и макросъемкой</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>До 29 часов воспроизведения видео</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Объем памяти: 128 ГБ, 256 ГБ, 512 ГБ, 1 ТБ</span>
                  </li>
                </ul>
              </div>

              {/* iPhone 16 Standard */}
              <div className="p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  iPhone 16 и 16 Plus
                </h3>
                <p className="text-muted-foreground mb-4">
                  Новое поколение базовых моделей с чипом A17, улучшенной камерой
                  и ярким дисплеем Super Retina XDR. Пять ярких цветов на выбор.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Дисплей 6.1" (iPhone 16) и 6.7" (iPhone 16 Plus)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Двойная камера 48 Мп + 12 Мп с оптической стабилизацией</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Кнопка Action для быстрого доступа к функциям</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Зарядка MagSafe и быстрая зарядка до 50% за 30 минут</span>
                  </li>
                </ul>
              </div>

              {/* iPhone 15 Series */}
              <div className="p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  iPhone 15 Pro Max и 15 Pro
                </h3>
                <p className="text-muted-foreground mb-4">
                  Мощные смартфоны предыдущего поколения по выгодной цене.
                  Титановый корпус, чип A16 Bionic, профессиональная камера.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Дисплей Super Retina XDR с функцией Always-On</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Тройная камера 48 Мп для профессиональной съемки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Порт USB-C для универсальной зарядки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Выгодное предложение: скидка до 15 000 ₽</span>
                  </li>
                </ul>
              </div>

              {/* iPhone 14 and older */}
              <div className="p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  iPhone 14, 13, SE — доступные модели
                </h3>
                <p className="text-muted-foreground mb-4">
                  Отличный выбор для тех, кто ищет надежный iPhone по доступной цене.
                  Все модели с официальной гарантией Apple и в отличном состоянии.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>iPhone 14 — от 59 990 ₽, двойная камера 12 Мп</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>iPhone 13 — от 54 990 ₽, чип A15 Bionic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>iPhone SE — от 44 990 ₽, компактный и мощный</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Идеальны для учебы, работы и повседневного использования</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* How to Choose Section */}
          <div className="space-y-6 pt-8 border-t border-border">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Как выбрать iPhone в Омске?
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Определите бюджет.</strong> Цены на iPhone в нашем магазине
                начинаются от 44 990 ₽ за iPhone SE и доходят до 115 990 ₽ за iPhone 16 Pro Max.
                Для экономии можно воспользоваться рассрочкой 0% или программой Trade-in.
              </p>

              <p>
                <strong className="text-foreground">Выберите размер.</strong> Если вам нужен компактный смартфон —
                обратите внимание на iPhone 13 mini или iPhone SE. Для любителей больших экранов подойдут
                iPhone 16 Plus или iPhone 15 Pro Max с диагональю 6.7 дюймов.
              </p>

              <p>
                <strong className="text-foreground">Подберите объем памяти.</strong> Для фото и видео в соцсетях
                достаточно 128 ГБ. Если снимаете много видео в 4K или играете в игры — выбирайте 256 ГБ или 512 ГБ.
                Профессионалам рекомендуем модели с 1 ТБ.
              </p>

              <p>
                <strong className="text-foreground">Обратите внимание на камеру.</strong> Модели Pro оснащены
                тройной камерой с телеобъективом и макрорежимом. Базовые iPhone 16/15/14 имеют двойную камеру,
                которой достаточно для повседневной съемки.
              </p>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="space-y-6 pt-8 border-t border-border">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Преимущества покупки iPhone в iPhone Shik
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">01</div>
                <h3 className="text-lg font-semibold text-foreground">
                  Официальная гарантия Apple
                </h3>
                <p className="text-sm text-muted-foreground">
                  Все iPhone поставляются с гарантией производителя сроком 1 год.
                  Гарантийное обслуживание в авторизованном сервисном центре в Омске.
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">02</div>
                <h3 className="text-lg font-semibold text-foreground">
                  Проверка перед отправкой
                </h3>
                <p className="text-sm text-muted-foreground">
                  Каждый iPhone проверяется на работоспособность и комплектность.
                  Гарантируем оригинальность и отсутствие дефектов.
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">03</div>
                <h3 className="text-lg font-semibold text-foreground">
                  Бесплатная настройка
                </h3>
                <p className="text-sm text-muted-foreground">
                  При покупке iPhone настроим устройство, перенесем данные со старого телефона,
                  установим защитное стекло (в подарок).
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">04</div>
                <h3 className="text-lg font-semibold text-foreground">
                  Быстрая доставка
                </h3>
                <p className="text-sm text-muted-foreground">
                  Доставляем iPhone по Омску в день заказа. Курьер привезет телефон
                  в удобное для вас время. Оплата при получении.
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">05</div>
                <h3 className="text-lg font-semibold text-foreground">
                  Рассрочка без переплат
                </h3>
                <p className="text-sm text-muted-foreground">
                  Оформите iPhone в рассрочку на 6 или 12 месяцев под 0%.
                  Без первоначального взноса и скрытых комиссий.
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">06</div>
                <h3 className="text-lg font-semibold text-foreground">
                  Trade-in: сдайте старый iPhone
                </h3>
                <p className="text-sm text-muted-foreground">
                  Обменяйте ваш старый iPhone на новый с доплатой. Честная оценка,
                  моментальный расчет, выгодные условия обмена.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-6 pt-8 border-t border-border">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Часто задаваемые вопросы
            </h2>

            <div className="space-y-4">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
                  <span className="font-semibold text-foreground">
                    Все iPhone оригинальные?
                  </span>
                  <svg className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="p-4 text-muted-foreground">
                  Да, мы продаем только оригинальные iPhone, которые поставляются официальными дистрибьюторами Apple.
                  Каждое устройство имеет серийный номер, который можно проверить на сайте Apple.
                </div>
              </details>

              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
                  <span className="font-semibold text-foreground">
                    Какая гарантия на iPhone?
                  </span>
                  <svg className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="p-4 text-muted-foreground">
                  На все iPhone действует официальная гарантия производителя сроком 1 год.
                  Гарантийное обслуживание осуществляется в авторизованных сервисных центрах Apple по всей России.
                </div>
              </details>

              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
                  <span className="font-semibold text-foreground">
                    Как быстро доставите iPhone по Омску?
                  </span>
                  <svg className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="p-4 text-muted-foreground">
                  При заказе до 16:00 доставляем iPhone в день заказа. Бесплатная доставка при сумме заказа от 10 000 ₽.
                  Также доступен самовывоз из магазина в центре Омска.
                </div>
              </details>

              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
                  <span className="font-semibold text-foreground">
                    Можно ли купить iPhone в рассрочку?
                  </span>
                  <svg className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="p-4 text-muted-foreground">
                  Да, мы предлагаем рассрочку 0% на срок до 12 месяцев. Оформление занимает 15 минут,
                  требуется только паспорт. Одобрение заявки в течение 5 минут.
                </div>
              </details>
            </div>
          </div>

          {/* Final CTA */}
          <div className="pt-8 border-t border-border text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Купите iPhone в Омске выгодно!
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Звоните +7 (3812) 123-456 или оформляйте заказ на сайте.
              Консультация, подбор модели, оформление рассрочки — бесплатно!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
