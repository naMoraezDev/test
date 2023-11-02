import Image from 'next/image';
import { useState } from 'react';
import { NewsType } from '@/types/home';
import { ROUTES } from '@/constants/routes';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GuessesCard } from './components/GuessesCard';
import { Navigation, Pagination } from 'swiper/modules';
import { TopLineText } from '@/components/UI/TopLineText';
import { BLUR_DATA_URL, EXTERNAL_LINKS } from '@/constants/common';
import palpitesBg from '../../../../assets/images/png/palpites-bg.png';
import { CustomLink } from '@/components/CustomNextComponents/CustomLink';
import rightArrow from '../../../../assets/images/svg/yellow-arrow-right.svg';
import lanceLogoPalpites from '../../../../assets/images/svg/logo-betting-top-banner.svg';

type GuessesProps = {
  content: NewsType[];
};

export function Guesses({ content }: GuessesProps) {
  const [showGradient, setShowGradient] = useState<string[]>(['end']);

  function renderCarouselCards() {
    return content.map((item, index) => (
      <SwiperSlide key={`${item.title}-${index}`}>
        <GuessesCard guessesData={item} />
      </SwiperSlide>
    ));
  }

  function handleShowGradient(isBegginning: boolean, isEnd: boolean) {
    if (isBegginning) {
      setShowGradient(['end']);
      return;
    }

    if (isEnd) {
      setShowGradient(['begginning']);
      return;
    }

    setShowGradient(['begginning', 'end']);
  }

  return (
    <>
      <div
        className="
          flex justify-end relative w-full h-[720px] bg-white shadow-normal overflow-hidden
          desk-md:h-[430px]
          desk-sm:h-[375px]
          tab:h-[500px]
        "
      >
        <Image
          width={1920}
          height={724}
          src={palpitesBg}
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          className="object-cover object-right-top z-0 min-h-[100%]"
          alt="imagem de um homem de camiseta amarela segurando um celular e comemorando"
        />

        <div
          className="
            absolute top-0 left-[20px] right-[20px] h-full py-40 z-10
            tab:left-16 tab:right-16
          "
        >
          <TopLineText color="tertiary-yellow">Palpites</TopLineText>

          <div
            className={`
              ${
                !showGradient.includes('end')
                  ? 'opacity-100'
                  : 'opacity-0 -z-[100px]'
              }
              w-full h-max flex justify-end px-48 items-end mt-40 duration-300
              desk-md:mt-0
              desk-sm:px-[20px] desk-sm:-mt-24
              tab:px-24 tab:mt-40
              mob:px-8
            `}
          >
            <CustomLink href={`${ROUTES.tips}`}>
              <div className="flex justify-between items-center gap-16">
                <p
                  className="
                    text-news-paragraph-desk-lg text-tertiary-yellow
                    tab:text-news-paragraph-tab
                  "
                >
                  ver mais
                </p>

                <Image src={rightArrow} alt="seta para a direita" />
              </div>
            </CustomLink>
          </div>

          <div
            className="
              guesses-slider absolute top-[50%] translate-y-[-35%] w-full px-[20px]
              tab:px-0
            "
          >
            <Swiper
              loop={false}
              spaceBetween={24}
              navigation={true}
              pagination={true}
              slidesPerView={1.2}
              slidesOffsetAfter={0}
              allowTouchMove={true}
              className="tab:!pb-32"
              slidesOffsetBefore={0}
              normalizeSlideIndex={false}
              breakpoints={{
                1366: {
                  slidesPerView: 3.5,
                  slidesOffsetBefore: 120,
                  slidesOffsetAfter: 120,
                  allowTouchMove: false,
                  normalizeSlideIndex: false,
                },
                1024: {
                  slidesPerView: 3.5,
                  slidesOffsetBefore: 120,
                  slidesOffsetAfter: 120,
                  allowTouchMove: false,
                },
                800: {
                  slidesPerView: 2.5,
                  slidesOffsetBefore: 90,
                  slidesOffsetAfter: 90,
                  loop: true,
                },
                768: {
                  slidesPerView: 1.2,
                },
              }}
              modules={[Navigation, Pagination]}
              onSlideChange={val =>
                handleShowGradient(val.isBeginning, val.isEnd)
              }
              onSlideChangeTransitionEnd={val =>
                handleShowGradient(val.isBeginning, val.isEnd)
              }
            >
              {showGradient.includes('begginning') && (
                <div className="h-[100%] w-[15%] absolute top-0 left-0 bg-gradient-to-r from-[#031E10] z-10 pointer-events-none" />
              )}

              {renderCarouselCards()}

              {showGradient.includes('end') && (
                <div className="h-[100%] w-[15%] absolute top-0 right-0 bg-gradient-to-l from-[#031E10] z-10 pointer-events-none" />
              )}
            </Swiper>
          </div>
        </div>
      </div>

      <div
        className="
          flex justify-center items-center w-[100%] h-[72px] bg-tertiary-yellow
          tab:h-[50px]
        "
      >
        <Image
          width={58}
          height={30}
          src={lanceLogoPalpites}
          alt="Logo da Lance! Bet"
        />

        <div
          className="
            pl-48 ml-48 border-l-[1px] border-primary-green
            tab:pl-32 tab:ml-32
          "
        >
          <a href={EXTERNAL_LINKS.lanceBetting} className="z-50">
            <button
              type="button"
              className="
                px-[14px] py-8 bg-[#06379D] text-tertiary-yellow text-button-sm whitespace-nowrap rounded-normal transition-colors duration-500
                desk-md:w-full
                hover:bg-primary-green hover:text-white
                active:bg-primary-green-light active:shadow-inset-button active:duration-150
              "
            >
              Aposte agora!
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
