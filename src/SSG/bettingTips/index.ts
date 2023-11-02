import {
  getBasicPostsData,
  getHowToBetPostsData,
  getStrategiesPostsData,
  getLanceBettingPostsData,
} from './utils';
import { GetStaticProps } from 'next';
import { getGiftbox } from '@/services/giftbox';
import { REVALIDATE_TIME } from '@/constants/common';
import { getBettingTipsHome } from '@/services/homes';
import { formatCarouselData } from '@/utils/serverSide';
import { BettingTipsPageProps } from '@/types/bettingTips';

export const getBettingTipsStaticProps =
  (): GetStaticProps<BettingTipsPageProps> => async () => {
    const [bettingTips, giftboxData] = await Promise.all([
      getBettingTipsHome(),
      getGiftbox({ slug: 'resenha-de-apostas' }),
    ]);

    const { data } = bettingTips;
    const basicPosts = getBasicPostsData(data);
    const carouselSlides = formatCarouselData(
      bettingTips.data.homeFields.sliderBlocks,
    );
    const howToBetPosts = getHowToBetPostsData(data);
    const strategiesPosts = getStrategiesPostsData(data);
    const lanceBettingPosts = getLanceBettingPostsData(data);

    const basicCategory = {
      slug: 'basico',
      name: 'Aprenda o básico',
      description: 'Primeiras dicas para iniciar nas apostas esportivas',
    };

    const strategiesCategory = {
      slug: 'estrategias',
      name: 'Desenvolva habilidades',
      description: 'Estratégias para dominar as apostas',
    };

    const lanceBettingCategory = {
      slug: 'lance-betting',
      name: 'Aposte na Lance!Betting',
      description: 'Conheça tudo sobre a casa de apostas',
    };

    return {
      props: {
        basicPosts,
        giftboxData,
        basicCategory,
        howToBetPosts,
        carouselSlides,
        strategiesPosts,
        lanceBettingPosts,
        strategiesCategory,
        lanceBettingCategory,
        pageType: 'bettingTips',
        slug: 'dicas-de-apostas',
        title: 'Dicas de Apostas',
      },
      revalidate: REVALIDATE_TIME,
    };
  };
