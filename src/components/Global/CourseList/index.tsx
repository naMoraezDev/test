import { ReactElement } from 'react';
import { ROUTES } from '@/constants/routes';
import { IconTitle } from '../../UI/IconTitle';
import { CustomLink } from '@/components/CustomNextComponents/CustomLink';

type CoursesListProps = {
  slug: string;
  name: string;
  description: string;
  children: ReactElement[] | ReactElement;
};

export function CourseList({
  name,
  slug,
  children,
  description,
}: CoursesListProps) {
  return (
    <div
      className="
        flex flex-col gap-24
        desk-sm:gap-[20px]
        tab:gap-[13.16px]
      "
    >
      <div
        className="
          max-w-[430px] h-[270px] -mb-40 py-24 px-24 pb-40 shadow-normal flex flex-col justify-between bg-white gap-12
          desk-md:h-[200px]
          desk-sm:p-8 desk-sm:pb-40 desk-sm:max-w-[232px]
          tab:max-w-[168px] tab:h-[170px]
        "
      >
        <div
          className="
            flex items-center w-fit -ml-[12px]
            desk-sm:-ml-0
          "
        >
          <CustomLink href={`${ROUTES.bettingReview}/${slug}`}>
            <IconTitle hover>{name}</IconTitle>
          </CustomLink>
        </div>

        <p
          className={`
            ${
              name.length > 10
                ? 'line-clamp-2 desk-md:line-clamp-2'
                : 'line-clamp-2 desk-md:line-clamp-3'
            }
            text-category-sub text-gray2 text-ellipsis 
            desk-md:text-category-sub-desk-sm
            tab:text-category-sub-tab
          `}
        >
          {description}
        </p>

        <div className="w-full h-[1px] bg-gray4" />
      </div>
      {children}
    </div>
  );
}
