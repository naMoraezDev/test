import { EXTERNAL_LINKS } from '@/constants/common';
import { BreadcrumbJsonLd, NextSeo, WebPageJsonLd } from 'next-seo';

export function DictionarySEO() {
  return (
    <>
      <NextSeo
        title="Dicionário das apostas esportivas"
        canonical={`${process.env.SITE_URL}/dicionario`}
        description="O Lance! Bet apresenta os principais termos para você entender e
        ficar atualizado sobre tudo o que é discutido no universo das apostas!"
      />

      <WebPageJsonLd
        type="WebPage"
        reviewedBy={{ name: 'lance!', type: 'Organization' }}
        id={`${process.env.SITE_URL}/#dicionario`}
        dataArray={[
          {
            name: 'Dicionário de apostas esportivas',
            inLanguage: 'pt-BR',
            isPartOf: {
              type: 'WebSite',
              name: 'Apostas Esportivas - Lance Bet',
              url: `${process.env.SITE_URL}`,
              id: `${process.env.SITE_URL}/#website`,
            },
            url: `${process.env.SITE_URL}/dicionario`,
          },
        ]}
        description="O Lance! Bet apresenta os principais termos para você entender e
        ficar atualizado sobre tudo o que é discutido no universo das apostas!"
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
            name: 'Dicionário de apostas esportivas',
            item: `${process.env.SITE_URL}/dicionario`,
          },
        ]}
      />
    </>
  );
}
