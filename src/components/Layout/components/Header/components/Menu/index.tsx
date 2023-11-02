import Image from 'next/image';
import { useRouter } from 'next/router';
import { ROUTES } from '@/constants/routes';
import { EXTERNAL_LINKS } from '@/constants/common';
import { useEffect, useRef, useState } from 'react';
import { LanceLogoSvg } from './components/LanceLogoSvg';
import { MenuHamburguerSvg } from './components/MenuHamburguerSvg';
import { BettingReviewLogoSvg } from './components/BettingReviewLogoSvg';
import { CustomLink } from '@/components/CustomNextComponents/CustomLink';
import closeIcon from '../../../../../../assets/images/svg/close-icon-menu.svg';

type MenuProps = {
  hasUserLogged: boolean;
};

export function Menu({ hasUserLogged }: MenuProps) {
  const ref = useRef<any>(null);
  const [isOpen, setIsOpen] = useState(false);

  const { asPath } = useRouter();
  const itsAlreadyOnHomePage = asPath === ROUTES.bettingReview;
  const itsAlreadyOnDictionaryPage = asPath === ROUTES.dictionary;
  const itsAlreadyOnBettingTipsPage = asPath === ROUTES.bettingTips;

  function handleOpen() {
    setIsOpen(!isOpen);
  }

  function handleClickOutside(e: MouseEvent) {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
  }, []);

  return (
    <>
      <MenuHamburguerSvg setIsOpen={setIsOpen} />

      <div
        className={`
          ${isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'}
          w-screen h-screen fixed top-0 left-0 bg-black2 z-[100] opacity-0 transition-all duration-300
        `}
      />

      <div
        ref={ref}
        className={`
          ${isOpen ? 'w-[270px]' : 'w-0'}
          h-full bg-background fixed left-0 top-0 z-[100] transition-all duration-300 overflow-y-auto
        `}
      >
        <div className="w-full h-80 bg-white flex items-center justify-between px-[30px] sticky top-0">
          <CustomLink
            onClick={() => handleOpen()}
            href={itsAlreadyOnHomePage ? '#' : ROUTES.bettingReview}
          >
            <BettingReviewLogoSvg />
          </CustomLink>

          <Image
            src={closeIcon}
            alt="icone de X"
            className="cursor-pointer"
            onClick={() => handleOpen()}
          />
        </div>

        <div className="p-24 flex flex-col gap-40 whitespace-nowrap">
          <a aria-label="site do lance!" href={EXTERNAL_LINKS.lanceSite}>
            <LanceLogoSvg />
          </a>

          <div className="w-full h-[1px] bg-gray4" />

          {!hasUserLogged && (
            <CustomLink
              href="/login"
              onClick={() => handleOpen()}
              className="text-menu font-workSans hover:font-bold hover:text-primary-green-dark"
            >
              Login
            </CustomLink>
          )}

          {hasUserLogged && (
            <CustomLink
              href="/conta"
              onClick={() => handleOpen()}
              className="text-menu font-workSans hover:font-bold hover:text-primary-green-dark"
            >
              Conta
            </CustomLink>
          )}

          <CustomLink
            onClick={() => handleOpen()}
            href={itsAlreadyOnHomePage ? '#' : ROUTES.bettingReview}
          >
            <p className="text-menu font-workSans hover:font-bold hover:text-primary-green-dark">
              Home
            </p>
          </CustomLink>

          <CustomLink
            onClick={() => handleOpen()}
            href={itsAlreadyOnBettingTipsPage ? '#' : ROUTES.bettingTips}
          >
            <p className="text-menu font-workSans hover:font-bold hover:text-primary-green-dark">
              Dicas de Apostas
            </p>
          </CustomLink>

          <CustomLink
            onClick={() => handleOpen()}
            href={itsAlreadyOnDictionaryPage ? '#' : ROUTES.dictionary}
          >
            <p className="text-menu font-workSans hover:font-bold hover:text-primary-green-dark">
              Dicionário
            </p>
          </CustomLink>

          <a href={EXTERNAL_LINKS.odds}>
            <p className="text-menu font-workSans hover:font-bold hover:text-primary-green-dark">
              Odds
            </p>
          </a>

          <a href={EXTERNAL_LINKS.lanceBetting}>
            <p className="text-menu font-workSans hover:font-bold hover:text-primary-green-dark">
              Lance! Betting
            </p>
          </a>

          <a href={EXTERNAL_LINKS.acerte6}>
            <p className="text-menu font-workSans hover:font-bold hover:text-primary-green-dark">
              Acerte6
            </p>
          </a>

          <div className="w-full h-[1px] bg-gray4" />

          <a href={EXTERNAL_LINKS.advertise}>
            <p className="text-menu font-workSans hover:font-bold hover:text-primary-green-dark">
              Anuncie
            </p>
          </a>

          <a href={EXTERNAL_LINKS.workWithUs}>
            <p className="text-menu font-workSans hover:font-bold hover:text-primary-green-dark">
              Trabalhe Conosco
            </p>
          </a>
        </div>
      </div>
    </>
  );
}
