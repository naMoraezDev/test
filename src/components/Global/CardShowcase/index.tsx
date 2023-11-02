import { CourseCard } from '../CourseCard';
import { Post } from '@/types/bettingTips';
import { ROUTES } from '@/constants/routes';
import { IconTitle } from '@/components/UI/IconTitle';
import { CustomLink } from '@/components/CustomNextComponents/CustomLink';

type CardShowcaseProps = {
  posts: Post[];
  title: string;
  home?: boolean;
  subtitle?: string;
  priority?: boolean;
  categorySlug: string;
  categoryName?: string;
};

export function CardShowcase({
  home,
  title,
  posts,
  priority,
  subtitle,
  categoryName,
  categorySlug,
}: CardShowcaseProps) {
  return (
    <div
      className={`
      ${
        home
          ? ''
          : 'px-40 py-48 bg-background desk-sm:px-[18px] tab:px-[28px] tab:py-32 mob:pt-16'
      } 
      `}
    >
      {home ? (
        <div
          className="
            flex flex-col gap-16
            desk-sm:gap-4
          "
        >
          <CustomLink href={`${ROUTES.bettingReview}${categorySlug}`}>
            <div className={home ? 'cursor-pointer' : ''}>
              <IconTitle hover>{title}</IconTitle>
            </div>
          </CustomLink>

          {subtitle && <p className="text-gray2">{subtitle}</p>}
        </div>
      ) : (
        <IconTitle element="p">{title}</IconTitle>
      )}

      <div
        className={`
          ${
            home
              ? 'tab:w-full mt-[12px] mb-24 desk-sm:mt-8 tab:mb-12'
              : 'mt-24 mb-48 desk-sm:mt-12 desk-sm:mb-24 tab:mt-8 tab:mb-16 mob:mt-[15px] mob:mb-24 mob-sm:mt-8'
          }
          w-[707px] h-[1px] bg-gray4 
          desk-sm:w-[480px] 
          tab-xs:w-full
        `}
      />

      <div
        className={`
          ${home ? 'grid-cols-3' : 'grid-cols-4'}
          grid gap-40
          desk-md:gap-[20px]
          tab:gap-24
          tab-xs:grid-cols-3
          mob:grid-cols-1
        `}
      >
        {posts.map((post, index) => (
          <CourseCard
            key={index}
            courseData={post}
            priority={priority}
            category={categoryName}
            categorySlug={post.category || categorySlug}
          />
        ))}
      </div>
    </div>
  );
}
