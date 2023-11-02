import {
  useRef,
  Dispatch,
  useEffect,
  useCallback,
  SetStateAction,
} from 'react';
import Image from 'next/image';
import whiteSearchIcon from '../../../../../../assets/images/svg/white-search-icon.svg';

type SearchBoxMobileProps = {
  isOpenSearchBarMobile: boolean;
  setIsOpenSearchBarMobile: Dispatch<SetStateAction<boolean>>;
};

export function SearchBarMobile({
  isOpenSearchBarMobile,
  setIsOpenSearchBarMobile,
}: SearchBoxMobileProps) {
  const ref = useRef<any>(null);

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpenSearchBarMobile(false);
      }
    },
    [setIsOpenSearchBarMobile],
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
  }, [handleClickOutside]);

  return (
    <div ref={ref} className="z-50">
      <input
        type="text"
        placeholder="Digite aqui sua pesquisa"
        className={`
          ${
            !isOpenSearchBarMobile
              ? 'h-0 opacity-0'
              : 'h-[32px] tab:h-[38px] mob:h-[30px] border'
          }
          hidden outline-none w-[260px] px-12 bg-background2 z-10 border-primary-green-light rounded-irregular placeholder-gray2 absolute right-0 transition-all
          tab-md:block
        `}
      />

      <div
        className={`
          ${
            !isOpenSearchBarMobile
              ? 'h-0 opacity-0'
              : 'h-[32px] tab:h-[38px] mob:h-[30px]'
          }
          hidden px-8 py-4 ml-[-40px] z-10 right-[23px] absolute -mr-[22px] bg-primary-green-light shadow-inset rounded-irregular transition-all
          tab-md:block 
        `}
      >
        <Image
          alt="icone de lupa"
          src={whiteSearchIcon}
          className={`
            ${
              !isOpenSearchBarMobile
                ? 'h-0 opacity-0'
                : 'desk-sm:h-24 tab:h-[30px] mob:h-[22px]'
            }
            cursor-pointer transition-all
            desk-sm:w-24
            tab:w-[30px]
            mob:w-[22px] 
          `}
        />
      </div>
    </div>
  );
}
