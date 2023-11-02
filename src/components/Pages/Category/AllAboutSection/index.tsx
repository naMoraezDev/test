import { useRouter } from 'next/router';
import { ROUTES } from '@/constants/routes';
import { useEffect, useState } from 'react';
import { PageInfo, Post } from '@/types/category';
import { IconTitle } from '@/components/UI/IconTitle';
import { CourseCard } from '@/components/Global/CourseCard';
import { AdsPlaceholder } from '@/components/GoogleAds/AdsPlaceholder';
import { GreenSpinnerIconSvg } from './components/GreenSpinnerIconSvg';
import { CustomLink } from '@/components/CustomNextComponents/CustomLink';
import { Rasgado_1 } from '@/components/GoogleAds/AdsTemplates/Rasgado_1';

type AllAboutSectionProps = {
  page?: number;
  title: string;
  posts: Post[];
  pageInfo: PageInfo;
  categoryName: string;
  categorySlug: string;
  isOnCasinoPage?: boolean;
  hideAdvertising?: boolean;
};

export function AllAboutSection({
  title,
  posts,
  page = 1,
  pageInfo,
  categoryName,
  categorySlug,
  isOnCasinoPage,
  hideAdvertising,
}: AllAboutSectionProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, [router.asPath]);

  return (
    <div
      className="
        px-40 mt-[42px]
        desk-sm:px-[18px] desk-sm:mt-56
        tab:px-[28px] tab:mt-48
        mob:px-24 mob:mt-[36px]
        mob-sm:mt-[28px]
      "
    >
      {!hideAdvertising && (
        <div className="w-full flex justify-center">
          <div
            className="
              w-[1190px] h-[250px] mb-[62px] relative flex justify-center items-center animate-adsSkeleton overflow-hidden
              desk-sm:w-[728px] desk-sm:h-[90px]
              mob:hidden
            "
          >
            <Rasgado_1 />

            <AdsPlaceholder />
          </div>
        </div>
      )}

      <IconTitle element="h2">{title}</IconTitle>

      <div
        className="
          w-[707px] h-[1px] bg-gray4 mt-24 mb-48
          desk-sm:w-[480px] desk-sm:mt-12 desk-sm:mb-24
          tab:mt-8 tab:mb-16
          tab-xs:w-full mob:mt-[15px] mob:mb-24
          mob-sm:mt-8
        "
      />
      <div
        className="
          grid grid-cols-4 gap-40 mb-40
          desk-md:gap-[20px]
          tab:gap-24
          tab-xs:grid-cols-3
          mob:grid-cols-1
        "
      >
        {posts.map((post, index) => (
          <CourseCard
            key={index}
            courseData={post}
            category={categoryName}
            categorySlug={categorySlug}
          />
        ))}
      </div>

      {pageInfo.hasNextPage && (
        <div className="flex justify-center">
          <CustomLink
            href={
              !isOnCasinoPage
                ? `${ROUTES.bettingReview}${categorySlug}?page=${page + 1}`
                : `${ROUTES.casino}/mais-noticias?page=${page + 1}`
            }
            className="mob:w-full"
          >
            <div
              className="
                w-[180px]
                mob:w-full
              "
            >
              <button
                type="button"
                disabled={isLoading}
                onClick={() => setIsLoading(true)}
                className="
                  flex justify-center items-center gap-8 w-[180px] h-32 px-[14px] text-primary-green text-button-sm whitespace-nowrap rounded-normal border border-primary-green transition-colors duration-500
                  desk-md:w-full
                  tab-sm:px-8
                  mob:h-40 mob:w-full
                  hover:bg-primary-green hover:text-white
                  active:bg-primary-green-light active:border-primary-green-light active:shadow-inset-button active:duration-150
                  disabled:bg-gray3 disabled:text-gray1 disabled:border-0 disabled:active:shadow-none
                "
              >
                {isLoading ? <GreenSpinnerIconSvg /> : 'Mostrar mais'}
              </button>
            </div>
          </CustomLink>
        </div>
      )}
    </div>
  );
}
