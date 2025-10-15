import Link from 'next/link';
import { NAVIGATION_ITEMS } from '@/shared/const';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">iPhone Shik</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Официальный магазин Apple в России. Оригинальная продукция с гарантией.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Каталог</h4>
            <ul className="space-y-2">
              {NAVIGATION_ITEMS.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Информация</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  О нас
                </Link>
              </li>
              <li>
                <Link
                  href="/delivery"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Доставка
                </Link>
              </li>
              <li>
                <Link
                  href="/payment"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Оплата
                </Link>
              </li>
              <li>
                <Link
                  href="/warranty"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Гарантия
                </Link>
              </li>
              <li>
                <Link
                  href="/contacts"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>+7 XXX XXX-XX-XX</li>
              <li>info@iphoneshik.ru</li>
              <li>г. Омск, ул. Ленина 123</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} iPhone Shik. Все права защищены.
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Политика конфиденциальности
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
