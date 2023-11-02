import Image from 'next/image';
import { useEffect, useState } from 'react';

import closeIcon from '../../../../../../assets/images/svg/close-button-icon.svg';
import { useRouter } from 'next/router';

export function Giftbox({ giftboxData }) {
  const { basePath, asPath } = useRouter();

  const slug = basePath.split('/')[1];
  const [openModal, setOpenModal] = useState(false);
  const [currentCampain, setCurrentCampain] = useState(
    giftboxData?.dataCampain?.length,
  );
  const [allCampainViewd, setAllCampainViewd] = useState(false);
  const [giftboxLocalStorageData, setGiftboxLocalStorageData] = useState({
    dataCampain: [],
  });
  const [orderCampain, setOrderCampain] = useState([]);

  function getLocalStorageData() {
    const localStorageData = JSON.parse(
      localStorage.getItem('@lanceGiftboxDataCampain'),
    );

    const auxData = giftboxLocalStorageData;

    if (localStorageData !== undefined && localStorageData !== null) {
      const indexAllCampainAlredyExists =
        localStorageData.dataCampain.findIndex(
          campain => campain.categorySlugPage === 'ALL',
        );
      const indexSlugCampainAlredyExists =
        localStorageData.dataCampain.findIndex(
          campain => campain.categorySlugPage === slug,
        );
      const indexSlugCampain = giftboxData?.categorySlugPage?.findIndex(
        slugCampain => slugCampain === slug,
      );
      const allCampainAlredyExists = indexAllCampainAlredyExists !== -1;
      const slugCampainAlredyExists = indexSlugCampainAlredyExists !== -1;
      const exclusiveCampain = indexSlugCampain !== -1;

      if (
        (slug === '' && allCampainAlredyExists) ||
        (slug !== '' && slugCampainAlredyExists)
      ) {
        auxData.dataCampain = localStorageData.dataCampain;
        setGiftboxLocalStorageData(auxData);
      } else if (exclusiveCampain) {
        auxData.dataCampain = localStorageData.dataCampain;

        auxData.dataCampain.push({
          categorySlugPage: slug,
          hash: giftboxData.hash,
          idCampainOrder: giftboxData.dataCampain.map(campain => campain.id),
          currentCampain,
          allCampainViewd: false,
        });
        setGiftboxLocalStorageData(auxData);
        localStorage.setItem(
          '@lanceGiftboxDataCampain',
          JSON.stringify(auxData),
        );
      } else if (allCampainAlredyExists) {
        auxData.dataCampain = localStorageData.dataCampain;
        setGiftboxLocalStorageData(auxData);
      } else {
        auxData.dataCampain = localStorageData.dataCampain;

        auxData.dataCampain.push({
          categorySlugPage: indexSlugCampain !== -1 ? slug : 'ALL',
          hash: giftboxData.hash,
          idCampainOrder: giftboxData.dataCampain.map(campain => campain.id),
          currentCampain,
          allCampainViewd: false,
        });

        setGiftboxLocalStorageData(auxData);
        localStorage.setItem(
          '@lanceGiftboxDataCampain',
          JSON.stringify(auxData),
        );
      }
    } else {
      const indexSlugCampain = giftboxData?.categorySlugPage?.findIndex(
        slugCampain => slugCampain === slug,
      );

      auxData.dataCampain.push({
        categorySlugPage: indexSlugCampain !== -1 ? slug : 'ALL',
        hash: giftboxData.hash,
        idCampainOrder: giftboxData.dataCampain.map(campain => campain.id),
        currentCampain,
        allCampainViewd: false,
      });

      setGiftboxLocalStorageData(auxData);
      localStorage.setItem('@lanceGiftboxDataCampain', JSON.stringify(auxData));
    }
  }

  function updateLocalStorageData(localStorageKey, value) {
    const auxData = giftboxLocalStorageData;
    const indexSlugCampain =
      slug === ''
        ? auxData?.dataCampain?.findIndex(
            campain => campain.categorySlugPage === 'ALL',
          )
        : auxData?.dataCampain?.findIndex(
            campain => campain.categorySlugPage === slug,
          );

    if (indexSlugCampain !== -1) {
      auxData.dataCampain[indexSlugCampain][localStorageKey] = value;
    } else {
      const indexSlugAllCampain = auxData?.dataCampain?.findIndex(
        campain => campain.categorySlugPage === 'ALL',
      );

      auxData.dataCampain[indexSlugAllCampain][localStorageKey] = value;
    }
    setGiftboxLocalStorageData(auxData);
    localStorage.setItem('@lanceGiftboxDataCampain', JSON.stringify(auxData));
  }

  function updateCurrentCampain() {
    const auxCurrentCampain = currentCampain - 1;
    if (auxCurrentCampain > 0) {
      setCurrentCampain(auxCurrentCampain);
      updateLocalStorageData('currentCampain', auxCurrentCampain);
    }

    if (auxCurrentCampain === 0) {
      updateLocalStorageData('allCampainViewd', true);
      updateLocalStorageData('currentCampain', giftboxData.dataCampain.length);
      setAllCampainViewd(true);
      setCurrentCampain(giftboxData.dataCampain.length);
    }
  }

  function populateCampainData() {
    const indexSlugCampain =
      slug === ''
        ? giftboxLocalStorageData?.dataCampain?.findIndex(
            campain => campain.categorySlugPage === 'ALL',
          )
        : giftboxLocalStorageData?.dataCampain?.findIndex(
            campain => campain.categorySlugPage === slug,
          );

    if (indexSlugCampain !== -1) {
      if (
        giftboxLocalStorageData?.dataCampain[indexSlugCampain].hash ===
        giftboxData?.hash
      ) {
        const auxOrderCampainData = [];
        giftboxLocalStorageData?.dataCampain[
          indexSlugCampain
        ].idCampainOrder.forEach(idCampain => {
          const indexCampainGiftboxData = giftboxData.dataCampain.findIndex(
            campain => campain.id === idCampain,
          );
          auxOrderCampainData.push(
            giftboxData.dataCampain[indexCampainGiftboxData],
          );
        });

        setOrderCampain(auxOrderCampainData);
        setCurrentCampain(
          giftboxLocalStorageData?.dataCampain[indexSlugCampain].currentCampain,
        );
        setAllCampainViewd(
          giftboxLocalStorageData?.dataCampain[indexSlugCampain]
            .allCampainViewd,
        );
      } else {
        const auxOrderCampainData = giftboxData.dataCampain;
        const auxGiftboxLocalStorageData = giftboxLocalStorageData;
        auxGiftboxLocalStorageData.dataCampain[indexSlugCampain].hash =
          giftboxData.hash;
        auxGiftboxLocalStorageData.dataCampain[
          indexSlugCampain
        ].currentCampain = currentCampain;
        auxGiftboxLocalStorageData.dataCampain[
          indexSlugCampain
        ].allCampainViewd = false;
        setOrderCampain(auxOrderCampainData);
        setGiftboxLocalStorageData(auxGiftboxLocalStorageData);
        localStorage.setItem(
          '@lanceGiftboxDataCampain',
          JSON.stringify(auxGiftboxLocalStorageData),
        );
      }
    } else {
      let exclusiveCampain = false;
      giftboxData.categorySlugPage.forEach(category => {
        if (category === slug) {
          exclusiveCampain = true;
        }
      });
      if (exclusiveCampain) {
        const auxOrderCampainData = giftboxData.dataCampain;
        const auxGiftboxLocalStorageData = giftboxLocalStorageData;

        auxGiftboxLocalStorageData.dataCampain.push({
          categorySlugPage: slug === '' ? 'ALL' : slug,
          hash: giftboxData.hash,
          idCampainOrder: giftboxData.dataCampain.map(campain => campain.id),
          currentCampain,
          allCampainViewd: false,
        });
        setOrderCampain(auxOrderCampainData);
        setGiftboxLocalStorageData(auxGiftboxLocalStorageData);
        localStorage.setItem(
          '@lanceGiftboxDataCampain',
          JSON.stringify(auxGiftboxLocalStorageData),
        );
      } else {
        const auxOrderCampainData = [];
        const indexCampainAllSlugs =
          giftboxLocalStorageData?.dataCampain?.findIndex(
            campain => campain.categorySlugPage === 'ALL',
          );
        giftboxLocalStorageData?.dataCampain[
          indexCampainAllSlugs
        ]?.idCampainOrder.forEach(idCampain => {
          const indexCampainGiftboxData = giftboxData.dataCampain.findIndex(
            campain => campain.id === idCampain,
          );
          auxOrderCampainData.push(
            giftboxData.dataCampain[indexCampainGiftboxData],
          );
        });
        setOrderCampain(auxOrderCampainData);
        setCurrentCampain(
          giftboxLocalStorageData?.dataCampain[indexCampainAllSlugs]
            ?.currentCampain,
        );
        setAllCampainViewd(
          giftboxLocalStorageData?.dataCampain[indexCampainAllSlugs]
            ?.allCampainViewd,
        );
      }
    }
  }

  useEffect(() => {
    getLocalStorageData();
    populateCampainData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asPath]);

  function handleToggleModal(isOpen = false, slugCampain = '') {
    if (isOpen) {
      window.dataLayer.push({
        event: `ClickedPartnershipIcon/${slugCampain}`,
        label: window.location.pathname,
      });
    }
    setOpenModal(!openModal);
  }
  if (giftboxData?.hasCampain && !!giftboxData && orderCampain[0]) {
    return (
      <>
        <div
          onClick={() => {
            handleToggleModal(false);
            updateCurrentCampain();
          }}
          className={`
          ${openModal ? 'opacity-50' : 'opacity-0 pointer-events-none'}
          w-screen h-screen fixed top-0 left-0 bg-black2 opacity-0 transition-all duration-300
        `}
        />
        {orderCampain.map((campain, index) => {
          if (currentCampain === index + 1) {
            return (
              <div
                key={campain.id}
                data-gtm-clicktype="link"
                className="cursor-pointer"
                data-gtm-event="clicked_partnership_banner"
              >
                <div onClick={() => handleToggleModal(true)}>
                  <Image
                    priority
                    src={campain.icon.url}
                    width={32}
                    height={32}
                    alt="presente"
                    className="
              tab:w-[28px] tab:h-[28px]
              mob:w-24 mob:h-24
            "
                    onClick={() => {
                      handleToggleModal(true, campain?.slugCampain);
                    }}
                  />
                </div>
                {!allCampainViewd ? (
                  <div className="absolute -top-0 right-0 w-12 h-12 rounded-[50%] flex justify-center items-center cursor-pointer text-white animate-pulse bg-red">
                    <span className="font-bold text-[10px]">
                      {giftboxLocalStorageData.currentCampain !== null &&
                        currentCampain}
                    </span>
                  </div>
                ) : (
                  ''
                )}
              </div>
            );
          }
          return '';
        })}

        {orderCampain.map((campain, index) => {
          if (currentCampain === index + 1 && openModal) {
            return (
              <div
                key={campain.id}
                className="relative z-[999] animate-card-fade"
              >
                <div className="w-[316px] h-[298px] bg-white flex justify-center items-center flex-col gap-4cursor-pointer absolute top-8 right-0">
                  <div className="flex justify-end w-full gap-4 px-8">
                    <div
                      onClick={() => {
                        handleToggleModal();
                        updateCurrentCampain();
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
                      window.dataLayer.push({
                        event: `ClickedPartnershipBanner/${campain?.slugCampain}`,
                        label: window.location.pathname,
                      })
                    }
                    data-gtm-event="clicked_partnership_banner"
                    href={campain.linkCampain}
                    style={{
                      cursor: 'pointer',
                    }}
                    rel="noreferrer"
                  >
                    <Image
                      width={300}
                      height={250}
                      src={campain.mediaData.url}
                      alt={campain.mediaData.alt}
                    />
                  </a>
                </div>
              </div>
            );
          }
          return '';
        })}
      </>
    );
  }
  return <></>;
}
