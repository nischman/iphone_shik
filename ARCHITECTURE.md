# Архитектура проекта iPhone Shik

Проект построен на основе **Feature-Sliced Design (FSD)** архитектуры.

## Структура проекта

```
src/
├── app/                    # Next.js App Router (Точка входа)
│   ├── layout.tsx         # Корневой layout с хедером и футером
│   ├── page.tsx           # Главная страница
│   ├── sitemap.ts         # Динамическая генерация sitemap
│   └── globals.css        # Глобальные стили
│
├── widgets/                # Композитные UI блоки
│   ├── Header/            # Хедер сайта
│   └── Footer/            # Футер сайта
│
├── features/               # Функциональность приложения
│   ├── add-to-cart/       # Добавление в корзину
│   └── search/            # Поиск товаров
│
├── entities/               # Бизнес-сущности
│   ├── product/           # Продукт (ProductCard)
│   └── cart/              # Корзина (CartItem)
│
└── shared/                 # Переиспользуемые ресурсы
    ├── ui/                # UI компоненты
    │   ├── Button.tsx    # shadcn/ui кнопка
    │   ├── Sheet.tsx     # shadcn/ui модальное окно
    │   ├── NavigationMenu/ # Главное меню
    │   ├── MobileMenu/   # Мобильное меню
    │   └── ...
    ├── types/             # TypeScript типы
    │   ├── product.ts
    │   ├── category.ts
    │   └── cart.ts
    ├── const/             # Константы
    │   └── navigation.ts
    ├── lib/               # Утилиты и хелперы
    │   └── store.ts      # Zustand stores
    ├── api/               # API клиенты (пусто)
    └── config/            # Конфигурация (пусто)
```

## Слои FSD (сверху вниз)

### 1. **app** - Точка входа приложения

- Next.js App Router
- Layout компоненты
- Глобальные стили
- Metadata и SEO

### 2. **widgets** - Композитные блоки UI

- Самостоятельные блоки страницы
- Могут использовать features, entities, shared
- Примеры: Header, Footer, Sidebar

### 3. **features** - Функциональность

- Конкретная бизнес-функция для пользователя
- Может использовать entities, shared
- Примеры: AddToCart, ProductFilter, Search

### 4. **entities** - Бизнес-сущности

- Представление данных предметной области
- Может использовать только shared
- Примеры: Product, Cart, User

### 5. **shared** - Переиспользуемые ресурсы

- UI kit компоненты
- Утилиты
- Типы
- Константы
- API клиенты

## Технологический стек

- **Next.js 15** - React фреймворк с App Router
- **TypeScript** - Статическая типизация
- **Tailwind CSS** - Утилитарный CSS фреймворк
- **shadcn/ui** - Компонентная библиотека
- **Zustand** - Управление состоянием
- **ESLint + Prettier** - Линтинг и форматирование

## Управление состоянием (Zustand)

### UI Store

```typescript
useUIStore()
  - isMobileMenuOpen: boolean
  - toggleMobileMenu()
  - closeMobileMenu()
```

### Cart Store (с persistence)

```typescript
useCartStore()
  - items: CartItem[]
  - totalItems: number
  - subtotal: number
  - total: number
  - addItem()
  - removeItem()
  - updateQuantity()
  - clearCart()
```

## Правила импортов

Каждый слой может импортировать только из нижележащих слоев:

- ✅ `widgets` → `features`, `entities`, `shared`
- ✅ `features` → `entities`, `shared`
- ✅ `entities` → `shared`
- ❌ `shared` → не импортирует из других слоев
- ❌ `entities` → `features` (запрещено)

## SEO

- `robots.txt` - конфигурация для поисковых роботов
- `sitemap.ts` - динамическая генерация карты сайта
- Open Graph теги в metadata
- Семантическая HTML разметка

## Запуск проекта

```bash
# Разработка
npm run dev

# Сборка
npm run build

# Production
npm start

# Линтинг
npm run lint
```

## Дальнейшее развитие

### Приоритет 1

- Добавить страницы категорий
- Подключить API/CMS для данных товаров
- Реализовать страницу товара

### Приоритет 2

- Добавить страницу корзины
- Реализовать оформление заказа
- Добавить фильтрацию и сортировку

### Приоритет 3

- Личный кабинет пользователя
- История заказов
- Избранное
