import { GetServerSideProps } from 'next';
import { PostListProps } from '@/types/postList';
import { getPostListServerSideProps } from '@/SSR/postList';
import { AllPostsList } from '@/components/Pages/Global/AllPostsList';

export default function MoreNewsPage({ page, posts, pageInfo }: PostListProps) {
  return (
    <AllPostsList page={page} pageInfo={pageInfo} posts={posts} type="news" />
  );
}

export const getServerSideProps: GetServerSideProps<PostListProps> =
  getPostListServerSideProps('news');
