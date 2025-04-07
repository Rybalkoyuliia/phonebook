import React from 'react';
import { StyledContentWrapper } from './CloseAccountContent.styled';
import { useDispatch } from 'react-redux';
import { logoutUserThunk } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';

const CloseAccountContent = ({ closeModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(logoutUserThunk());
    navigate('/');
  };
  return (
    <StyledContentWrapper>
      <h2>Are you sure you want to log out?</h2>
      <ul>
        <li>
          <button onClick={logout}>Yes</button>
        </li>
        <li>
          <button onClick={closeModal}>No</button>
        </li>
      </ul>
    </StyledContentWrapper>
  );
};

export default CloseAccountContent;
