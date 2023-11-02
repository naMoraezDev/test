/* eslint-disable no-console */
import Head from 'next/head';
import nookies from 'nookies';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/contexts/auth';
import { useAlert } from '@/contexts/alert';
import { PiSignOutBold } from 'react-icons/pi';
import { BsFillSendFill } from 'react-icons/bs';
import { CustomInput } from '@/components/UI/CustomInput';
import { getAuthErrorCode } from '@/services/Auth/errors';
import { firebaseAdmin } from '@/services/Auth/firebaseAdmin';
import { firebaseClient } from '@/services/Auth/firebaseClient';
import { GetServerSidePropsContext, GetServerSideProps } from 'next';

export default function AccountPage() {
  const router = useRouter();
  const { user } = useAuth();
  const { displayAlert } = useAlert();
  const [showVerificationMessage, setShowVerificationMessage] = useState(false);

  async function signOut() {
    try {
      await firebaseClient
        .auth()
        .signOut()
        .then(() => router.push('/login'));
    } catch (error: any) {
      displayAlert(getAuthErrorCode(error.code));
    }
  }

  async function sendSignInLinkToEmail() {
    try {
      await firebaseClient
        .auth()
        .sendSignInLinkToEmail(user?.email || '', {
          url: 'https://resenha-de-apostas.firebaseapp.com',
          handleCodeInApp: true,
        })
        .then(() => {
          setShowVerificationMessage(true);
        });
    } catch (error: any) {
      displayAlert(getAuthErrorCode(error.code));
    }
  }

  return (
    <>
      <Head>
        <title>Conta</title>
      </Head>

      <div className="min-h-[calc(100vh-182px)] w-full flex flex-col items-center gap-24 pb-80 px-24 pt-120">
        {user && (
          <>
            {user.photoURL ? (
              <img
                src={user.photoURL as string}
                alt={user.phoneNumber as string}
                className="w-120 h-120 rounded-[100%]"
              />
            ) : (
              <div className="w-120 h-120 rounded-[100%] bg-gray4 flex justify-center items-center relative overflow-hidden">
                <div className="w-56 h-56 rounded-[100%] bg-white" />

                <div className="w-56 h-56 bg-white absolute -bottom-24 rotate-45" />
              </div>
            )}

            <h2 className="text-[30px] font-bold font-workSans">
              {user.displayName}
            </h2>

            <div className="w-[300px]">
              <CustomInput value={user.email as string} disabled />
            </div>

            {!user.emailVerified && !showVerificationMessage && (
              <>
                <p className="text-orange-500 font-bold">
                  Seu endereço de e-mail não foi verificado e alguns recursos
                  podem estar indisponíveis.
                </p>

                <p
                  onClick={sendSignInLinkToEmail}
                  className="text-orange-500 font-bold underline cursor-pointer"
                >
                  Verificar e-mail
                </p>
              </>
            )}

            {showVerificationMessage && (
              <div className="flex text-black2 bg-orange-200 p-24 items-center gap-12 rounded-normal animate-fade">
                <BsFillSendFill className="w-24 h-24" />

                <span>
                  Um link de confirmação foi enviado para seu endereço de email.
                </span>
              </div>
            )}

            <button onClick={signOut}>
              <div className="flex gap-8 items-center font-bold text-[20px]">
                <PiSignOutBold className="w-24 h-24" />

                <span>Deslogar</span>
              </div>
            </button>
          </>
        )}
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  try {
    const cookies = nookies.get(context);
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);

    const { uid } = token;

    return {
      props: {
        uid,
        pageType: 'account',
      },
    };
  } catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
    };
  }
};
