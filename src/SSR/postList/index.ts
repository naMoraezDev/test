import {
  getLimit,
  getPostsSlug,
  getReturnSlug,
  getReturnTitle,
  formatPostsData,
} from './utils';
import { GetServerSideProps } from 'next';
import { getGiftbox } from '@/services/giftbox';
import { getRecentPostsByCategory } from '@/services/posts';
import { PostListProps, PostListType } from '@/types/postList';

export const getPostListServerSideProps =
  (type: PostListType): GetServerSideProps<PostListProps> =>
  async context => {
    if (type === 'casino') {
      return { notFound: true };
    }

    const page = Number(context.query?.page) || 1;

    const [postsResponse, giftboxData] = await Promise.all([
      getRecentPostsByCategory({
        page,
        context,
        limit: getLimit(type),
        slug: getPostsSlug(type),
      }),
      getGiftbox({ slug: 'resenha-de-apostas' }),
    ]);

    const response = postsResponse;

    if (!Boolean(response.data.itens.length)) {
      return {
        notFound: true,
      };
    }

    const { pageInfo } = response.data;
    const posts = formatPostsData(response);

    return {
      props: {
        page,
        posts,
        pageInfo,
        giftboxData,
        pageType: 'postList',
        slug: getReturnSlug(type),
        title: getReturnTitle(type),
      },
    };
  };
