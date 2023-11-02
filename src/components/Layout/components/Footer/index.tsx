import { Copyright } from './components/Copyright';
import { EXTERNAL_LINKS } from '@/constants/common';
import { SocialLinks } from './components/SocialLinks';
import { LanceLogoSvg } from './components/LanceLogoSvg';
import { InstitutionalLinks } from './components/InstitutionalLinks';

export function Footer() {
  return (
    <footer
      className="
        bg-background-green px-40 py-24
        tab:px-[28px]
        tab-xs:px-24
      "
    >
      <div
        className="
          justify-center gap-[240px] items-center hidden
          desk-md:flex
          tab:gap-[160px]
          tab-xs:flex-col
          tab-xs:gap-y-24
        "
      >
        <InstitutionalLinks />
      </div>

      <div
        className="
          hidden w-full h-[1px] bg-[#F4F1EA] my-24
          desk-md:block
        "
      />

      <div
        className="
          max-w-[1920px] mx-auto items-center grid grid-cols-3 justify-between
          tab-xs:grid-cols-1
        "
      >
        <div
          className="
            flex gap-24 items-center
            desk-md:gap-8 desk-md:col-[1/3]
            tab-xs:col-[1] tab-xs:justify-center
          "
        >
          <a href={EXTERNAL_LINKS.lanceSite} aria-label="site do lance!">
            <LanceLogoSvg />
          </a>

          <div className="tab-xs:hidden">
            <Copyright />
          </div>
        </div>

        <div
          className="
            hidden mt-16 mb-32
            tab-xs:block
          "
        >
          <Copyright />
        </div>

        <div
          className="
            flex justify-between items-center
            desk-md:hidden
          "
        >
          <div className="w-[1px] h-32 bg-[#F4F1EA]" />

          <InstitutionalLinks />

          <div className="w-[1px] h-32 bg-[#F4F1EA]" />
        </div>

        <div className="flex items-center w-full justify-between">
          <div className="tab-xs:hidden" />

          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
