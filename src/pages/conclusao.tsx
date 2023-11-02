import Head from 'next/head';
import { useAuth } from '@/contexts/auth';
import { GetServerSideProps } from 'next';
import { useAlert } from '@/contexts/alert';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { useCallback, useEffect, useState } from 'react';
import { getAuthErrorCode } from '@/services/Auth/errors';
import { firebaseClient } from '@/services/Auth/firebaseClient';
import { ConfirmationMessage } from '@/components/Pages/RedefinePassword/CorfirmationMessage';
import { ConfirmNewPasswordForm } from '@/components/Pages/RedefinePassword/ConfirmNewPasswordForm';

type ConclusionPageProps = {
  mode: string;
  oobCode: string;
  tabTitle: string;
};

export default function ConclusionPage({
  mode,
  oobCode,
  tabTitle,
}: ConclusionPageProps) {
  const { user } = useAuth();
  const { displayAlert } = useAlert();

  const isSignInPage = mode === 'signIn';

  const [shouldRenderConfirmationMessage, setShouldRenderConfirmationMessage] =
    useState(false);

  const [isEmailVerified, setIsEmailVerified] = useState(false);

  const signInWithEmailLink = useCallback(async () => {
    try {
      if (user && user.email) {
        firebaseClient
          .auth()
          .signInWithEmailLink(user?.email || '')
          .catch(error => displayAlert(getAuthErrorCode(error.code)))
          .then(() => setIsEmailVerified(true));
      }
    } catch (error: any) {
      displayAlert(getAuthErrorCode(error.code));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.email]);

  useEffect(() => {
    if (isSignInPage) {
      signInWithEmailLink();
    }
  }, [isSignInPage, signInWithEmailLink]);

  return (
    <>
      <Head>
        <title>{tabTitle}</title>
      </Head>

      <div className="min-h-[calc(100vh-182px)] w-full flex justify-center px-24 pt-40">
        {shouldRenderConfirmationMessage && <ConfirmationMessage />}

        {isEmailVerified && (
          <div className="flex flex-col gap-24">
            <div className="flex gap-16 items-center">
              <BsFillCheckCircleFill className="w-[40px] h-[40px]" />

              <h2 className="font-workSans font-bold text-[30px]">
                Endereço de e-mail foi verificado!
              </h2>
            </div>

            <p>
              Seu endereço de e-mail foi verificado com sucesso. Você já tem
              acesso a todas as funcionalidades do Resenha de Apostas.
            </p>
          </div>
        )}

        {!isSignInPage && !shouldRenderConfirmationMessage && (
          <ConfirmNewPasswordForm
            obbCode={oobCode}
            callback={setShouldRenderConfirmationMessage}
          />
        )}
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { oobCode } = query;

  const { mode } = query;

  const tabTitle = mode === 'signIn' ? 'Verificação' : 'Redefinir Senha';

  return {
    props: {
      tabTitle,
      pageType: 'login',
      mode: mode?.toString() || '',
      oobCode: oobCode?.toString() || '',
    },
  };
};
