import { GetStaticProps } from 'next';
import { getTerms } from '@/services/terms';
import { getGiftbox } from '@/services/giftbox';
import { REVALIDATE_TIME } from '@/constants/common';
import { DictionaryPageProps } from '@/types/dictionary';

export const getDictionaryStaticProps =
  (): GetStaticProps<DictionaryPageProps> => async () => {
    const [terms, giftboxData] = await Promise.all([
      getTerms(),
      getGiftbox({ slug: 'resenha-de-apostas' }),
    ]);

    const termsList = terms.data.items;

    return {
      props: {
        termsList,
        giftboxData,
        slug: 'dicionario',
        title: 'Dicionário',
        titleElementType: 'p',
        pageType: 'dictionary',
      },
      revalidate: REVALIDATE_TIME,
    };
  };
