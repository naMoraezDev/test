import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next';
import { ROUTES } from '@/constants/routes';
import { getGiftbox } from '@/services/giftbox';
import error from '../assets/images/svg/404.svg';
import { BLUR_DATA_URL } from '@/constants/common';
import { CustomLink } from '@/components/CustomNextComponents/CustomLink';

export default function NotFound() {
  return (
    <>
      <NextSeo title="Página não encontrada" themeColor="#181818" />

      <div
        className="
          w-full relative h-[900px]
          desk-md:h-[550px]
          desk-sm:h-[1200px]
          tab:h-[900px]
          mob:h-[550px]
        "
      >
        <Image
          priority
          src={error}
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          alt="página não encontrada"
          className="w-full h-full object-cover object-[47%_41%]"
        />

        <div
          className="
            absolute top-0 left-0 w-full h-full flex flex-col justify-between items-center py-[84px]
            desk-md:pb-[38px]
            mob:py-[84px]
          "
        >
          <p
            className="
              text-error-title-desk-lg text-[#CCF1D4] font-workSans
              desk-md:text-error-title-desk-md
              mob:text-error-title-mob
              mob-sm:text-error-title-mob-sm
           "
          >
            Página não encontrada
          </p>

          <div
            className="
              flex flex-col gap-16 items-center
              mob:gap-8
            "
          >
            <p
              className="
                text-center flex gap-x-8 gap-y-0 text-error-text-desk-lg text-white
                tab:text-error-text-tab
                mob:flex-col
                mob-sm:text-error-text-mob-sm
              "
            >
              Por favor, recarregue a página ou
            </p>

            <CustomLink href={`${ROUTES.bettingReview}`}>
              <button
                className="
                  w-[205px] h-[50px] px-[14px] bg-tertiary-yellow text-black2 font-workSans text-error-button whitespace-nowrap rounded-[16px] transition-all duration-500 shrink-0
                  hover:bg-tertiary-yellow2
                  mob:w-full mob:h-40
                "
                type="button"
              >
                Retorne à home
              </button>
            </CustomLink>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const giftboxData = await getGiftbox({ slug: 'resenha-de-apostas' });

  return {
    props: {
      giftboxData,
      slug: '404',
      title: '404',
      pageType: 'error',
    },
  };
};
