'use client';
import css from './SideBar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { useSidebarStore } from '@/lib/store/sidebarStore';
import { usePathname } from 'next/navigation';

const navLinks = [
  {
    label: 'Мій день',
    href: '/',
    ariaLabel: 'Перейти на сторінку Мій день',
    icon: 'icon-today',
  },
  {
    label: 'Подорож',
    href: '/travel',
    ariaLabel: 'Перейти на сторінку Подорож',
    icon: 'icon-travel',
  },
  {
    label: 'Щоденник',
    href: '/diary',
    ariaLabel: 'Перейти на сторінку Щоденник',
    icon: 'icon-diary',
  },
  {
    label: 'Профіль',
    href: '/profile',
    ariaLabel: 'Перейти на сторінку Профіль',
    icon: 'icon-profile',
  },
];

const SideBar = () => {
  const pathname = usePathname();
  const isOpen = useSidebarStore(state => state.isOpen);
  const close = useSidebarStore(state => state.close);

  return (
    <>
      <div
        className={clsx(css.overlay, {
          [css.overlayOpen]: isOpen,
        })}
        onClick={close}
      ></div>

      <aside
        className={clsx(css.sideBar, {
          [css.sideBarOpen]: isOpen,
        })}
      >
        <div className={clsx(css.header)}>
          <Link
            className={clsx(css.headerLink, 'flex')}
            href="/"
            aria-label="Leleka"
            onClick={close}
          >
            <Image src="/img/logo.svg" width={30} height={30} alt="logo" />
            <Image src="/img/Лелека.svg" width={60} height={13} alt="logo" />
          </Link>
          <button type="button" className={clsx('btn flex')} onClick={close}>
            <Image
              src="/img/closeBtnBurger.svg"
              width={18}
              height={18}
              alt="close"
            />
          </button>
        </div>
        <div>
          <ul className={clsx(css.listLink)}>
            {navLinks.map(link => (
              <li
                key={link.href}
                className={clsx(css.linkItem, {
                  [css.active]: pathname === link.href,
                })}
              >
                <svg width={24} height={24} className={clsx('flex')}>
                  <use href={`/icons/sprite.svg#${link.icon}`} />
                </svg>
                <Link
                  className={clsx(css.link)}
                  href={link.href}
                  aria-label={link.ariaLabel}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
