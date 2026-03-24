'use client';

import { ComponentPropsWithoutRef, forwardRef } from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'neutral' | 'subtle';
export type ButtonSize = 'small' | 'medium';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'medium',
      disabled = false,
      ...props
    },
    ref
  ) => {
    const buttonClass = clsx(
      styles.button,
      styles[`variant-${variant}`],
      styles[`size-${size}`],
      disabled && styles.disabled,
      className
    );

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={buttonClass}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
