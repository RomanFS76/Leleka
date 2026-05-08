'use client';

import Link from 'next/link';
import css from './Breadcrumbs.module.css';
import clsx from 'clsx';
import { navLinks } from '@/config/navigation.js';
import { usePathname } from 'next/navigation';

const Breadcrumbs = () => {
  const pathname = usePathname();
  const currentLink = navLinks.find(link => link.href === pathname);

  return (
    <section className={clsx(css.breadcrumbs)}>
      <div className={clsx(css.overlayLink)}>
        <Link href="/" className={css.link}>
          Лелека
        </Link>
        <svg width={24} height={24}>
          <use xlinkHref="/icons/sprite.svg#breadcrumbs-arrow" />
        </svg>
        <Link href={currentLink?.href || '/'} className={css.currentLink}>
          {currentLink?.label || 'Лелека'}
        </Link>
      </div>      
    </section>
  );
};

export default Breadcrumbs;
