import { EXTERNAL_LINKS } from '@/constants/common';
import { NextSeo, WebPageJsonLd, BreadcrumbJsonLd } from 'next-seo';

export function HomeSEO() {
  return (
    <>
      <NextSeo
        title="Apostas Esportivas - Lance Bet"
        canonical={process.env.SITE_URL}
        description="De maneira fácil e responsável, aqui você confere as melhores dicas e palpites,
        estatísticas e odds do mundo das apostas esportivas"
        additionalMetaTags={[{
          httpEquiv: 'refresh',
          content: '300',
        }]}
      />

      <WebPageJsonLd
        type="WebPage"
        id={`${process.env.SITE_URL}/#webpage`}
        reviewedBy={{ name: 'lance!', type: 'Organization' }}
        dataArray={[
          {
            inLanguage: 'pt-BR',
            name: 'Apostas Esportivas - Lance Bet',
            url: `${process.env.SITE_URL}`,
            isPartOf: {
              type: 'WebSite',
              name: 'Apostas Esportivas - Lance Bet',
              url: `${process.env.SITE_URL}`,
              id: `${process.env.SITE_URL}/#website`,
            },
          },
        ]}
        description="De maneira fácil e responsável, aqui você confere as melhores dicas e palpites,
        estatísticas e odds do mundo das apostas esportivas"
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
        ]}
      />
    </>
  );
}
