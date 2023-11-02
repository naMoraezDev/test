import styles from './styles.module.scss';
import { CSSProperties, ReactNode } from 'react';

type CMSButtonProps = {
  href?: string;
  className?: string;
  children: ReactNode;
  style?: CSSProperties;
  variant?: 'default' | 'bet' | 'courses' | 'lance' | 'widget' | 'play';
};

export function CMSButton({
  href,
  style,
  children,
  className,
  variant = 'default',
}: CMSButtonProps) {
  if (href) {
    return (
      <a href={href} target="_blank">
        <button
          style={{ ...style }}
          className={`${styles.button} ${styles[variant]} ${className}`}
        >
          {children}
        </button>
      </a>
    );
  }

  return (
    <button
      disabled
      style={{ ...style, cursor: 'default' }}
      className={`${styles.button} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
