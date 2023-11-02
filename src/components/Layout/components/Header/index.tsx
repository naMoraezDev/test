import { useRouter } from 'next/router';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { Text } from '@/components/UI/Text';
import { ROUTES } from '@/constants/routes';
import { Giftbox } from '@/services/giftbox/types';
import { EXTERNAL_LINKS } from '@/constants/common';
import { Submenu } from '@/components/temp/Submenu';
import { NewGiftbox } from './components/NewGiftbox';
import { CustomLink } from '@/components/CustomNextComponents/CustomLink';

type TitleElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';

type HeaderProps = {
  title: string;
  pageType?: string;
  giftboxData?: Giftbox;
  hasUserLogged: boolean;
  titleElementType?: TitleElement;
};

export function Header({
  title,
  pageType,
  giftboxData,
  hasUserLogged,
  titleElementType = 'h1',
}: HeaderProps) {
  const { asPath } = useRouter();
  const isLoginPage = pageType === 'login';
  const itsAlreadyOnHomePage = asPath === ROUTES.bettingReview;

  return (
    <>
      <header
        className={`
          ${pageType === 'error' ? 'bg-black2' : 'bg-primary-green'}
          h-56 shadow-sm z-[100] sticky top-0 transition-all duration-300
          tab:h-48
          mob:h-40
        `}
      >
        <div
          className="
            max-w-[1920px] px-40 mx-auto h-full flex justify-center items-center relative
            mob:justify-between
            mob:px-16
          "
        >
          <div
            className="
              flex justify-between items-center gap-12 absolute left-24 shrink-0
              mob:relative mob:left-0
              mob:gap-[19px]
              mob-sm:gap-12
            "
          >
            {!isLoginPage && <Menu hasUserLogged={hasUserLogged} />}

            {!title && (
              <CustomLink
                href={itsAlreadyOnHomePage ? '#' : ROUTES.bettingReview}
              >
                <div className="hidden mob:flex items-center">
                  <Logo noText noTitle />
                  <Text
                    color="white"
                    variant="text"
                    element={title ? 'p' : 'h1'}
                    className="desk-md:text-text-desk-lg"
                  >
                    resenha de apostas
                  </Text>
                </div>
              </CustomLink>
            )}

            {title && (
              <>
                <CustomLink
                  href={itsAlreadyOnHomePage ? '#' : ROUTES.bettingReview}
                >
                  <div className="flex items-center">
                    <Logo noText />
                    {title ? (
                      <p className="mob:hidden text-white text-text-desk-lg">
                        resenha de apostas
                      </p>
                    ) : (
                      <h1 className="mob:hidden text-white text-text-desk-lg">
                        resenha de apostas
                      </h1>
                    )}
                  </div>
                </CustomLink>

                {titleElementType === 'h1' ? (
                  <h1
                    className="
                      whitespace-nowrap text-header-title-desk-lg text-white font-workSans hidden
                      tab:text-header-title-tab
                      mob:text-header-title-mob mob:block
                      mob-sm:text-header-title-mob-sm
                    "
                  >
                    {title}
                  </h1>
                ) : (
                  <p
                    className="
                      whitespace-nowrap text-header-title-desk-lg text-white font-workSans hidden
                      tab:text-header-title-tab
                      mob:text-header-title-mob mob:block
                      mob-sm:text-header-title-mob-sm
                    "
                  >
                    {title}
                  </p>
                )}
              </>
            )}
          </div>

          {title ? (
            titleElementType === 'h1' ? (
              <h1
                className="
                  whitespace-nowrap text-header-title-desk-lg text-white font-workSans
                  tab:text-header-title-tab
                  mob:text-header-title-mob mob:hidden
                  mob-sm:text-header-title-mob-sm
                "
              >
                {title}
              </h1>
            ) : (
              <p
                className="
                  whitespace-nowrap text-header-title-desk-lg text-white font-workSans
                  tab:text-header-title-tab
                  mob:text-header-title-mob mob:hidden
                  mob-sm:text-header-title-mob-sm
                "
              >
                {title}
              </p>
            )
          ) : (
            <CustomLink
              href={itsAlreadyOnHomePage ? '#' : ROUTES.bettingReview}
            >
              <div className="flex items-center mob:hidden">
                <Logo noText noTitle />
                {title ? (
                  <p className="mob:hidden text-white text-text-desk-lg">
                    resenha de apostas
                  </p>
                ) : (
                  <h1 className="mob:hidden text-white text-text-desk-lg">
                    resenha de apostas
                  </h1>
                )}
              </div>
            </CustomLink>
          )}

          {giftboxData && (
            <div
              className="
                absolute right-40
                mob:right-[16px]
              "
            >
              <NewGiftbox giftboxData={giftboxData} />
            </div>
          )}
        </div>

        {!isLoginPage && (
          <Submenu
            menus={[
              {
                text: 'Dicas de Apostas',
                link: `/resenha-de-apostas${ROUTES.bettingTips}`,
              },
              {
                blankTarget: true,
                text: 'Lance! Betting',
                link: EXTERNAL_LINKS.lanceBetting,
              },
              {
                text: 'Acerte6',
                blankTarget: true,
                link: EXTERNAL_LINKS.acerte6,
              },
              { text: 'Odds', link: EXTERNAL_LINKS.odds },
            ]}
          />
        )}
      </header>
    </>
  );
}
