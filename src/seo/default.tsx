import { EXTERNAL_LINKS } from '@/constants/common';
import { DefaultSeo, OrganizationJsonLd } from 'next-seo';

type GtmData = {
  name: string;
  segment: string;
  section?: string;
};

type DefaultSEOProps = {
  category?: string;
  gtmData?: GtmData;
};

export function DefaultSEO({ gtmData, category }: DefaultSEOProps) {
  return (
    <>
      <DefaultSeo
        themeColor="#031E10"
        twitter={{
          handle: '@lancebetting',
          site: '@lancebetting',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'viewport',
            content:
              'initial-scale=1, maximum-scale=5, minimum-scale=1, width=device-width, height=device-height',
          },
          {
            name: 'referrer',
            content: 'no-referrer-when-downgrade',
          },
          {
            property: 'mrf:sections',
            content: category === 'palpites' ? 'dicas' : category || '',
          },
        ]}
        openGraph={{
          type: 'website',
          title: 'Lance!Betting',
          url: process.env.SITE_URL || '',
          images: [
            {
              width: 1200,
              height: 750,
              type: 'image/jpg',
              alt: 'capa lance!Betting',
              url: 'https://lncimg.lance.com.br/cdn-cgi/image/width=1200,quality=75,format=webp/uploads/2023/07/OG_IMAGE-OPEN-GRAPH-Generico-lance-betting-1200x750-1.jpg',
            },
          ],
        }}
      />

      <OrganizationJsonLd
        type="Organization"
        name="Lance!Betting"
        legalName="LANCE!BETTING LTDA"
        sameAs={[
          EXTERNAL_LINKS.bettingKwai,
          EXTERNAL_LINKS.bettingTiktok,
          EXTERNAL_LINKS.bettingTwitter,
          EXTERNAL_LINKS.bettingYoutube,
          EXTERNAL_LINKS.bettingFacebook,
          EXTERNAL_LINKS.bettingIstagram,
        ]}
        url={process.env.SITE_URL || ''}
        id={`${process.env.SITE_URL}#webpage`}
        logo="https://lncimg.lance.com.br/cdn-cgi/image/width=1200,quality=75,format=webp/uploads/2023/07/OG_IMAGE-OPEN-GRAPH-Generico-lance-betting-1200x750-1.jpg"
      />

      {gtmData && (
        <script
          async
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `var customData = {
          page : {
            name : "${gtmData.name}",
          },
          site : {
            section : "${gtmData.section}",
            segment : "${gtmData.segment}",
            environment :"web",
          }
          };`,
          }}
        />
      )}
    </>
  );
}
