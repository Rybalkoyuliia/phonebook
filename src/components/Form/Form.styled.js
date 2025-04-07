import styled from 'styled-components';

export const StyledForm = styled.form`
  margin: auto;
  margin-top: 100px;
  padding: 60px 5px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: white;
  width: 40%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin-bottom: 30px;
    font-size: 44px;
  }

  div {
    display: flex;
    flex-direction: column;
    position: relative;

    label {
      margin: 10px 0;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    div {
      input {
        border: none;
        border-bottom: 0.5px solid black;
        font-style: italic;
        font-size: 26px;
        &::placeholder {
          font-size: 18px;
        }

        &:focus {
          outline: none;
        }
      }
      button {
        position: absolute;
        right: -20px;
        bottom: -45px;
        background-color: transparent;
        font-size: 26px;
        color: grey;
        &:hover {
          cursor: pointer;
        }
      }
      span {
        font-size: 14px;
        color: tomato;
      }
    }
  }

  button {
    background-color: #d3d3d3;
    border: none;
    padding: 10px 20px;
    font-size: 34px;
    margin-top: 20px;
    margin-bottom: 30px;
    border-radius: 8px;
    &:hover {
      cursor: pointer;
    }
  }
`;
