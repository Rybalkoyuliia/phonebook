import styled from 'styled-components';

export const StyledContactList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  max-height: fit-content;
  overflow-y: auto;
  div {
    max-height: 90%;
  }
  &::-webkit-scrollbar {
    width: 5px;
    height: 15px;
  }

  &::-webkit-scrollbar-track {
    background: #d3d3d3;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgb(253, 135, 6);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const StyledContactListItem = styled.li`
  background-color: rgb(52, 52, 52);
  padding: 5px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledContactName = styled.span`
  color: rgb(253, 135, 6);
  font-weight: bold;
  font-size: 18px;
`;

export const StyledContactPhone = styled.span`
  color: white;
  font-size: 18px;
`;

export const StyledButton = styled.button`
  border-radius: 20px;
  height: 20px;
  border: 2px solid rgb(253, 135, 6);
  color: rgb(253, 135, 6);
  font-size: 18px;
  transition: transform 0.3s ease;

  &:hover {
    background-color: orange;
    color: white;
    cursor: pointer;
    border: 2px solid orange;
    transform: scale(1.3);
  }
`;

export const StyledEmptyIdentificatorMessage = styled.p`
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const StyledButtonsList = styled.div`
  display: flex;
  gap: 10px;
`;
