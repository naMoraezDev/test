import {
  getPageTitle,
  formatPostsData,
  getHighlightsTitle,
  getListSectionTitle,
  formatHighlightsData,
  getCategoryDescription,
} from './utils';
import { GetServerSideProps } from 'next';
import { getGiftbox } from '@/services/giftbox';
import { CategoryPageProps } from '@/types/category';
import { getRecentPostsByCategory } from '@/services/posts';
import { getCategory, getCategoryHighlights } from '@/services/category';

export const getCategoryServerSideProps =
  (): GetServerSideProps<CategoryPageProps> => async context => {
    const { params, query, resolvedUrl } = context;

    const page = Number(query.page) || 1;
    const category = params?.category as string;

    try {
      const [giftboxData, categoryHighlights, categoryData, postsData] =
        await Promise.all([
          getGiftbox({ slug: 'resenha-de-apostas' }),
          getCategoryHighlights({ slug: category, context }),
          getCategory({ slug: `resenha-de-apostas/${category}`, context }),
          getRecentPostsByCategory({ slug: category, limit: 8, page, context }),
        ]);

      if (!Boolean(postsData.data.itens.length)) {
        return { notFound: true };
      }

      const { pageInfo } = postsData.data;
      const posts = formatPostsData(postsData);
      const categorySlug = categoryData.data.slug;
      const categoryName = categoryData.data.name;
      const highlights = formatHighlightsData(categoryHighlights);

      return {
        props: {
          page,
          posts,
          pageInfo,
          highlights,
          giftboxData,
          categorySlug,
          categoryName,
          pageType: 'category',
          titleElementType: 'p',
          title: 'Dicas de Apostas',
          pageTitle: getPageTitle(category),
          highlightsTitle: getHighlightsTitle(category),
          listSectionTitle: getListSectionTitle(category),
          categoryDescription: getCategoryDescription(category),
        },
      };
    } catch (e: any) {
      const status = e.response?.status;

      if (status === 301) {
        return {
          redirect: {
            destination: e.response.data?.redirect_url,
            statusCode: 301,
          },
        };
      }

      if (status === 404 && !/\.html(\.amp)?(\?.*|$)/.test(resolvedUrl)) {
        const destination = resolvedUrl.replace(
          /(\.amp)?(\?.*|$)/,
          '.html$1$2',
        );

        return {
          redirect: {
            destination,
            statusCode: 301,
          },
        };
      }

      return { notFound: true };
    }
  };
