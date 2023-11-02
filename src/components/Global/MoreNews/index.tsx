import Image from 'next/image';
import { NewsType } from '@/types/home';
import { useRouter } from 'next/router';
import { imageLoader } from '@/utils/url';
import { ROUTES } from '@/constants/routes';
import { useEffect, useState } from 'react';
import { BLUR_DATA_URL } from '@/constants/common';
import clockIcon from '../../../assets/images/svg/clock-icon.svg';
import { CustomLink } from '@/components/CustomNextComponents/CustomLink';
import { GreenSpinnerIconSvg } from '@/components/Pages/Category/AllAboutSection/components/GreenSpinnerIconSvg';

type Post = {
  slug: string;
  date: string;
  title: string;
  imageUrl: string;
  category?: string;
};

type PageInfo = {
  endCursor: string;
  hasNextPage: boolean;
};

type MoreNewsProps = {
  page: number;
  tips?: boolean;
  home?: boolean;
  casino?: boolean;
  pageInfo: PageInfo;
  posts: Post[] | NewsType[];
};

export function MoreNews({
  page,
  tips,
  home,
  posts,
  casino,
  pageInfo,
}: MoreNewsProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, [router.asPath]);

  return (
    <>
      {posts.map((post, index) => (
        <CustomLink
          key={index}
          href={
            !casino
              ? `${ROUTES.bettingReview}${tips ? 'dicas' : 'noticias'}/${
                  post.slug
                }.html`
              : `${ROUTES.casino}/${post.slug}.html`
          }
        >
          <div
            className="
              flex justify-between items-center rounded-normal shadow-news-card w-full px-40 py-16 gap-56 group
              desk-md:px-32 desk-md:gap-24
              tab:px-16 tab:py-8
              mob:px-12 mob:py-16 mob:gap-8
              mob-sm:px-4
            "
          >
            <div className="flex flex-col gap-8 group">
              <p
                className="
                  text-more-news-title-desk-lg duration-300
                  desk-md:text-more-news-title-desk-md
                  mob:text-more-news-title-mob
                  mob-sm:text-more-news-title-mob-sm
                  group-hover:text-primary-green-dark
                  group-active:font-bold group-active:text-primary-green group-active:transition-none
                "
              >
                {post.title}
              </p>

              <p
                className="
                  text-more-news-cat-desk-lg text-gray1 duration-300
                  desk-md:text-more-news-cat-desk-md
                  mob:text-more-news-cat-mob
                  mob-sm:text-more-news-cat-mob-sm
                  group-hover:text-primary-green-dark
                  group-active:font-bold group-active:text-primary-green group-active:transition-none
                "
              >
                {post.category}
              </p>

              <div className="flex gap-8 items-center">
                <Image
                  src={clockIcon}
                  alt="ícone de relógio"
                  className="
                    w-24 h-24
                    tab:w-[20px] tab:h-[20px]
                  "
                />

                <p
                  className="
                    text-more-news-date-desk-lg text-gray2
                    desk-md:text-more-news-date-desk-md
                    mob:text-more-news-date-mob
                  "
                >
                  {`${post.date}`}
                </p>
              </div>
            </div>

            <div className="shrink-0">
              {post.imageUrl && (
                <div
                  className="
                    w-[128px] h-[128px] relative
                    desk-md:w-[121px] desk-md:h-[112px]
                    tab:w-[96px] tab:h-[96px]
                    mob:w-[88px] mob:h-[88px]
                    mob-sm:w-[80px] mob-sm:h-[80px]
                  "
                >
                  <Image
                    fill
                    placeholder="blur"
                    src={post.imageUrl}
                    loader={imageLoader}
                    alt="imagem da notícia"
                    blurDataURL={BLUR_DATA_URL}
                    sizes="(max-width: 430px) 30vw"
                    className="rounded-normal object-cover object-center"
                  />
                </div>
              )}
            </div>
          </div>
        </CustomLink>
      ))}

      {pageInfo.hasNextPage && (
        <div className="flex justify-center mt-16">
          <CustomLink
            href={
              !casino
                ? `${ROUTES.bettingReview}${tips ? 'dicas' : 'mais-noticias'}${
                    home ? '?page=1' : `?page=${page + 1}`
                  }`
                : `${ROUTES.casino}/mais-noticias${
                    home ? '?page=1' : `?page=${page + 1}`
                  }`
            }
          >
            <div
              className="
                w-[180px]
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
                  mob:h-40
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
    </>
  );
}
