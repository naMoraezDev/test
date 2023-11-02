import { PostSEO } from '@/seo/post';
import { GetServerSideProps } from 'next';
import { ROUTES } from '@/constants/routes';
import { PostPageProps } from '@/types/post';
import useMediaQuery from '@/contexts/device';
import { getPostServerSideProps } from '@/SSR/post';
import { useEffect, useRef, useState } from 'react';
import { TopLineText } from '@/components/UI/TopLineText';
import { PostInfo } from '@/components/Pages/Post/PostInfo';
import { Breadcrumbs } from '@/components/Global/Breadcrumbs';
import { ShareButtons } from '@/components/Global/ShareButtons';
import clockIcon from '../../../assets/images/svg/clock-icon.svg';
import { NextContent } from '@/components/Pages/Post/NextContent';
import { ContentIndex } from '@/components/Pages/Post/ContentIndex';
import { TopInlineOdds } from '@/components/Pages/Post/TopInlineOdds';
import { AdsPlaceholder } from '@/components/GoogleAds/AdsPlaceholder';
import { VideoHighlight } from '@/components/Pages/Post/VideoHighlight';
import { ImageHighlight } from '@/components/Pages/Post/ImageHighlight';
import { PostBodyContent } from '@/components/Pages/Post/PostBodyContent';
import { NextContentSlider } from '@/components/Global/NextContnetSlider';
import { Rasgado_1 } from '@/components/GoogleAds/AdsTemplates/Rasgado_1';
import { ContentIndexLink } from '@/components/Pages/Post/ContentIndexLink';
import { Quadrado_1 } from '@/components/GoogleAds/AdsTemplates/Quadrado_1';
import { Quadrado_2 } from '@/components/GoogleAds/AdsTemplates/Quadrado_2';
import { Quadrado_3 } from '@/components/GoogleAds/AdsTemplates/Quadrado_3';

