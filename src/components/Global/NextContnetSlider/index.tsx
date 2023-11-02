import { Slider } from '@/components/Global/Sider';
import { TopLineText } from '@/components/UI/TopLineText';
import { NextContentCard } from '@/components/Global/NextContentCard';

type Post = {
  slug: string;
  date: string;
  title: string;
  image: string;
  subtitle: string;
};

type NextContentSliderProps = {
  posts?: Post[];
  isTipsPage?: boolean;
  categorySlug: string;
};

export function NextContentSlider({
  posts,
  isTipsPage,
  categorySlug,
}: NextContentSliderProps) {
  return (
    <>
      <div className="mb-24">
        <TopLineText>
          Próximos {isTipsPage ? 'palpites' : 'conteúdos'}
        </TopLineText>
      </div>

      <Slider>
        {posts &&
          posts.map((post, index) => (
            <NextContentCard
              key={index}
              postData={post}
              slug={post.slug}
              categorySlug={categorySlug}
            />
          ))}
      </Slider>
    </>
  );
}
