/* eslint-disable no-empty */
import Link from 'next/link';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { LoginFormType } from './types';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { useAlert } from '@/contexts/alert';
import { CustomInput } from '@/components/UI/CustomInput';
import { getAuthErrorCode } from '@/services/Auth/errors';
import { loginValidationSchema } from './loginFormValidation';
import { firebaseClient } from '@/services/Auth/firebaseClient';
import { CustomFormButton } from '@/components/UI/CustomFormButton';

export function LoginForm() {
  const router = useRouter();
  const { displayAlert } = useAlert();

  const initialFormData = { email: '', password: '' };

  async function handleOnSubmit(values: LoginFormType) {
    try {
      await firebaseClient
        .auth()
        .signInWithEmailAndPassword(values.email, values.password)
        .then(() => router.push('/'));
    } catch (error: any) {
      displayAlert(getAuthErrorCode(error.code));
    }
  }

  async function logInWithFacebook() {
    try {
      const facebookAuthProvider =
        new firebaseClient.auth.FacebookAuthProvider();
      await firebaseClient
        .auth()
        .signInWithPopup(facebookAuthProvider)
        .then(() => router.push('/'));
    } catch (error: any) {
      displayAlert(getAuthErrorCode(error.code));
    }
  }

  async function logInWithGoogle() {
    try {
      const googleAuthProvider = new firebaseClient.auth.GoogleAuthProvider();
      await firebaseClient
        .auth()
        .signInWithPopup(googleAuthProvider)
        .then(() => router.push('/'));
    } catch (error: any) {
      displayAlert(getAuthErrorCode(error.code));
    }
  }

  return (
    <section className="flex flex-col gap-24 items-center">
      <h2 className="font-workSans font-bold text-[24px]">Login</h2>

      <Formik
        validateOnChange={false}
        initialValues={initialFormData}
        validationSchema={loginValidationSchema}
        onSubmit={values => handleOnSubmit(values)}
      >
        {({ handleChange, errors, isSubmitting }) => {
          return (
            <Form noValidate className="flex flex-col gap-24 w-full">
              <CustomInput
                name="email"
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

              <Link
                href="/redefinir-senha"
                className="w-fit text-[14px] underline"
              >
                Esqueci minha senha
              </Link>

              <CustomFormButton type="submit" disabled={isSubmitting}>
                Log in
              </CustomFormButton>
            </Form>
          );
        }}
      </Formik>

      <h2 className="font-workSans font-bold text-[24px]">Ou</h2>

      <p>Entre com suas redes sociais</p>

      <button
        onClick={logInWithFacebook}
        className="w-full border-[1px] border-gray2 flex justify-center p-8 rounded-sm"
      >
        <FaFacebook className="w-24 h-24 text-blue-800" />
      </button>

      <button
        onClick={logInWithGoogle}
        className="w-full border-[1px] border-gray2 flex justify-center p-8 rounded-sm"
      >
        <FcGoogle className="w-24 h-24 text-blue-800" />
      </button>
    </section>
  );
}