export default function PostPage({
  fullUrl,
  postDate,
  postData,
  postSlug,
  seoDates,
  seoImages,
  postTitle,
  postImage,
  postAuthor,
  readingTime,
  postSubtitle,
  categorySlug,
  categoryName,
  relatedPosts,
  videoEmbedSrc,
  imageBlockUrl,
  imageBlockHref,
  imageBlockCaption,
  topScreenInlineOdds,
  initialSelectedIndex,
  topScreenInlineOddsLinkUrl,
}: PostPageProps) {
  const ref = useRef<HTMLDivElement[]>([]);
  const titleRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [activeIndex, setActiveIndex] = useState(
    initialSelectedIndex > 0 ? initialSelectedIndex : 0,
  );
  const [isTitleActive, setIsTitleActive] = useState(
    initialSelectedIndex > 0 ? false : true,
  );

  const bettingTipsBreadcrumbs = [
    { title: 'dicas de apostas', link: ROUTES.bettingTips },
    { title: categoryName, link: `${ROUTES.bettingReview}${categorySlug}` },
    { title: postTitle },
  ];

  const tipsBreadcrumbs = [
    { title: 'dicas', link: ROUTES.tips },
    { title: postTitle },
  ];

  const isTipsPage = categorySlug === 'dicas';

  const breadcrumbsPaths = isTipsPage
    ? tipsBreadcrumbs
    : bettingTipsBreadcrumbs;

  const isTablet = useMediaQuery(920);
  const isMediumDesk = useMediaQuery(1366);
  const isSmallTablet = useMediaQuery(550);

  useEffect(() => {
    if (
      postData[initialSelectedIndex]?.name === 'core/heading' &&
      initialSelectedIndex > 0
    ) {
      ref.current[initialSelectedIndex].scrollIntoView({
        block: 'center',
        behavior: 'smooth',
      });

      setIsTitleActive(false);
      setActiveIndex(initialSelectedIndex);
    }
  }, [initialSelectedIndex, postData]);

  useEffect(() => {
    function handleScroll() {
      setScrollTop(window.scrollY);

      postData.forEach((_contentRef, index) => {
        if (
          (ref.current[index]?.offsetTop <=
            scrollTop +
              (isSmallTablet
                ? 500
                : isTablet
                ? 700
                : isMediumDesk
                ? 400
                : 600) &&
            postData[index]?.name === 'core/heading') ||
          index === postData.length
        ) {
          setActiveIndex(index);
          setIsTitleActive(false);
        } else if (
          titleRef.current?.offsetTop &&
          titleRef.current.clientHeight - 40 >= scrollTop
        ) {
          setIsTitleActive(true);
          setActiveIndex(0);
        }
      });
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMediumDesk, isSmallTablet, isTablet, postData, scrollTop]);

  return (
    <>
      <PostSEO
        seoDates={seoDates}
        postSlug={postSlug}
        postTitle={postTitle}
        postImage={postImage}
        seoImages={seoImages}
        postAuthor={postAuthor}
        categorySlug={categorySlug}
        categoryName={categoryName}
        postSubtitle={postSubtitle}
      />

      <div
        className="
          flex gap-40 mx-40 my-[21px]
          desk-sm:mx-24 desk-sm:py-24
          mob:mx-0
        "
      >
        <section
          className="
            w-[5%]
            mob:hidden
          "
        >
          <div className="mt-[368px]">
            <ShareButtons priority link={fullUrl} />
          </div>
        </section>

        <section
          className="
            w-[70%]
            desk-sm:w-[60%]
            mob:w-full
          "
        >
          <div className="mob:px-24">
            <Breadcrumbs paths={breadcrumbsPaths} />
          </div>

          <div
            className="
              flex flex-col justify-between h-auto
              mob:h-auto
            "
          >
            <div className="mob:px-24">
              <div
                ref={titleRef}
                className="
                  mt-48
                  desk-md:mt-32
                  mob-sm:mt-[28px]
                "
              >
                <TopLineText element="h1">{postTitle}</TopLineText>
              </div>

              <PostInfo
                postDate={postDate}
                clockIcon={clockIcon}
                postAuthor={postAuthor}
                readingTime={readingTime}
              />

              <p
                className="
                  mb-56 text-news-paragraph-desk-lg
                  desk-sm:mb-24
                  mob:mb-16
                "
              >
                {postSubtitle}
              </p>

              <TopInlineOdds
                topScreenInlineOdds={topScreenInlineOdds}
                topScreenInlineOddsLinkUrl={topScreenInlineOddsLinkUrl}
              />

              {videoEmbedSrc && (
                <VideoHighlight videoEmbedSrc={videoEmbedSrc} />
              )}

              {Boolean(imageBlockUrl.length) && (
                <ImageHighlight
                  imageBlockUrl={imageBlockUrl}
                  imageBlockHref={imageBlockHref}
                  imageBlockCaption={imageBlockCaption}
                />
              )}

              <div
                className="
                  hidden mt-[28px] mb-[42px]
                  mob:block
                  mob-sm:mt-16 mob-sm:mb-24
                "
              >
                <ShareButtons mobile link={fullUrl} />
              </div>

              <div
                className="
                  hidden mb-[42px]
                  mob:block
                  mob-sm:mb-32
                "
              >
                <ContentIndex>
                  <ContentIndexLink
                    active={isTitleActive}
                    onClick={() =>
                      titleRef.current?.scrollIntoView({
                        behavior: 'smooth',
                      })
                    }
                  >
                    {postTitle}
                  </ContentIndexLink>

                  {postData.map((block, index) => {
                    if (block.name === 'core/heading') {
                      return (
                        <ContentIndexLink
                          key={index}
                          active={index === activeIndex}
                          onClick={() =>
                            ref.current[index].scrollIntoView({
                              behavior: 'smooth',
                            })
                          }
                        >
                          {block.attributesJSON.content}
                        </ContentIndexLink>
                      );
                    }
                  })}
                </ContentIndex>
              </div>

              <PostBodyContent
                refObject={ref}
                postData={postData}
                isTipsPage={isTipsPage}
                topScreenInlineOdds={topScreenInlineOdds}
              />
            </div>

            <div
              className="
                w-full flex justify-center mb-40
                mob:hidden
              "
            >
              <ShareButtons link={fullUrl} showShareText />
            </div>
          </div>

          <div
            className="
              hidden px-24 my-[35px]
              mob:block
            "
          >
            <ShareButtons link={fullUrl} />
          </div>

          <div
            className="
              w-full h-[250px] flex items-center justify-center overflow-hidden
              desk-md:h-[100px]
              mob:my-[35px]
            "
          >
            <div
              className="
                w-[970px] h-[250px] relative flex items-center justify-center overflow-hidden animate-adsSkeleton
                desk-md:w-[728px] desk-md:h-[90px]
                desk-sm:w-[320px] desk-sm:h-[100px]
              "
            >
              <Rasgado_1 />

              <AdsPlaceholder />
            </div>
          </div>

          {Boolean(relatedPosts?.length) && (
            <div
              className="
                hidden bg-white shadow-normal pl-[28px] py-40
                mob:block
              "
            >
              <NextContentSlider
                posts={relatedPosts}
                isTipsPage={isTipsPage}
                categorySlug={categorySlug}
              />
            </div>
          )}
        </section>

        <section
          className="
            w-[25%]
            desk-sm:w-[30%]
            mob:hidden
          "
        >
          <div
            className={`
              ${!isTipsPage && 'sticky top-120'}
              w-full flex flex-col gap-12 z-50
            `}
          >
            {!isTipsPage && (
              <ContentIndex>
                <ContentIndexLink
                  active={isTitleActive}
                  onClick={() =>
                    titleRef.current?.scrollIntoView({
                      block: 'center',
                      behavior: 'smooth',
                    })
                  }
                >
                  {postTitle}
                </ContentIndexLink>

                {postData.map((block, index) => {
                  if (block.name === 'core/heading') {
                    return (
                      <ContentIndexLink
                        key={index}
                        active={index === activeIndex}
                        onClick={() =>
                          ref.current[index].scrollIntoView({
                            block: 'center',
                            behavior: 'smooth',
                          })
                        }
                      >
                        {block.attributesJSON.content}
                      </ContentIndexLink>
                    );
                  }
                })}
              </ContentIndex>
            )}

            {Boolean(relatedPosts?.length) && (
              <NextContent
                posts={relatedPosts}
                isTipsPage={isTipsPage}
                categorySlug={categorySlug}
              />
            )}

            {isTipsPage && (
              <div
                className="
                  w-full flex flex-col gap-40 items-center overflow-hidden mt-32
                  tab:hidden
                "
              >
                <div className="w-[300px] h-[250px] relative flex justify-center items-center animate-adsSkeleton overflow-hidden">
                  <Quadrado_1 />

                  <AdsPlaceholder />
                </div>

                <div className="w-[300px] h-[250px] relative flex justify-center items-center animate-adsSkeleton overflow-hidden">
                  <Quadrado_2 />

                  <AdsPlaceholder />
                </div>

                <div className="w-[300px] h-[250px] relative flex justify-center items-center animate-adsSkeleton overflow-hidden">
                  <Quadrado_3 />

                  <AdsPlaceholder />
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<PostPageProps> =
  getPostServerSideProps();
