/* eslint-disable no-unused-vars */

type Slide = {
  uri: string;
  title: string;
  subtitle: string;
  imageUrl?: string;
};

type SlideNavigationProps = {
  slides: Slide[];
  currentIndex: number;
  goToSlide: (slideIndex: number) => void;
};

export function SlideNavigation({
  slides,
  goToSlide,
  currentIndex,
}: SlideNavigationProps) {
  return (
    <div
      className="
        absolute right-0 left-0 bottom-[61.88px]
        tab:bottom-[56.24px]
        mob:bottom-[48.07px]
        mob-sm:bottom-[36px]
      "
    >
      <div
        className="
          flex items-center justify-center gap-16
          mob-sm:gap-8
        "
      >
        {slides.map((_, index) => (
          <div
            key={index}
            className={`
              w-64 h-16 rounded-[100px] bg-white cursor-pointer duration-700 overflow-hidden
              desk-md:w-[46px] desk-md:h-12
              mob:w-40 mob:h-[10px]
              mob-sm:w-32 mob-sm:h-8
               ${
                 currentIndex === index
                   ? 'w-[128px] desk-md:w-[92px] desk-md:h-12 mob:w-[56px] mob:h-[10px] mob-sm:w-64 mob-sm:h-8 bg-opacity-20'
                   : 'bg-opacity-20'
               }
            `}
            onClick={() => goToSlide(index)}
          >
            <div
              key={index}
              className={`
                h-16 rounded-[100px] bg-white cursor-pointer duration-700
                desk-md:h-12
                mob:h-[10px]
                mob-sm:h-8
                ${
                  currentIndex === index
                    ? 'animate-sliderButton w-[128px] desk-md:w-[92px] mob:w-[56px] mob-sm:w-64 float-left'
                    : 'bg-opacity-20 w-0 transition-none'
                }
              `}
              onClick={() => goToSlide(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
