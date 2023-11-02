export type Post = {
  slug: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  category?: string;
};

export type PageInfo = {
  endCursor: string;
  hasNextPage: boolean;
};

export type CategoryPageProps = {
  page: number;
  posts: Post[];
  pageTitle: string;
  pageInfo: PageInfo;
  categoryName: string;
  categorySlug: string;
  highlights: Post[];
  highlightsTitle: string;
  listSectionTitle: string;
  categoryDescription: string;
};
