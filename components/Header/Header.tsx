'use client';

import Link from 'next/link';
import css from './Header.module.css';
import Image from 'next/image';
import { useSidebarStore } from '@/lib/store/sidebarStore';
import clsx from 'clsx';

const Header = () => {
  const open = useSidebarStore(state => state.open);
  const isOpen = useSidebarStore(state => state.isOpen);

  return (
    <header className={css.header}>
      <div className={css.flex}>
        <Link className={css.link} href="/" aria-label="Leleka">
          <Image src="/img/logo.svg" width={24} height={24} alt="logo" loading="eager"/>
          <Image src="/img/Лелека.svg" width={49} height={11} alt="logo" />
        </Link>
        <button
          type="button"
          onClick={open}
          className={clsx('btn', css.btn)}
          disabled={isOpen}
        >
          <Image src="/img/burger.png" width={32} height={32} alt="menu" />
        </button>
      </div>
    </header>
  );
};

export default Header;
