import { Block, Odd } from '@/services/posts/types/post';

export type RelatedPost = {
  slug: string;
  date: string;
  title: string;
  image: string;
  subtitle: string;
};

export type PostImage = {
  altText: string;
  caption: string;
  sourceUrl: string;
  description: string;
};

export type SeoDates = {
  modified: string;
  published: string;
};

export type PostPageProps = {
  fullUrl: string;
  postDate: string;
  postSlug: string;
  postTitle: string;
  postData: Block[];
  postAuthor: string;
  seoDates: SeoDates;
  readingTime: number;
  seoImages: string[];
  postImage: PostImage;
  postSubtitle: string;
  categoryName: string;
  categorySlug: string;
  imageBlockUrl: string;
  imageBlockHref: string;
  topScreenInlineOdds: Odd[];
  imageBlockCaption?: string;
  initialSelectedIndex: number;
  relatedPosts?: RelatedPost[];
  topScreenInlineOddsLinkUrl: string;
  videoEmbedSrc: RegExpMatchArray | null;
};
