export type CategoryHighlights = {
  data: Data;
  status: number;
  message: string;
  cached: boolean;
};

export type Data = {
  name: string;
  description: string;
  slug: string;
  parentId: string;
  seo: Seo;
  homeFields: HomeFields;
  color: any;
  background: any;
};

export type Seo = {
  title: string;
  metaDesc: string;
  metaKeywords: any;
  metaRobotsNofollow: string;
  metaRobotsNoindex: string;
  canonical: string;
  opengraphTitle: string;
  opengraphDescription: string;
  opengraphImage: any;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: any;
};

export type HomeFields = {
  homeType: string;
  bettingInternalCatFeaturedBlocks: BettingInternalCatFeaturedBlocks;
  sliderBlocks: any;
  sliderSecondaryBlocks: any;
  embedBlocks: any;
};

export type BettingInternalCatFeaturedBlocks = {
  featuredBlock1: FeaturedBlock1;
  featuredBlock2: FeaturedBlock2;
  featuredBlock3: FeaturedBlock3;
  featuredBlock4: FeaturedBlock4;
};

export type FeaturedBlock1 = {
  featuredPost: FeaturedPost[];
  custom: string;
  title: string;
  subtitle: string;
  url: string;
  image: Image2;
};

export type FeaturedPost = {
  title: string;
  uri: string;
  link: string;
  slug: string;
  primaryCatName: string;
  extraFields: ExtraFields;
};

export type ExtraFields = {
  subtitle: string;
  image: Image;
};

export type Image = {
  sourceUrl: string;
  altText: string;
  caption: any;
  description: any;
};

export type Image2 = {
  sourceUrl: string;
  altText: string;
  caption: any;
  description: any;
};

export type FeaturedBlock2 = {
  featuredPost: FeaturedPost2[];
  custom: string;
  title: any;
  subtitle: any;
  url: any;
  image: any;
};

export type FeaturedPost2 = {
  title: string;
  uri: string;
  link: string;
  slug: string;
  primaryCatName: string;
  extraFields: ExtraFields2;
};

export type ExtraFields2 = {
  subtitle: string;
  image: Image3;
};

export type Image3 = {
  sourceUrl: string;
  altText: string;
  caption: any;
  description: any;
};

export type FeaturedBlock3 = {
  featuredPost: FeaturedPost3[];
  custom: string;
  title: any;
  subtitle: any;
  url: any;
  image: any;
};

export type FeaturedPost3 = {
  title: string;
  uri: string;
  link: string;
  slug: string;
  primaryCatName: string;
  extraFields: ExtraFields3;
};

export type ExtraFields3 = {
  subtitle: string;
  image: Image4;
};

export type Image4 = {
  sourceUrl: string;
  altText: string;
  caption: any;
  description: any;
};

export type FeaturedBlock4 = {
  featuredPost: FeaturedPost4[];
  custom: string;
  title: any;
  subtitle: any;
  url: any;
  image: any;
};

export type FeaturedPost4 = {
  title: string;
  uri: string;
  link: string;
  slug: string;
  primaryCatName: string;
  extraFields: ExtraFields4;
};

export type ExtraFields4 = {
  subtitle: string;
  image: Image5;
};

export type Image5 = {
  sourceUrl: string;
  altText: string;
  caption: any;
  description: any;
};
