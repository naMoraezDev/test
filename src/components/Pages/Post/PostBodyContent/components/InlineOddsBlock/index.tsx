import { Block } from '@/services/posts/types/post';

type InlineOddsBlockProps = {
  block: Block;
};

export function InlineOddsBlock({ block }: InlineOddsBlockProps) {
  return (
    <a href={block.attributesJSON.url}>
      <p className="text-news-paragraph-desk-lg">
        {block.attributesJSON.response &&
          block.attributesJSON.response.map((attribute: any, i: any) => {
            if (attribute.includes('id')) {
              if (typeof window !== 'undefined' && document !== null) {
                const elem = document
                  .getElementById(attribute.split('=')[1].replace(/"/g, ''))
                  ?.shadowRoot?.querySelector('a');
                if (elem) {
                  elem.style.color = 'white';
                }
              }

              return (
                <span
                  key={i}
                  className="
                    font-bold text-text-desk-lg bg-[#06379D] w-fit rounded-[6px] px-4 py-[5px] mx-4
                    desk-md:text-text-3-desk-sm desk-md:font-bold
                    tab:text-text-tab tab:font-bold
                    mob-sm:text-text-mob-sm mob-sm:font-bold
                  "
                >
                  {/* @ts-ignore */}
                  <inline-odds id={attribute.split('=')[1].replace(/"/g, '')} />
                </span>
              );
            }
            return attribute;
          })}
      </p>
    </a>
  );
}
