import { ROUTES } from '@/constants/routes';
import Link, { LinkProps } from 'next/link';
import { HTMLAttributeAnchorTarget, ReactNode } from 'react';

type CustomLinkProps = {
  className?: string;
  legacy?: boolean;
  children: ReactNode;
  target?: HTMLAttributeAnchorTarget;
} & LinkProps;

export function CustomLink({
  target,
  children,
  className = '',
  legacy = false,
  ...props
}: CustomLinkProps) {
  const hrefStartsWithSlash = props.href.toString()[0] === '/';

  if (legacy) {
    return (
      <a
        {...props}
        target={target}
        className={className}
        href={`${ROUTES.home}${!hrefStartsWithSlash ? '/' : ''}${props.href}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link {...props} target={target} className={className}>
      {children}
    </Link>
  );
}
