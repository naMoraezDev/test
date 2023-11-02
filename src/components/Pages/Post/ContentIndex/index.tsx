import { ReactNode } from 'react';
import { TopLineText } from '@/components/UI/TopLineText';

type ContentIndexProps = {
  children: ReactNode;
};

export function ContentIndex({ children }: ContentIndexProps) {
  return (
    <div
      className="
        w-full rounded-normal shadow-sm bg-white px-32 py-[42px]
        desk-md:px-8 desk-md:py-16
        mob:shadow-[none] mob:bg-[transparent] mob:px-0 mob:py-0
      "
    >
      <p
        className="
          text-index-title text-primary-green mb-12
          desk-sm:text-index-title-desk-sm
          tab:text-index-title-tab
          mob:hidden
        "
      >
        Índice
      </p>

      <div
        className="
          hidden mb-12
          mob:block
        "
      >
        <TopLineText>Índice</TopLineText>
      </div>

      {children}

      <div
        className="
          hidden w-full h-[1px] bg-gray4 mt-[20px]
          mob:block
        "
      />
    </div>
  );
}
