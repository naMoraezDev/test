import * as yup from 'yup';
import { EmailFormType } from './types';

export const emailValidationSchema: yup.Schema<EmailFormType> = yup
  .object()
  .shape({
    email: yup
      .string()
      .email('Email inválido')
      .required('O email é obrigatório'),
  });
