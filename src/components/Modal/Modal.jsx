import React, { useEffect } from 'react';
import {
  StyledCloseBtn,
  StyledModalContent,
  StyledModalWrapper,
} from './Modal.styled';

const Modal = ({ children, closeModal }) => {
  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  return (
    <StyledModalWrapper onClick={handleBackdropClick}>
      <StyledModalContent>
        <StyledCloseBtn onClick={closeModal}>x</StyledCloseBtn>
        {children}
      </StyledModalContent>
    </StyledModalWrapper>
  );
};

export default Modal;
