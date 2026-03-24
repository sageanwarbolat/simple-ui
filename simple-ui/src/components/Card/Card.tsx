'use client';

import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Card.module.css';

export type CardVariant = 'default' | 'stroke' | 'brand';
export type CardDirection = 'horizontal' | 'vertical';
export type CardAlign = 'start' | 'center' | 'end';
export type CardPadding = '600' | '800';

export interface CardProps extends ComponentPropsWithoutRef<'div'> {
  variant?: CardVariant;
  direction?: CardDirection;
  align?: CardAlign;
  padding?: CardPadding;
  asset?: ReactNode;
  interactionProps?: ComponentPropsWithoutRef<'div'>;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = 'default',
      direction = 'vertical',
      align = 'start',
      padding,
      asset,
      interactionProps,
      children,
      ...props
    },
    ref
  ) => {
    const cardClass = clsx(
      styles.card,
      styles[`variant-${variant}`],
      styles[`direction-${direction}`],
      styles[`align-${align}`],
      padding && styles[`padding-${padding}`],
      className
    );

    return (
      <div ref={ref} className={cardClass} {...props}>
        {asset && <div className={styles.asset}>{asset}</div>}
        <div className={styles.content}>{children}</div>
        {interactionProps && (
          <div className={styles.interaction} {...interactionProps} />
        )}
      </div>
    );
  }
);

Card.displayName = 'Card';
