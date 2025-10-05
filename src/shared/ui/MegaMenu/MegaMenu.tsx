'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './MegaMenu.module.css';

interface MegaMenuProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const productData = {
  iphone: {
    title: 'iPhone',
    models: [
      { name: 'Все iPhone', href: '/iphone' },
      { name: 'iPhone 17', href: '/iphone/17' },
      { name: 'iPhone 17 Pro', href: '/iphone/17-pro' },
      { name: 'iPhone 17 Pro Max', href: '/iphone/17-pro-max' },
      { name: 'iPhone Air', href: '/iphone/air' },
      { name: 'iPhone 16 Pro Max', href: '/iphone/16-pro-max' },
      { name: 'iPhone 16 Pro', href: '/iphone/16-pro' },
      { name: 'iPhone 16 Plus', href: '/iphone/16-plus' },
      { name: 'iPhone 16', href: '/iphone/16' },
      { name: 'iPhone 15 Pro Max', href: '/iphone/15-pro-max' },
      { name: 'iPhone 15', href: '/iphone/15' },
      { name: 'iPhone 14', href: '/iphone/14' },
      { name: 'iPhone 13', href: '/iphone/13' },
      { name: 'iPhone 11', href: '/iphone/11' },
    ],
  },
  mac: {
    title: 'Mac',
    models: [
      { name: 'Все Mac', href: '/mac' },
      { name: 'MacBook Pro 16"', href: '/mac/macbook-pro-16' },
      { name: 'MacBook Pro 14"', href: '/mac/macbook-pro-14' },
      { name: 'MacBook Air 15"', href: '/mac/macbook-air-15' },
      { name: 'MacBook Air 13"', href: '/mac/macbook-air-13' },
      { name: 'iMac 24"', href: '/mac/imac-24' },
      { name: 'Mac Studio', href: '/mac/mac-studio' },
      { name: 'Mac Pro', href: '/mac/mac-pro' },
      { name: 'Mac mini', href: '/mac/mac-mini' },
    ],
  },
  ipad: {
    title: 'iPad',
    models: [
      { name: 'Все iPad', href: '/ipad' },
      { name: 'iPad Pro 12.9"', href: '/ipad/pro-12-9' },
      { name: 'iPad Pro 11"', href: '/ipad/pro-11' },
      { name: 'iPad Air 13"', href: '/ipad/air-13' },
      { name: 'iPad Air 11"', href: '/ipad/air-11' },
      { name: 'iPad 10.9"', href: '/ipad/10-9' },
      { name: 'iPad mini 8.3"', href: '/ipad/mini-8-3' },
    ],
  },
  watch: {
    title: 'Apple Watch',
    models: [
      { name: 'Все Apple Watch', href: '/watch' },
      { name: 'Apple Watch Series 10', href: '/watch/series-10' },
      { name: 'Apple Watch Series 9', href: '/watch/series-9' },
      { name: 'Apple Watch SE', href: '/watch/se' },
      { name: 'Apple Watch Ultra 2', href: '/watch/ultra-2' },
    ],
  },
  airpods: {
    title: 'AirPods',
    models: [
      { name: 'Все AirPods', href: '/airpods' },
      { name: 'AirPods Pro 3', href: '/airpods/pro-3' },
      { name: 'AirPods Pro 2', href: '/airpods/pro-2' },
      { name: 'AirPods 4', href: '/airpods/4' },
      { name: 'AirPods 3', href: '/airpods/3' },
      { name: 'AirPods 2', href: '/airpods/2' },
      { name: 'AirPods Max', href: '/airpods/max' },
    ],
  },
  accessories: {
    title: 'Аксессуары',
    models: [
      { name: 'Все аксессуары', href: '/accessories' },
      { name: 'Чехлы для iPhone', href: '/accessories/iphone-cases' },
      { name: 'Чехлы для iPad', href: '/accessories/ipad-cases' },
      { name: 'Зарядные устройства', href: '/accessories/charging' },
      { name: 'Кабели и адаптеры', href: '/accessories/cables' },
      { name: 'Подставки и держатели', href: '/accessories/stands' },
      { name: 'Защитные пленки', href: '/accessories/screen-protectors' },
    ],
  },
  audio: {
    title: 'Аудио',
    models: [
      { name: 'Все аудио', href: '/audio' },
      { name: 'HomePod mini', href: '/audio/homepod-mini' },
      { name: 'HomePod 2', href: '/audio/homepod-2' },
      { name: 'Beats Studio Pro', href: '/audio/beats-studio-pro' },
      { name: 'Beats Solo 4', href: '/audio/beats-solo-4' },
      { name: 'Beats Fit Pro', href: '/audio/beats-fit-pro' },
    ],
  },
  gadgets: {
    title: 'Гаджеты',
    models: [
      { name: 'Все гаджеты', href: '/gadgets' },
      { name: 'Apple TV 4K', href: '/gadgets/apple-tv-4k' },
      { name: 'Magic Keyboard', href: '/gadgets/magic-keyboard' },
      { name: 'Magic Mouse', href: '/gadgets/magic-mouse' },
      { name: 'Magic Trackpad', href: '/gadgets/magic-trackpad' },
      { name: 'Apple Pencil', href: '/gadgets/apple-pencil' },
    ],
  },
  brands: {
    title: 'Бренды',
    models: [
      { name: 'Все бренды', href: '/brands' },
      { name: 'Apple', href: '/brands/apple' },
      { name: 'Beats', href: '/brands/beats' },
      { name: 'Belkin', href: '/brands/belkin' },
      { name: 'OtterBox', href: '/brands/otterbox' },
      { name: 'Spigen', href: '/brands/spigen' },
    ],
  },
};

