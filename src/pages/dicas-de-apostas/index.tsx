import { useEffect } from 'react';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { GTMPageView } from '@/utils/gtm';
import Odds from '@/components/Global/Odds';
import { BettingTipsSEO } from '@/seo/dicas-de-apostas';
import { TopLineText } from '@/components/UI/TopLineText';
import { BettingTipsPageProps } from '@/types/bettingTips';
import { CourseCard } from '@/components/Global/CourseCard';
import { getBettingTipsStaticProps } from '@/SSG/bettingTips';
import { CardShowcase } from '@/components/Global/CardShowcase';
import { ImageCarousel } from '@/components/Global/ImageCarousel';
import { NewsletterGtm } from '@/components/Global/NewsletterGtm';
import { Dictionary } from '@/components/Pages/BettingTips/Dictionary';
import { AdsPlaceholder } from '@/components/GoogleAds/AdsPlaceholder';
import { Rasgado_1 } from '@/components/GoogleAds/AdsTemplates/Rasgado_1';
import { CardShowcaseMobile } from '@/components/Global/CardShowcaseMobile';
import { Vertical_1 } from '@/components/GoogleAds/AdsTemplates/Vertical_1';
import { HowToBetSteps } from '@/components/Pages/BettingTips/HowToBetSteps';
import { Rasgado_Mobile_1 } from '@/components/GoogleAds/AdsTemplates/Rasgado_Mobile_1';

export default function BettingTipsPage({
  basicPosts,
  basicCategory,
  howToBetPosts,
  carouselSlides,
  strategiesPosts,
  lanceBettingPosts,
  strategiesCategory,
  lanceBettingCategory,
}: BettingTipsPageProps) {
  const router = useRouter();

  useEffect(() => {
    GTMPageView('pageview', router.pathname);
  }, [router.pathname]);

  return (
    <>
      <BettingTipsSEO />

      <ImageCarousel slides={carouselSlides} />

      <Odds />

      <div
        className="
          p-40 flex justify-between gap-[45px] animate-card-fade
          desk-sm:p-[18px] desk-sm:gap-[21px]
          tab:p-[28px] tab:gap-24
          mob:p-24 mob:px-0
        "
      >
        <div
          className="
            w-[1370px]
            mob:w-full
          "
        >
          <HowToBetSteps posts={howToBetPosts} />

          <div
            className="
              mt-[33px] items-center justify-center overflow-hidden hidden
              mob:flex
            "
          >
            <div className="animate-adsSkeleton w-[320px] h-[100px] relative flex items-center justify-center overflow-hidden">
              <Rasgado_Mobile_1 />

              <AdsPlaceholder />
            </div>
          </div>

          <div
            className="
              mt-40
              desk-sm:mt-32
              mob:mt-[55px] mob:px-24
            "
          >
            <TopLineText>
              Dicas e estratégias para você começar a apostar em esportes!
            </TopLineText>
          </div>

          <div
            className="
              flex flex-col gap-48 my-40
              desk-md:my-24 desk-md:gap-32
              tab:my-32
              mob:hidden
            "
          >
            <CardShowcase
              home
              posts={basicPosts}
              title={basicCategory.name}
              categorySlug={basicCategory.slug}
              subtitle="Primeiras dicas para iniciar nas apostas esportivas"
            />

            <CardShowcase
              home
              posts={strategiesPosts}
              title={strategiesCategory.name}
              categorySlug={strategiesCategory.slug}
              subtitle="Estratégias para dominar as apostas"
            />

            <CardShowcase
              home
              posts={lanceBettingPosts}
              title={lanceBettingCategory.name}
              categorySlug={lanceBettingCategory.slug}
              subtitle="Conheça tudo sobre a casa de apostas"
            />
          </div>

          <div
            className="
              flex flex-col gap-[30px]
              mob:mt-[30px]
              mob-sm:mt-[59px]
            "
          >
            <CardShowcaseMobile
              name={basicCategory.name}
              slug={basicCategory.slug}
              description={basicCategory.description}
            >
              {basicPosts.map((course, index) => (
                <CourseCard
                  key={index}
                  courseData={course}
                  categorySlug={basicCategory.slug}
                />
              ))}
            </CardShowcaseMobile>

            <CardShowcaseMobile
              name={strategiesCategory.name}
              slug={strategiesCategory.slug}
              description={strategiesCategory.description}
            >
              {strategiesPosts.map((course, index) => (
                <CourseCard
                  key={index}
                  courseData={course}
                  categorySlug={strategiesCategory.slug}
                />
              ))}
            </CardShowcaseMobile>

            <CardShowcaseMobile
              name={lanceBettingCategory.name}
              slug={lanceBettingCategory.slug}
              description={lanceBettingCategory.description}
            >
              {lanceBettingPosts.map((course, index) => (
                <CourseCard
                  key={index}
                  courseData={course}
                  categorySlug={lanceBettingCategory.slug}
                />
              ))}
            </CardShowcaseMobile>
          </div>

          <div
            className="
              w-full flex gap-[41px] flex-col justify-center items-center
              desk-sm:gap-[19px]
              tab:gap-[26px]
              tab-xs:w-full mob:items-center
              mob:gap-32 mob:mt-[19px] mob:flex-col-reverse
            "
          >
            <div
              className="
                w-[970px] h-[250px] overflow-hidden animate-adsSkeleton relative
                desk-md:w-[728px] desk-md:h-[90px]
                tab-sm:w-[650px]
                tab:w-[468px] tab:h-[60px]
                mob:w-[320px] mob:h-[100px] mob:justify-center mob:items-center
              "
            >
              <Rasgado_1 />

              <AdsPlaceholder />
            </div>

            <Dictionary />
          </div>

          <div className="mob:mx-24">
            <NewsletterGtm />
          </div>
        </div>

        <div
          className="
            w-[427px] mt-[153px]
            desk-md:mt-[130px]
            desk-sm:w-[232px] desk-sm:shrink-0 desk-sm:mt-[95px]
            tab:max-w-[168px] tab:mt-[85px]
            tab-xs:hidden
          "
        >
          <div className="w-full flex justify-center items-center sticky top-120">
            <div
              className="
                w-[300px] h-[600px] animate-adsSkeleton relative flex justify-center items-center overflow-hidden
                desk-sm:w-[120px] desk-sm:h-[600px]
              "
            >
              <Vertical_1 />

              <AdsPlaceholder />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<BettingTipsPageProps> =
  getBettingTipsStaticProps();
