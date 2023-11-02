import { ReactNode } from 'react';

type CarouselProps = {
  children: ReactNode[] | ReactNode;
};

export function Slider({ children: slides }: CarouselProps) {
  return (
    <div className="flex gap-24 overflow-auto scrollbar-hide scroll-smooth pr-24">
      {slides}
    </div>
  );
}
