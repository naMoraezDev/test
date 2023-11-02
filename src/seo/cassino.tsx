import { EXTERNAL_LINKS } from '@/constants/common';
import { BreadcrumbJsonLd, NextSeo, WebPageJsonLd } from 'next-seo';

export function CasinoSEO() {
  return (
    <>
      <NextSeo
        description="Confira as dicas do cassino"
        canonical="https://www.lance.com.br/cassino"
        title="Cassino - Confira as dicas do cassino"
      />

      <WebPageJsonLd
        id="https://www.lance.com.br/#cassino"
        type="WebPage"
        description="Confira as dicas do cassino"
        reviewedBy={{ name: 'lance!', type: 'Organization' }}
        dataArray={[
          {
            inLanguage: 'pt-BR',
            url: 'https://www.lance.com.br/cassino',
            name: 'Cassino - Confira as dicas do cassino',
            isPartOf: {
              type: 'WebSite',
              url: 'https://www.lance.com.br/',
              id: 'https://www.lance.com.br/#website',
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
        ]}
      />
    </>
  );
}
