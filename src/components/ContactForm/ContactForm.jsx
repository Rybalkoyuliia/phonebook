import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactInputMask from 'react-input-mask';
import {
  StyledButton,
  StyledForm,
  StyledFormWrapper,
  StyledInputsWrapper,
  StyledLabel,
} from './ContactForm.styled';
import { getContacts } from '../../redux/phonebook/slice';
import { addContactThunk } from '../../redux/phonebook/operations';
import { toast } from 'react-toastify';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(getContacts);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleAddContact = e => {
    e.preventDefault();

    const addedPhone = phone.replace(/\D/g, '');

    const phoneRegex = /^\d{10}$/;

    if (!phoneRegex.test(addedPhone)) {
      toast.error(
        'Invalid phone number format. Please follow the (000)000-0000 format without any letters or symbols.'
      );
      return;
    }

    const newContact = { name, number: phone };
    const currentContacts = contactList || [];

    const existingContact = currentContacts.some(
      contact => contact.name === name
    );
    if (existingContact) {
      toast.error(`${name} is already in contacts`);
      return;
    }

    const existingPhoneNumber = currentContacts.some(
      contact => contact.number === phone
    );
    if (existingPhoneNumber) {
      const contactWithSameNumber = currentContacts.find(
        contact => contact.number === phone
      );
      if (contactWithSameNumber) {
        toast.error(
          `${phone} is already in contacts under the name ${contactWithSameNumber.name}`
        );
        return;
      }
    }

    dispatch(addContactThunk(newContact));
    toast.success(`${newContact.name} was added to your contactlist`);

    setName('');
    setPhone('');
  };

  return (
    <StyledFormWrapper>
      <StyledForm onSubmit={handleAddContact}>
        <StyledInputsWrapper>
          <StyledLabel htmlFor="name">
            Name
            <ReactInputMask
              style={{
                height: '20px',
                borderRadius: '10px',
                border: 'none',
                padding: '2px 8px',
                outline: 'none',
              }}
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              placeholder="Enter name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </StyledLabel>

          <StyledLabel htmlFor="phone">
            Number
            <ReactInputMask
              style={{
                height: '20px',
                borderRadius: '10px',
                border: 'none',
                padding: '2px 8px',
                outline: 'none',
              }}
              mask="(999)999-9999"
              type="tel"
              name="phone"
              id="phone"
              placeholder="(000)000-0000"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              required
            />
          </StyledLabel>
        </StyledInputsWrapper>

        <StyledButton type="submit">Add contact</StyledButton>
      </StyledForm>
    </StyledFormWrapper>
  );
};
