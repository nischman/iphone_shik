'use client';

import { useState } from 'react';
import styles from './CatalogMenu.module.css';

export function CatalogMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.catalogContainer}>
      <button
        className={styles.catalogButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Открыть каталог"
      >
        <span className={styles.hamburgerIcon}>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <span className={styles.buttonText}>Каталог</span>
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.dropdownContent}>
            <p className={styles.placeholder}>Каталог товаров</p>
            <p className={styles.comingSoon}>Скоро будет доступен</p>
          </div>
        </div>
      )}
    </div>
  );
}
