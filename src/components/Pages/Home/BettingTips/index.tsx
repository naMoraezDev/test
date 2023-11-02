import 'swiper/css';
import Image from 'next/image';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react';
import { NewsType } from '@/types/home';
import { ROUTES } from '@/constants/routes';
import { Text } from '@/components/UI/Text';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from '@/components/Global/Container';
import { TopLineText } from '@/components/UI/TopLineText';
import { CourseCard } from '@/components/Global/CourseCard';
import { CustomLink } from '@/components/CustomNextComponents/CustomLink';
import arrowLeftGreen from '../../../../assets/images/svg/arrow-left-green.svg';

interface BettingTipsProps {
  content: NewsType[];
}

export function BettingTips({ content }: BettingTipsProps) {
  const [showGradient, setShowGradient] = useState<string[]>(['end']);

  function renderCarouselCards() {
    return content.map((item, index) => (
      <SwiperSlide key={`${item.title}-${index}`}>
        <CourseCard courseData={item} categorySlug={item.categorySlug} home />
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
    <Container className="!pr-0 tab-sm:!pr-[20px] !pt-0 !pb-0">
      <div
        className="
          flex overflow-hidden
          tab-sm:block
        "
      >
        <div
          className="
            w-[40%] mr-32
            desk-sm:w-[50%]
            tab-sm:w-[100%]
          "
        >
          <TopLineText>Dicas de Apostas</TopLineText>

          <Text
            variant="section"
            className="
              mt-32 font-workSans text-primary-green-dark
              desk-sm:mt-24
              tab-sm:mt-16
            "
          >
            Tutorial do básico ao estratégico
          </Text>

          <Text
            variant="h2"
            className="
              max-w-[90%] mt-8 text-black
              tab-sm:max-w-none
              tab-sm:!text-[18px]
            "
          >
            O resenha de apostas oferece a você um guia completo sobre apostas
            esportivas
          </Text>

          <Text
            variant="text"
            className="
              max-w-[80%] mt-12 mb-48 text-black
              tab:max-w-none tab-sm:mb-[-10px]
            "
          >
            Explore os conceitos básicos, aprenda estratégias vencedoras e
            descubra como tomar as melhores decisões
          </Text>

          <CustomLink href={`${ROUTES.bettingTips}`} className="z-50">
            <button
              className="
                w-[200px] h-[45px] px-[14px] bg-background-green text-white text-button-md whitespace-nowrap rounded-normal transition-all duration-500 shrink-0
                tab-sm:hidden
                mob:w-full mob:h-40
                hover:bg-primary-green
                active:bg-primary-green-light active:shadow-inset-button active:duration-150
              "
              type="button"
            >
              Aprenda a apostar!
            </button>

            <p
              className="
                hidden mb-[20px] text-[14px] text-primary-green-dark font-roboto justify-end
                tab-sm:flex
              "
            >
              ver tudo
              <Image
                priority
                width={24}
                height={24}
                src={arrowLeftGreen}
                alt="ícone de seta para a direita verde"
              />
            </p>
          </CustomLink>
        </div>

        <div
          className="
            relative w-[60%]
            desk-sm:w-[50%]
            tab-sm:w-[100%] tab-sm:mt-16
          "
        >
          <Swiper
            autoHeight
            navigation
            allowTouchMove
            spaceBetween={24}
            slidesPerView={1.5}
            modules={[Navigation]}
            breakpoints={{
              1023: {
                slidesPerView: 2.5,
                allowTouchMove: false,
              },
              799: {
                spaceBetween: 40,
              },
            }}
            onSlideChange={val =>
              handleShowGradient(val.isBeginning, val.isEnd)
            }
          >
            {showGradient.includes('begginning') && (
              <div
                className="
                  h-[100%] w-[15%] absolute top-0 left-0 bg-gradient-to-r from-[#FCFCFC] z-10 pointer-events-none
                  tab-xs:hidden
                "
              />
            )}
            {renderCarouselCards()}
            {showGradient.includes('end') && (
              <div
                className="
                  h-[100%] w-[15%] absolute top-0 right-0 bg-gradient-to-l from-[#FCFCFC] z-10 pointer-events-none
                  tab-xs:hidden
                "
              />
            )}
          </Swiper>
        </div>
      </div>
    </Container>
  );
}
