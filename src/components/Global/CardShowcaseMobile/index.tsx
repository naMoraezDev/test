import { Slider } from '../Sider';
import { ReactElement } from 'react';
import { ROUTES } from '@/constants/routes';
import { IconTitle } from '../../UI/IconTitle';
import { CustomLink } from '@/components/CustomNextComponents/CustomLink';

type CardShowcaseMobileProps = {
  slug: string;
  name: string;
  description: string;
  children: ReactElement[];
};

export function CardShowcaseMobile({
  slug,
  name,
  children,
  description,
}: CardShowcaseMobileProps) {
  return (
    <div
      className="
        hidden
        mob:block mob:ml-24
      "
    >
      <div className="flex flex-col gap-12 mb-16">
        <CustomLink href={`${ROUTES.bettingReview}${slug}`} className="w-fit">
          <IconTitle>{name}</IconTitle>
        </CustomLink>

        <p
          className="
            text-category-sub text-gray2 max-w-[240px]
            desk-md:text-category-sub-desk-sm
            tab:text-category-sub-tab
          "
        >
          {description}
        </p>

        <div className="w-11/12 h-[1px] bg-gray4 pl-24" />
      </div>

      <Slider>{children}</Slider>
    </div>
  );
}
