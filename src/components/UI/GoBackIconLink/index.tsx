import { AiOutlineArrowLeft } from 'react-icons/ai';
import { CustomLink } from '@/components/CustomNextComponents/CustomLink';

export function GoBackIconLink() {
  return (
    <CustomLink href="/login" className="w-fit">
      <div className="flex gap-12 items-center">
        <AiOutlineArrowLeft />

        <p>voltar à página de login</p>
      </div>
    </CustomLink>
  );
}
