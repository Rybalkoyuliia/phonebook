import React, { useState } from 'react';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import {
  FieldWrapper,
  Label,
  InputWrapper,
  StyledInput,
  ErrorText,
  ToggleIcon,
} from './Input.styled';

const PasswordField = ({ register, errors, label, name, placeholder }) => {
  const [type, setType] = useState('password');

  return (
    <FieldWrapper>
      <Label htmlFor={name}>{label}</Label>
      <InputWrapper>
        <StyledInput
          {...register(name)}
          id={name}
          type={type}
          placeholder={placeholder}
          autoComplete={name}
        />
        <ToggleIcon
          onClick={() => setType(type === 'password' ? 'text' : 'password')}
        >
          {type === 'password' ? <RiEyeOffLine /> : <RiEyeLine />}
        </ToggleIcon>
      </InputWrapper>
      {errors[name] && <ErrorText>{errors[name].message}</ErrorText>}
    </FieldWrapper>
  );
};

export default PasswordField;
