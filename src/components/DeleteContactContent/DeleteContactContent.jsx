import { StyledContentWrapper } from 'components/CloseAccountContent/CloseAccountContent.styled';
import React from 'react';

const DeleteContactContent = ({ closeModal, id, onConfirm }) => {
  console.log(id);
  return (
    <StyledContentWrapper>
      <h2>Are you sure you want to delete this contact?</h2>
      <ul>
        <li>
          <button onClick={() => onConfirm(id)}>Yes</button>
        </li>
        <li>
          <button onClick={closeModal}>No</button>
        </li>
      </ul>
    </StyledContentWrapper>
  );
};

export default DeleteContactContent;
