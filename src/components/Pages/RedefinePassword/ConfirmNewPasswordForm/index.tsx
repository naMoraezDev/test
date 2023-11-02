import { Form, Formik } from 'formik';
import { PasswordForm } from './types';
import { useAlert } from '@/contexts/alert';
import { Dispatch, SetStateAction } from 'react';
import { CustomInput } from '@/components/UI/CustomInput';
import { getAuthErrorCode } from '@/services/Auth/errors';
import { firebaseClient } from '@/services/Auth/firebaseClient';
import { GoBackIconLink } from '@/components/UI/GoBackIconLink';
import { CustomFormButton } from '@/components/UI/CustomFormButton';
import { newPasswordConfirmationValidationSchema } from './confirmNewPasswordValidation';

type ConfirmPasswordFormProps = {
  obbCode: string;
  // eslint-disable-next-line no-unused-vars
  callback: Dispatch<SetStateAction<boolean>>;
};

export function ConfirmNewPasswordForm({
  obbCode,
  callback,
}: ConfirmPasswordFormProps) {
  const { displayAlert } = useAlert();

  const initialFormData = {
    password: '',
    passwordConfirmation: '',
  };

  async function handleOnSubmit(values: PasswordForm) {
    await firebaseClient
      .auth()
      .confirmPasswordReset(obbCode, values.password)
      .catch(error => displayAlert(getAuthErrorCode(error.code)))
      .then(() => callback(true));
  }

  return (
    <div className="flex flex-col items-center gap-40">
      <div className="max-w-[400px] flex flex-col gap-16">
        <GoBackIconLink />

        <h2 className="text-[30px] font-bold font-workSans">Nova Senha</h2>

        <p>Crie sua nova senha e confirme-a nos campos abaixo.</p>
      </div>

      <Formik
        validateOnChange={false}
        initialValues={initialFormData}
        onSubmit={values => handleOnSubmit(values)}
        validationSchema={newPasswordConfirmationValidationSchema}
      >
        {({ handleChange, errors, isSubmitting }) => {
          return (
            <Form className="flex flex-col gap-40 w-full">
              <CustomInput
                type="password"
                name="password"
                autoComplete="on"
                placeholder="Nova senha"
                errorMessage={errors.password}
                onChange={e => handleChange(e)}
              />

              <CustomInput
                type="password"
                autoComplete="on"
                name="passwordConfirmation"
                onChange={e => handleChange(e)}
                placeholder="Confirmar nova senha"
                errorMessage={errors.passwordConfirmation}
              />

              <CustomFormButton
                type="submit"
                disabled={isSubmitting}
                className="
                  h-40 bg-primary-green text-white rounded-normal font-bold transition-all duration-300
                  active:bg-primary-green-dark active:shadow-inset-button
                "
              >
                Redefinir
              </CustomFormButton>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
