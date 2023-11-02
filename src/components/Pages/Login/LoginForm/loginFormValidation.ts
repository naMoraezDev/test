import * as yup from 'yup';
import { LoginFormType } from './types';

export const loginValidationSchema: yup.Schema<LoginFormType> = yup
  .object()
  .shape({
    password: yup.string().required('A senha é obrigatória'),
    email: yup
      .string()
      .email('Email inválido')
      .required('O email é obrigatório'),
  });
