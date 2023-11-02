import Image from 'next/image';
import { ROUTES } from '@/constants/routes';
import { CustomLink } from '@/components/CustomNextComponents/CustomLink';
import rightArrow from '../../../../../../assets/images/svg/blue-right-arrow.svg';

type AccessAllProps = {
  categorySlug: string;
};

export function AccessAll({ categorySlug }: AccessAllProps) {
  return (
    <div
      className="
        w-full rounded-b-normal bg-background h-[53px] flex items-center px-32 shadow-sm
        desk-sm:px-[14px]
      "
    >
      <CustomLink
        href={
          categorySlug !== 'dicas'
            ? `${ROUTES.bettingReview}${categorySlug}`
            : ROUTES.tips
        }
      >
        <div className="flex items-center gap-8">
          <p className="text-next-redic text-primary-green">Acesse tudo</p>

          <Image
            priority
            src={rightArrow}
            alt="seta apontando para a direita"
          />
        </div>
      </CustomLink>
    </div>
  );
}
