import Image from 'next/image';
import { imageLoader } from '@/utils/url';
import { ROUTES } from '@/constants/routes';
import { BLUR_DATA_URL } from '@/constants/common';
import { CustomLink } from '@/components/CustomNextComponents/CustomLink';

type HowToBetCardProps = {
  icon: any;
  slug: string;
  image: string;
  title: string;
  altIcon: string;
  altImage: string;
  displayNumber: string;
  hideAfterElement?: boolean;
  imagePosition?: 'top' | 'bot';
  hideAfterElementOnBreak?: boolean;
};

export function HowToBetCard({
  icon,
  slug,
  title,
  image,
  altIcon,
  altImage,
  displayNumber,
  hideAfterElement,
  imagePosition = 'bot',
  hideAfterElementOnBreak,
}: HowToBetCardProps) {
  return (
    <div
      className={`
        max-w-[313px] h-[494px] bg-background shadow-card relative flex flex-col justify-between
        desk-sm:max-w-[358px]
        tab:max-w-[304.31px]
        mob:max-w-[210.93px] mob:h-[143.96px] mob:w-full
        mob-sm:max-w-full
        ${
          !hideAfterElement
            ? `after:bg-background after:shadow-card-after after:content-[''] after:block after:-right-[38px] after:h-[80px] after:rotate-45 after:w-[80px] after:absolute after:top-[30px]
                desk-sm:after:h-[65px] desk-sm:after:-right-[29px] desk-sm:after:w-[65px]
                tab:after:h-[55px] tab:after:-right-[25px] tab:after:w-[55px]
                mob:after:h-[30px] mob:after:-right-[13px] mob:after:top-[15px] mob:after:w-[30px]
                mob-sm:after:shadow-card-after-bottom       
          ${
            hideAfterElementOnBreak
              ? 'desk-sm:after:hidden mob-sm:after:block'
              : ''
          }
        
          ${
            imagePosition === 'top'
              ? 'after:top-[375px] mob-sm:after:left-[40px] mob-sm:after:top-[125px] mob-sm:after:w-[35px] mob-sm:after:h-[35px]'
              : 'mob-sm:after:right-[40px] mob-sm:after:top-[125px] mob-sm:after:w-[35px] mob-sm:after:h-[35px]'
          }`
            : ''
        }
      `}
    >
      {imagePosition === 'top' && (
        <Image
          src={image}
          width={1920}
          height={1080}
          alt={altImage}
          placeholder="blur"
          loader={imageLoader}
          blurDataURL={BLUR_DATA_URL}
          className="
            h-1/2 object-cover
            desk-md:w-[358px] desk-md:h-[247px]
            tab:h-1/2
            mob:hidden
          "
        />
      )}

      <div
        className="
          h-1/2
          mob:h-full
        "
      >
        <div
          className="
            p-24 h-full flex flex-col justify-between
            mob:p-[11px]
          "
        >
          <div className="flex justify-between">
            <Image
              src={icon}
              alt={altIcon}
              className="
                h-full
                tab:w-[52px]
                mob:w-[35px] mob:h-[33px]
              "
            />

            <div className="z-50">
              <p
                className="
                  text-card-number text-gray2 font-workSans
                  mob:text-card-number-mob
                "
              >
                {displayNumber}
              </p>

              <div
                className="
                  w-[55.98px] h-4 bg-primary-green-dark
                  tab:w-[46px] tab:h-[3px]
                  mob:w-[26px] mob:h-4
                "
              />
            </div>
          </div>

          <div
            className="
              flex flex-col gap-32
              desk-sm:gap-24
              mob:gap-16
            "
          >
            <div className="z-50">
              <p
                className="
                  text-bubble-title font-workSans text-primary-green
                  desk-md:text-bubble-title-tab
                  mob:text-bubble-title-mob
                  mob-sm:text-bubble-title-mob-sm
                "
              >
                {title}
              </p>
            </div>

            <CustomLink
              className="z-50"
              href={`${ROUTES.bettingReview}lance-betting/${slug}`}
            >
              <button
                className="
                  h-32 px-[14px] bg-primary-green text-white text-button-sm whitespace-nowrap rounded-normal transition-all duration-500
                  hover:bg-primary-green
                  active:bg-primary-green-light active:shadow-inset-button active:duration-150
                "
                type="button"
              >
                Saiba mais
              </button>
            </CustomLink>
          </div>
        </div>
      </div>

      {imagePosition === 'bot' && (
        <Image
          src={image}
          width={1920}
          height={1080}
          alt={altImage}
          placeholder="blur"
          loader={imageLoader}
          blurDataURL={BLUR_DATA_URL}
          className="
            h-1/2 object-cover
            desk-md:w-[358px] desk-md:h-[247px]
            tab:h-1/2
            mob:hidden
          "
        />
      )}
    </div>
  );
}
