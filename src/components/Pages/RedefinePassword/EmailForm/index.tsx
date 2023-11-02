import { Form, Formik } from 'formik';
import { EmailFormType } from './types';
import { useAlert } from '@/contexts/alert';
import { Dispatch, SetStateAction } from 'react';
import { getAuthErrorCode } from '@/services/Auth/errors';
import { CustomInput } from '@/components/UI/CustomInput';
import { emailValidationSchema } from './emailFormValidation';
import { firebaseClient } from '@/services/Auth/firebaseClient';
import { GoBackIconLink } from '@/components/UI/GoBackIconLink';
import { CustomFormButton } from '@/components/UI/CustomFormButton';

type EmailFormProps = {
  setEmail: Dispatch<SetStateAction<string>>;
  callback: Dispatch<SetStateAction<boolean>>;
};

export function EmailForm({ callback, setEmail }: EmailFormProps) {
  const initialFormData = { email: '' };
  const { displayAlert } = useAlert();

  function finishSubmit(email: string) {
    callback(true);
    setEmail(email);
  }

  async function handleOnSubmit(values: EmailFormType) {
    try {
      await firebaseClient
        .auth()
        .sendPasswordResetEmail(values.email)
        .catch(error => displayAlert(getAuthErrorCode(error.code)))
        .then(() => {
          finishSubmit(values.email);
        });
    } catch (error: any) {
      displayAlert(getAuthErrorCode(error.code));
    }
  }

  return (
    <div className="flex flex-col items-center gap-40">
      <div className="max-w-[400px] flex flex-col gap-16">
        <GoBackIconLink />

        <h2 className="text-[30px] font-bold font-workSans">Redefinir Senha</h2>

        <p>
          Enviaremos um link de redefinição de senha para o seu endereço de
          e-mail.
        </p>
      </div>

      <Formik
        validateOnChange={false}
        initialValues={initialFormData}
        validationSchema={emailValidationSchema}
        onSubmit={values => handleOnSubmit(values)}
      >
        {({ handleChange, errors, isSubmitting }) => {
          return (
            <Form noValidate className="flex flex-col gap-40 w-full">
              <CustomInput
                name="email"
                type="email"
                autoComplete="on"
                placeholder="Email"
                onChange={handleChange}
                errorMessage={errors.email}
              />

              <CustomFormButton type="submit" disabled={isSubmitting}>
                Enviar
              </CustomFormButton>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
