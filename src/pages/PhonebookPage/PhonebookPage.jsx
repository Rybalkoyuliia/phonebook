import React from 'react';
import {
  StyledContactTitle,
  StyledExitButton,
  StyledPhonebookTitle,
  StyledPhonebookWrapper,
  StyledSearchFieldWrapper,
} from './PhonebookPage.styled';
import { IoMdExit } from 'react-icons/io';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { SearchField } from 'components/SearchField/SearchField';
import { ContactList } from 'components/ContactList/ContactList';
import Modal from 'components/Modal/Modal';
import { useModal } from 'hooks/useModal';
import CloseAccountContent from 'components/CloseAccountContent/CloseAccountContent';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/auth/slice';
import Loader from 'components/Loader/Loader';

export const PhonebookPage = () => {
  const { isOpen, open, close } = useModal();
  const isLoading = useSelector(selectIsLoading);
  return isLoading ? (
    <Loader />
  ) : (
    <StyledPhonebookWrapper>
      <StyledPhonebookTitle>My Phonebook</StyledPhonebookTitle>
      <StyledExitButton
        onClick={() => {
          open();
        }}
      >
        <IoMdExit />
      </StyledExitButton>
      <ContactForm />
      <StyledSearchFieldWrapper>
        <StyledContactTitle>Contacts</StyledContactTitle>
        <SearchField />
      </StyledSearchFieldWrapper>
      <ContactList />
      {isOpen && (
        <Modal closeModal={close}>
          <CloseAccountContent closeModal={close} />
        </Modal>
      )}
    </StyledPhonebookWrapper>
  );
};
