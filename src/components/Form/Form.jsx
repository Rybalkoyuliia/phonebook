import React from 'react';
import { StyledForm } from './Form.styled';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import InputField from 'components/InputField/InputField';
import PasswordField from 'components/InputField/PasswordField';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitButton } from 'components/InputField/Input.styled';

const Form = ({ formType, submitData, schema }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submit = data => {
    submitData(data);
    reset();
  };
  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <h2>{formType === 'register' ? 'Registration' : 'Sign in'}</h2>
      {formType === 'register' && (
        <InputField
          register={register}
          errors={errors}
          label="Name:"
          placeholder="Enter your name"
          name="name"
        />
      )}
      <InputField
        register={register}
        errors={errors}
        label="Email:"
        placeholder="Enter your email"
        name="email"
      />
      <PasswordField
        register={register}
        errors={errors}
        label="Password:"
        placeholder="Enter your password"
        name="password"
      />
      {formType === 'register' && (
        <PasswordField
          register={register}
          errors={errors}
          label="Confirm password:"
          placeholder="Confirm your password"
          name="confirmPassword"
        />
      )}
      <SubmitButton>
        {formType === 'register' ? 'Register' : 'Login'}
      </SubmitButton>
      {formType === 'register' ? (
        <p>
          Have already account? Please, <Link to="/login">sign in</Link>
        </p>
      ) : (
        <p>
          Don't have account? Please, <Link to="/register">register</Link>
        </p>
      )}
    </StyledForm>
  );
};

export default Form;
