import Image from 'next/image';
import { Fragment } from 'react';
import { Giftbox } from '@/services/giftbox/types';

type IconButtonsProps = {
  giftboxData: Giftbox;
  currentIndex: number;
  handleOpen: () => void;
  allCampaignsWereViewed: boolean;
};

export function IconButtons({
  handleOpen,
  giftboxData,
  currentIndex,
  allCampaignsWereViewed,
}: IconButtonsProps) {
  return (
    <div
      className="
        relative w-32 h-32 cursor-pointer
        tab:w-[20px] tab:h-[20px]
      "
    >
      {giftboxData.dataCampaign.map((campaign, index) => (
        <Fragment key={campaign.id}>
          <Image
            width={32}
            height={32}
            onClick={() => {
              handleOpen();
            }}
            src={campaign.icon.url}
            alt={campaign.icon.alt}
            className={`
              ${index === currentIndex ? 'opacity-100' : 'opacity-0'}
              absolute top-0 transition-all duration-700
            `}
          />

          {index === currentIndex && !allCampaignsWereViewed && (
            <div className="w-12 h-12 bg-red rounded-[100%] flex justify-center items-center text-white font-bold text-[10px] absolute top-0 right-0 animate-pulse">
              {giftboxData.dataCampaign.length - currentIndex}
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}
