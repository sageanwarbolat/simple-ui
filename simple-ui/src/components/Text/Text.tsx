'use client';

import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Text.module.css';

export type TextLineHeight = 'body' | 'single';
export type TextElement = 'p' | 'span' | 'div' | 'small' | 'strong';

export interface TextProps extends Omit<ComponentPropsWithoutRef<'p'>, 'children'> {
  lineHeight?: TextLineHeight;
  lineClamp?: number;
  element?: TextElement;
  children?: ReactNode;
}

export const Text = forwardRef<HTMLElement, TextProps>(
  (
    {
      className,
      lineHeight = 'body',
      lineClamp,
      element = 'p',
      style,
      ...props
    },
    ref
  ) => {
    const Component = element as any;
    const textClass = clsx(
      styles.text,
      styles[`lineHeight-${lineHeight}`],
      lineClamp && styles.truncate,
      className
    );

    const computedStyle = lineClamp
      ? { ...style, WebkitLineClamp: lineClamp }
      : style;

    return (
      <Component
        ref={ref}
        className={textClass}
        style={computedStyle}
        {...props}
      />
    );
  }
);

Text.displayName = 'Text';
