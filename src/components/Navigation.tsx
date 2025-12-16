'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navItems = [
  { href: '/catalog', label: 'Каталог' },
  { href: '/about', label: 'О нас' },
  { href: '/blog', label: 'Блог' },
  { href: '/albums', label: 'Альбомы' },
  { href: '/todos', label: 'Todo' },

];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav>
    <ul className="flex gap-6">
      {navItems.map(({ href, label }) =>
        <li key={href}>
          <Link
            href={href}
            className={`text-xl transition-colors ${
              pathname.startsWith(href)
                ? "text-purple-500"
                : " "
            }`}
          >
            {label}
          </Link>
        </li>
      )}
    </ul>
    </nav>
  );
};