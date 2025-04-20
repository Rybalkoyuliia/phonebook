import * as yup from 'yup';

export const registerSchema = yup
  .object({
    name: yup
      .string()
      .required('This field cannot be empty')
      .max(30, 'Cannot be more than 30 chars')
      .min(3, 'Cannot be less than 3 chars'),
    password: yup
      .string()
      .required()
      .max(15, 'Cannot be more than 15 chars')
      .min(6, 'Cannot be less than 6 chars'),
    email: yup.string().required().email('Email is not valid'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Please confirm your password'),
  })
  .required();
