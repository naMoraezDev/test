import Image from 'next/image';
import { imageLoader } from '@/utils/url';
import { Text } from '@/components/UI/Text';
import { ROUTES } from '@/constants/routes';
import { BLUR_DATA_URL } from '@/constants/common';
import { CustomLink } from '@/components/CustomNextComponents/CustomLink';

export type GuessesType = {
  slug: string;
  title: string;
  imageUrl: string;
  subtitle?: string;
  category?: string;
  categorySlug?: string;
};

type GuessesCardProps = {
  guessesData: GuessesType;
};

export function GuessesCard({ guessesData }: GuessesCardProps) {
  return (
    <div
      className="
        group flex flex-col relative w-[100%] h-[390px] rounded-normal animate-card-fade overflow-hidden
        desk-md:h-[220px]
        tab:h-[230px]
        mob:shrink-0
      "
    >
      <div className="w-full h-full">
        <Image
          fill
          placeholder="blur"
          loader={imageLoader}
          alt="Imagem do card"
          blurDataURL={BLUR_DATA_URL}
          sizes="(max-width: 430px) 50vw"
          src={guessesData?.imageUrl || ''}
          className="object-cover rounded-normal"
        />
      </div>

      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: 'linear-gradient(to top, #031E10, rgba(0, 0, 0, 0))',
        }}
      />

      <div
        className="
          absolute left-24 bottom-0 w-[80%] duration-300 group-hover:bottom-24
          desk-md:w-auto
          desk-sm:right-24
        "
      >
        <Text
          variant="guess-category"
          className="text-tertiary-yellow !font-bold font-workSans"
        >
          {guessesData.category}
        </Text>

        <Text
          color="white"
          variant="category"
          className="!font-bold font-workSans mb-4 line-clamp-1 text-ellipsis"
        >
          {guessesData.title}
        </Text>

        <Text
          color="white"
          variant="category-sub"
          className="
            w-[70%] mb-24 font-workSans text-ellipsis line-clamp-2 !leading-normal
            desk-md:w-[100%]
          "
        >
          {guessesData.subtitle}
        </Text>

        <div
          className="
            max-h-0 duration-300
            group-hover:block group-hover:max-h-[60px]
          "
        >
          <CustomLink
            className="z-50"
            href={`${ROUTES.tips}/${guessesData.slug}.html`}
          >
            <button
              className="
                w-[200px] max-w-[100%] h-[45px] mob:h-40 px-[14px] bg-tertiary-yellow text-black text-button-md whitespace-nowrap rounded-normal transition-all duration-500 shrink-0 opacity-0 pointer-events-none delay-300
                hover:bg-tertiary-yellow2
                active:bg-tertiary-yellow2 active:shadow-inset-button active:duration-150
                group-hover:opacity-100 group-hover:pointer-events-auto
              "
              type="button"
            >
              Confira
            </button>
          </CustomLink>
        </div>
      </div>
    </div>
  );
}
