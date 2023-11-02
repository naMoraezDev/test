import apiServer from '../axiosConfig';
import { Matches } from './types/match';
import { GetServerSidePropsContext } from 'next';

type Params = {
  slug: string;
  limit?: number;
  context?: GetServerSidePropsContext;
};

export async function getRecentMatchesByCategory({
  slug,
  limit,
  context,
}: Params) {
  const api = apiServer(context);
  const { data } = await api.get<Matches>(
    `post/category/recent_matches/${slug}`,
    {
      params: { limit },
    },
  );

  return data;
}
