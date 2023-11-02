import { ROUTES } from '@/constants/routes';
import { CustomLink } from '@/components/CustomNextComponents/CustomLink';

type Breadcrumb = {
  title: string;
  link?: string;
};

type BreadcrumbsProps = {
  paths: Breadcrumb[];
};

export function Breadcrumbs({ paths }: BreadcrumbsProps) {
  return (
    <p
      className="
        text-bread text-[#000000]
        desk-sm:text-bread-desk-sm
        mob:text-bread-mob
        mob-sm:text-bread-mob-sm
      "
    >
      <span className="text-gray1">
        <CustomLink href={ROUTES.bettingReview}>Início /</CustomLink>{' '}
      </span>

      {paths.map((path, index) => {
        const { title, link } = path;
        const isLastItem = paths.length === index + 1;

        return (
          <span
            key={`${title.toLowerCase()}-${index}`}
            className={`${!isLastItem ? 'text-gray1' : ''}`}
          >
            {' '}
            {!isLastItem && path.link ? (
              <CustomLink href={`/${link}`}>{title.toLowerCase()} /</CustomLink>
            ) : (
              `${title.toLowerCase()} ${!isLastItem ? '/' : ''}`
            )}
          </span>
        );
      })}
    </p>
  );
}
