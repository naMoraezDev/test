import { EXTERNAL_LINKS } from '@/constants/common';
import { BreadcrumbJsonLd, NextSeo, WebPageJsonLd } from 'next-seo';

type CategorySEOProps = {
  categorySlug: string;
  categoryName: string;
  pageTitle: string;
  categoryDescription: string;
};

export function CategorySEO({
  categoryName,
  categorySlug,
  pageTitle,
  categoryDescription,
}: CategorySEOProps) {
  return (
    <>
      <NextSeo
        title={pageTitle}
        description={categoryDescription}
        canonical={`${process.env.SITE_URL}/${categorySlug}`}
        additionalMetaTags={[{ name: 'articleSection', content: categorySlug }]}
      />

      <WebPageJsonLd
        type="WebPage"
        description={categoryDescription}
        reviewedBy={{ name: 'lance!', type: 'Organization' }}
        id={`${process.env.SITE_URL}/#${categorySlug}`}
        dataArray={[
          {
            name: pageTitle,
            inLanguage: 'pt-BR',
            isPartOf: {
              type: 'WebSite',
              name: 'Apostas Esportivas - Lance Bet',
              url: `${process.env.SITE_URL}`,
              id: `${process.env.SITE_URL}/#website`,
            },
            url: `${process.env.SITE_URL}/${categorySlug}`,
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
            item: `${process.env.SITE_URL}/${categorySlug}`,
          },
        ]}
      />
    </>
  );
}
