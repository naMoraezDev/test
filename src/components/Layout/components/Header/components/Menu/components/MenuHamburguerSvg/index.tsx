import { Dispatch, SetStateAction } from 'react';

type MenuHamburguerSvgProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export function MenuHamburguerSvg({ setIsOpen }: MenuHamburguerSvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      onClick={() => setIsOpen(true)}
      className="
        cursor-pointer fill-white active:fill-tertiary-yellow transition-all duration-300
        desk-sm:w-[34px] desk-sm:h-[34px]
        tab:w-[35px] tab:h-[35px]
        mob:w-[34px] mob:h-[34px]
        mob-sm:w-24 mob-sm:h-24
      "
    >
      <path d="M3 8H29C29.5523 8 30 7.80231 30 7.25V4.75C30 4.19769 29.5523 4 29 4H3C2.44769 4 2 4.19769 2 4.75V7.25C2 7.80231 2.44769 8 3 8ZM3 18H29C29.5523 18 30 17.8023 30 17.25V14.75C30 14.1977 29.5523 14 29 14H3C2.44769 14 2 14.1977 2 14.75V17.25C2 17.8023 2.44769 18 3 18ZM3 28H29C29.5523 28 30 27.8023 30 27.25V24.75C30 24.1977 29.5523 24 29 24H3C2.44769 24 2 24.1977 2 24.75V27.25C2 27.8023 2.44769 28 3 28Z" />
    </svg>
  );
}
