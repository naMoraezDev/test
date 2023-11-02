import { ReactNode } from 'react';

type ContentIndexLinkProps = {
  active?: boolean;
  children: ReactNode;
  onClick?: () => void;
};

export function ContentIndexLink({
  active,
  onClick,
  children,
}: ContentIndexLinkProps) {
  return (
    <div
      onClick={onClick}
      className={`
        ${
          active
            ? 'border-l-2 border-primary-green-dark'
            : 'border-l-[1px] border-gray4'
        }
        pl-8 py-8 cursor-pointer 
      `}
    >
      <p
        className={`
          ${active ? 'text-primary-green-dark' : ''} 
          text-index-nav 
          desk-sm:text-index-nav-desk-sm 
          tab:text-index-nav-tab 
          mob:text-index-nav-mob
        `}
      >
        {children}
      </p>
    </div>
  );
}
