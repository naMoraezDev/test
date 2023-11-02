import {
  formatNewsData,
  formatCarouselData,
  formatEducationalData,
} from '@/utils/serverSide';
import { GetStaticProps } from 'next';
import { getHome } from '@/services/homes';
import { HomePageProps } from '@/types/home';
import { getGiftbox } from '@/services/giftbox';
import { REVALIDATE_TIME } from '@/constants/common';
import { getRecentPostsByCategory } from '@/services/posts';
import { getRecentMatchesByCategory } from '@/services/matches';
import { formatGuessesData, formatMoreNewsData } from './utils';

export const getHomeStaticProps =
  (): GetStaticProps<HomePageProps> => async () => {
    const [homeBetting, giftboxData, guesses, postsData] = await Promise.all([
      getHome(),
      getGiftbox({ slug: 'resenha-de-apostas' }),
      getRecentMatchesByCategory({ slug: 'dicas', limit: 4 }),
      getRecentPostsByCategory({ slug: 'noticias', limit: 3 }),
    ]);

    const { pageInfo } = postsData.data;
    const carouselSlides = formatCarouselData(
      homeBetting.data.homeFields.sliderBlocks,
    );
    const newsData = formatNewsData(homeBetting);
    const guessesData = formatGuessesData(guesses);
    const moreNewsData = formatMoreNewsData(postsData);
    const educationalData = formatEducationalData(homeBetting);

    return {
      props: {
        guesses,
        pageInfo,
        newsData,
        giftboxData,
        guessesData,
        moreNewsData,
        carouselSlides,
        educationalData,
        pageType: 'home',
        topBannerType: 'acerte6',
        slug: 'resenha-de-apostas',
      },

      revalidate: REVALIDATE_TIME,
    };
  };
