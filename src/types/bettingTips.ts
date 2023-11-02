export type Slide = {
  uri: string;
  title: string;
  subtitle: string;
  imageUrl?: string;
};

export type Post = {
  slug: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  category?: string;
};

export type Category = {
  name: string;
  slug: string;
  description: string;
};

export type HowToBetPosts = {
  block1: Post;
  block2: Post;
  block3: Post;
  block4: Post;
};

export type BettingTipsPageProps = {
  basicPosts: Post[];
  strategiesPosts: Post[];
  carouselSlides: Slide[];
  basicCategory: Category;
  lanceBettingPosts: Post[];
  strategiesCategory: Category;
  howToBetPosts: HowToBetPosts;
  lanceBettingCategory: Category;
};
