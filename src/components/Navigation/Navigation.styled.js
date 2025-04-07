import styled from 'styled-components';

export const StyledNavWrapper = styled.div`
  background-color: rgb(38, 38, 38);
  padding: 100px 0px;
  border-radius: 20px;
  gap: 20px;
  max-width: 40%;
  margin: auto;
  margin-top: 20vh;
`;

export const StyledMainNavTitle = styled.h1`
  text-align: center;
  color: rgb(255, 255, 255);
  font-size: 46px;
  margin: 0;
  margin-bottom: 80px;
`;

export const StyledNavDirections = styled.p`
  color: white;
  font-size: 20px;
`;

export const StyledNavDirectionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(52, 52, 52);
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  max-width: 500px;
  margin: auto;
  a {
    color: rgb(253, 135, 6);
    transition: transform 0.3s ease;
    font-size: 22px;
    &:hover {
      cursor: pointer;
      color: tomato;
    }
    &:active {
      color: white;
    }
  }
`;
