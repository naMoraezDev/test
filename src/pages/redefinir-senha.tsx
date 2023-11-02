import Head from 'next/head';
import { useState } from 'react';
import { GetServerSideProps } from 'next';
import { EmailForm } from '@/components/Pages/RedefinePassword/EmailForm';
import { EmailSentConfirmation } from '@/components/Pages/RedefinePassword/EmailSentConfirmation';

export default function RedefinePasswordPage() {
  const [email, setEmail] = useState('');
  const [
    shouldRenderEmailSentConfirmation,
    setShouldRenderEmailSentConfirmation,
  ] = useState(false);

  return (
    <>
      <Head>
        <title>Redefinir senha</title>
      </Head>

      <div className="min-h-[calc(100vh-182px)] w-full flex justify-center px-24 pt-40">
        {!shouldRenderEmailSentConfirmation && (
          <EmailForm
            setEmail={setEmail}
            callback={setShouldRenderEmailSentConfirmation}
          />
        )}

        {shouldRenderEmailSentConfirmation && (
          <EmailSentConfirmation email={email} />
        )}
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      pageType: 'login',
    },
  };
};
