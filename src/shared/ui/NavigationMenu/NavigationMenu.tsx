'use client';

import Link from 'next/link';
import * as React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { NAVIGATION_ITEMS, MENU_DATA } from '@/shared/const';
import { cn } from '@/lib/utils';

export function NavigationMenuComponent() {
  const getItemHref = (item: string, baseHref: string) => {
    if (item.startsWith('Все')) {
      // Для "Все iPhone" ведем на страницу каталога
      if (item === 'Все iPhone') {
        return '/catalog';
      }
      return baseHref;
    }
    // Convert full item name to slug (e.g., 'iPhone 17 Pro' -> 'iphone-17-pro')
    const slug = item.toLowerCase().replace(/ /g, '-');
    return `/${slug}`;
  };

  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-4 xl:gap-8">
        {NAVIGATION_ITEMS.map((navItem) => (
          <NavigationMenuItem key={navItem.href}>
            {navItem.hasDropdown ? (
              <>
                <NavigationMenuTrigger
                  showChevron={false}
                  className="text-sm xl:text-[17px] font-normal bg-transparent hover:bg-transparent hover:text-foreground focus:bg-transparent data-[state=open]:bg-transparent data-[active]:bg-transparent px-2"
                >
                  {navItem.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[600px] gap-3 p-6 md:grid-cols-3">
                    {MENU_DATA[navItem.label]?.map((item, index) => (
                      <ListItem
                        key={index}
                        href={getItemHref(item, navItem.href)}
                        title={item}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild>
                <Link
                  href={navItem.href}
                  className={cn(navigationMenuTriggerStyle(), 'text-sm xl:text-[17px] font-normal bg-transparent hover:bg-transparent hover:text-foreground px-2')}
                >
                  {navItem.label}
                </Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & { title: string }
>(({ className, title, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href || '#'}
          className={cn(
            'block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
