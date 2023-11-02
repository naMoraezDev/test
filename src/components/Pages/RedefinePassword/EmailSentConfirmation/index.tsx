import { MdMarkEmailRead } from 'react-icons/md';

type EmailSentConfirmationProps = {
  email: string;
};

export function EmailSentConfirmation({ email }: EmailSentConfirmationProps) {
  return (
    <div className="flex flex-col gap-24 max-w-[700px]">
      <div
        className="
          flex gap-16 items-center
          tab:flex-col
        "
      >
        <MdMarkEmailRead className="w-[40px] h-[40px]" />

        <h2 className="font-workSans font-bold text-[30px] text-center">
          Link de redefinição de senha enviado!
        </h2>
      </div>

      <p>
        Enviamos o link de redefinição de senha para o email{' '}
        <span className="font-workSans font-bold">{email}</span>. Clicando no
        link, você será redirecionado para uma página onde poderá criar uma nova
        senha.
      </p>

      <p>Esta aba pode ser fechada.</p>
    </div>
  );
}
