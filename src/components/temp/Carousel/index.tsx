import { Slide } from './types';
import styles from './styles.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SlideCard } from './components/SlideCard';
import { Pagination } from './components/Pagination';
import { TextSlider } from './components/TextSlider';
import { useCallback, useRef, useState } from 'react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import { PrevArrowButton } from './components/PrevArrowButton';
import { NextArrowButton } from './components/NextArrowButton';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

export type CarouselProps = {
  slides: Slide[];
  bgColor?: string;
  textColor?: string;
  tagBgColor?: string;
  tagTextColor?: string;
  withTextSlider?: boolean;
  textSliderRedirectUrl?: string;
};

const defaultBgColor = '#031e10';

const coverFlowEffectConfig = {
  rotate: 0,
  stretch: 0,
  depth: 200,
  modifier: 1,
  slideShadows: false,
};

const breakpointsConfig = {
  1367: {
    spaceBetween: 150,
    slidesPerView: 2,
  },
  1025: {
    spaceBetween: 110,
    slidesPerView: 2,
  },
  801: {
    spaceBetween: 110,
    slidesPerView: 1.5,
  },
  431: {
    spaceBetween: 90,
    slidesPerView: 1.5,
  },
  321: {
    spaceBetween: 60,
    slidesPerView: 1.2,
    allowTouchMove: true,
  },
  0: {
    spaceBetween: 40,
    slidesPerView: 1.2,
    allowTouchMove: true,
  },
};

export function Carousel({
  textColor,
  tagBgColor,
  slides = [],
  tagTextColor,
  withTextSlider,
  textSliderRedirectUrl,
  bgColor = defaultBgColor,
}: CarouselProps) {
  const sliderRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const handleOnSlideChange = useCallback(() => {
    if (!sliderRef.current) return;
    setActiveIndex(sliderRef.current.swiper.realIndex);
  }, []);

  const bgColorIsNotEmpty = bgColor.length;

  return (
    <>
      <div
        className={styles.container}
        style={{
          backgroundColor: bgColorIsNotEmpty ? bgColor : defaultBgColor,
        }}
      >
        <Swiper
          loop
          ref={sliderRef}
          effect={'coverflow'}
          className="mySwiper"
          centeredSlides={true}
          allowTouchMove={false}
          autoplay={{ delay: 5000 }}
          breakpoints={breakpointsConfig}
          onSlideChange={handleOnSlideChange}
          modules={[EffectCoverflow, Autoplay]}
          coverflowEffect={coverFlowEffectConfig}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <SlideCard
                slide={slide}
                textColor={textColor}
                tagBgColor={tagBgColor}
                gradientColor={bgColor}
                tagTextColor={tagTextColor}
              />
            </SwiperSlide>
          ))}

          <PrevArrowButton handlePrev={handlePrev} />

          <NextArrowButton handleNext={handleNext} />

          <Pagination slides={slides} activeIndex={activeIndex} />

          <div className={styles.gradient} />
        </Swiper>
      </div>

      {withTextSlider && (
        <TextSlider textSliderRedirectUrl={textSliderRedirectUrl} />
      )}

      <style>{`
        .mySwiper {
          position: relative;
          padding-bottom: 40px;
        }

        @media (max-width: 800px) {
          .mySwiper {
            padding-bottom: 24px;
          }
        }
      `}</style>
    </>
  );
}
