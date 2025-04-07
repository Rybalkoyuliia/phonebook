import React, { useState } from 'react';
import { StyledForm } from './Form.styled';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';

const Form = ({ formType, submitData }) => {
  const [type, setType] = useState('password');
  const [confType, setConfType] = useState('password');
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submit = data => {
    submitData(data);
    reset();
  };
  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <h2>{formType === 'register' ? 'Registration' : 'Sign in'}</h2>
      {formType === 'register' && (
        <div>
          <label htmlFor="name">Name: </label>
          <div>
            <input
              {...register('name', {
                required: { message: 'Name is required', value: true },
                minLength: {
                  value: 3,
                  message: 'Name must be more than 3 characters.',
                },
              })}
              id="name"
              type="text"
              placeholder="Enter your name"
              autoComplete="name"
            />
            {errors?.name && <span>{errors.name.message}</span>}
          </div>
        </div>
      )}
      <div>
        <label htmlFor="email">Email: </label>
        <div>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Please enter a valid email',
              },
            })}
            id="email"
            placeholder="Enter your email"
            autoComplete="email"
          />
          {errors?.email && <span>{errors.email.message}</span>}
        </div>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <div>
          <input
            {...register('password', {
              required: true,
            })}
            id="password"
            type={type}
            placeholder="Enter your password"
            autoComplete="new-password"
          />
          <button
            onClick={() => {
              setType(type === 'password' ? 'text' : 'password');
            }}
          >
            {type === 'password' ? <RiEyeOffLine /> : <RiEyeLine />}
          </button>
          {errors?.password && <span>{errors.password.message}</span>}
        </div>
      </div>
      {formType === 'register' && (
        <div>
          <label htmlFor="confirm_password">Confirm password:</label>
          <div>
            <div>
              <input
                id="confirm_password"
                type={confType}
                placeholder="Confirm your password"
                autoComplete="off"
              />
              <button
                onClick={() => {
                  setConfType(confType === 'password' ? 'text' : 'password');
                }}
              >
                {confType === 'password' ? <RiEyeOffLine /> : <RiEyeLine />}
              </button>
            </div>
            {watch('confirm_password') !== watch('password') ? (
              <span>Your passwords do not match</span>
            ) : null}
          </div>
        </div>
      )}

      <button>{formType === 'register' ? 'Register' : 'Login'}</button>
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
