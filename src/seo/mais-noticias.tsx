import { EXTERNAL_LINKS } from '@/constants/common';
import { BreadcrumbJsonLd, NextSeo, WebPageJsonLd } from 'next-seo';

type MoreNewsSEOProps = {
  page: string;
};

export function MoreNewsSEO({ page }: MoreNewsSEOProps) {
  return (
    <>
      <NextSeo
        title="Mais notícias"
        description="Mais notícias"
        canonical={`${process.env.SITE_URL}/mais-noticias${
          page ? `?page=${page}` : ''
        }`}
      />

      <WebPageJsonLd
        type="WebPage"
        description="Mais notícias"
        reviewedBy={{ name: 'lance!', type: 'Organization' }}
        id={`${process.env.SITE_URL}/#mais-noticias${
          page ? `?page=${page}` : ''
        }`}
        dataArray={[
          {
            name: 'Mais notícias',
            inLanguage: 'pt-BR',
            isPartOf: {
              type: 'WebSite',
              name: 'Apostas Esportivas - Lance Bet',
              url: `${process.env.SITE_URL}`,
              id: `${process.env.SITE_URL}/#website`,
            },
            url: `${process.env.SITE_URL}/mais-noticias${
              page ? `?page=${page}` : ''
            }`,
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
            name: 'Mais notícias',
            item: `${process.env.SITE_URL}/mais-noticias${
              page ? `?page=${page}` : ''
            }`,
          },
        ]}
      />
    </>
  );
}
