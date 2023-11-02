import Image from 'next/image';
import { NewsSEO } from '@/seo/news';
import { useRouter } from 'next/router';
import styles from './styles.module.css';
import { GTMPageView } from '@/utils/gtm';
import { imageLoader } from '@/utils/url';
import { Fragment, useEffect } from 'react';
import { ROUTES } from '@/constants/routes';
import { NewsPageProps } from '@/types/news';
import { getTwitterEmbed } from '@/utils/embeds';
import { BLUR_DATA_URL } from '@/constants/common';
import Dugout from '@/components/Global/Embeds/Dugout';
import { Carousel } from '@/components/Global/Carousel';
import { CMSButton } from '@/components/temp/CMSButton';
import SingleMatch from '@/components/Global/SingleMatch';
import { ShareButtons } from '@/components/Global/ShareButtons';
import { NewsletterGtm } from '@/components/Global/NewsletterGtm';
import { AdsPlaceholder } from '@/components/GoogleAds/AdsPlaceholder';
import { Rasgado_1 } from '@/components/GoogleAds/AdsTemplates/Rasgado_1';
import { CustomLink } from '@/components/CustomNextComponents/CustomLink';
import { Quadrado_1 } from '@/components/GoogleAds/AdsTemplates/Quadrado_1';
import { Quadrado_2 } from '@/components/GoogleAds/AdsTemplates/Quadrado_2';
import { Quadrado_3 } from '@/components/GoogleAds/AdsTemplates/Quadrado_3';
import { Quadrado_4 } from '@/components/GoogleAds/AdsTemplates/Quadrado_4';
import { Quadrado_6 } from '@/components/GoogleAds/AdsTemplates/Quadrado_6';
import { Rasgado_Mobile_1 } from '@/components/GoogleAds/AdsTemplates/Rasgado_Mobile_1';
import { Rasgado_Mobile_2 } from '@/components/GoogleAds/AdsTemplates/Rasgado_Mobile_2';

