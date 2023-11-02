import { ReactNode } from 'react';

export function Container({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <div
      className={`
        p-40 flex justify-between gap-[45px]
        desk-sm:p-[18px] desk-sm:gap-[21px]
        tab:p-[28px] tab:gap-24
        mob:p-24
        ${className}
      `}
    >
      { children }
    </div>
  );
}
