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

export type NewsType = {
  slug: string;
  title: string;
  date?: string;
  imageUrl: string;
  category?: string;
  subtitle?: string;
  categorySlug?: string;
};

export type HomePageProps = {
  pageInfo: PageInfo;
  newsData: NewsType[];
  carouselSlides: Slide[];
  guessesData: NewsType[];
  moreNewsData: NewsType[];
  educationalData: NewsType[];
};