export function News({
  fullUrl,
  mostRead,
  postData,
  postDate,
  postSlug,
  seoDates,
  postTitle,
  postImage,
  seoImages,
  postAuthor,
  postSubtitle,
  relatedPosts,
  imageBlockUrl,
  videoEmbedSrc,
  imageBlockHref,
  imageDescription,
  topScreenInlineOdds,
  topScreenInlineOddsLinkUrl,
}: NewsPageProps) {
  const router = useRouter();

  useEffect(() => {
    GTMPageView('pageview', router.pathname);
  }, [router.pathname]);

  return (
    <>
      <NewsSEO
        seoDates={seoDates}
        postSlug={postSlug}
        postTitle={postTitle}
        postImage={postImage}
        seoImages={seoImages}
        postAuthor={postAuthor}
        postSubtitle={postSubtitle}
      />

      <div
        className="
          flex gap-40 mx-40 pt-32 pb-32
          desk-sm:mx-24
          mob:mx-0 mob:pb-[77px]
        "
      >
        <section
          className="
            w-[5%]
            tab:hidden
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
            tab:w-full
          "
        >
          <div
            className="
              flex flex-col justify-between h-auto
              mob:h-auto
            "
          >
            <div className="mob:px-24">
              <div
                className="
                  tab:px-[124px]
                  tab-sm:px-[90px]
                  tab-xs:px-[50px]
                  mob:px-0
                "
              >
                <div>
                  <h1
                    className="
                      text-news-title-desk-lg font-workSans text-primary-green
                      desk-md:text-news-title-desk-md
                      tab:text-news-title-tab
                      mob:text-news-title-mob mob:text-center
                    "
                  >
                    {postTitle}
                  </h1>
                </div>

                <p
                  className="
                    mb-24 text-gray2 mt-16 text-news-paragraph-desk-lg
                    tab:mt-24
                    mob:text-center mob:mb-8
                  "
                >
                  {postSubtitle}
                </p>

                <div
                  className="
                    flex w-full justify-around mb-8
                    mob:flex-col mob:gap-y-8
                  "
                >
                  {topScreenInlineOdds.map((odd, index) => {
                    if (typeof window !== 'undefined' && document !== null) {
                      const elem = document
                        .getElementById(odd.id)
                        ?.shadowRoot?.querySelector('a');
                      if (elem) {
                        elem.style.color = 'white';
                      }
                    }

                    return (
                      <div
                        key={index}
                        className="
                          flex items-center gap-16
                          mob:gap-8
                        "
                      >
                        <span
                          className="
                            font-bold text-news-paragraph-desk-lg bg-[#06379D] rounded-[6px] px-4 py-[-20px] mx-4
                            desk-md:font-bold
                            tab:font-bold
                            mob-sm:font-bold tab:py-0
                          "
                        >
                          {/* @ts-ignore */}
                          <inline-odds id={odd.id} />
                        </span>
                        <a
                          className="
                          text-primary-green
                          tab:underline
                          hover:underline
                          "
                          href={topScreenInlineOddsLinkUrl}
                        >
                          <span
                            className="
                              text-news-paragraph-desk-lg font-bold
                              tab:font-bold
                              mob:font-bold
                            "
                          >
                            {odd.text}
                          </span>
                        </a>
                      </div>
                    );
                  })}
                </div>

                {videoEmbedSrc && (
                  <div className="relative pb-[56.25%] h-0 mb-40 rounded-normal overflow-hidden">
                    <iframe
                      src={videoEmbedSrc as string}
                      className="absolute top-0 left-0 w-full h-full"
                    />
                  </div>
                )}

                {Boolean(imageBlockUrl?.length) && (
                  <>
                    {imageBlockHref ? (
                      <a href={imageBlockHref} target="_blank">
                        <Image
                          priority
                          width={1920}
                          height={1137}
                          placeholder="blur"
                          loader={imageLoader}
                          alt="imagem da materia"
                          blurDataURL={BLUR_DATA_URL}
                          src={imageBlockUrl as string}
                          className={`
                            ${!Boolean(imageDescription.length) && 'mb-24'}
                            rounded-normal aspect-[1.69] object-cover 
                          `}
                        />
                      </a>
                    ) : (
                      <Image
                        priority
                        width={1920}
                        height={1137}
                        placeholder="blur"
                        loader={imageLoader}
                        alt="imagem da materia"
                        blurDataURL={BLUR_DATA_URL}
                        src={imageBlockUrl as string}
                        className={`
                          ${!Boolean(imageDescription.length) && 'mb-24'}
                          rounded-normal aspect-[1.69] object-cover 
                        `}
                      />
                    )}

                    {Boolean(imageDescription.length) && (
                      <p className="text-gray2 text-news-paragraph-tab mob:text-more-news-cat-mob-sm mt-4 mb-24">
                        {imageDescription}
                      </p>
                    )}
                  </>
                )}

                <div
                  className="
                    hidden mt-[28px] mb-[42px]
                    tab:block
                    mob-sm:mt-16 mob-sm:mb-24 mob:mx-24
                  "
                >
                  <ShareButtons mobile tab link={fullUrl} />
                </div>
              </div>

              <div
                className="
                  w-full h-[1px] bg-gray3 mb-24
                "
              />

              <p
                className="
                  text-gray2 text-news-paragraph-tab
                  tab:block
                  mob:text-more-news-cat-mob-sm mb-24
                "
              >{`${postAuthor} - ${postDate}`}</p>

              <div className={`gap-24 mb-24 ${styles.links}`}>
                <div
                  className="
                    flex gap-40 float-right
                    mob:flex mob:justify-center mob:w-full
                  "
                >
                  <div
                    className="
                      w-[336px] h-[280px] relative flex items-center justify-center m-32 animate-adsSkeleton overflow-hidden
                      mob:hidden
                    "
                  >
                    <Quadrado_6 />

                    <AdsPlaceholder />
                  </div>
                </div>

                {postData.map((post, index) => {
                  return (
                    <Fragment key={index}>
                      {index ===
                        postData.indexOf(
                          postData.filter(
                            block => block.name === 'core/paragraph',
                          )[1],
                        ) && (
                        <div
                          className="
                            w-full h-[250px] items-center justify-center overflow-hidden hidden
                            desk-md:h-[100px]
                            mob:my-[35px] mob:flex
                          "
                        >
                          <div
                            className="
                              w-[320px] h-[100px] relative flex items-center justify-center overflow-hidden animate-adsSkeleton
                            "
                          >
                            <Rasgado_1 />

                            <AdsPlaceholder />
                          </div>
                        </div>
                      )}

                      {post.name === 'create-block/inline-odds' && (
                        <a href={post.attributesJSON.url} className="my-40">
                          <p className="text-news-paragraph-desk-lg">
                            {post.attributesJSON.response &&
                              post.attributesJSON.response.map(
                                (attribute: any, i: any) => {
                                  if (attribute.includes('id')) {
                                    if (
                                      typeof window !== 'undefined' &&
                                      document !== null
                                    ) {
                                      const elem = document
                                        .getElementById(
                                          attribute
                                            .split('=')[1]
                                            .replace(/"/g, ''),
                                        )
                                        ?.shadowRoot?.querySelector('a');
                                      if (elem) {
                                        elem.style.color = 'white';
                                      }
                                    }

                                    return (
                                      <span
                                        key={i}
                                        className="
                                          font-bold text-text-desk-lg bg-[#06379D] w-fit rounded-[6px] px-4 py-[5px] mx-4
                                          desk-md:text-text-3-desk-sm desk-md:font-bold
                                          tab:text-text-tab tab:font-bold
                                          mob-sm:text-text-mob-sm mob-sm:font-bold
                                        "
                                      >
                                        {/* @ts-ignore */}
                                        <inline-odds
                                          id={attribute
                                            .split('=')[1]
                                            .replace(/"/g, '')}
                                        />
                                      </span>
                                    );
                                  }
                                  return attribute;
                                },
                              )}
                          </p>
                        </a>
                      )}

                      {post.name !== 'core/image' &&
                        post.name !== 'core/video' &&
                        post.name !== 'core/heading' &&
                        post.name === 'core/paragraph' && (
                          <div
                            className="
                              text-news-paragraph-desk-lg my-40
                            "
                            dangerouslySetInnerHTML={{
                              __html: post.saveContent,
                            }}
                          />
                        )}

                      {post.name === 'core/heading' &&
                        !post.saveContent.includes('h6') && (
                          <div className="border-l-4 pl-16 border-primary-green-dark my-40">
                            <h2
                              className="
                                text-news-h2-subtitle-desk-lg text-primary-green font-workSans
                                desk-md:text-news-h2-subtitle-desk-md
                                tab:text-news-h2-subtitle-tab
                                mob:text-news-h2-subtitle-mob
                                mob-sm:text-news-h2-subtitle-mob-sm
                              "
                            >
                              {post.attributesJSON.content}
                            </h2>
                          </div>
                        )}

                      {post.name === 'core/image' && (
                        <div className="my-40">
                          {post.attributesJSON.href ? (
                            <a href={post.attributesJSON.href} target="_blank">
                              <Image
                                width={1920}
                                height={1137}
                                placeholder="blur"
                                loader={imageLoader}
                                alt="imagem da materia"
                                blurDataURL={BLUR_DATA_URL}
                                src={post.attributesJSON.url || ''}
                                className={`
                                  ${
                                    index === 1 ||
                                    (Boolean(topScreenInlineOdds.length) &&
                                      index === 2)
                                      ? 'hidden'
                                      : ''
                                  }
                                  rounded-normal object-cover
                                `}
                              />
                            </a>
                          ) : (
                            <Image
                              width={1920}
                              height={1137}
                              placeholder="blur"
                              loader={imageLoader}
                              alt="imagem da materia"
                              blurDataURL={BLUR_DATA_URL}
                              src={post.attributesJSON.url || ''}
                              className={`
                                ${
                                  index === 1 ||
                                  (Boolean(topScreenInlineOdds.length) &&
                                    index === 2)
                                    ? 'hidden'
                                    : ''
                                }
                                rounded-normal object-cover
                              `}
                            />
                          )}

                          {post.attributesJSON.caption && (
                            <div className="flex flex-col gap-24 mt-16 mob:mt-8">
                              <p
                                className={`
                                ${
                                  index === 1 ||
                                  (Boolean(topScreenInlineOdds.length) &&
                                    index === 2)
                                    ? 'hidden'
                                    : ''
                                }
                                text-gray2 text-news-paragraph-tab
                                mob:text-more-news-cat-mob-sm
                              `}
                              >
                                {post.attributesJSON.caption}
                              </p>
                            </div>
                          )}
                        </div>
                      )}

                      {post.name === 'core/video' && (
                        <div className="relative pb-[56.25%] h-0 rounded-normal overflow-hidden my-40">
                          <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src={
                              post.attributesJSON.src
                                ?.split(' ')
                                .find(src => src.includes('dailymotion'))
                                ?.split(';')[1]
                                .split('&')[0]
                            }
                          />
                        </div>
                      )}

                      {post.name === 'custom-block/gutenberg-button' &&
                        post.attributesJSON.btnData?.label && (
                          <div className="my-40">
                            <CMSButton
                              href={post.attributesJSON.url}
                              variant={post.attributesJSON.btnData?.value}
                            >
                              {post.attributesJSON.text}
                            </CMSButton>
                          </div>
                        )}

                      {post.name === 'custom-block/odds-single-match' && (
                        <SingleMatch content={post} />
                      )}

                      {index === Math.round(postData.length / 2) && (
                        <div
                          className="
                            hidden w-full justify-center items-center my-40
                            mob:flex
                          "
                        >
                          <div className="w-[300px] h-[250px] relative flex justify-center items-center animate-adsSkeleton">
                            <Rasgado_Mobile_1 />

                            <div className="w-full h-full flex justify-center items-center absolute top-0 -z-10">
                              Publicidade
                            </div>
                          </div>
                        </div>
                      )}

                      {post.name === 'core/embed' && (
                        <div className="mb-40 w-full flex justify-center">
                          {post.attributesJSON.providerNameSlug === 'twitter' &&
                            getTwitterEmbed(post.attributesJSON.url || '')}
                        </div>
                      )}

                      {post.name === 'core/html' &&
                        post.saveContent.includes('dugout') && (
                          <Dugout saveContent={post.saveContent} />
                        )}

                      {post.name === 'core/html' &&
                        (post.saveContent.includes('twitter') ||
                          post.saveContent.includes('instagram')) && (
                          <div className="w-full flex justify-center my-40">
                            <div
                              className="w-[500px] desk-sm:w-full tab:w-[500px] tab-sm:w-[400px] mob:w-full"
                              dangerouslySetInnerHTML={{
                                __html: post.saveContent,
                              }}
                            />
                          </div>
                        )}

                      {post.name === 'core/html' &&
                        post.saveContent.includes('youtube') && (
                          <div className="relative pb-[56.25%] h-0 rounded-normal overflow-hidden my-40">
                            <iframe
                              className="absolute top-0 left-0 w-full h-full"
                              src={
                                post.saveContent
                                  .split(' ')
                                  .find(el => el.includes('src'))
                                  ?.split('"')[1]
                              }
                            />
                          </div>
                        )}

                      {post.name === 'core/html' &&
                        post.saveContent.includes('facebook') && (
                          <div className="flex justify-center my-40">
                            <iframe
                              loading="lazy"
                              src={
                                post.saveContent
                                  .split(' ')
                                  .find(el => el.includes('src'))
                                  ?.split('"')[1]
                              }
                              height={
                                post.saveContent
                                  .split(' ')
                                  .find(el => el.includes('height'))
                                  ?.split('"')[1]
                              }
                              width={
                                post.saveContent
                                  .split(' ')
                                  .filter(el => el.includes('width'))[1]
                                  ?.split('"')[1]
                              }
                            />
                          </div>
                        )}
                    </Fragment>
                  );
                })}
              </div>
            </div>

            <div
              className="
                flex justify-center my-24
                mob:w-[85%] mob:mx-24
              "
            >
              <ShareButtons link={fullUrl} showShareText />
            </div>
          </div>

          <div
            className="
              relative w-full bg-white h-[376px] p-40 shadow-carousel rounded-normal my-40
              desk-md:h-[270px] desk-md:py-24
              tab:h-[249px]
              mob:pr-0 mob:pl-[28px]
            "
          >
            <p
              className="
                font-workSans text-primary-green text-related-desk-lg
                desk-md:text-related-desk-md
                tab:text-related-tab
                mob:text-related-mob
                mob-sm:text-related-mob-sm
              "
            >
              Relacionados
            </p>

            <div
              className="
                absolute bottom-40 w-full overflow-hidden pr-80
                mob:pr-0 mob:static mob:mt-[22px]
              "
            >
              <Carousel>
                {relatedPosts?.map((post, index) => (
                  <CustomLink
                    key={index}
                    href={`${ROUTES.bettingReview}noticias/${post.slug}`}
                  >
                    <div
                      className="
                        relative w-[400px] h-[240px] bg-gray2 shrink-0 bg-cover bg-center rounded-normal p-12 justify-end flex flex-col
                        desk-md:w-[264px] desk-md:h-[158px]
                        mob:w-[211px] mob:h-[124px]
                      "
                      style={{
                        backgroundImage: `linear-gradient(to top, #181818, transparent), url(${post.image})`,
                      }}
                    >
                      <p
                        className="
                          z-10 text-related-title-desk-lg text-white line-clamp-4
                          desk-md:text-related-title-desk-md
                          mob:text-related-title-mob mob:text-ellipsis mob:line-clamp-3
                        "
                      >
                        {post.title}
                      </p>
                    </div>
                  </CustomLink>
                ))}
              </Carousel>
            </div>
          </div>

          <div
            className="
              w-full hidden gap-40 float-right justify-center
              mob:flex
            "
          >
            <div className="w-[320px] h-[100px] relative flex items-center justify-center m-32 animate-adsSkeleton overflow-hidden">
              <Rasgado_Mobile_2 />

              <AdsPlaceholder />
            </div>
          </div>

          <div className="flex gap-40 w-full">
            <div
              className="
                flex flex-col gap-16 w-full
                mob:mx-24
              "
            >
              <div
                className="
                  -mt-48
                  desk-md:-mt-32
                  tab:-mt-56
                  mob:-mt-24
                "
              >
                <NewsletterGtm />
              </div>
            </div>
          </div>
        </section>

        <section
          className="
            w-[25%]
            desk-sm:w-[35%]
            tab:hidden
          "
        >
          <div
            className="
              flex flex-col gap-40 z-50 items-center
              desk-md:gap-16
            "
          >
            <div
              className="
                flex flex-col gap-16
                desk-md:gap-24
              "
            >
              <p className="text-primary-green text-most-read font-workSans">
                Mais lidas no resenha de apostas
              </p>

              <div
                className="
                  flex flex-col gap-32
                  desk-md:gap-24
                "
              >
                {mostRead?.map((post, index) => (
                  <div key={index} className="flex gap-16 items-center">
                    <p className="text-primary-green text-most-read">
                      {index + 1}.
                    </p>

                    <CustomLink href={`${ROUTES.news}/${post.slug}.html`}>
                      <p className="text-most-read-text text-ellipsis line-clamp-2">
                        {post.title}
                      </p>
                    </CustomLink>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="
                w-[336px] h-[280px] relative flex items-center justify-center overflow-hidden animate-adsSkeleton text-center
                desk-md:hidden
              "
            >
              <Quadrado_1 />

              <AdsPlaceholder />
            </div>

            <div
              className="
                w-[300px] h-[250px] relative flex items-center justify-center overflow-hidden animate-adsSkeleton
              "
            >
              <Quadrado_2 />

              <AdsPlaceholder />
            </div>

            <div
              className="
                w-[300px] h-[250px] relative flex items-center justify-center overflow-hidden animate-adsSkeleton
              "
            >
              <Quadrado_3 />

              <AdsPlaceholder />
            </div>

            <div
              className="
                w-[300px] h-[250px] relative flex items-center justify-center overflow-hidden animate-adsSkeleton
              "
            >
              <Quadrado_4 />

              <AdsPlaceholder />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
