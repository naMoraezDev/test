import { AccessAll } from './components/AccessAll';
import { NextContentLink } from '../NextContentLink';

type Post = {
  slug: string;
  date: string;
  title: string;
  image: string;
  subtitle: string;
};

type NextContentProps = {
  posts?: Post[];
  isTipsPage?: boolean;
  categorySlug: string;
};

export function NextContent({
  posts,
  isTipsPage,
  categorySlug,
}: NextContentProps) {
  return (
    <div className="w-full rounded-normal shadow-sm-no-bot bg-white">
      <div
        className="
          px-32 py-[42px]
          desk-md:px-8 desk-md:py-16
        "
      >
        <p
          className="
            text-index-title text-primary-green mb-24
            desk-sm:text-index-title-desk-sm
            tab:text-index-title-tab
          "
        >
          Próximos {isTipsPage ? 'palpites' : 'conteúdos'}
        </p>

        {posts?.map((post, index) => (
          <NextContentLink
            key={index}
            postData={post}
            slug={post.slug}
            categorySlug={categorySlug}
          />
        ))}
      </div>

      <AccessAll categorySlug={categorySlug} />
    </div>
  );
}
