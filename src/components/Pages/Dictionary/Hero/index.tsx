import Image from 'next/image';
import { useState } from 'react';
import { Text } from '@/components/UI/Text';
import { BLUR_DATA_URL } from '@/constants/common';
import { TopLineText } from '@/components/UI/TopLineText';
import { InputSearch } from '@/components/Form/InputSearch';
import headerImage from '../../../../assets/images/png/glossary-hero.png';

type DictionaryHeroProps = {
  // eslint-disable-next-line no-unused-vars
  onSearch: (term: string) => void;
};

export function DictionaryHero({ onSearch }: DictionaryHeroProps) {
  const [searchTerm, setSearchTerm] = useState('');

  function handleOnChange(searchedTerm: string) {
    setSearchTerm(searchedTerm);
    onSearch(searchedTerm);
  }

  return (
    <>
      <div
        className="
          w-full h-[480px] shadow-normal bg-white flex justify-end relative overflow-hidden
          desk-aux:h-[550px]
          desk-md:h-[480px]
          desk-sm:h-[400px]
          tab:h-[240px]
        "
      >
        <Image
          priority
          width={1921}
          height={480}
          src={headerImage}
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          className="object-cover object-right-top z-0 min-h-[100%]"
          alt="imagem de um homem de camiseta amarela segurando um celular e comemorando"
        />

        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: 'linear-gradient(to top, #031E10, rgba(0, 0, 0, 0))',
          }}
        />

        <div
          className="
            absolute w-full top-0 left-0 h-full px-8 py-40 flex flex-col justify-between z-10
            tab:px-[28px] tab:py-16
            mob:px-24 mob-sm:py-24
          "
        >
          <div
            className="
              p-40 justify-between gap-[45px]
              desk-sm:p-[18px] desk-sm:gap-[21px]
              tab:gap-24 tab:p-24 tab:px-0
            "
          >
            <TopLineText
              element="h1"
              color="white"
              className="
                tab:!text-[32px] tab:max-w-[80%] tab-sm:max-w-[90%]
                mob-sm:!text-[20px]
              "
            >
              Dicionário das apostas esportivas
            </TopLineText>
            <Text
              variant="subtitle"
              className="
                mt-64 text-gray5 w-[60%]
                tab:w-full tab:mt-24 tab:!text-[16px]
                mob-sm:!text-[14px]
              "
            >
              O resenha de apostas apresenta os principais termos para você
              entender e ficar atualizado sobre tudo o que é discutido no
              universo das apostas!
            </Text>
          </div>
          <div
            className="
              w-[580px] text-center mx-auto block
              tab:hidden
            "
          >
            <InputSearch
              name="search-term"
              placeholder="Faça sua pesquisa aqui"
              onChange={event => handleOnChange(event.target.value)}
              onSearch={() => onSearch(searchTerm)}
            />
          </div>
        </div>
      </div>

      <div
        className="
          mt-24 text-center mx-[20px] hidden
          tab:block
        "
      >
        <InputSearch
          name="search-term"
          placeholder="Faça sua pesquisa aqui"
          onChange={event => handleOnChange(event.target.value)}
          onSearch={() => onSearch(searchTerm)}
        />
      </div>
    </>
  );
}
