import Image from 'next/image';
import { imageLoader } from '@/utils/url';
import { BLUR_DATA_URL } from '@/constants/common';
import { Block, Odd } from '@/services/posts/types/post';

type ImageBlockProps = {
  block: Block;
  index: number;
  topScreenInlineOdds: Odd[];
};

export function ImageBlock({
  block,
  index,
  topScreenInlineOdds,
}: ImageBlockProps) {
  const isFirstBlock =
    index === 1 || (Boolean(topScreenInlineOdds.length) && index === 2);

  return (
    <>
      {block.attributesJSON.href ? (
        <a href={block.attributesJSON.href} target="_blank">
          <Image
            width={1920}
            height={1137}
            placeholder="blur"
            loader={imageLoader}
            alt="imagem da materia"
            blurDataURL={BLUR_DATA_URL}
            src={block.attributesJSON.url || ''}
            className={`
              ${isFirstBlock ? 'hidden' : ''}
              rounded-normal object-cover
            `}
          />
        </a>
      ) : (
        <Image
          width={1920}
          height={1137}
          placeholder="blur"
          loader={imageLoader}
          alt="imagem da materia"
          blurDataURL={BLUR_DATA_URL}
          src={block.attributesJSON.url || ''}
          className={`
            ${isFirstBlock ? 'hidden' : ''}
            rounded-normal object-cover
          `}
        />
      )}

      {block.attributesJSON.caption && (
        <div
          className={`
          ${isFirstBlock ? 'hidden' : '-mt-24'}
            flex flex-col gap-24
          `}
        >
          <p
            className={`
              ${isFirstBlock ? 'mob:hidden' : ''}
                text-gray2 text-news-paragraph-tab
                mob:text-more-news-cat-mob-sm
            `}
            dangerouslySetInnerHTML={{
              __html: block.attributesJSON.caption,
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
