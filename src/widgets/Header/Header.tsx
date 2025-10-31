'use client';

import { Logo } from '@/shared/ui/Logo/Logo';
import { NavigationMenuComponent } from '@/shared/ui/NavigationMenu/NavigationMenu';
import { CartIcon } from '@/shared/ui/CartIcon/CartIcon';
import { MobileMenu } from '@/shared/ui/MobileMenu/MobileMenu';
import { Button } from '@/shared/ui/Button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from '@/shared/ui/Sheet';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-[1001] w-full border-b bg-white p-1" role="banner">
        <div className="container mx-auto flex h-11 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo - Left */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Navigation - Center (Desktop) */}
          <nav className="hidden lg:flex items-center justify-center flex-1" role="navigation" aria-label="Основная навигация">
            <NavigationMenuComponent />
          </nav>

          {/* Mobile Menu Button & Cart - Right (Mobile & Tablet) */}
          <div className="flex lg:hidden items-center gap-2 ml-auto">
            <Button variant="ghost" size="icon" aria-label="Корзина">
              <CartIcon />
            </Button>
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-accent/50 transition-colors duration-200"
                  aria-label="Открыть меню"
                  aria-expanded={isMobileMenuOpen}
                  aria-controls="mobile-menu"
                >
                  <Menu className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">Открыть меню</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 sm:w-96">
                <SheetHeader>
                  <SheetTitle className="text-left">Меню</SheetTitle>
                  <SheetDescription className="text-left">
                    Навигационное меню с разделами каталога
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6" id="mobile-menu">
                  <MobileMenu onLinkClick={closeMobileMenu} />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Cart Icon - Right (Desktop) */}
          <div className="hidden lg:flex items-center">
            <Button variant="ghost" size="icon" aria-label="Корзина">
              <CartIcon />
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}
