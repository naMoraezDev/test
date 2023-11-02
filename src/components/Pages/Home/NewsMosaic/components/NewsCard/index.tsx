import Image from 'next/image';
import { NewsType } from '@/types/home';
import { imageLoader } from '@/utils/url';
import { ROUTES } from '@/constants/routes';
import { CustomLink } from '@/components/CustomNextComponents/CustomLink';
import { BLUR_DATA_URL } from '@/constants/common';

type NewsCardProps = {
  main?: boolean;
  newsData: NewsType;
};

export function NewsCard({ newsData, main }: NewsCardProps) {
  return (
    <CustomLink
      href={`${ROUTES.bettingReview}noticias/${newsData?.slug}.html`}
      className="desk-md:w-full"
    >
      <div
        className={`
          ${!main && 'tab-xs:flex-row'}
          mt-24 flex flex-col h-[100%] rounded-normal animate-card-fade mob:shrink-0
          mob:mt-0 tab-xs:gap-8
        `}
      >
        <div
          className={`
            ${
              !main
                ? 'h-[170px] desk-md:h-[250px] desk-sm:h-[170px]'
                : 'h-[80%]'
            }
            ${
              !main
                ? 'tab-xs:w-[84px] tab-xs:h-[78px]'
                : 'tab-xs:w-full tab-xs:h-[209px]'
            }
            object-cover relative shrink-0 max-h-[515px]
            desk-sm:max-h-[232px]
            tab-sm:max-h-[209px]
            mob-sm:max-h-[151px]
          `}
        >
          <Image
            fill
            placeholder="blur"
            alt="capa do curso"
            loader={imageLoader}
            blurDataURL={BLUR_DATA_URL}
            src={newsData?.imageUrl || ''}
            className="object-cover rounded-normal"
            sizes={`(max-width: 430px) ${main ? '50vw' : '20vw'}`}
          />
        </div>

        <div
          className="
            py-24 flex flex-col gap-8 h-auto
            desk-md:gap-8
            desk-sm:gap-16 desk-sm:p-8
            tab:gap-0 tab:pt-0
            tab-xs:pb-32
            mob-sm:gap-4
          "
        >
          <div
            className="
              flex flex-col gap-8
              mob:gap-4
            "
          >
            <p
              className={`
                mt-12 !font-bold text-primary-green-dark text-ellipsis 
                ${main ? 'text-glossary-sub' : 'text-category-sub'}
                ${
                  main
                    ? 'desk-md:text-glossary-sub-desk-sm'
                    : 'desk-md:text-category-sub-desk-sm'
                }
                ${
                  main
                    ? 'tab:text-glossary-sub-tab'
                    : 'tab:text-category-sub-tab'
                } ${!main && 'tab:mt-0'}
                ${
                  main
                    ? 'mob:text-glossary-sub-mob'
                    : 'mob:text-category-sub-mob'
                }
                ${
                  main
                    ? 'mob-sm:text-glossary-sub-mob-sm'
                    : 'mob-sm:text-category-sub-mob-sm'
                }
                
              `}
            >
              {newsData?.subtitle}
            </p>

            <p
              className={`
                text-ellipsis line-clamp-3 mb-40
                text-${
                  main ? 'category' : 'glossary-sub'
                } font-workSans text-primary-green !leading-[normal]
                desk-md:text-${main ? 'category' : 'glossary-sub'}-desk-sm
                mob:text-${main ? 'category' : 'glossary-sub'}-mob
                mob-sm:text-${main ? 'category' : 'glossary-sub'}-mob-sm
              `}
            >
              {newsData?.title}
            </p>
          </div>
        </div>
      </div>
    </CustomLink>
  );
}
