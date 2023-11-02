import { Text } from '@/components/UI/Text';
import useMediaQuery from '@/contexts/device';
import { useEffect, useRef, useState } from 'react';
import { Group } from '@/services/terms/types/termList';
import { AccordionSEO } from '@/components/temp/AccordionSEO';
import { ContentIndex } from '@/components/Pages/Post/ContentIndex';
import { ContentIndexLink } from '@/components/Pages/Post/ContentIndexLink';

type TermsListProps = {
  content: Group[];
};

export function TermsList({ content }: TermsListProps) {
  const ref = useRef<HTMLDivElement[]>([]);
  const [scrollTop, setScrollTop] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const isMobile = useMediaQuery(430);
  const isTablet = useMediaQuery(920);
  const isSmallDesk = useMediaQuery(1024);
  const isSmallMobile = useMediaQuery(380);
  const isMediumDesk = useMediaQuery(1366);
  const isSmallTablet = useMediaQuery(550);

  useEffect(() => {
    function handleScroll() {
      setScrollTop(window.scrollY);

      content.forEach((_contentRef, index) => {
        if (
          ref.current[index]?.offsetTop <=
          scrollTop +
            (isSmallMobile
              ? content[index].items.length > 1
                ? 300
                : 400
              : isMobile
              ? content[index].items.length > 1
                ? 400
                : 500
              : isSmallTablet
              ? 500
              : isTablet
              ? 600
              : isSmallDesk
              ? 300
              : isMediumDesk
              ? 400
              : content[index].items.length > 1
              ? 500
              : 600)
        ) {
          setActiveIndex(index);
        }
      });
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [
    content,
    isMobile,
    isTablet,
    scrollTop,
    isSmallDesk,
    isMediumDesk,
    isSmallMobile,
    isSmallTablet,
  ]);

  useEffect(() => {
    function handleScroll() {
      setScrollTop(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollTop]);

  return (
    <>
      <div
        className="
          w-full sticky top-[83px] z-50 pb-8 hidden transition-all duration-300
          tab-xs:block
        "
      >
        <div className="rounded-normal bg-white h-56 px-16 flex gap-12 items-center overflow-scroll scrollbar-hide">
          {content.map((group, index) => (
            <div
              key={index}
              className={`
                border-b-2
                ${
                  index === activeIndex
                    ? 'border-primary-green-light'
                    : 'border-[transparent]'
                } 
              `}
              onClick={() => {
                ref.current[index].scrollIntoView({
                  behavior: 'smooth',
                  block: 'center',
                });
              }}
            >
              <p
                className={`
                  text-heading-2-mob px-8 
                  ${group.items?.length ? 'text-primary-green' : 'text-gray2'}
                `}
              >
                {group.letter}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="
          w-full flex gap-40
          tab:gap-32
          mob-sm:gap-16 mob:gap-24 mob:mt-16
        "
      >
        {content.length > 0 ? (
          <>
            <div className="w-full">
              {content.map((data, index) => (
                <div
                  ref={e => (e ? (ref.current[index] = e) : null)}
                  className="
                    flex gap-40
                    tab:gap-24
                    mob-sm:gap-16
                  "
                  key={`${data.letter}-${index}`}
                >
                  <aside
                    className={`
                      ${index === 0 && 'rounded-t-[8px]'}
                      ${index === content.length - 1 && 'rounded-b-[8px]'}
                      shrink-0 w-[131px] py-40 bg-white text-primary-green text-center border-[1px] border-white
                      desk-sm:py-[20px]
                      tab:w-[64px] tab:py-16 tab:text-center
                      mob:py-8
                      mob-sm:p-8
                    `}
                  >
                    <Text variant="h1">{data.letter}</Text>
                  </aside>

                  <div
                    className={`
                      ${index === 0 && 'rounded-t-[8px]'}
                      ${index === content.length - 1 && 'rounded-b-[8px]'}
                      w-full bg-white p-24 border-[1px] border-white
                      desk-sm:p-12
                      mob:px-16 mob:pt-4
                      mob-sm:px-8 mob-sm:pt-4
                    `}
                  >
                    {data.items.map((item, i) => (
                      <div className="w-full" key={i}>
                        <AccordionSEO
                          color="#007A18"
                          title={item.name}
                          content={item.description}
                          bgColor="rgba(0, 122, 24, 0.22)"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="
                block w-[20%]
                desk-md:w-[30%]
                tab:hidden
              "
            >
              <div className="sticky top-[30px] bg-white rounded-[8px]">
                <ContentIndex>
                  {content.map((data, index) => (
                    <ContentIndexLink
                      key={index}
                      active={index === activeIndex}
                      onClick={() => {
                        ref.current[index].scrollIntoView({
                          block: 'center',
                          behavior: 'smooth',
                        });
                      }}
                    >
                      {data.letter} ({data.items.length} itens)
                    </ContentIndexLink>
                  ))}
                </ContentIndex>
              </div>
            </div>
          </>
        ) : (
          <Text className="w-full text-center font-normal" variant="heading">
            Nenhum resultado foi encontrado.
          </Text>
        )}
      </div>
    </>
  );
}
