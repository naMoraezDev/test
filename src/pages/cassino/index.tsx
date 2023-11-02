import { GetStaticProps } from 'next';
import { CasinoSEO } from '@/seo/cassino';
import { CasinoPageProps } from '@/types/casino';
import { getCasinoStaticProps } from '@/SSG/casino';
import { TopLineText } from '@/components/UI/TopLineText';
import { NewsMosaic } from '@/components/Pages/Home/NewsMosaic';
import { ImageCarousel } from '@/components/Global/ImageCarousel';
import { AdsPlaceholder } from '@/components/GoogleAds/AdsPlaceholder';
import { Vertical_1 } from '@/components/GoogleAds/AdsTemplates/Vertical_1';
import { AllAboutSection } from '@/components/Pages/Category/AllAboutSection';

export default function CasinoPage({
  pageInfo,
  postList,
  carouselSlides,
  highlightedPosts,
}: CasinoPageProps) {
  return (
    <>
      <CasinoSEO />

      <ImageCarousel slides={carouselSlides} />

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
            <NewsMosaic news={highlightedPosts} />
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

      <div
        className="
          px-40 mt-[42px]
          desk-sm:px-[18px] desk-sm:mt-56
          tab:px-[28px] tab:mt-48
          mob:px-24 mob:mt-[36px]
          mob-sm:mt-[28px]
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
          <TopLineText>Confira as dicas do cassino</TopLineText>
        </div>
      </div>

      <div
        className="
          mb-[42px]
          tab:mb-32
        "
      >
        <AllAboutSection
          isOnCasinoPage
          hideAdvertising
          posts={postList}
          pageInfo={pageInfo}
          categoryName="cassino"
          categorySlug="cassino"
          title="Aprenda o básico"
        />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = getCasinoStaticProps();
