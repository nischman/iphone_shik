'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import './DropdownMenu.scss';

interface DropdownMenuProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  items: string[];
  category: string;
  baseHref: string;
}

export function DropdownMenu({
  isOpen,
  onMouseEnter,
  onMouseLeave,
  items,
  category,
  baseHref,
}: DropdownMenuProps) {
  const [isVisible, setIsVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 600); // Увеличиваем задержку для завершения анимации
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  const getItemHref = (item: string) => {
    if (item.startsWith('Все')) {
      return baseHref;
    }
    // Простая логика для генерации href, можно доработать
    return `${baseHref}/${item.toLowerCase().replace(/ /g, '-')}`;
  };

  return (
    <div
      className={`dropdownMenu ${isOpen ? 'active' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={menuRef}
    >
      <div className="container">
        <div className="content">
          <h3 className="categoryTitle">{category}</h3>
          <div className="itemsGrid">
            {items.map((item, index) => (
              <Link key={index} href={getItemHref(item)} className="menuItem">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
