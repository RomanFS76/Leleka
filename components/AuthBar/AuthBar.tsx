import Image from 'next/image';
import React from 'react';
import clsx from 'clsx';
import css from './AuthBar.module.css';

const AuthBar = () => {
  return (
    <footer className={clsx(css.footer)}>
      <div className={clsx(css.userInfo)}>
        <Image
          src="/img/Avatar Image.png"
          width={40}
          height={40}
          alt="userAvatar"
        />

        <div className={clsx(css.userData)}>
          <p>Name Surname</p>
          <p>hanna@gmail.com</p>
        </div>
      </div>
      <svg width={18} height={18} className={clsx(css.iconExit)}>
        <use href={`/icons/sprite.svg#logout`} />
      </svg>
    </footer>
  );
};

export default AuthBar;
