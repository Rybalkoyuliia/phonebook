import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectFilterValue, selectContacts } from '../../redux/phonebook/slice';

import {
  StyledButton,
  StyledButtonsList,
  StyledContactList,
  StyledContactListItem,
  StyledContactName,
  StyledContactPhone,
  StyledEmptyIdentificatorMessage,
  StyledInfoWrapper,
} from './ContactList.styled';
import { selectLoading } from '../../redux/phonebook/slice';
import Loader from 'components/Loader/Loader';
import EmptyContactList from 'components/EmptyContactList/EmptyContactList';
import DeleteIcon from 'iconsReact/DeleteIcon';
import EditIcon from 'iconsReact/EditIcon';
import { useModal } from 'hooks/useModal';
import Modal from 'components/Modal/Modal';
import DeleteContactContent from 'components/DeleteContactContent/DeleteContactContent';
import {
  deleteContactThunk,
  editContactThunk,
} from '../../redux/phonebook/operations';
import EditContactContent from 'components/EditContacContent/EditContactContent';
import { toast } from 'react-toastify';

const getContactList = (filter, contacts) => {
  if (!filter) {
    return contacts;
  } else {
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
    );
  }
};

export const ContactList = () => {
  const { isOpen, open, close } = useModal();
  const [contactData, setContactData] = useState(null);
  const [buttonType, setButtonType] = useState(null);

  const loading = useSelector(selectLoading);

  const filter = useSelector(selectFilterValue);
  const contacts = useSelector(selectContacts) || [];

  const dispatch = useDispatch();

  const handleDelete = userId => {
    dispatch(deleteContactThunk(userId));
    close();
  };
  const handleEdit = contact => {
    if (!loading) {
      dispatch(editContactThunk(contact));
      toast.success(`${contact.name} was successfully changed`);
      close();
    }
  };

  const contactList = getContactList(filter, contacts);

  const sortedContactList = useMemo(() => {
    return [...contactList].sort((a, b) => a.name.localeCompare(b.name));
  }, [contactList]);

  if (loading) {
    return <Loader />;
  }

  return !sortedContactList?.length ? (
    <>
      <StyledEmptyIdentificatorMessage>
        Currently, no contacts in your list
      </StyledEmptyIdentificatorMessage>
      <EmptyContactList />
    </>
  ) : (
    <>
      <StyledContactList>
        {sortedContactList?.map(item => (
          <StyledContactListItem key={item.id}>
            <StyledInfoWrapper>
              <StyledContactName>{item.name}</StyledContactName>
              <StyledContactPhone>{item.number}</StyledContactPhone>
            </StyledInfoWrapper>
            <StyledButtonsList>
              <StyledButton
                onClick={() => {
                  open();
                  setContactData(item);
                  setButtonType('EDIT');
                }}
              >
                <EditIcon />
              </StyledButton>
              <StyledButton
                onClick={() => {
                  open();
                  setContactData(item);
                  setButtonType('DELETE');
                }}
              >
                <DeleteIcon />
              </StyledButton>
            </StyledButtonsList>
          </StyledContactListItem>
        ))}
      </StyledContactList>
      {isOpen && (
        <Modal closeModal={close}>
          {buttonType === 'DELETE' && (
            <DeleteContactContent
              id={contactData.id}
              onConfirm={handleDelete}
              closeModal={close}
            />
          )}
          {buttonType === 'EDIT' && (
            <EditContactContent
              onChangeContact={handleEdit}
              contactData={contactData}
              id={contactData.id}
            />
          )}
        </Modal>
      )}
    </>
  );
};
