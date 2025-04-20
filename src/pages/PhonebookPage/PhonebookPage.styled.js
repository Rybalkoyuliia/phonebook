import styled from 'styled-components';

export const StyledPhonebookWrapper = styled.div`
  background-color: rgb(38, 38, 38);
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 80px;
  border-radius: 20px;
  width: 50%;
  height: 80%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledExitButton = styled.button`
  display: block;
  position: absolute;
  top: 50px;
  right: 80px;
  background-color: transparent;
  color: white;
  font-size: 34px;
  border: none;
  transition: transform 0.3s ease;
  &:hover {
    cursor: pointer;
    transform: scale(1.3);
  }
`;

export const StyledPhonebookTitle = styled.h1`
  color: white;
  font-weight: bold;
  margin: 0 0 30px;
  font-size: 36px;
  text-align: center;
`;

export const StyledSearchFieldWrapper = styled.div`
  background-color: rgb(52, 52, 52);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`;

export const StyledContactTitle = styled.h2`
  color: white;
`;
