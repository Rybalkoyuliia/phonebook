import { StyledContentWrapper } from 'components/CloseAccountContent/CloseAccountContent.styled';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import EditField from 'components/InputField/EditField';
import {
  FieldWrapper,
  InputWrapper,
  Label,
  MaskedInput,
  SubmitButton,
} from 'components/InputField/Input.styled';
import { StyledEditForm } from './EditContactContent.styled';

const EditContactContent = ({ onChangeContact, id, contactData }) => {
  const { reset, handleSubmit, register, control } = useForm({
    defaultValues: {
      name: contactData.name,
      number: contactData.number,
    },
  });
  const submit = data => {
    const contact = { ...data, id };
    onChangeContact(contact);
    reset();
  };

  return (
    <StyledContentWrapper>
      <StyledEditForm onSubmit={handleSubmit(submit)}>
        <h2>Editing contact</h2>
        <EditField register={register} label="Name:" name="name" />
        <FieldWrapper>
          <Label htmlFor="number">Phone:</Label>
          <InputWrapper>
            <Controller
              control={control}
              name="number"
              rules={{ required: 'Phone is required' }}
              render={({ field }) => (
                <MaskedInput
                  {...field}
                  mask="(999)999-9999"
                  type="tel"
                  id="number"
                  placeholder="(000)000-0000"
                />
              )}
            />
          </InputWrapper>
        </FieldWrapper>
        <SubmitButton>Change</SubmitButton>
      </StyledEditForm>
    </StyledContentWrapper>
  );
};

export default EditContactContent;
