import * as yup from 'yup';
import { PasswordForm } from './types';

export const newPasswordConfirmationValidationSchema: yup.Schema<PasswordForm> =
  yup.object().shape({
    password: yup.string().required('A senha é obrigatória'),
    passwordConfirmation: yup
      .string()
      .required('A confirmação é obrigatória')
      .oneOf([yup.ref('password')], 'As senhas devem ser idênticas'),
  });
