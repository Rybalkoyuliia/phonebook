import Form from 'components/Form/Form';
import React from 'react';
import { useDispatch } from 'react-redux';
import { registerUserThunk } from '../../redux/auth/operations';

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const submitData = data => {
    dispatch(registerUserThunk(data));
  };
  return <Form formType="register" submitData={submitData} />;
};
