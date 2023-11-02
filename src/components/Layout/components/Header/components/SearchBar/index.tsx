import Image from 'next/image';
import searchIcon from '../../../../../../assets/images/svg/search-icon.svg';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import whiteSearchIcon from '../../../../../../assets/images/svg/white-search-icon.svg';

type SearchBoxProps = {
  setIsOpenSearchBarMobile: Dispatch<SetStateAction<boolean>>;
};

export function SearchBar({ setIsOpenSearchBarMobile }: SearchBoxProps) {
  const ref = useRef<any>(null);
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
    setIsOpenSearchBarMobile(true);
  }

  function handleClickOutside(e: MouseEvent) {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
  }, []);

  return (
    <>
      <div
        ref={ref}
        className="
          flex -ml-[228px]
          desk-sm:-ml-[208px]
          tab-md:ml-0
        "
      >
        <div
          className="
            w-[260px]
            desk-sm:w-[240px]
            tab-md:hidden
          "
        >
          <input
            type="text"
            placeholder="Digite aqui sua pesquisa"
            className={`
              ${isOpen ? 'w-[260px] desk-sm:w-[240px]' : 'w-0 opacity-0'}
              outline-none h-[36px] px-12 bg-background2 border border-primary-green-light rounded-normal placeholder-gray2 relative float-right transition-all
              desk-sm:h-32
            `}
          />
        </div>

        <div
          className={`
            ${
              isOpen ? 'bg-primary-green-light shadow-inset ' : 'bg-background-2'
            }
            px-8 py-4 ml-[-40px] mr-[-8px] rounded-normal z-10
            desk-sm:right-[23px]
            tab-md:hidden transition-all
          `}
        >
          <Image
            alt="icone de lupa"
            onClick={handleOpen}
            className="
              cursor-pointer
              desk-sm:h-24 desk-sm:w-24
              tab:h-[30px] tab:w-[30px]
              mob:h-[22px] mob:w-[22px]
            "
            src={isOpen ? whiteSearchIcon : searchIcon}
          />
        </div>

        <Image
          src={searchIcon}
          alt="icone de lupa"
          onClick={handleOpen}
          className="
            hidden cursor-pointer
            desk-sm:h-24 desk-sm:w-24
            tab-md:block tab:h-[30px] tab:w-[30px]
            mob:h-[22px] mob:w-[22px]
          "
        />
      </div>
    </>
  );
}
