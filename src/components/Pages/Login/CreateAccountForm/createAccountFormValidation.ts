import * as yup from 'yup';
import { FormType } from './types';

export const createAccountSchema: yup.Schema<FormType> = yup.object().shape({
  password: yup.string().required('A senha é obrigatória'),
  passwordConfirmation: yup
    .string()
    .required('A confirmação é obrigatória')
    .oneOf([yup.ref('password')], 'As senhas devem ser idênticas'),
  email: yup.string().email('Email inválido').required('O email é obrigatório'),
});
