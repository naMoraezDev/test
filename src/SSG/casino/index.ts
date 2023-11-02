/* eslint-disable no-unreachable */
import {
  formatNewsData,
  formatCarouselData,
  formatEducationalData,
} from '@/utils/serverSide';
import { GetStaticProps } from 'next';
import { getHome } from '@/services/homes';
import { formaPostListData } from './utils';
import { REVALIDATE_TIME } from '@/constants/common';
import { giftboxMock } from '@/assets/content/giftboxMock';
import { getRecentPostsByCategory } from '@/services/posts';

export const getCasinoStaticProps = (): GetStaticProps => async () => {
  return { notFound: true };

  const [homeBetting, postsData] = await Promise.all([
    getHome(),
    getRecentPostsByCategory({ slug: 'noticias', limit: 8 }),
  ]);

  const giftboxData = giftboxMock;
  const { pageInfo } = postsData.data;
  const carouselSlides = formatCarouselData(
    homeBetting.data.homeFields.sliderBlocks,
  );
  const postList = formaPostListData(postsData);
  const highlightedPosts = formatNewsData(homeBetting);
  const educationalData = formatEducationalData(homeBetting);

  return {
    props: {
      pageInfo,
      postList,
      giftboxData,
      slug: 'casino',
      carouselSlides,
      educationalData,
      highlightedPosts,
      title: 'Cassino',
      pageType: 'casino',
    },

    revalidate: REVALIDATE_TIME,
  };
};
