import { GetServerSideProps } from 'next';
import { CategorySEO } from '@/seo/category';
import { CategoryPageProps } from '@/types/category';
import { TopLineText } from '@/components/UI/TopLineText';
import { getCategoryServerSideProps } from '@/SSR/category';
import { Breadcrumbs } from '@/components/Global/Breadcrumbs';
import { HotQuestions } from '@/components/Global/HotQuestions';
import { CardShowcase } from '@/components/Global/CardShowcase';
import { AdsPlaceholder } from '@/components/GoogleAds/AdsPlaceholder';
import { AllAboutSection } from '@/components/Pages/Category/AllAboutSection';
import { Rasgado_Mobile_1 } from '@/components/GoogleAds/AdsTemplates/Rasgado_Mobile_1';

export default function CategoryPage({
  page,
  posts,
  pageInfo,
  pageTitle,
  highlights,
  categoryName,
  categorySlug,
  highlightsTitle,
  listSectionTitle,
  categoryDescription,
}: CategoryPageProps) {
  return (
    <>
      <CategorySEO
        pageTitle={pageTitle}
        categoryName={categoryName}
        categorySlug={categorySlug}
        categoryDescription={categoryDescription}
      />

      <div
        className="
          mt-[21px]
          desk-sm:mt-24
        "
      >
        <div
          className="
            mb-32
            desk-sm:mb-24
          "
        >
          <div
            className="
              px-40
              desk-sm:px-[18px]
              tab:px-[28px]
              mob:px-24
            "
          >
            <Breadcrumbs
              paths={[
                { title: 'dicas de apostas', link: 'dicas-de-apostas' },
                { title: categoryName },
              ]}
            />
          </div>

          <div
            className="
              mt-64 px-40
              desk-sm:px-[18px]
              tab:px-[28px]
              mob:px-24
            "
          >
            <TopLineText element="h1">{pageTitle}</TopLineText>
          </div>
        </div>

        <CardShowcase
          priority
          posts={highlights}
          title={highlightsTitle}
          categoryName={categoryName}
          categorySlug={categorySlug}
        />

        <AllAboutSection
          page={page}
          posts={posts}
          pageInfo={pageInfo}
          title={listSectionTitle}
          categoryName={categoryName}
          categorySlug={categorySlug}
        />

        <div className="flex w-full justify-center">
          <div
            className="
              hidden relative w-[300px] h-[100px] justify-center items-center mt-32 animate-adsSkeleton overflow-hidden
              mob:flex
            "
          >
            <Rasgado_Mobile_1 />

            <AdsPlaceholder />
          </div>
        </div>

        <HotQuestions />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<CategoryPageProps> =
  getCategoryServerSideProps();
