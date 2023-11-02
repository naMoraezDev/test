export type Post = {
  data: Data;
  status: number;
  message: string;
  cached: boolean;
};

export type Data = {
  slug: string;
  title: string;
  link: string;
  status: string;
  uri: string;
  date: string;
  dateGmt: string;
  modified: string;
  extraFields: ExtraFields;
  author: Author;
  tags: any[];
  seo: Seo;
  blocks: Block[];
  category: Category2;
};

export type ExtraFields = {
  signature: string;
  signatureLocal: string;
  subtitle: string;
  redirect: string;
  redirectUrl: any;
  highlightType: string;
  video: string;
  embed: string;
  imageDescription: string;
  image: Image;
  gallery: any;
  hasMatch: boolean;
  hasExtraGols: string;
  relatedPosts: RelatedPost[];
};

export type Image = {
  sourceUrl: string;
  altText: string;
  caption: any;
  description: any;
};

export type RelatedPost = {
  id: string;
  slug: string;
  uri: string;
  title: string;
  status: string;
  date: string;
  modified: string;
  extraFields: ExtraFields2;
  category: Category;
};

export type ExtraFields2 = {
  subtitle: string;
  image: Image2;
};

export type Image2 = {
  sourceUrl: string;
  altText: string;
  caption: any;
  description: any;
};

export type Category = {
  parentId: string;
  slug: string;
  name: string;
  color: any;
  background: any;
  isPrimary: boolean;
};

export type Author = {
  name: string;
  firstName: string;
  lastName: any;
};

export type Seo = {
  title: string;
  metaDesc: string;
  metaKeywords: string;
  metaRobotsNofollow: string;
  metaRobotsNoindex: string;
  canonical: string;
  readingTime: number;
  opengraphTitle: string;
  opengraphDescription: string;
  opengraphImage: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: any;
};

export type Block = {
  name: string;
  saveContent: string;
  attributesJSON: AttributesJson;
  innerBlocks: any[];
};

export type Odd = {
  id: string;
  text: string;
  url: string;
};

export type BtnData = {
  value?: 'default' | 'bet' | 'courses' | 'lance' | 'widget' | 'play';
  label?: string;
  textColor?: string;
  bgDefault?: string;
  bgHover?: string;
  bgActive?: string;
  bgDisabled?: string;
};

export type AttributesJson = {
  url?: string;
  caption?: string;
  content: string;
  dropCap?: boolean;
  anchor: string;
  level?: number;
  align?: string;
  src?: string;
  input?: any;
  response?: any;
  href?: string;
  btnData?: BtnData;
  text?: string;
  providerNameSlug?: string;
};

export type Category2 = {
  parentId: string;
  slug: string;
  name: string;
  parent_slug: string;
  isPrimary: boolean;
  color: any;
  background: any;
};
