import Image from 'next/image';
import { imageLoader } from '@/utils/url';
import { BLUR_DATA_URL } from '@/constants/common';

type ImageHighlightProps = {
  imageBlockUrl: string;
  imageBlockHref: string;
  imageBlockCaption?: string;
};

export function ImageHighlight({
  imageBlockUrl,
  imageBlockHref,
  imageBlockCaption,
}: ImageHighlightProps) {
  return (
    <>
      {imageBlockHref ? (
        <a href={imageBlockHref} target="_blank">
          <Image
            priority
            width={1920}
            height={1137}
            placeholder="blur"
            src={imageBlockUrl}
            loader={imageLoader}
            alt="imagem da materia"
            blurDataURL={BLUR_DATA_URL}
            className={`
              ${!imageBlockCaption && 'mb-40'}
              rounded-normal aspect-[1.69] object-cover
              mob:block
            `}
          />
        </a>
      ) : (
        <Image
          priority
          width={1920}
          height={1137}
          placeholder="blur"
          src={imageBlockUrl}
          loader={imageLoader}
          alt="imagem da materia"
          blurDataURL={BLUR_DATA_URL}
          className={`
            ${!imageBlockCaption && 'mb-40'}
            rounded-normal aspect-[1.69] object-cover
            mob:block
          `}
        />
      )}

      {imageBlockCaption && (
        <div
          className={`
            flex flex-col gap-24 mt-16 mb-40
          `}
        >
          <p
            className={`
                text-gray2 text-news-paragraph-tab
                mob:text-more-news-cat-mob-sm
            `}
            dangerouslySetInnerHTML={{
              __html: imageBlockCaption,
            }}
          />

          <div
            className="
              w-full h-[1px] bg-gray3
              tab:hidden
            "
          />
        </div>
      )}
    </>
  );
}
