import { FormType } from './types';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useAlert } from '@/contexts/alert';
import { CustomInput } from '@/components/UI/CustomInput';
import { getAuthErrorCode } from '@/services/Auth/errors';
import { firebaseClient } from '@/services/Auth/firebaseClient';
import { CustomFormButton } from '@/components/UI/CustomFormButton';
import { createAccountSchema } from './createAccountFormValidation';

export function CreateAccountForm() {
  const router = useRouter();
  const { displayAlert } = useAlert();

  const initialFormData = { email: '', password: '', passwordConfirmation: '' };

  async function handleOnSubmit(values: FormType) {
    try {
      await firebaseClient
        .auth()
        .createUserWithEmailAndPassword(values.email, values.password)
        .then(() => router.push('/'));
    } catch (error: any) {
      displayAlert(getAuthErrorCode(error.code));
    }
  }

  return (
    <section className="flex flex-col gap-24 items-center">
      <h2 className="font-workSans font-bold text-[24px]">Criar conta</h2>

      <Formik
        validateOnChange={false}
        initialValues={initialFormData}
        validationSchema={createAccountSchema}
        onSubmit={values => handleOnSubmit(values)}
      >
        {({ handleChange, errors, isSubmitting }) => {
          return (
            <Form noValidate className="flex flex-col gap-24 w-full">
              <CustomInput
                name="email"
                type="email"
                autoComplete="on"
                placeholder="Email"
                onChange={handleChange}
                errorMessage={errors.email}
              />

              <CustomInput
                name="password"
                type="password"
                autoComplete="on"
                placeholder="Senha"
                onChange={handleChange}
                errorMessage={errors.password}
              />

              <CustomInput
                type="password"
                autoComplete="on"
                onChange={handleChange}
                name="passwordConfirmation"
                placeholder="Confirmar senha"
                errorMessage={errors.passwordConfirmation}
              />

              <div className="w-full">
                <CustomFormButton type="submit" disabled={isSubmitting}>
                  Criar conta
                </CustomFormButton>
              </div>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
}
