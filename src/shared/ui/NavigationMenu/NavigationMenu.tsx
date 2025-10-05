'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { DropdownMenu } from '../DropdownMenu/DropdownMenu';
import { NAVIGATION_ITEMS, MENU_DATA } from '@/shared/const';

export function NavigationMenu() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (itemLabel: string) => {
    // Очищаем предыдущий таймер
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }

    if (NAVIGATION_ITEMS.find((item) => item.label === itemLabel)?.hasDropdown) {
      setActiveDropdown(itemLabel);
    }
  };

  const handleMouseLeave = () => {
    // Добавляем задержку перед скрытием меню
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // 150ms задержка

    setHoverTimeout(timeout);
  };

  // Очищаем таймер при размонтировании компонента
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  return (
    <>
      <nav
        className="flex items-center gap-4 xl:gap-8"
        role="navigation"
        aria-label="Основная навигация"
      >
        <ul className="flex items-center gap-4 xl:gap-8 list-none m-0 p-0">
          {NAVIGATION_ITEMS.map((item) => (
            <li
              key={item.href}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={item.href}
                className="text-sm xl:text-[17px] font-normal text-foreground hover:text-red-500 transition-all duration-300 no-underline px-2 py-1"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Рендерим выпадающие меню для каждой категории */}
      {Object.entries(MENU_DATA).map(([category, items]) => (
        <DropdownMenu
          key={category}
          isOpen={activeDropdown === category}
          onMouseEnter={() => handleMouseEnter(category)}
          onMouseLeave={handleMouseLeave}
          items={items}
          category={category}
          baseHref={
            NAVIGATION_ITEMS.find((item) => item.label === category)?.href ||
            `/${category.toLowerCase()}`
          }
        />
      ))}
    </>
  );
}
