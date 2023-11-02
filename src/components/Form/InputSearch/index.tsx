import Image from 'next/image';
import { FC, InputHTMLAttributes } from 'react';
import searchIcon from '../../../assets/images/svg/search-icon-green.svg';
import searchIconHover from '../../../assets/images/svg/search-icon-white.svg';

interface InputSearchProps extends InputHTMLAttributes<HTMLInputElement> {
  onSearch: () => void;
}

export const InputSearch: FC<InputSearchProps> = ({ onSearch, ...rest }) => {
  return (
    <div className="relative">
      <input
        className="w-[100%] py-16 pr-64 pl-16 rounded-normal border-2 border-primary-green-dark"
        {...rest}
      />

      <button
        className="
          group w-40 absolute top-[50%] right-[-1px] translate-y-[-50%] h-full px-16 rounded-normal duration-300
          hover:bg-primary-green-dark
          active:bg-primary-green
        "
        onClick={onSearch}
      >
        <Image
          className="
            absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] opacity-100
            group-hover:opacity-0
            group-active:opacity-0
          "
          src={searchIcon}
          alt="icone de busca"
        />

        <Image
          className="
            absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] opacity-0
            group-hover:opacity-100
            group-active:opacity-100
          "
          src={searchIconHover}
          alt="icone de busca"
        />
      </button>
    </div>
  );
};
