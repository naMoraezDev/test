import apiServer from '../axiosConfig';
import { Terms } from './types/termList';
import { GetServerSidePropsContext } from 'next';

export async function getTerms(context?: GetServerSidePropsContext) {
  const api = apiServer(context);
  const { data } = await api.get<Terms>('/betting/terms');

  return data;
}
