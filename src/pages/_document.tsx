import Script from 'next/script';
import { datadogScript } from '@/scripts/datadog';
import { Html, Head, Main, NextScript } from 'next/document';
import { tagmanagerIframe, tagmanagerScript } from '@/scripts/tagmanager';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link
          rel="preconnect"
          href="https://lancebet-com-uat.eyasgaming.net/home"
        />
        <link
          rel="preconnect"
          href="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        />
        <link rel="preconnect" href="https://graphql.kambicdn.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://graphql.cts.kambicdn.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.lancebetting.com/home" />
        <link rel="preconnect" href="https://www.googletagservices.com" />
        <link rel="preconnect" href="https://d335luupugsy2.cloudfront.net" />
        <link rel="icon" href="/resenha-de-apostas/favicon.ico?v=2" sizes="any" />

        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />

        <Script
          async
          strategy="lazyOnload"
          src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        />
        <Script
          async
          id="google-tag-manager"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: tagmanagerScript }}
        />
        <script
          async
          src={process.env.EMBED_SRC}
          data-eyas-config={process.env.EMBED_CONFIG}
        />
        <script
          async
          type="text/javascript"
          src="/resenha-de-apostas/odds.js"
        />
        <Script
          async
          id="datadog-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: datadogScript }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <noscript dangerouslySetInnerHTML={{ __html: tagmanagerIframe }} />
      </body>
    </Html>
  );
}
