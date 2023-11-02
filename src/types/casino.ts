export type Slide = {
  uri: string;
  title: string;
  subtitle: string;
  imageUrl: string;
};

export type PageInfo = {
  endCursor: string;
  hasNextPage: boolean;
};

export type HighlightedPosts = {
  slug: string;
  title: string;
  date?: string;
  imageUrl: string;
  category?: string;
  subtitle?: string;
  categorySlug?: string;
};

type Post = {
  slug: string;
  title: string;
  subtitle: string;
  imageUrl: string;
};

export type CasinoPageProps = {
  postList: Post[];
  pageInfo: PageInfo;
  carouselSlides: Slide[];
  highlightedPosts: HighlightedPosts[];
};
