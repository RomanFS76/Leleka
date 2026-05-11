import clsx from 'clsx';
import css from './Button.module.css';
import { ElementType, ComponentPropsWithoutRef } from 'react';

type ButtonProps<T extends ElementType> = {
  as?: T;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Button<T extends ElementType = 'button'>({
  as,
  variant = 'primary',
  children,
  className,
  ...props
}: ButtonProps<T>) {
  const Component = as || 'button';

  return (
    <Component
      className={clsx(css.button, css[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
}