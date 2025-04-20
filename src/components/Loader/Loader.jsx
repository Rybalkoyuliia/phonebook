import React from 'react';
import PuffLoader from 'react-spinners/PuffLoader';
import { StyledLoaderContainer } from './Loader.styled';

const Loader = () => {
  return (
    <StyledLoaderContainer>
      <PuffLoader size={90} color="rgb(253, 135, 6)" />
    </StyledLoaderContainer>
  );
};

export default Loader;
