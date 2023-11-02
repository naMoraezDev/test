export type Post = {
  slug: string;
  date: string;
  title: string;
  imageUrl: string;
  category?: string;
};

export type PageInfo = {
  endCursor: string;
  hasNextPage: boolean;
};

export type PostListType = 'news' | 'tips' | 'casino';

export type PostListProps = {
  page: number;
  posts: Post[];
  pageInfo: PageInfo;
  type?: PostListType;
};
