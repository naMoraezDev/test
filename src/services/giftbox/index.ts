import { Giftbox } from './types';
import apiServer from '../axiosConfig';
import { GetServerSidePropsContext } from 'next';

type GetGiftBoxParams = {
  slug: string;
  context?: GetServerSidePropsContext;
};

export async function getGiftbox({ slug, context }: GetGiftBoxParams) {
  const api = apiServer(context);
  const { data } = await api.get<Giftbox>(`/giftbox/${slug}`);

  return data;
}
