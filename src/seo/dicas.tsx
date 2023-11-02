import { EXTERNAL_LINKS } from '@/constants/common';
import { BreadcrumbJsonLd, NextSeo, WebPageJsonLd } from 'next-seo';

type TipsSEOProps = {
  page: string;
};

export function TipsSEO({ page }: TipsSEOProps) {
  return (
    <>
      <NextSeo
        title="Palpites"
        description="Palpites"
        canonical={`${process.env.SITE_URL}/dicas${
          page ? `?page=${page}` : ''
        }`}
      />

      <WebPageJsonLd
        type="WebPage"
        description="Palpites"
        reviewedBy={{ name: 'lance!', type: 'Organization' }}
        id={`${process.env.SITE_URL}/#dicas${page ? `?page=${page}` : ''}`}
        dataArray={[
          {
            name: 'Palpites',
            inLanguage: 'pt-BR',
            isPartOf: {
              type: 'WebSite',
              name: 'Apostas Esportivas - Lance Bet',
              url: `${process.env.SITE_URL}`,
              id: `${process.env.SITE_URL}/#website`,
            },
            url: `${process.env.SITE_URL}/dicas${page ? `?page=${page}` : ''}`,
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
            name: 'Palpites',
            item: `${process.env.SITE_URL}/dicas${page ? `?page=${page}` : ''}`,
          },
        ]}
      />
    </>
  );
}
