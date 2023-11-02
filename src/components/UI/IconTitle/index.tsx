import { ReactNode } from 'react';
import { ExclamationIconSvg } from './components/ExclamationIconSvg';

type Element = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';

type IconTitleProps = {
  hover?: boolean;
  noIcon?: boolean;
  element?: Element;
  className?: string;
  children: ReactNode;
};

export function IconTitle({
  hover,
  children,
  className,
  element = 'h3',
  noIcon = false,
}: IconTitleProps) {
  if (element === 'h3') {
    return (
      <h3
        className={`
          ${className}
          ${hover ? 'hover:text-primary-green' : ''}
          group text-category font-workSans text-gray1 transition-all duration-300 flex items-center gap-0
          desk-md:text-category-desk-sm
          tab:text-category-tab
        `}
      >
        {!noIcon && <ExclamationIconSvg hover={hover} />}

        {children}
      </h3>
    );
  }

  if (element === 'h2') {
    return (
      <h2
        className={`
          ${className}
          ${hover ? 'hover:text-primary-green' : ''}
          group text-category font-workSans text-gray1 transition-all duration-300 flex items-center gap-0
          desk-md:text-category-desk-sm
          tab:text-category-tab
        `}
      >
        {!noIcon && <ExclamationIconSvg hover={hover} />}

        {children}
      </h2>
    );
  }

  return (
    <p
      className={`
        ${className}
        ${hover ? 'hover:text-primary-green' : ''}
        group text-category font-workSans text-gray1 transition-all duration-300 flex items-center gap-0
        desk-md:text-category-desk-sm
        tab:text-category-tab
      `}
    >
      {!noIcon && <ExclamationIconSvg hover={hover} />}

      {children}
    </p>
  );
}
