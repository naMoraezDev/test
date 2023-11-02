import Image from 'next/image';
import { imageLoader } from '@/utils/url';
import { ROUTES } from '@/constants/routes';
import { BLUR_DATA_URL } from '@/constants/common';
import padlockIcon from '../../../assets/images/svg/padlock-icon.svg';
import { CustomLink } from '@/components/CustomNextComponents/CustomLink';

type Course = {
  slug: string;
  title: string;
  imageUrl: string;
  subtitle?: string;
};

type CourseCardProps = {
  home?: boolean;
  blocked?: boolean;
  category?: string;
  priority?: boolean;
  courseData?: Course;
  categorySlug?: string;
};

export function CourseCard({
  priority,
  category,
  courseData,
  categorySlug,
  home = false,
  blocked = false,
}: CourseCardProps) {
  function getCardSize() {
    if (home) {
      return 'mob:max-w-[297px] mob:h-[387px] mob-sm:h-[370px]';
    }

    return category
      ? 'mob:w-full mob:h-[521px] mob-sm:h-[447px]'
      : 'mob:max-w-[229px] mob:h-[424px] mob-sm:h-[390px]';
  }
  return (
    <div
      className={`
        ${getCardSize()}
        h-[522px] rounded-normal shadow-normal bg-white flex flex-col w-full animate-card-fade
        desk-md:h-[389px]
        tab:h-[355px]
        mob:shrink-0 
      `}
    >
      <div className="w-auto h-auto relative aspect-[1.6]">
        <Image
          fill
          placeholder="blur"
          priority={priority}
          alt="capa do curso"
          loader={imageLoader}
          blurDataURL={BLUR_DATA_URL}
          sizes="(max-width: 430px) 40vw"
          src={courseData?.imageUrl || ''}
          className="w-full rounded-normal object-cover object-center"
        />

        {blocked && (
          <div className="w-full h-full rounded-normal absolute top-0 backdrop-blur-sm flex justify-center items-center">
            <Image src={padlockIcon} alt="icone de cadeado" />
          </div>
        )}
      </div>

      <div
        className="
          p-24 flex flex-col gap-8 h-auto
          desk-md:gap-8
          desk-sm:gap-16
          desk-sm:p-8
          tab:gap-8
          mob:pb-32
          mob-sm:gap-16
        "
      >
        <div
          className="
            flex flex-col gap-16
            desk-sm:gap-8
            mob:gap-16
          "
        >
          <p
            className={`
              ${category ? 'line-clamp-2' : 'line-clamp-2 desk-sm:line-clamp-3'}
              text-course-title font-workSans text-ellipsis text-primary-green
              desk-md:text-course-title-desk-sm
              mob:text-course-title-mob
              mob-sm:text-course-title-mob-sm
            `}
          >
            {courseData?.title}
          </p>
        </div>

        <p
          className={`
            ${
              category
                ? 'line-clamp-2 desk-sm:line-clamp-4 tab:line-clamp-6'
                : 'line-clamp-2 desk-sm:line-clamp-3'
            }
            text-course-sub text-gray2 text-ellipsis 
            desk-md:text-course-sub-desk-sm
            tab:text-course-sub-tab
            mob:text-course-sub-mob
            mob-sm:text-course-sub-mob-sm
          `}
        >
          {courseData?.subtitle}
        </p>
      </div>

      <div
        className="
          flex justify-center items-center mt-auto mx-24 pb-24
          desk-md:gap-8 desk-md:items-stretch desk-sm:mx-8
          tab:gap-12
        "
      >
        <CustomLink
          className="desk-md:w-full"
          href={`${ROUTES.bettingReview}${categorySlug}/${courseData?.slug}.html`}
        >
          <button
            type="button"
            className="
              w-[204px] h-40 text-white text-button-sm whitespace-nowrap rounded-normal bg-primary-green transition-colors duration-500
              desk-md:w-full
              hover:bg-primary-green hover:text-white
              active:bg-primary-green-dark active:shadow-inset-button active:duration-150
            "
          >
            {home ? 'Mostrar mais' : 'Leia mais'}
          </button>
        </CustomLink>
      </div>
    </div>
  );
}
