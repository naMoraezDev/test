export type Category = {
  data: Data;
  status: number;
  message: string;
  cached: boolean;
  dataType: string;
};

export type Data = {
  name: string;
  description: any;
  slug: string;
  parentId: any;
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
  featuredBlocks5: FeaturedBlocks5;
  sliderBlocks: SliderBlock[];
  sliderSecondaryBlocks: SliderSecondaryBlock[];
  embedBlocks: any;
};

export type FeaturedBlocks5 = {
  featuredBlock1: FeaturedBlock1;
  featuredBlock2: FeaturedBlock2;
  featuredBlock3: FeaturedBlock3;
  featuredBlock4: FeaturedBlock4;
  featuredBlock5: FeaturedBlock5;
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
  title: string;
  subtitle: string;
  url: string;
  image: Image4;
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

export type Image4 = {
  sourceUrl: string;
  altText: string;
  caption: any;
  description: any;
};

export type FeaturedBlock3 = {
  featuredPost: FeaturedPost3[];
  custom: string;
  title: string;
  subtitle: string;
  url: string;
  image: Image6;
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
  image: Image5;
};

export type Image5 = {
  sourceUrl: string;
  altText: string;
  caption: any;
  description: any;
};

export type Image6 = {
  sourceUrl: string;
  altText: string;
  caption: any;
  description: any;
};

export type FeaturedBlock4 = {
  featuredPost: FeaturedPost4[];
  custom: string;
  title: string;
  subtitle: string;
  url: string;
  image: Image8;
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
  image: Image7;
};

export type Image7 = {
  sourceUrl: string;
  altText: string;
  caption: any;
  description: any;
};

export type Image8 = {
  sourceUrl: string;
  altText: string;
  caption: any;
  description: any;
};

export type FeaturedBlock5 = {
  featuredPost: FeaturedPost5[];
  custom: string;
  title: string;
  subtitle: string;
  url: string;
  image: Image10;
};

export type FeaturedPost5 = {
  title: string;
  uri: string;
  link: string;
  slug: string;
  primaryCatName: string;
  extraFields: ExtraFields5;
};

export type ExtraFields5 = {
  subtitle: string;
  image: Image9;
};

export type Image9 = {
  sourceUrl: string;
  altText: string;
  caption: any;
  description: any;
};

export type Image10 = {
  sourceUrl: string;
  altText: string;
  caption: any;
  description: any;
};

export type SliderBlock = {
  sliderBlock: SliderBlock2;
};

export type SliderBlock2 = {
  featuredPost: FeaturedPost6[];
  custom: string;
  title: string;
  subtitle: string;
  url: string;
  image: Image12;
};

export type FeaturedPost6 = {
  title: string;
  uri: string;
  link: string;
  slug: string;
  primaryCatName: string;
  extraFields: ExtraFields6;
};

export type ExtraFields6 = {
  subtitle: string;
  image: Image11;
};

export type Image11 = {
  sourceUrl: string;
  altText: string;
  caption: any;
  description: any;
};

export type Image12 = {
  sourceUrl: string;
  altText: string;
  caption: any;
  description: any;
};

export type SliderSecondaryBlock = {
  sliderBlock: SliderBlock3;
};

export type SliderBlock3 = {
  featuredPost: FeaturedPost7[];
  custom: string;
  title: string;
  subtitle: string;
  url: string;
  image: Image14;
};

export type FeaturedPost7 = {
  title: string;
  uri: string;
  link: string;
  slug: string;
  primaryCatName: string;
  extraFields: ExtraFields7;
};

export type ExtraFields7 = {
  subtitle: string;
  image: Image13;
};

export type Image13 = {
  sourceUrl: string;
  altText: string;
  caption: any;
  description: any;
};

export type Image14 = {
  sourceUrl: string;
  altText: string;
  caption: any;
  description: any;
};
