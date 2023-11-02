import { EXTERNAL_LINKS } from '@/constants/common';
import { BreadcrumbJsonLd, NextSeo, WebPageJsonLd } from 'next-seo';

type CassinoMoreNewsSEOProps = {
  page: string;
};

export function CassinoMoreNewsSEO({ page }: CassinoMoreNewsSEOProps) {
  return (
    <>
      <NextSeo
        title="Cassino - Mais notícias"
        description="Cassino - Mais notícias"
        canonical={`https://www.lance.com.br/cassino/mais-noticias${
          page ? `?page=${page}` : ''
        }`}
      />

      <WebPageJsonLd
        type="WebPage"
        description="Mais notícias"
        reviewedBy={{ name: 'lance!', type: 'Organization' }}
        id={`https://www.lance.com.br/cassino/#mais-noticias${
          page ? `?page=${page}` : ''
        }`}
        dataArray={[
          {
            inLanguage: 'pt-BR',
            name: 'Mais notícias',
            url: `https://www.lance.com.br/cassino/mais-noticias${
              page ? `?page=${page}` : ''
            }`,
            isPartOf: {
              type: 'WebSite',
              url: 'https://www.lance.com.br/',
              id: 'https://www.lance.com.br//#website',
              name: 'LANCE! | Futebol, Vôlei, F-1, MMA e todos os esportes',
            },
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
            name: 'Cassino',
            item: 'https://www.lance.com.br/cassino',
          },
          {
            position: 3,
            name: 'Cassino - Mais notícias',
            item: `https://www.lance.com.br/cassino/mais-noticias${
              page ? `?page=${page}` : ''
            }`,
          },
        ]}
      />
    </>
  );
}
