import Head from 'next/head';
import Image from 'next/image';
import { ROUTES } from '@/constants/routes';
import { SlideText } from './components/SlideText';
import { imageLoader, treatUri } from '@/utils/url';
import { BLUR_DATA_URL, EXTERNAL_LINKS } from '@/constants/common';
import { SlideNavigation } from './components/SlideNavigation';
import { TouchEvent, useCallback, useEffect, useState } from 'react';
import { CustomLink } from '@/components/CustomNextComponents/CustomLink';

type Slide = {
  uri: string;
  title: string;
  subtitle: string;
  imageUrl?: string;
};

type CarouselProps = {
  slides: Slide[];
  showTextSlide?: boolean;
  autoSlideInterval?: number;
};

export function ImageCarousel({
  slides,
  showTextSlide,
  autoSlideInterval = 5000,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showText, setShowText] = useState<boolean>(true);
  const { slug, category } = treatUri(slides[currentIndex].uri);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const minSwipeDistance = 50;

  function onTouchStart(e: TouchEvent<HTMLDivElement>) {
    setTouchStart(e.targetTouches[0].clientX);
  }

  function onTouchMove(e: TouchEvent<HTMLDivElement>) {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function onTouchEnd() {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe) {
      if (isLeftSwipe) {
        nextSlide();
      } else {
        previousSlide();
      }
    }
  }

  const nextSlide = useCallback(() => {
    setShowText(false);
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const previousSlide = useCallback(() => {
    setShowText(false);
    const isFirsSlide = currentIndex === 0;
    const newIndex = isFirsSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  useEffect(() => {
    setShowText(true);
    const slideInterval = setInterval(nextSlide, autoSlideInterval);

    return () => clearInterval(slideInterval);
  }, [autoSlideInterval, nextSlide]);

  const goToSlide = (slideIndex: number) => {
    if (slideIndex !== currentIndex) {
      setShowText(false);
    }
    setCurrentIndex(slideIndex);
  };

  const renderTextSlide = (totalItems: number) => {
    const textArray = [];
    for (let i = 0; i < totalItems; i += 1) {
      textArray.push('LANCE!BETTING');
    }

    return textArray.map((item, index) => (
      <p
        key={`lance-text-carousel-${index}`}
        className={`
          ${index % 2 === 0 ? 'text-primary-green' : 'text-[#06379D]'} 
          px-16 !leading-[40px] !font-bold text-news-h2-subtitle-desk-md 
          desk-sm:text-more-news-title-mob
        `}
      >
        {item}
      </p>
    ));
  };

  return (
    <>
      <Head>
        {slides.map((slide, index) => (
          <link
            as="image"
            key={index}
            rel="preload"
            type="image/png"
            href={slide.imageUrl}
          />
        ))}
      </Head>

      <div
        style={{
          width: 0,
          height: 0,
          overflow: 'hidden',
          position: 'absolute',
          content: slides.map(slide => `url(${slide.imageUrl})`).toString(),
        }}
      />

      <section
        className="
          h-[852px] relative group overflow-hidden
          desk-md:h-[534px]
          tab:h-[500px]
          mob:h-[599px]
          mob-sm:h-[400px]
        "
      >
        <CustomLink href={`${ROUTES.bettingReview}${category}/${slug}`}>
          <div
            onTouchEnd={onTouchEnd}
            onTouchMove={onTouchMove}
            onTouchStart={onTouchStart}
            className="
              w-full h-full px-[48px] flex items-center duration-[1000ms] top-0 bg-primary-green relative
              desk-sm:px-[20px]
              tab:px-[28px]
              mob:px-24
            "
          >
            {slides.map((slide, index) => (
              <Image
                fill
                priority
                key={index}
                alt="imagem"
                placeholder="blur"
                loader={imageLoader}
                blurDataURL={BLUR_DATA_URL}
                src={slide.imageUrl as string}
                sizes={'(max-width: 430px) 70vw'}
                className={`
                  ${index === currentIndex ? 'opacity-100' : 'opacity-0'}
                  absolute w-full h-full top-0 left-0 object-cover aspect-video transition-all duration-1000 animate-carouselImagePosition
                `}
              />
            ))}

            <div
              className="w-full h-full absolute top-0 left-0 bg-black"
              style={{
                background:
                  'linear-gradient(90deg, rgba(3, 30, 16, 0.76) 0%, rgba(3, 30, 16, 0.00) 80%)',
              }}
            />

            <div
              className="w-full h-full absolute top-0 left-0 bg-black"
              style={{
                background:
                  'linear-gradient(180deg, rgba(3, 30, 16, 0.06) 30%, #031E10 100%)',
              }}
            />

            <SlideText
              slides={slides}
              showText={showText}
              currentIndex={currentIndex}
            />
          </div>
        </CustomLink>

        <SlideNavigation
          slides={slides}
          goToSlide={goToSlide}
          currentIndex={currentIndex}
        />
      </section>

      {showTextSlide && (
        <a href={EXTERNAL_LINKS.lanceBetting} target="_blank">
          <div
            className="
              flex overflow-hidden bg-tertiary-yellow h-40
              mob:hidden
            "
          >
            <div className="flex shrink-0 animate-slide">
              {renderTextSlide(14)}
            </div>

            <div className="flex shrink-0 animate-slide">
              {renderTextSlide(14)}
            </div>
          </div>
        </a>
      )}
    </>
  );
}
