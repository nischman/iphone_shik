# Руководство по участию в разработке

## Начало работы

1. Клонируйте репозиторий

```bash
git clone <repository-url>
cd iphone_shik
```

2. Установите зависимости

```bash
npm install
```

3. Запустите dev сервер

```bash
npm run dev
```

## Требования к коду

### TypeScript

- Используйте строгую типизацию
- Избегайте `any`, используйте правильные типы
- Все пропсы компонентов должны иметь интерфейсы

### Линтинг и форматирование

```bash
# Проверка линтинга
npm run lint

# Форматирование кода (если установлен Prettier)
npm run format
```

### Naming Conventions

#### Файлы и папки

- Компоненты: `PascalCase.tsx` (например, `ProductCard.tsx`)
- Утилиты: `camelCase.ts` (например, `formatPrice.ts`)
- Константы: `UPPER_SNAKE_CASE` (например, `NAVIGATION_ITEMS`)
- Типы: `PascalCase` интерфейсы (например, `Product`, `CartItem`)

#### Компоненты

```typescript
// ✅ Хорошо
export function ProductCard({ product }: ProductCardProps) {
  // ...
}

// ❌ Плохо
export default ({ product }) => {
  // ...
};
```

## FSD Архитектура

### Добавление нового компонента

1. **Определите слой**
   - `shared/ui` - переиспользуемый UI компонент
   - `entities` - компонент бизнес-сущности
   - `features` - функциональный компонент
   - `widgets` - композитный блок

2. **Создайте структуру**

```
src/entities/product/
├── ui/
│   └── ProductCard.tsx
├── model/
│   └── types.ts
└── index.ts
```

3. **Экспортируйте через barrel**

```typescript
// src/entities/product/index.ts
export { ProductCard } from './ui/ProductCard';
```

### Правила импортов

- Используйте alias `@/` для импортов
- Не импортируйте из вышележащих слоев
- Используйте barrel exports (index.ts)

```typescript
// ✅ Хорошо
import { Product } from '@/shared/types';
import { ProductCard } from '@/entities/product';

// ❌ Плохо
import { Product } from '../../../shared/types/product';
import { ProductCard } from '../entities/product/ui/ProductCard';
```

## Git Workflow

### Commit Messages

Используйте conventional commits:

```
feat: добавить компонент ProductCard
fix: исправить ошибку в корзине
docs: обновить README
style: форматирование кода
refactor: рефакторинг store
test: добавить тесты для CartItem
```

### Branching

```
main - production ветка
develop - development ветка
feature/* - новые фичи
fix/* - исправления багов
```

### Pull Request процесс

1. Создайте feature branch
2. Сделайте изменения
3. Проверьте линтинг: `npm run lint`
4. Проверьте сборку: `npm run build`
5. Создайте PR в develop
6. Дождитесь ревью

## Стайлгайд

### React Компоненты

```typescript
// ✅ Хорошо
'use client'; // если нужен

import { useState } from 'react';
import { Product } from '@/shared/types';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (id: string) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    onAddToCart?.(product.id);
  };

  return (
    <div className="p-4 border rounded">
      <h3>{product.name}</h3>
      <button onClick={handleClick} disabled={isLoading}>
        В корзину
      </button>
    </div>
  );
}
```

### Zustand Stores

```typescript
// ✅ Хорошо
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface StoreState {
  count: number;
  increment: () => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
    }),
    { name: 'store-name' }
  )
);
```

### Tailwind CSS

- Используйте утилитарные классы
- Для сложных стилей создавайте CSS модули
- Используйте design tokens из globals.css

```typescript
// ✅ Хорошо
<div className="flex items-center gap-4 p-6 bg-card rounded-lg">

// ❌ Избегайте inline стилей
<div style={{ display: 'flex', padding: '24px' }}>
```

## Тестирование

(Пока тесты не настроены, но планируются)

## Вопросы?

Создайте Issue в репозитории или свяжитесь с командой.
