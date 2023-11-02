import NProgress from 'nprogress';
import { Router } from 'next/router';
import { GTMPageView } from '@/utils/gtm';
import { Roboto, Work_Sans } from 'next/font/google';

export const robotoFont = Roboto({
  preload: true,
  style: 'normal',
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '500', '700'],
});

export const workSansFont = Work_Sans({
  preload: true,
  style: 'normal',
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-work-sans',
  weight: ['400', '500', '700'],
});

export function progressBarSetup() {
  Router.events.on('routeChangeStart', () => NProgress.start());
  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());
}

export function runTopBannerTriggers() {
  setTimeout(() => {
    GTMPageView('acerte6Pageview');
    GTMPageView('lanceBettingPageview');
  }, 500);
}

export function destroyAdSlots() {
  // @ts-ignore
  const { googletag } = window;

  googletag.cmd.push(() => {
    googletag.destroySlots();
  });
}

export function getPagePropsData(pageProps: any) {
  const isPost = Boolean(pageProps.postSlug);
  const postSlug = pageProps.postSlug as string;
  const isCategory = Boolean(pageProps.categorySlug);

  const slugException = pageProps.slug === 'mais-cursos';

  const slug = slugException
    ? `${pageProps.slug}:${pageProps.categorySlug}`
    : pageProps.categorySlug || pageProps.slug;

  return { slug, isPost, postSlug, isCategory };
}
