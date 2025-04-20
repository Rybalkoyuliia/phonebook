import styled from 'styled-components';
import InputMask from 'react-input-mask';

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid #888;
  font-size: 26px;
  font-style: italic;
  background-color: transparent;

  &::placeholder {
    font-size: 16px;
    color: #bbb;
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid orange;
  }
`;

export const ErrorText = styled.span`
  font-size: 14px;
  color: tomato;
  margin-top: 2px;
`;

export const ToggleIcon = styled.div`
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  color: grey;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  border-radius: 20px;
  border: 2px solid rgb(253, 135, 6);
  color: rgb(253, 135, 6);
  background-color: transparent;
  padding: 10px 20px;
  font-size: 34px;
  margin-top: 50px;
  margin-bottom: 30px;
  &:hover {
    cursor: pointer;
    color: white;
    border: 2px solid orange;
    background-color: orange;
  }
  &:active {
    cursor: pointer;
    color: white;
    border: 2px solid orange;
    background-color: tomato;
  }
`;
export const MaskedInput = styled(InputMask)`
  border: none;
  border-bottom: 1px solid #888;
  font-size: 26px;
  font-style: italic;
  background-color: transparent;

  &::placeholder {
    font-size: 16px;
    color: #bbb;
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid orange;
  }
`;
