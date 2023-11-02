import { ReactNode } from 'react';
import Sticky from './components/Sticky';
import { useAuth } from '@/contexts/auth';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Giftbox } from '@/services/giftbox/types';

type TitleElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';

type PageProps = {
  title: string;
  pageType?: string;
  giftboxData?: Giftbox;
  titleElementType?: TitleElement;
};

type LayoutProps = {
  children: ReactNode;
  pageProps: PageProps;
};

export function Layout({ pageProps, children }: LayoutProps) {
  const { user } = useAuth();
  const isErrorPage = pageProps.pageType === 'error';
  const isLoginPage = pageProps.pageType === 'login';
  const isAccountPage = pageProps.pageType === 'account';
  const isDictionaryPage = pageProps.pageType === 'dictionary';
  const hasUserLogged = Boolean(user);

  return (
    <>
      <Header
        title={pageProps.title}
        pageType={pageProps.pageType}
        hasUserLogged={hasUserLogged}
        giftboxData={pageProps.giftboxData}
        titleElementType={pageProps.titleElementType}
      />

      <div
        className="
          max-w-[1920px] mx-auto pt-40
          desk-sm:pt-24
        "
      >
        {children}
      </div>

      {!isErrorPage && !isDictionaryPage && !isLoginPage && !isAccountPage && (
        <Sticky />
      )}

      <Footer />
    </>
  );
}
