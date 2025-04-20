import Form from 'components/Form/Form';
import React from 'react';
import { useDispatch } from 'react-redux';
import { registerUserThunk } from '../../redux/auth/operations';
import { registerSchema } from 'schemas/registerSchema';

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const submitData = data => {
    dispatch(registerUserThunk(data));
  };
  return (
    <Form formType="register" submitData={submitData} schema={registerSchema} />
  );
};
