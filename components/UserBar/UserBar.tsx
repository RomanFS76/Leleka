import clsx from 'clsx';
import css from './UserBar.module.css';
import Button from '../shared/Button/Button';

const UserBar = () => {
  return (
    <div className={clsx(css.userBar)}>
      <Button variant="primary" text="Зареєстуватись" />
      <Button variant="secondary" text="Увійти" />
    </div>
  );
};

export default UserBar;

// className={clsx('btn', css.btn)}
