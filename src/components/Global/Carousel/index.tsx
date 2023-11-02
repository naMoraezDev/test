import { IoIosArrowDown } from 'react-icons/io';
import { MouseEvent, ReactNode, useEffect, useRef, useState } from 'react';

type CarouselProps = {
  children: ReactNode[] | ReactNode;
};

export function Carousel({ children: slides }: CarouselProps) {
  const slide = useRef<HTMLDivElement>(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    setScrollLeft(1);
  }, []);

  function handleScrollLeft(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (slide.current && slide.current?.offsetWidth) {
      setScrollLeft(slide.current.scrollLeft - slide.current.offsetWidth);
      slide.current.scrollLeft -= slide.current.offsetWidth;
    }
  }

  function handleScrollRight(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (slide.current && slide.current?.offsetWidth) {
      setScrollLeft(slide.current.scrollLeft + slide.current.offsetWidth);
      slide.current.scrollLeft =
        slide.current.scrollLeft + slide.current.offsetWidth;
    }
  }

  const showPrevButton = scrollLeft > 1;

  const showNextButton =
    slide.current && scrollLeft < slide.current?.scrollWidth - 800;

  return (
    <div className="relative flex-shrink">
      <div
        ref={slide}
        className="
          flex gap-40 overflow-auto scrollbar-hide scroll-smooth
          desk-md:gap-24
          mob:gap-16
        "
      >
        {slides}

        <div
          className={`${
            showPrevButton ? 'opacity-100' : 'opacity-0'
          } transition-all duration-300 absolute h-full flex px-8 tab:hidden z-30`}
        >
          <button type="button" onClick={handleScrollLeft}>
            <div className="bg-white rounded-[100%] w-[60px] h-[60px] flex justify-center items-center shadow-icon-button">
              <IoIosArrowDown className="rotate-90 w-[40px] h-[40px] text-primary-green" />
            </div>
          </button>
        </div>

        <div
          className={`${
            showNextButton ? 'opacity-100' : 'opacity-0'
          } transition-all duration-300 absolute h-full flex right-[0px] px-8 tab:hidden z-30`}
        >
          <button type="button" onClick={handleScrollRight}>
            <div className="bg-white rounded-[100%] w-[60px] h-[60px] flex justify-center items-center shadow-icon-button">
              <IoIosArrowDown className="rotate-[270deg] w-[40px] h-[40px] text-primary-green" />
            </div>
          </button>
        </div>

        <div
          className={`${
            showPrevButton ? 'opacity-100' : 'opacity-0'
          } transition-all duration-300 absolute h-full w-[124px] flex left-0 tab:hidden`}
          style={{
            background:
              'linear-gradient(90deg, #F3F3F3 0%, rgba(255, 255, 255, 0.00) 100%)',
          }}
        />

        <div
          className={`${
            showNextButton ? 'opacity-100' : 'opacity-0'
          } transition-all duration-300 absolute h-full w-[124px] flex right-0 tab:hidden`}
          style={{
            background:
              'linear-gradient(270deg, #F3F3F3 0%, rgba(255, 255, 255, 0.00) 100%)',
          }}
        />
      </div>
    </div>
  );
}
