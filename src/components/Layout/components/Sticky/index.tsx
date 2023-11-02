/* eslint-disable @next/next/inline-script-id */
/* eslint-disable react/no-danger */
import { useState, useEffect } from 'react';
import Image from 'next/image';
import arrowDownAds from '../../../../assets/images/svg/arrow-down.svg';
import { Rodapefixo } from '@/components/GoogleAds/AdsTemplates/Rodapefixo';
import { AdsPlaceholder } from '@/components/GoogleAds/AdsPlaceholder';

export default function Sticky() {
  const [isAppear, setIsAppear] = useState(true);
  const [shouldRender, setShouldRender] = useState(false);
  useEffect(() => {
    setShouldRender(true);
  }, []);
  if (!shouldRender) {
    return null;
  }

  function closeAdSlot() {
    setIsAppear(!isAppear);
  }

  return (
    <div
      className="md:max-h-[6.25rem] min-h-[7.5rem] w-full fixed left-0 right-0 bottom-0 z-[999] transition-transform duration-700 ease-in-out flex justify-center items-center mx-auto bg-white shadow-[0px_0px_10px_rgba(0,0,0,0.25)]"
      style={{
        transform: isAppear ? 'translate(0,0px)' : 'translate(0px,120px)',
      }}
    >
      <div className="flex justify-center items-center">
        <div
          className="
            w-[970px] h-[90px] relative flex justify-center items-center animate-adsSkeleton overflow-hidden
            tab:w-[300px] mob:h-[100px]
          "
        >
          <Rodapefixo />

          <AdsPlaceholder />
        </div>
      </div>

      <button
        className="flex justify-center items-center cursor-pointer h-[1.25rem] w-[2.5rem] bg-white shadow-[0px_-5px_10px_rgba(0,0,0,0.25)] rounded-t-sm absolute top-[calc(-1.25rem)] left-0 border-none"
        onClick={closeAdSlot}
        type="button"
      >
        <Image
          priority
          className="transition-transform ease-in-out duration-700"
          src={arrowDownAds}
          style={{
            transform: isAppear ? 'rotate(0)' : 'rotate(180deg)',
          }}
          width={25}
          height={25}
          alt={
            isAppear
              ? 'seta para fechar a publicidade'
              : 'seta para abrir a publicidade'
          }
        />
      </button>
    </div>
  );
}
