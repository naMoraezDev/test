import { ROUTES } from '@/constants/routes';
import { QuestionIconLink } from '../QuestionIconLink';
import { TopLineText } from '@/components/UI/TopLineText';
import { CustomLink } from '@/components/CustomNextComponents/CustomLink';

export function HotQuestions() {
  return (
    <div
      className="
        shadow-sm bg-white px-40 pt-48 pb-[244px] mt-120
        desk-sm:px-[22px] desk-sm:pb-[160px] desk-sm:pt-[30px]
        tab:px-[30px] tab:pt-[26px]
        mob:px-24 mob:pt-[28px]
        mob-sm:pt-[26px]
      "
    >
      <TopLineText element="h2" color="primary-green">
        Perguntas frequentes
      </TopLineText>

      <div
        className="
          w-full mt-[103px] grid grid-cols-3 gap-x-80 gap-y-[59px]
          desk-md:mt-48
          desk-sm:grid-cols-2 desk-sm:gap-x-[123px] desk-sm:gap-y-32
          tab:gap-x-[35px]
          mob:grid-cols-1 mob:mt-40 mob:gap-24
        "
      >
        <CustomLink
          href={`${ROUTES.bettingReview}lance-betting/a-lance-betting-pertence-ao-lance.html`}
        >
          <QuestionIconLink
            icon="check"
            text="A Lance! Betting pertence ao Lance!?"
          />
        </CustomLink>

        <CustomLink
          href={`${ROUTES.bettingReview}basico/e-proibido-apostar-no-brasil.html`}
        >
          <QuestionIconLink icon="money" text="É proibido apostar no Brasil?" />
        </CustomLink>

        <CustomLink
          href={`${ROUTES.bettingReview}lance-betting/como-alterar-a-senha-na-lance-betting.html`}
        >
          <QuestionIconLink
            icon="home"
            text="Como alterar a senha na Lance! Betting?"
          />
        </CustomLink>

        <CustomLink
          href={`${ROUTES.bettingReview}lance-betting/como-depositar-e-sacar-na-lance-betting.html`}
        >
          <QuestionIconLink
            dividerLg
            icon="ball"
            text="Como depositar e sacar na Lance! Betting?"
          />
        </CustomLink>

        <CustomLink
          href={`${ROUTES.bettingReview}lance-betting/quais-as-vantagens-da-lance-betting-para-um-apostador-iniciante.html`}
        >
          <QuestionIconLink
            dividerLg
            dividerMd
            icon="home"
            text="Quais as vantagens da Lance! Betting para um apostador iniciante?"
          />
        </CustomLink>

        <CustomLink
          href={`${ROUTES.bettingReview}basico/como-apostar-em-esportes.html`}
        >
          <QuestionIconLink
            dividerLg
            dividerMd
            dividerSm
            icon="check"
            text="Como começar a apostar em esportes?"
          />
        </CustomLink>
      </div>
    </div>
  );
}
