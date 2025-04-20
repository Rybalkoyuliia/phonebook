import React from 'react';
import {
  FieldWrapper,
  Label,
  InputWrapper,
  StyledInput,
  ErrorText,
} from './Input.styled';

const InputField = ({ register, errors, label, name, placeholder }) => (
  <FieldWrapper>
    <Label htmlFor={name}>{label}</Label>
    <InputWrapper>
      <StyledInput
        {...register(name)}
        id={name}
        type="text"
        placeholder={placeholder}
        autoComplete={name}
      />
    </InputWrapper>
    {errors[name] && <ErrorText>{errors[name].message}</ErrorText>}
  </FieldWrapper>
);

export default InputField;
