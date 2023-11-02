import { Post } from './types/post';
import { Posts } from './types/posts';
import apiServer from '../axiosConfig';
import { GetServerSidePropsContext } from 'next';
import { MostRead } from './types/most-read-posts';

type DefaultParams = {
  slug: string | string[];
  context?: GetServerSidePropsContext;
};

type GetPostsByCategoryParams = {
  page?: number;
  limit?: number;
} & DefaultParams;

type GetPostParams = { categorySlug: string } & DefaultParams;

type GetMoreReadPostsParams = { context?: GetServerSidePropsContext };

export async function getRecentPostsByCategory({
  page,
  slug,
  limit,
  context,
}: GetPostsByCategoryParams) {
  const api = apiServer(context);
  const { data } = await api.get<Posts>(`/post/category/recent/${slug}`, {
    params: { limit, page },
  });

  return data;
}

export async function getPost({ slug, context, categorySlug }: GetPostParams) {
  const api = apiServer(context);
  const { data } = await api.get<Post>(
    `/post/resenha-de-apostas/${categorySlug}/${slug}`,
  );

  return data;
}

export async function getMostReadPosts({ context }: GetMoreReadPostsParams) {
  const api = apiServer(context);
  const { data } = await api.get<MostRead>('/mostreads/ga4/resenha-de-apostas');

  return data;
}
