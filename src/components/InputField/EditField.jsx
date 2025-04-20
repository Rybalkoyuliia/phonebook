import React from 'react';
import { FieldWrapper, InputWrapper, Label, StyledInput } from './Input.styled';

const EditField = ({ register, label, name }) => (
  <FieldWrapper>
    <Label htmlFor={name}>{label}</Label>
    <InputWrapper>
      <StyledInput {...register(name)} id={name} type="text" />
    </InputWrapper>
  </FieldWrapper>
);

export default EditField;
