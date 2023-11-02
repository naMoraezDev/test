import { useEffect } from 'react';
import { HomeSEO } from '@/seo/home';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { GTMPageView } from '@/utils/gtm';
import Odds from '@/components/Global/Odds';
import { HomePageProps } from '@/types/home';
import { getHomeStaticProps } from '@/SSG/home';
import { MoreNews } from '@/components/Global/MoreNews';
import { TopLineText } from '@/components/UI/TopLineText';
import { Guesses } from '@/components/Pages/Home/Guesses';
import { NewsMosaic } from '@/components/Pages/Home/NewsMosaic';
import { NewsletterGtm } from '@/components/Global/NewsletterGtm';
import { ImageCarousel } from '@/components/Global/ImageCarousel';
import { BettingTips } from '@/components/Pages/Home/BettingTips';
import { AdsPlaceholder } from '@/components/GoogleAds/AdsPlaceholder';
import { Rasgado_2 } from '@/components/GoogleAds/AdsTemplates/Rasgado_2';
import { Vertical_1 } from '@/components/GoogleAds/AdsTemplates/Vertical_1';
import { Vertical_2 } from '@/components/GoogleAds/AdsTemplates/Vertical_2';

export default function HomePage({
  newsData,
  pageInfo,
  guessesData,
  moreNewsData,
  carouselSlides,
  educationalData,
}: HomePageProps) {
  const router = useRouter();

  useEffect(() => {
    GTMPageView('pageview', router.pathname);
  }, [router.pathname]);

  return (
    <>
      <HomeSEO />

      <ImageCarousel slides={carouselSlides} showTextSlide />

      <Odds />

      <div
        className="
          w-full px-40 py-40 bg-white
          desk-sm:px-[18px]
          tab:px-[28px]
          mob:px-24 mob:py-24
        "
      >
        <div
          className="
            mb-24
            desk-sm:mb-32
            tab:mb-12
            mob:mb-24
          "
        >
          <TopLineText>Notícias</TopLineText>
        </div>

        <div
          className="
            flex
            tab-xs:block
          "
        >
          <div
            className="
              w-[75%] pr-16
              tab-xs:w-full tab-xs:pr-0
            "
          >
            <NewsMosaic news={newsData} />
          </div>

          <div
            className="
              w-[25%] h-full max-h-[90vh] mt-24 pl-16 flex justify-center overflow-hidden sticky top-120
              tab-xs:w-full tab-xs:h-[164px] tab-xs:justify-center tab-xs:items-center tab-xs:p-0
            "
          >
            <div
              className="
                w-[300px] h-[600px] relative flex justify-center items-center animate-adsSkeleton overflow-hidden
                desk-sm:w-[120px] desk-sm:h-[600px]
                tab-xs:w-[320px] tab-xs:h-[100px]
              "
            >
              <Vertical_1 />

              <AdsPlaceholder />
            </div>
          </div>
        </div>
      </div>

      <Guesses content={guessesData} />

      <div
        className="
          w-full h-[558px] overflow-hidden relative flex justify-center items-center mb-40 animate-adsSkeleton
          desk-md:h-[390px]
          desk-sm:h-[360px] desk-sm:mb-48
          tab:h-[320px] tab:mb-32
          mob:h-[664px]
        "
      >
        <Rasgado_2 />

        <AdsPlaceholder />
      </div>

      <BettingTips content={educationalData} />

      <div
        className="
          w-full px-40 py-16 my-56 bg-white
          desk-sm:px-[18px] desk-sm:my-[42px]
          tab:px-[28px] tab:my-24
          mob:block mob:px-24 mob:my-16
        "
      >
        <div
          className="
            flex
            tab-xs:flex-col-reverse
          "
        >
          <div
            className="
              w-[75%] pr-16
              tab-xs:w-full tab:pr-0
            "
          >
            <div>
              <div>
                <div className="flex flex-col gap-16 mt-56">
                  <p
                    className="
                      text-more-news-desk-lg text-primary-green
                      desk-md:text-more-news-desk-md
                      tab:text-more-news-tab
                      mob:text-more-news-mob
                      mob-sm:text-more-news-mob-sm
                    "
                  >
                    Mais notícias
                  </p>

                  <MoreNews
                    home
                    page={1}
                    pageInfo={pageInfo}
                    posts={moreNewsData}
                  />
                </div>
              </div>
            </div>

            <div
              className="
                w-full
                tab-xs:w-full
              "
            >
              <div />
              <NewsletterGtm />
            </div>
          </div>

          <div
            className="
              w-[25%] h-full max-h-[90vh] mt-24 pl-16 flex justify-center overflow-hidden sticky top-120 z-10
              tab-xs:w-full tab-xs:h-[164px] tab-xs:justify-center tab-xs:items-center tab-xs:static tab-xs:p-0
            "
          >
            <div
              className="
                w-[300px] h-[600px] animate-adsSkeleton relative flex justify-center items-center overflow-hidden
                desk-sm:w-[120px]
                tab-xs:w-[320px] tab-xs:h-[100px]
              "
            >
              <Vertical_2 />

              <AdsPlaceholder />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<HomePageProps> =
  getHomeStaticProps();
