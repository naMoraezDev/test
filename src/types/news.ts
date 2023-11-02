import { Block, Odd } from '@/services/posts/types/post';

export type PostImage = {
  altText: string;
  caption: string;
  sourceUrl: string;
  description: string;
};

export type SeoDates = {
  published: string;
  modified: string;
};

export type MostRead = {
  title: string;
  slug: string;
};

export type RelatedPost = {
  slug: string;
  date: string;
  title: string;
  image: string;
  subtitle: string;
};

export type NewsPageProps = {
  fullUrl: string;
  postDate: string;
  postSlug: string;
  postTitle: string;
  postData: Block[];
  postAuthor: string;
  seoDates: SeoDates;
  seoImages: string[];
  mostRead: MostRead[];
  postImage: PostImage;
  postSubtitle: string;
  videoEmbedSrc: string | RegExpMatchArray | null;
  imageBlockUrl?: string;
  imageBlockHref?: string;
  imageDescription: string;
  topScreenInlineOdds: Odd[];
  relatedPosts?: RelatedPost[];
  topScreenInlineOddsLinkUrl: string;
};
