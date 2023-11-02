import Image from 'next/image';
import { Text } from '../../../UI/Text';
import { ROUTES } from '@/constants/routes';
import { TopLineText } from '../../../UI/TopLineText';
import { CustomLink } from '@/components/CustomNextComponents/CustomLink';
import exclamationIcon from '../../../../assets/images/svg/exclamation-icon.svg';

export function Dictionary() {
  return (
    <div
      className="
        w-full h-[527px] shadow-normal bg-white flex justify-end relative overflow-hidden rounded-normal
        desk-sm:h-[420px]
        mob:h-[367px]
        mob-sm:h-[350px]
      "
    >
      <Image
        src={exclamationIcon}
        alt="icone de exclamacao"
        className="
          w-[350px] opacity-10 mr-[40px]
          mob-sm:-mr-[70px]
        "
      />

      <div
        className="
          absolute top-0 left-0 max-w-[900px] h-full px-48 py-40 flex flex-col justify-between
          desk-sm:px-[18px]
          tab:px-[28px] tab:py-16
          mob:px-24 mob-sm:py-24
        "
      >
        <TopLineText element="h2">
          Dicionário das apostas esportivas
        </TopLineText>

        <Text
          variant="section"
          className="text-primary-green-dark font-workSans"
        >
          Vocabulário essencial do apostador
        </Text>

        <Text
          variant="heading"
          className="
            max-w-[700px]
            tab:text-heading-mob-sm
          "
        >
          O universo das apostas está em constante crescimento no Brasil e, com
          ele, surge um vocabulário próprio.
        </Text>

        <Text variant="text-3" className="max-w-[650px] text-gray2">
          Entenda os principais termos e esteja sempre atualizado para aumentar
          suas chances de sucesso!
        </Text>

        <CustomLink href={`${ROUTES.dictionary}`} className="z-50">
          <button
            className="
              w-[200px] h-[45px] mob:w-full mob:h-40 px-[14px] bg-primary-green text-white text-button-md whitespace-nowrap rounded-normal transition-all duration-500 shrink-0
              hover:bg-primary-green
              active:bg-primary-green-light active:shadow-inset-button active:duration-150
            "
            type="button"
          >
            Acesse aqui
          </button>
        </CustomLink>
      </div>
    </div>
  );
}
