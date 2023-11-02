import { ROUTES } from '@/constants/routes';
import { CustomLink } from '@/components/CustomNextComponents/CustomLink';

type Post = {
  date: string;
  title: string;
  image: string;
  subtitle: string;
};

type NextContentCardProps = {
  slug: string;
  postData: Post;
  categorySlug: string;
};

export function NextContentCard({
  slug,
  postData,
  categorySlug,
}: NextContentCardProps) {
  return (
    <div
      className="w-[211px] h-[124px] shrink-0 rounded-normal bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to top, #181818, transparent), url(${postData.image})`,
      }}
    >
      <CustomLink href={`${ROUTES.bettingReview}${categorySlug}/${slug}.html`}>
        <p className="text-section-lead-mob-sm text-white max-w-[150px] mt-48 mx-8 text-ellipsis line-clamp-3">
          {postData.title}
        </p>
      </CustomLink>
    </div>
  );
}
