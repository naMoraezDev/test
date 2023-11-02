import { BsFillCheckCircleFill } from 'react-icons/bs';
import { GoBackIconLink } from '@/components/UI/GoBackIconLink';

export function ConfirmationMessage() {
  return (
    <div className="flex flex-col gap-24">
      <GoBackIconLink />

      <div className="flex gap-16 items-center">
        <BsFillCheckCircleFill className="w-[40px] h-[40px]" />

        <h2 className="font-workSans font-bold text-[30px]">
          Senha Alterada com sucesso!
        </h2>
      </div>

      <p>
        Sua senha foi alterada com sucesso. Volte à página de login e utilize
        sua nova senha para acessar sua conta.
      </p>
    </div>
  );
}
