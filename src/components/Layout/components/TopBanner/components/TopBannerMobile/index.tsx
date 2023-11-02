import Image from 'next/image';
import { useEffect, useState } from 'react';
import { CustomLink } from '@/components/CustomNextComponents/CustomLink';
import closeButton from '../../../../../../assets/images/svg/close-button-icon.svg';
import acerte6Logo from '../../../../../../assets/images/svg/top-banner-acerte6-logo.svg';
import lanceBettingLogo from '../../../../../../assets/images/svg/logo-betting-top-banner.svg';

type TopBannerMobileProps = {
  pageType?: string;
  type: 'lance!betting' | 'acerte6';
};

export function TopBannerMobile({ type, pageType }: TopBannerMobileProps) {
  const [isOpen, setIsOpen] = useState(pageType !== 'error');

  useEffect(() => {
    if (pageType === 'error') {
      setIsOpen(false);
    } else setIsOpen(true);
  }, [pageType]);

  function handleCloseBanner() {
    setIsOpen(false);
  }

  function getTopBannerData() {
    switch (type) {
      case 'acerte6':
        return {
          logo: acerte6Logo,
          buttonText: 'Jogar',
          redirectLink: 'https://www.lanceacerte6.com',
          text: 'Grátis',
          subText: 'Acertou, ganhou!',
        };
      default:
        return {
          text: 'Bora jogar',
          buttonText: 'Aposte',
          logo: lanceBettingLogo,
          subText: 'Aposte e vença!',
          redirectLink: 'https://www.lancebetting.com/home',
        };
    }
  }

  return (
    <div
      className={`
        ${isOpen ? 'h-[50px]' : 'h-0 mb-0 opacity-0'} 
        hidden tab-sm:flex bg-[#F9F9FA] shadow-sm px-[28px] transition-all relative
      `}
    >
      <div className="w-full h-full flex justify-between items-center">
        <div className="flex items-center gap-[10px]">
          <Image
            priority
            alt="icone de X"
            src={closeButton}
            onClick={handleCloseBanner}
            className="
              cursor-pointer hidden focus:bg-[transparent] tap-
              tab-sm:block
            "
          />

          <CustomLink
            target="_blank"
            href={getTopBannerData().redirectLink}
            aria-label="site do lance!betting"
          >
            <Image
              priority
              src={getTopBannerData().logo}
              alt="logo betting"
              className="h-24 w-[50px]"
            />
          </CustomLink>

          <p
            className="
              text-small-text-mob-sm font-bold
              mob-sm:text-small-text-3-mob-sm mob-sm:font-bold
            "
          >
            {getTopBannerData().text} <br />
            <span className="font-normal">{getTopBannerData().subText}</span>
          </p>
        </div>

        <CustomLink href={getTopBannerData().redirectLink} target="_blank">
          <button
            className="
              h-24 px-[14px] text-[#06379D] text-button-sm whitespace-nowrap rounded-normal border border-[#06379D] transition-all duration-500
              tab-sm:px-8 tab-sm:font-normal
              mob:h-24
              hover:bg-[#06379D] hover:text-white
              active:bg-[#1079E2] active:border-[#1079E2] active:shadow-inset-button active:duration-150
            "
            type="button"
          >
            {getTopBannerData().buttonText}
          </button>
        </CustomLink>
      </div>
    </div>
  );
}
