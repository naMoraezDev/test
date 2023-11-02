import { EXTERNAL_LINKS } from '@/constants/common';
import { BreadcrumbJsonLd, NextSeo, WebPageJsonLd } from 'next-seo';

export function BettingTipsSEO() {
  return (
    <>
      <NextSeo
        description="Aprenda tudo sobre o universo de apostas
        esportivas, veja nossos cursos e tutorais e fique por
        dentro de diversas dicas para apostar cada vez
        melhor"
        canonical={`${process.env.SITE_URL}/dicas-de-apostas`}
        title="Dicas de Apostas - Aprenda tudo na área educacional Lance Betting"
      />

      <WebPageJsonLd
        type="WebPage"
        description="Aprenda tudo sobre o universo de apostas
        esportivas, veja nossos cursos e tutorais e fique por
        dentro de diversas dicas para apostar cada vez
        melhor"
        reviewedBy={{ name: 'lance!', type: 'Organization' }}
        id={`${process.env.SITE_URL}/#dicas-de-apostas`}
        dataArray={[
          {
            name: 'Dicas de Apostas - Aprenda tudo na área educacional Lance Betting',
            inLanguage: 'pt-BR',
            url: `${process.env.SITE_URL}/dicas-de-apostas`,
            isPartOf: {
              type: 'WebSite',
              name: 'Apostas Esportivas - Lance Bet',
              url: `${process.env.SITE_URL}`,
              id: `${process.env.SITE_URL}/#website`,
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
            name: 'Resenha de Apostas',
            item: process.env.SITE_URL,
          },
          {
            position: 3,
            name: 'Dicas de Apostas',
            item: `${process.env.SITE_URL}/dicas-de-apostas`,
          },
        ]}
      />
    </>
  );
}
