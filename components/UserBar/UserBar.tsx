import clsx from 'clsx';
import css from './UserBar.module.css';
import Button from '../shared/Button/Button';
import Link from 'next/link';

const UserBar = () => {
  return (
    <div className={clsx(css.userBar)}>
      <Button as={Link} href="/auth/register">
        Зареєструватись
      </Button>
      <Button as={Link} href="/auth/login" variant="secondary">
        Увійти
      </Button>
    </div>
  );
};

export default UserBar;

// className={clsx('btn', css.btn)}
