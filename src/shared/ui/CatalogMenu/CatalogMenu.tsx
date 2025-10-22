'use client';

import { useState } from 'react';
import './CatalogMenu.scss';

export function CatalogMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="catalogContainer">
      <button
        className="catalogButton"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Открыть каталог"
      >
        <span className="hamburgerIcon">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <span className="buttonText">Каталог</span>
      </button>

      {isOpen && (
        <div className="dropdown">
          <div className="dropdownContent">
            <p className="placeholder">Каталог товаров</p>
            <p className="comingSoon">Скоро будет доступен</p>
          </div>
        </div>
      )}
    </div>
  );
}
