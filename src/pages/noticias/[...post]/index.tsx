import { GetServerSideProps } from 'next';
import { NewsPageProps } from '@/types/news';
import { getNewsServerSideProps } from '@/SSR/news';
import { News } from '@/components/Pages/Global/News';

export default function NewsPostPage({
  fullUrl,
  postDate,
  postData,
  postSlug,
  seoDates,
  mostRead,
  seoImages,
  postTitle,
  postImage,
  postAuthor,
  relatedPosts,
  postSubtitle,
  videoEmbedSrc,
  imageBlockUrl,
  imageBlockHref,
  imageDescription,
  topScreenInlineOdds,
  topScreenInlineOddsLinkUrl,
}: NewsPageProps) {
  return (
    <News
      fullUrl={fullUrl}
      mostRead={mostRead}
      postData={postData}
      postDate={postDate}
      postSlug={postSlug}
      seoDates={seoDates}
      postImage={postImage}
      postTitle={postTitle}
      seoImages={seoImages}
      postAuthor={postAuthor}
      postSubtitle={postSubtitle}
      relatedPosts={relatedPosts}
      imageBlockUrl={imageBlockUrl}
      videoEmbedSrc={videoEmbedSrc}
      imageBlockHref={imageBlockHref}
      imageDescription={imageDescription}
      topScreenInlineOdds={topScreenInlineOdds}
      topScreenInlineOddsLinkUrl={topScreenInlineOddsLinkUrl}
    />
  );
}

export const getServerSideProps: GetServerSideProps<NewsPageProps> =
  getNewsServerSideProps();
