import Image from 'next/image';
import { Text } from '../../../UI/Text';
import { useEffect, useState } from 'react';
import { Divider } from '@/components/UI/Divider';
import { TopBannerMobile } from './components/TopBannerMobile';
import { CustomLink } from '@/components/CustomNextComponents/CustomLink';
import closeButton from '../../../../assets/images/svg/close-button-icon.svg';
import acerte6Logo from '../../../../assets/images/svg/top-banner-acerte6-logo.svg';
import lanceBettingLogo from '../../../../assets/images/svg/logo-betting-top-banner.svg';

type TopBannerProps = {
  pageType?: string;
  type: 'lance!betting' | 'acerte6';
};

export function TopBanner({
  pageType,
  type = 'lance!betting',
}: TopBannerProps) {
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
          buttonText: 'Jogue agora',
          redirectLink: 'https://www.lanceacerte6.com',
          text: 'Acerte 6 placares e ganhe um milhão de reais. É de graça!',
        };
      default:
        return {
          logo: lanceBettingLogo,
          buttonText: 'Aposte agora',
          redirectLink: 'https://www.lancebetting.com/home',
          text: 'Bônus especial! Abra sua conta na Lance! Betting e ganhe R$50 para apostar.',
        };
    }
  }

  return (
    <>
      <div
        className={`
          ${
            isOpen
              ? 'h-[46px] mob:h-[50px] py-16 px-[78px] tab:px-[69px]'
              : 'h-0 mb-0 opacity-0'
          }
          z-50 flex justify-center items-center gap-40 bg-[#F9F9FA] shadow-sm relative transition-all
          tab-sm:w-screen tab-sm:justify-between tab-sm:px-[28px] tab-sm:gap-8 tab-sm:hidden
          mob-sm:min-h-40
        `}
      >
        <CustomLink
          target="_blank"
          aria-label="site do lance!betting"
          href={getTopBannerData().redirectLink}
        >
          <Image
            priority
            width={70}
            height={24}
            src={getTopBannerData().logo}
            className="
              w-auto h-auto
              tab-sm:w-[50px]
            "
            alt="logo betting"
          />
        </CustomLink>

        <div className="tab-sm:hidden">
          <Divider />
        </div>

        <Text
          variant="text-sm-2"
          className="
            text-gray2 text-center mr-32
            desk-sm:mr-0
            tab-sm:hidden
          "
        >
          {getTopBannerData().text}
        </Text>

        <CustomLink href={getTopBannerData().redirectLink} target="_blank">
          <button
            className="
              h-32 px-[14px] text-[#06379D] text-button-sm whitespace-nowrap rounded-normal border border-[#06379D] transition-all duration-500
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

        <Image
          priority
          alt="icone de X"
          src={closeButton}
          onClick={handleCloseBanner}
          className="
            cursor-pointer focus:bg-[transparent]
          "
        />
      </div>

      <TopBannerMobile type={type} pageType={pageType} />
    </>
  );
}
