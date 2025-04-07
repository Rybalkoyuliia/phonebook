import Form from 'components/Form/Form';
import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUserThunk } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitData = data => {
    dispatch(loginUserThunk(data))
      .unwrap()
      .then(data => {
        toast.success(`Welcome, ${data.user.name}`);
        navigate('/contacts');
      })
      .catch(error => {
        console.log(error);
        toast.error(`${error}`);
      });
  };
  return <Form formType="login" submitData={submitData} />;
};
