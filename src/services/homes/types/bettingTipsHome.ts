export type BettingTipsHome = {
  data: Data;
  status: number;
  message: string;
  cached: boolean;
};

export type Data = {
  name: string;
  description: any;
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
  bettingEduFeaturedBlocks: BettingEduFeaturedBlocks;
  sliderBlocks: SliderBlock[];
  sliderSecondaryBlocks: any;
  embedBlocks: any;
};

export type BettingEduFeaturedBlocks = {
  featuredBlock1: FeaturedBlock1;
  featuredBlock2: FeaturedBlock2;
  featuredBlock3: FeaturedBlock3;
  featuredBlock4: FeaturedBlock4;
  featuredBlock5: FeaturedBlock5;
  featuredBlock6: FeaturedBlock6;
  featuredBlock7: FeaturedBlock7;
  featuredBlock8: FeaturedBlock8;
  featuredBlock9: FeaturedBlock9;
  featuredBlock10: FeaturedBlock10;
  featuredBlock11: FeaturedBlock11;
  featuredBlock12: FeaturedBlock12;
  featuredBlock13: FeaturedBlock13;
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

export type FeaturedBlock6 = {
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

export type FeaturedBlock7 = {
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

export type FeaturedBlock8 = {
  featuredPost: FeaturedPost8[];
  custom: string;
  title: string;
  subtitle: string;
  url: string;
  image: Image16;
};

export type FeaturedPost8 = {
  title: string;
  uri: string;
  link: string;
  slug: string;
  primaryCatName: string;
  extraFields: ExtraFields8;
};

export type ExtraFields8 = {
  subtitle: string;
  image: Image15;
};

export type Image15 = {
  sourceUrl: string;
  altText: string;
  caption: any;
  description: any;
};

export type Image16 = {
  sourceUrl: string;
  altText: string;
  caption: any;
  description: any;
};

export type FeaturedBlock9 = {
  featuredPost: FeaturedPost9[];
  custom: string;
  title: string;
  subtitle: string;
  url: string;
  image: Image18;
};

export type FeaturedPost9 = {
  title: string;
  uri: string;
  link: string;
  slug: string;
  primaryCatName: string;
  extraFields: ExtraFields9;
};

export type ExtraFields9 = {
  subtitle: string;
  image: Image17;
};

export type Image17 = {
  sourceUrl: string;
  altText: string;
  caption: any;
  description: any;
};

export type Image18 = {
  sourceUrl: string;
  altText: string;
  caption: any;
  description: any;
};

export type FeaturedBlock10 = {
  featuredPost: FeaturedPost10[];
  custom: string;
  title: string;
  subtitle: string;
  url: string;
  image: Image20;
};

export type FeaturedPost10 = {
  title: string;
  uri: string;
  link: string;
  slug: string;
  primaryCatName: string;
  extraFields: ExtraFields10;
};

export type ExtraFields10 = {
  subtitle: string;
  image: Image19;
};

export type Image19 = {
  sourceUrl: string;
  altText: string;
  caption: any;
  description: any;
};

export type Image20 = {
  sourceUrl: string;
  altText: string;
  caption: any;
  description: any;
};

export type FeaturedBlock11 = {
  featuredPost: FeaturedPost11[];
  custom: string;
  title: string;
  subtitle: string;
  url: string;
  image: Image22;
};

export type FeaturedPost11 = {
  title: string;
  uri: string;
  link: string;
  slug: string;
  primaryCatName: string;
  extraFields: ExtraFields11;
};

export type ExtraFields11 = {
  subtitle: string;
  image: Image21;
};

export type Image21 = {
  sourceUrl: string;
  altText: string;
  caption: any;
  description: any;
};

export type Image22 = {
  sourceUrl: string;
  altText: string;
  caption: any;
  description: any;
};

export type FeaturedBlock12 = {
  featuredPost: FeaturedPost12[];
  custom: string;
  title: string;
  subtitle: string;
  url: string;
  image: Image24;
};

export type FeaturedPost12 = {
  title: string;
  uri: string;
  link: string;
  slug: string;
  primaryCatName: string;
  extraFields: ExtraFields12;
};

export type ExtraFields12 = {
  subtitle: string;
  image: Image23;
};

export type Image23 = {
  sourceUrl: string;
  altText: string;
  caption: any;
  description: any;
};

export type Image24 = {
  sourceUrl: string;
  altText: string;
  caption: any;
  description: any;
};

export type FeaturedBlock13 = {
  featuredPost: FeaturedPost13[];
  custom: string;
  title: string;
  subtitle: string;
  url: string;
  image: Image26;
};

export type FeaturedPost13 = {
  title: string;
  uri: string;
  link: string;
  slug: string;
  primaryCatName: string;
  extraFields: ExtraFields13;
};

export type ExtraFields13 = {
  subtitle: string;
  image: Image25;
};

export type Image25 = {
  sourceUrl: string;
  altText: string;
  caption: any;
  description: any;
};

export type Image26 = {
  sourceUrl: string;
  altText: string;
  caption: any;
  description: any;
};

export type SliderBlock = {
  sliderBlock: SliderBlock2;
};

export type SliderBlock2 = {
  featuredPost: FeaturedPost14[];
  custom: string;
  title: string;
  subtitle: string;
  url: string;
  image: Image28;
};

export type FeaturedPost14 = {
  title: string;
  uri: string;
  link: string;
  slug: string;
  primaryCatName: string;
  extraFields: ExtraFields14;
};

export type ExtraFields14 = {
  subtitle: string;
  image: Image27;
};

export type Image27 = {
  sourceUrl: string;
  altText: string;
  caption: any;
  description: any;
};

export type Image28 = {
  sourceUrl: string;
  altText: string;
  caption: any;
  description: any;
};
