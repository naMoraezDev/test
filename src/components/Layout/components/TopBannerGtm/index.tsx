import { Router } from 'next/router';
import { Dispatch, SetStateAction } from 'react';

type TopBannerGtmProps = {
  setReserveSpace: Dispatch<SetStateAction<boolean>>;
};

export default function TopBannerGtm({ setReserveSpace }: TopBannerGtmProps) {
  function handleOnMouseOver() {
    setReserveSpace(false);
  }

  Router.events.on('routeChangeStart', () => setReserveSpace(true));

  return <div id="TopBannerHeaderGtm" onMouseOver={handleOnMouseOver} />;
}
