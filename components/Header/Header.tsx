import Link from 'next/link';
import css from './Header.module.css';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.flex}>
        <Link className={css.link} href="/" aria-label="Leleka">
          <Image src="/img/logo.svg" width={24} height={24} alt="logo" />
          <Image src="/img/Лелека.svg" width={49} height={11} alt="logo" />
        </Link>
        <Image src="/img/burger.png" width={32} height={32} alt="menu" />
      </div>
    </header>
  );
};

export default Header;
