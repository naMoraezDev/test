import { Odd } from '@/services/posts/types/post';

type TopInlineOddsProps = {
  topScreenInlineOdds: Odd[];
  topScreenInlineOddsLinkUrl: string;
};

export function TopInlineOdds({
  topScreenInlineOdds,
  topScreenInlineOddsLinkUrl,
}: TopInlineOddsProps) {
  return (
    <div
      className="
        flex w-full justify-around mb-8
        mob:flex-col mob:gap-y-8
      "
    >
      {topScreenInlineOdds.map((odd, index) => {
        if (typeof window !== 'undefined' && document !== null) {
          const elem = document
            .getElementById(odd.id)
            ?.shadowRoot?.querySelector('a');
          if (elem) {
            elem.style.color = 'white';
          }
        }

        return (
          <div
            key={index}
            className="
              flex items-center gap-16
              mob:gap-8
            "
          >
            <span
              className="
                font-bold text-news-paragraph-desk-lg bg-[#06379D] rounded-[6px] px-4 py-[-20px] mx-4
                desk-md:font-bold
                tab:font-bold
                mob-sm:font-bold tab:py-0
              "
            >
              {/* @ts-ignore */}
              <inline-odds id={odd.id} />
            </span>
            <a
              href={topScreenInlineOddsLinkUrl}
              className="
                text-primary-green hover:underline
                tab:underline
              "
            >
              <span className="text-news-paragraph-desk-lg font-bold">
                {odd.text}
              </span>
            </a>
          </div>
        );
      })}
    </div>
  );
}
