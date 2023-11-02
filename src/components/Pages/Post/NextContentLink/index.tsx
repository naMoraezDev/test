import { ROUTES } from '@/constants/routes';
import { CustomLink } from '@/components/CustomNextComponents/CustomLink';

type Post = {
  date: string;
  title: string;
  image: string;
  subtitle: string;
};

type NextContentLinkProps = {
  slug: string;
  postData: Post;
  categorySlug: string;
};

export function NextContentLink({
  slug,
  postData,
  categorySlug,
}: NextContentLinkProps) {
  return (
    <>
      <CustomLink
        aria-label={postData.title}
        href={`${ROUTES.bettingReview}${categorySlug}/${slug}.html`}
      >
        <div className="flex gap-8 items-center">
          <div
            className="
              w-[78px] h-[78px] rounded-normal bg-cover bg-center flex justify-center items-center shrink-0
              desk-md:w-48 desk-md:h-48
              tab:w-[30px] tab:h-[30px]
            "
            style={{ backgroundImage: `url(${postData.image})` }}
          />

          <div
            className="
              flex flex-col gap-8
              desk-sm:gap-4
            "
          >
            <p
              className="
                text-next-title
                desk-md:text-next-title-desk-sm
                tab:text-next-title-tab
              "
            >
              {postData.title}
            </p>
          </div>
        </div>
      </CustomLink>
      <div
        className="
          h-[1px] w-full bg-gray4 my-24 last:hidden
          tab:my-12
        "
      />
    </>
  );
}
