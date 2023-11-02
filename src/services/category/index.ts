import apiServer from '../axiosConfig';
import { Category } from './types/category';
import { GetServerSidePropsContext } from 'next';
import { CategoryHighlights } from './types/categoryHighlights';

type DefaultParams = {
  slug: string | string[];
  context?: GetServerSidePropsContext;
};

export async function getCategory({ slug, context }: DefaultParams) {
  const api = apiServer(context);
  const { data } = await api.get<Category>(`/post/${slug}`);

  return data;
}

export async function getCategoryHighlights({ slug, context }: DefaultParams) {
  const api = apiServer(context);
  const { data } = await api.get<CategoryHighlights>(
    `/post/category/template/${slug}`,
  );

  return data;
}
