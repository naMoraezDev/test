import {
  NextSeo,
  WebPageJsonLd,
  BreadcrumbJsonLd,
  NewsArticleJsonLd,
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
  postSubtitle: string;
  postAuthor: string;
};

export function NewsSEO({
  seoDates,
  postSlug,
  postTitle,
  postImage,
  seoImages,
  postSubtitle,
  postAuthor,
}: PostSEOProps) {
  return (
    <>
      <NextSeo
        title={postTitle}
        description={postSubtitle}
        openGraph={{
          type: 'article',
          url: `${process.env.SITE_URL}/noticias/${postSlug}.html`,
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
        }}
        canonical={`${process.env.SITE_URL}/noticias/${postSlug}.html`}
        additionalMetaTags={[
          {
            property: 'mrf:authors',
            content: postAuthor,
          },
          { name: 'articleSection', content: 'noticias' },
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
            name: postTitle,
            item: `${process.env.SITE_URL}/noticias/${postSlug}.html`,
          },
        ]}
      />

      <WebPageJsonLd
        type="WebPage"
        description={postSubtitle}
        lastReviewed={seoDates?.modified}
        reviewedBy={{ name: 'lance!', type: 'Organization' }}
        id={`${process.env.SITE_URL}/noticias/#${postSlug}.html`}
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
            url: `${process.env.SITE_URL}/noticias/${postSlug}.html`,
          },
        ]}
      />

      <NewsArticleJsonLd
        body=""
        keywords=""
        section="sports"
        title={postTitle}
        isAccessibleForFree={true}
        description={postSubtitle}
        publisherName="Redação Lance Bet"
        dateCreated={seoDates?.published}
        dateModified={seoDates?.modified}
        datePublished={seoDates?.published}
        images={seoImages?.map(image => image)}
        publisherLogo={treatImageUrl(
          'https://lncimg.lance.com.br/attachments/new-og-image.jpg',
        )}
        authorName={{
          type: 'Organization',
          name: 'Redação Lance Bet',
          url: EXTERNAL_LINKS.lanceSite,
        }}
        url={`${process.env.SITE_URL}/noticias/${postSlug}.html`}
      />
    </>
  );
}
