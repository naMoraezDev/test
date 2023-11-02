import { useState } from 'react';
import { GetStaticProps } from 'next';
import { DictionarySEO } from '@/seo/dicionario';
import { DictionaryPageProps } from '@/types/dictionary';
import { Container } from '@/components/Global/Container';
import { getDictionaryStaticProps } from '@/SSG/dictionary';
import { Breadcrumbs } from '@/components/Global/Breadcrumbs';
import { HotQuestions } from '@/components/Global/HotQuestions';
import { DictionaryHero } from '@/components/Pages/Dictionary/Hero';
import { TermsList } from '@/components/Pages/Dictionary/TermsList';

export default function DictionaryPage({ termsList }: DictionaryPageProps) {
  const [termsListState, setTermsListState] = useState(termsList);

  const breadcrumbs = [{ title: 'dicionário', link: '/dicionario' }];

  function handleTermsFilter(term: string) {
    if (term !== '') {
      const filteredTerms = termsList.map(data => ({
        letter: data.letter,
        items: data.items.filter(item =>
          item.name.toLowerCase().includes(term),
        ),
      }));

      const updatedTermsList = filteredTerms.filter(
        data => data.items.length > 0,
      );

      setTermsListState(updatedTermsList);
    } else {
      setTermsListState(termsList);
    }
  }

  return (
    <>
      <DictionarySEO />

      <Container>
        <Breadcrumbs paths={breadcrumbs} />
      </Container>

      <DictionaryHero
        onSearch={term => handleTermsFilter(term.toLowerCase())}
      />

      <Container
        className="
          pb-0
          tab:!pt-8
        "
      >
        <div className="w-full">
          <TermsList content={termsListState} />
        </div>
      </Container>

      <HotQuestions />
    </>
  );
}

export const getStaticProps: GetStaticProps<DictionaryPageProps> =
  getDictionaryStaticProps();
