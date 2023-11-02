/* eslint-disable no-unused-vars */
import Image from 'next/image';
import { Giftbox } from '@/services/giftbox/types';
import { BLUR_DATA_URL } from '@/constants/common';
import closeIcon from '../../../../../../../../assets/images/svg/close-button-icon.svg';

type ModalProps = {
  open: boolean;
  currentIndex: number;
  giftboxData: Giftbox;
  handleOpen: (open: boolean) => void;
};

export function Modal({
  open,
  handleOpen,
  giftboxData,
  currentIndex,
}: ModalProps) {
  return (
    <>
      {open && (
        <div className="relative z-[999] animate-card-fade">
          <div className="w-[316px] h-[298px] bg-white flex justify-center items-center flex-col gap-4cursor-pointer absolute top-8 right-0">
            <div className="flex justify-end w-full gap-4 px-8">
              <div
                onClick={() => {
                  handleOpen(true);
                }}
                className="cursor-pointer flex gap-4"
              >
                <span>Fechar</span>

                <Image src={closeIcon} alt="botão de fechar" />
              </div>
            </div>

            <a
              target="_blank"
              data-gtm-clicktype="link"
              className="cursor-pointer"
              onClick={() =>
                // @ts-ignore
                window.dataLayer.push({
                  event: `ClickedPartnershipBanner/${giftboxData.dataCampaign[currentIndex].slugCampaign}`,
                  label: window.location.pathname,
                })
              }
              data-gtm-event="clicked_partnership_banner"
              href={giftboxData.dataCampaign[currentIndex].linkCampaign}
              style={{
                cursor: 'pointer',
              }}
              rel="noreferrer"
            >
              <div className="w-[300px] h-[250px] relative overflow-hidden">
                <Image
                  fill
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                  src={
                    giftboxData.dataCampaign[currentIndex].mediaData.url
                      ? giftboxData.dataCampaign[currentIndex].mediaData.url
                      : BLUR_DATA_URL
                  }
                  alt={giftboxData.dataCampaign[currentIndex].mediaData.alt}
                />
              </div>
            </a>
          </div>
        </div>
      )}

      <div
        onClick={() => {
          handleOpen(true);
        }}
        className={`
            ${open ? 'opacity-50' : 'opacity-0 pointer-events-none'}
            w-screen h-screen fixed top-0 left-0 bg-black2 opacity-0 transition-all duration-300 z-10
          `}
      />
    </>
  );
}
