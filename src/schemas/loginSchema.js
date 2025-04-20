import * as yup from 'yup';

export const loginSchema = yup
  .object({
    password: yup
      .string()
      .required()
      .max(15, 'Cannot be more than 15 chars')
      .min(6, 'Cannot be less than 6 chars'),
    email: yup.string().required().email('Email is not valid'),
  })
  .required();
