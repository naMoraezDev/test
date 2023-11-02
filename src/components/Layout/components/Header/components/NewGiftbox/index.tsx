import { giftboxMock } from './mock';
import { Modal } from './components/Modal';
import { Giftbox } from '@/services/giftbox/types';
import { IconButtons } from './components/IconButtons';
import { useCallback, useEffect, useState } from 'react';

type LocalStorageState = {
  currentIndex: number;
  allCampaignsWereViewed: boolean;
};

type NewGiftboxProps = {
  giftboxData: Giftbox;
};

export function NewGiftbox({ giftboxData = giftboxMock }: NewGiftboxProps) {
  const { hash } = giftboxData;
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shouldRender, setShouldRender] = useState(false);
  const [allCampaignsWereViewed, setAllCampaignsWereViewed] = useState(false);
  const [localStorageState, setLocalStorageState] = useState<LocalStorageState>(
    {} as LocalStorageState,
  );

  const getLocalStorageData = useCallback(() => {
    const currentlocalStorageData = localStorage.getItem(`@Lance-giftbox-${hash}`);

    if (currentlocalStorageData) {
      setLocalStorageState(JSON.parse(currentlocalStorageData));
      setShouldRender(true);

      return;
    }

    setCurrentIndex(0);

    const localData = {
      currentIndex,
      allCampaignsWereViewed: false,
    };

    localStorage.setItem(`@Lance-giftbox-${hash}`, JSON.stringify(localData));

    setLocalStorageState(localData);
    setShouldRender(true);
  }, [currentIndex, hash]);

  useEffect(() => {
    setCurrentIndex(localStorageState.currentIndex);
    setAllCampaignsWereViewed(localStorageState.allCampaignsWereViewed);
  }, [localStorageState]);

  useEffect(() => {
    getLocalStorageData();
  }, [getLocalStorageData]);

  function goToNextIndex() {
    const isLastIndex = currentIndex === giftboxData.dataCampaign.length - 1;

    if (isLastIndex) {
      setAllCampaignsWereViewed(true);
      setCurrentIndex(0);

      const data = {
        currentIndex: 0,
        allCampaignsWereViewed: true,
      };

      localStorage.setItem(`@Lance-giftbox-${hash}`, JSON.stringify(data));

      return;
    }

    const data = {
      currentIndex: currentIndex + 1,
      allCampaignsWereViewed,
    };

    localStorage.setItem(`@Lance-giftbox-${hash}`, JSON.stringify(data));

    setCurrentIndex(currentIndex + 1);
  }

  function handleOpen(shouldGotoNextIndex?: boolean) {
    setOpen(!open);

    if (shouldGotoNextIndex) {
      goToNextIndex();
    }
  }

  if (shouldRender) {
    return (
      <>
        <IconButtons
          handleOpen={handleOpen}
          giftboxData={giftboxData}
          currentIndex={currentIndex}
          allCampaignsWereViewed={allCampaignsWereViewed}
        />

        <Modal
          open={open}
          handleOpen={handleOpen}
          giftboxData={giftboxData}
          currentIndex={currentIndex}
        />
      </>
    );
  }
}
