import Link from 'next/link';
import { NAVIGATION_ITEMS } from '@/shared/const';

interface MobileMenuProps {
  onLinkClick?: () => void;
}

export function MobileMenu({ onLinkClick }: MobileMenuProps) {
  return (
    <div className="flex flex-col space-y-2">
      <nav role="navigation" aria-label="Мобильная навигация">
        <ul className="space-y-1">
          {NAVIGATION_ITEMS.map((item, index) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block px-4 py-3 text-base sm:text-lg font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-all duration-300 transform hover:scale-[1.05] hover:translate-x-2"
                onClick={onLinkClick}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: 'fadeInUp 0.3s ease-out forwards',
                  opacity: 0,
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
