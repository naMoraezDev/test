import {
  NextSeo,
  WebPageJsonLd,
  ArticleJsonLd,
  BreadcrumbJsonLd,
} from 'next-seo';
import { treatImageUrl } from '@/utils/url';
import { EXTERNAL_LINKS } from '@/constants/common';

type PostImage = {
  altText: string;
  caption: string;
  sourceUrl: string;
  description: string;
};

type SeoDates = {
  published: string;
  modified: string;
};

type PostSEOProps = {
  postSlug: string;
  postTitle: string;
  seoDates: SeoDates;
  seoImages: string[];
  postImage: PostImage;
  categorySlug: string;
  categoryName: string;
  postSubtitle: string;
  postAuthor: string;
};

export function PostSEO({
  seoDates,
  postSlug,
  postTitle,
  postImage,
  seoImages,
  postSubtitle,
  categorySlug,
  categoryName,
  postAuthor,
}: PostSEOProps) {
  return (
    <>
      <NextSeo
        title={postTitle}
        description={postSubtitle}
        openGraph={{
          type: 'article',
          title: postTitle,
          description: postSubtitle,
          images: [
            {
              width: 1024,
              height: 768,
              type: 'image/jpeg',
              alt: postImage.altText,
              url: treatImageUrl(postImage?.sourceUrl || ''),
            },
          ],
          url: `${process.env.SITE_URL}/${categorySlug}/${postSlug}.html`,
        }}
        canonical={`${process.env.SITE_URL}/${categorySlug}/${postSlug}.html`}
        additionalMetaTags={[{
          property: 'mrf:authors',
          content: postAuthor,
        }]}
      />

      <WebPageJsonLd
        type="WebPage"
        description={postSubtitle}
        lastReviewed={seoDates?.modified}
        reviewedBy={{ name: 'lance!', type: 'Organization' }}
        id={`${process.env.SITE_URL}/${categorySlug}/#${postSlug}.html`}
        dataArray={[
          {
            name: postTitle,
            inLanguage: 'pt-BR',
            isPartOf: {
              type: 'WebSite',
              name: 'Apostas Esportivas - Lance Bet',
              url: `${process.env.SITE_URL}`,
              id: `${process.env.SITE_URL}/#website`,
            },
            url: `${process.env.SITE_URL}/${categorySlug}/${postSlug}.html`,
          },
        ]}
      />

      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'LANCE!',
            item: EXTERNAL_LINKS.lanceSite,
          },
          {
            position: 2,
            name: 'Resenha de Apostas',
            item: process.env.SITE_URL,
          },
          {
            position: 3,
            name: 'Dicas de Apostas',
            item: `${process.env.SITE_URL}/dicas-de-apostas`,
          },
          {
            position: 4,
            name: categoryName,
            item: `${process.env.SITE_URL}/dicas-de-apostas/${categorySlug}`,
          },
          {
            position: 5,
            name: postTitle,
            item: `${process.env.SITE_URL}/${categorySlug}/${postSlug}.html`,
          },
        ]}
      />

      <ArticleJsonLd
        title={postTitle}
        description={postSubtitle}
        isAccessibleForFree={true}
        dateModified={seoDates?.modified}
        datePublished={seoDates?.published}
        images={seoImages?.map(image => image)}
        authorName={{ type: 'Organization', name: 'Redação Lance Bet' }}
        url={`${process.env.SITE_URL}/${categorySlug}/${postSlug}.html`}
      />
    </>
  );
}
