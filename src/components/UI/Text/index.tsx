import { ReactNode } from 'react';

type Variants =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'text'
  | 'text-2'
  | 'text-3'
  | 'category'
  | 'category-sub'
  | 'guess-category'
  | 'text-sm'
  | 'section'
  | 'heading'
  | 'subtitle'
  | 'text-bold'
  | 'text-sm-2'
  | 'text-sm-3';

type Element = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';

type TextProps = {
  element?: Element;
  variant?: Variants;
  className?: string;
  children: ReactNode;
  color?: 'black' | 'white';
};

export function Text({
  children,
  element = 'p',
  className = '',
  color = 'black',
  variant = 'text',
}: TextProps) {
  function getTextVariables() {
    switch (variant) {
      case 'h1':
        return 'text-heading-1-desk-lg desk-md:text-heading-1-desk-sm tab:text-heading-1-tab mob:text-heading-1-mob mob-sm:text-heading-1-mob-sm';

      case 'h2':
        return 'text-heading-2-desk-lg desk-md:text-heading-2-desk-sm tab:text-heading-2-tab mob:text-heading-2-mob mob-sm:text-heading-2-mob-sm';

      case 'h3':
        return 'text-heading-3-desk-lg desk-md:text-heading-3-desk-sm tab:text-heading-3-tab mob:text-heading-3-mob mob-sm:text-heading-3-mob-sm';

      case 'heading':
        return 'text-heading-desk-lg desk-md:text-heading-desk-sm tab:text-heading-tab mob:text-heading-mob mob-sm:text-heading-mob-sm';

      case 'subtitle':
        return 'text-subtitle-desk-lg desk-md:text-subtitle-desk-sm tab:text-subtitle-tab mob:text-subtitle-mob mob-sm:text-subtitle-mob-sm';

      case 'section':
        return 'text-section-lead-desk-lg desk-md:text-section-lead-desk-sm tab:text-section-lead-tab mob:text-section-lead-mob mob-sm:text-section-lead-mob-sm';

      case 'text-bold':
        return 'text-text-bold-desk-lg desk-md:text-text-bold-desk-sm tab:text-text-bold-tab mob:text-text-bold-mob mob-sm:text-text-bold-mob-sm';

      case 'text':
        return 'text-text-desk-lg desk-md:text-text-desk-sm tab:text-text-tab mob:text-text-mob mob-sm:text-text-mob-sm';

      case 'text-2':
        return 'text-text-2-desk-lg desk-sm:text-text-2-desk-sm tab:text-text-2-tab mob:text-text-2-mob mob-sm:text-text-2-mob-sm';

      case 'text-sm':
        return 'text-small-text-desk-lg desk-sm:text-small-text-desk-sm tab:text-small-text-tab mob:text-small-text-mob mob-sm:text-small-text-mob-sm';

      case 'text-sm-2':
        return 'text-small-text-2-desk-lg desk-sm:text-small-text-2-desk-sm tab:text-small-text-2-tab mob:text-small-text-2-mob mob-sm:text-small-text-2-mob-sm';

      case 'text-sm-3':
        return 'text-small-text-3-desk-lg desk-sm:text-small-text-3-desk-sm tab:text-small-text-3-tab mob:text-small-text-3-mob mob-sm:text-small-text-3-mob-sm';

      case 'text-3':
        return 'text-text-3-desk-lg desk-sm:text-text-3-desk-sm tab:text-text-3-tab mob:text-text-3-mob mob-sm:text-text-3-mob-sm';

      case 'category':
        return 'text-category-desk-lg desk-sm:text-category-desk-sm tab:text-category-tab mob:text-category-mob mob-sm:text-category-mob-sm';

      case 'category-sub':
        return 'text-category-sub-desk-lg desk-sm:text-category-sub-desk-sm tab:text-category-sub-tab mob:text-category-sub-mob mob-sm:text-category-sub-mob-sm';

      case 'guess-category':
        return 'text-guess-category-desk-lg desk-sm:text-guess-category-desk-sm tab:text-guess-category-tab mob:text-guess-category-mob mob-sm:text-guess-category-mob-sm';

      default:
        return '';
    }
  }

  const font =
    variant === 'h1' || variant === 'h2' || variant === 'h3'
      ? 'font-workSans'
      : 'font-roboto';

  const textColor = color === 'white' ? 'text-white' : '';

  const textStyles = `${className} ${font} ${getTextVariables()} ${textColor} transition-all`;

  switch (element) {
    case 'h1':
      return <h1 className={textStyles}>{children}</h1>;

    case 'h2':
      return <h2 className={textStyles}>{children}</h2>;

    case 'h3':
      return <h3 className={textStyles}>{children}</h3>;

    case 'h4':
      return <h4 className={textStyles}>{children}</h4>;

    case 'h5':
      return <h5 className={textStyles}>{children}</h5>;

    default:
      return <p className={textStyles}>{children}</p>;
  }
}
