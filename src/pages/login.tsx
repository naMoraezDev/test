import React from 'react';
import Head from 'next/head';
import nookies from 'nookies';
import Image from 'next/image';
import { GetServerSideProps } from 'next';
import { firebaseAdmin } from '@/services/Auth/firebaseAdmin';
import { LoginForm } from '@/components/Pages/Login/LoginForm';
import bettingLogo from '../assets/images/svg/betting-logo-menu.svg';
import { CreateAccountForm } from '@/components/Pages/Login/CreateAccountForm';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <div className="min-h-[calc(100vh-182px)] w-full flex flex-col items-center gap-24 pb-80 px-24">
        <Image
          src={bettingLogo}
          alt="logotipo Resenha de Apostas"
          className="
            w-120 h-120
            tab-xs:w-80 tab-xs:h-80
          "
        />

        <div
          className="
            flex justify-center gap-80 w-full
            tab-xs:flex-col tab-xs:gap-40
          "
        >
          <CreateAccountForm />

          <div className="flex items-center">
            <div
              className="
                w-[1px] h-[200px] bg-black
                tab-xs:w-full tab-xs:h-[1px]
              "
            />
          </div>

          <LoginForm />
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  try {
    const cookies = nookies.get(context);
    await firebaseAdmin.auth().verifyIdToken(cookies.token);

    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  } catch (err) {
    return {
      props: {
        pageType: 'login',
      },
    };
  }
};
