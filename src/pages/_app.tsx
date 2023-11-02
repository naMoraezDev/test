/* eslint-disable react-hooks/exhaustive-deps */
import {
  robotoFont,
  workSansFont,
  destroyAdSlots,
  getPagePropsData,
  progressBarSetup,
  runTopBannerTriggers,
} from '@/globals/appConfigs';
import '@/styles/globals.css';
import '../../public/nprogress.css';
import { getGtmData } from '@/utils/gtm';
import type { AppProps } from 'next/app';
import { DefaultSEO } from '@/seo/default';
import { Layout } from '@/components/Layout';
import { AuthProvider } from '@/contexts/auth';
import { useCallback, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import { AlertProvider } from '@/contexts/alert';
import { runInlineAdsScripts } from '@/components/GoogleAds/AdsScripts';

progressBarSetup();

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { pageType } = pageProps;
  const { isCategory, isPost, postSlug, slug } = getPagePropsData(pageProps);

  const gtmData = slug && getGtmData({ slug, isCategory, isPost, postSlug });

  useEffect(() => {
    setTimeout(() => {
      runInlineAdsScripts(pageType);
    }, 200);
    if (router.pathname !== '/404') {
      runTopBannerTriggers();
    }
  }, []);

  const setTransitionComplete = useCallback(() => {
    destroyAdSlots();
    setTimeout(() => {
      runInlineAdsScripts(pageType);
    }, 200);

    if (router.pathname !== '/404') {
      runTopBannerTriggers();
    }
  }, [pageType, router.pathname]);

  useEffect(() => {
    Router.events.on('routeChangeComplete', setTransitionComplete);

    return () => {
      Router.events.off('routeChangeComplete', setTransitionComplete);
    };
  }, [setTransitionComplete]);

  return (
    <AuthProvider>
      <DefaultSEO gtmData={gtmData} category={slug} />

      <main
        className={`${robotoFont.variable} ${workSansFont.variable} font-roboto bg-background1 text-black`}
      >
        <AlertProvider>
          <Layout pageProps={pageProps}>
            <Component {...pageProps} />
          </Layout>
        </AlertProvider>
      </main>
    </AuthProvider>
  );
}
