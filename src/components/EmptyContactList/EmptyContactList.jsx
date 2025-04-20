import React from 'react';
import emptyContactImg from '../../assets/zeroContacts.png';
import { StyledImgWrapper } from './EmptyContactList.styled';

const EmptyContactList = () => {
  return (
    <StyledImgWrapper>
      <img src={emptyContactImg} alt="empty contacts list" />
    </StyledImgWrapper>
  );
};

export default EmptyContactList;
