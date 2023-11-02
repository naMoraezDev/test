import { Home } from './types/home';
import apiServer from '../axiosConfig';
import { GetServerSidePropsContext } from 'next';
import { BettingTipsHome } from './types/bettingTipsHome';

export async function getHome(context?: GetServerSidePropsContext) {
  const api = apiServer(context);
  const { data } = await api.get<Home>(
    '/post/category/template/resenha-de-apostas',
  );

  return data;
}

export async function getBettingTipsHome(context?: GetServerSidePropsContext) {
  const api = apiServer(context);
  const { data } = await api.get<BettingTipsHome>(
    '/post/category/template/dicas-de-apostas',
  );

  return data;
}