const storeInfo = [
  { name: 'О магазине', href: '/about' },
  { name: 'Товары в кредит', href: '/credit' },
  { name: 'Trade-in', href: '/trade-in' },
  { name: 'Гарантия', href: '/warranty' },
  { name: 'Доставка и оплата', href: '/delivery' },
];

const contactInfo = {
  title: 'Связь с нами',
  phones: [
    { name: 'Beeline', number: '+996 220 011111' },
    { name: 'O! Mega', number: '+996 220 011111' },
  ],
  social: [
    { name: 'WhatsApp', href: '/whatsapp', icon: '💬' },
    { name: 'Instagram', href: '/instagram', icon: '📷' },
  ],
};

export function MegaMenu({ isOpen, onMouseEnter, onMouseLeave }: MegaMenuProps) {
  const [, setActiveCategory] = useState<string | null>(null);

  const handleCategoryEnter = (category: string) => {
    setActiveCategory(category);
  };

  const handleCategoryLeave = () => {
    setActiveCategory(null);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`${styles.megaMenu} ${isOpen ? styles.open : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Левая колонка - Модели товаров */}
          <div className={styles.categorySection}>
            {Object.entries(productData).map(([key, category]) => (
              <div
                key={key}
                onMouseEnter={() => handleCategoryEnter(key)}
                onMouseLeave={handleCategoryLeave}
              >
                <h3 className={styles.categoryTitle}>{category.title}</h3>
                <div className={styles.modelList}>
                  {category.models.map((model) => (
                    <Link key={model.href} href={model.href} className={styles.modelLink}>
                      {model.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Средняя колонка - Информация о магазине */}
          <div className={styles.storeInfo}>
            <h3 className={styles.storeInfoTitle}>О магазине</h3>
            <div className={styles.storeInfoList}>
              {storeInfo.map((item) => (
                <Link key={item.href} href={item.href} className={styles.storeInfoLink}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Правая колонка - Контактная информация */}
          <div className={styles.contactInfo}>
            <h3 className={styles.contactTitle}>{contactInfo.title}</h3>

            {/* Телефоны */}
            <div className={styles.phoneList}>
              {contactInfo.phones.map((phone, index) => (
                <div key={index} className={styles.phoneItem}>
                  <span className={styles.phoneLabel}>{phone.name}:</span>
                  <span className={styles.phoneNumber}>{phone.number}</span>
                </div>
              ))}
            </div>

            {/* Социальные сети */}
            <div className={styles.socialList}>
              {contactInfo.social.map((social) => (
                <Link key={social.href} href={social.href} className={styles.socialLink}>
                  <span className={styles.socialIcon}>{social.icon}</span>
                  <span>{social.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
