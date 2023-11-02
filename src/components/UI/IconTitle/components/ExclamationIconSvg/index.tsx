type ExclamationIconSvgProps = {
  hover?: boolean;
};

export function ExclamationIconSvg({ hover }: ExclamationIconSvgProps) {
  return (
    <svg
      className={`
        ${hover ? 'group-hover:fill-primary-green' : ''}
        h-40 w-40 fill-gray3 transition-all duration-500
        desk-md:h-[26px] desk-md:w-[26px]
        tab:h-[20px] tab:w-[20px]
      `}
      viewBox="0 0 17 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M 13.842 3.655 L 6.944 2.057 L 5.283 12.544 L 10.377 13.724 L 13.842 3.655 Z" />
      <path d="M 5.944 21.716 C 7.77 21.716 9.247 20.233 9.247 18.402 C 9.247 16.571 7.77 15.087 5.944 15.087 C 4.12 15.087 2.64 16.571 2.64 18.402 C 2.64 20.233 4.12 21.716 5.944 21.716 Z" />
    </svg>
  );
}
