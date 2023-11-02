import { NewsType } from '@/types/home';
import { NewsCard } from './components/NewsCard';

interface NewsMosaicProps {
  news: NewsType[];
}
export function NewsMosaic({ news }: NewsMosaicProps) {
  function renderNewsCards(newsItems: NewsType[], renderIndex: number) {
    return newsItems?.map(
      (item, index) =>
        index > renderIndex - 1 && (
          <li
            key={`news-${index}`}
            className="
              tab-xs:border-b-2 tab-xs:border-gray4
              last-of-type:border-b-0
            "
          >
            <NewsCard newsData={item} />
          </li>
        ),
    );
  }

  return (
    <>
      <div className="block desk-md:hidden">
        <div
          className="
            flex justify-between
            desk-sm:hidden
          "
        >
          <div className="w-[60%] mr-40">
            <NewsCard newsData={news[0]} main />
          </div>

          <ul
            className="
              grid grid-cols-2 gap-40 w-[40%]
              desk-sm:grid-cols-1
            "
          >
            {renderNewsCards(news, 1)}
          </ul>
        </div>
      </div>

      <div
        className="
          hidden
          desk-md:block
          tab-xs:hidden
        "
      >
        <div className="flex justify-between">
          <div
            className="
              w-[60%] mr-40
              tab:mr-24
            "
          >
            <NewsCard newsData={news[0]} main />
          </div>

          <div className="w-[40%]">
            <NewsCard newsData={news[1]} />
          </div>
        </div>

        <ul
          className="
            grid grid-cols-3 gap-40 mt-40
            tab:mt-24 tab:gap-24
          "
        >
          {renderNewsCards(news, 2)}
        </ul>
      </div>

      <div
        className="
          hidden
          tab-xs:block
        "
      >
        <div className="border-b-2 border-gray4">
          <NewsCard newsData={news[0]} main />
        </div>

        <ul className="mt-24 grid grid-cols-1 gap-24">
          {renderNewsCards(news, 1)}
        </ul>
      </div>
    </>
  );
}
