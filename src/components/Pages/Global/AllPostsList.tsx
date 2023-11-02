import Image from 'next/image';
import { TipsSEO } from '@/seo/dicas';
import { PostListProps } from '@/types/postList';
import { MoreNewsSEO } from '@/seo/mais-noticias';
import { MoreNews } from '@/components/Global/MoreNews';
import { TopLineText } from '@/components/UI/TopLineText';
import { CassinoMoreNewsSEO } from '@/seo/cassino-mais-noticias';
import { AdsPlaceholder } from '@/components/GoogleAds/AdsPlaceholder';
import { Vertical_1 } from '@/components/GoogleAds/AdsTemplates/Vertical_1';
import exclamationIcon from '../../../assets/images/svg/yellow-exclamation-icon.svg';

export function AllPostsList({ page, pageInfo, posts, type }: PostListProps) {
  function getPageSEOComponent() {
    if (type === 'news') {
      return <MoreNewsSEO page={page.toString()} />;
    }

    if (type === 'casino') {
      return <CassinoMoreNewsSEO page={page.toString()} />;
    }

    return <TipsSEO page={page.toString()} />;
  }

  function getTitle() {
    if (type === 'news') {
      return 'Mais notícias';
    }

    if (type === 'casino') {
      return 'Cassino';
    }

    return 'Palpites';
  }

  return (
    <>
      {getPageSEOComponent()}

      <section
        className="
          w-full h-[210px] bg-primary-green overflow-hidden flex px-[45px] py-[42px] relative
          desk-md:h-[186px]
          desk-sm:mt-16
          tab:h-[110px] tab:pt-[26px]
          mob:h-[54px] mob:px-[26px] mob:mt-0
        "
      >
        <TopLineText element="h2" color="tertiary-yellow">
          {getTitle()}
        </TopLineText>

        <Image
          priority
          src={exclamationIcon}
          alt="ícone de exclamação"
          className="
            w-[750px] h-[750px] absolute -top-[240px] -right-[230px] rotate-[35deg]
            desk-md:w-[600px] desk-md:h-[600px] desk-md:-top-[170px] desk-md:-right-[170px]
            tab:w-[400px] tab:h-[400px] tab:-top-[130px] tab:-right-[100px]
            mob:w-[300px] mob:h-[300px] mob:-top-[110px] mob:-right-[100px]
            mob-sm:w-[230px] mob-sm:h-[230px] mob-sm:-top-[70px] mob-sm:-right-[70px]
          "
        />
      </section>

      <div
        className="
          w-full grid grid-cols-[3fr_1fr] p-40 gap-40
          desk-md:px-[18px] desk-md:py-32
          tab:grid-cols-1 tab:px-[29px] tab:py-24
          mob:px-24 mob:py-24 tab:flex tab:flex-col-reverse
        "
      >
        <section className="w-full flex flex-col">
          <MoreNews
            page={page}
            posts={posts}
            pageInfo={pageInfo}
            tips={type === 'tips'}
            casino={type === 'casino'}
          />
        </section>

        <section className="w-full flex justify-center">
          <div
            className="
              w-[300px] h-[600px] animate-adsSkeleton flex justify-center items-center sticky top-120 overflow-hidden
              desk-sm:w-[120px]
              tab:w-[320px] tab:h-[100px]
            "
          >
            <Vertical_1 />

            <AdsPlaceholder />
          </div>
        </section>
      </div>
    </>
  );
}
