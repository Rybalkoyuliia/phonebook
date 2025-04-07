import styled from 'styled-components';

export const StyledContentWrapper = styled.div`
  padding: 80px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  h2 {
    text-align: center;
    color: rgb(253, 135, 6);
  }
  ul {
    display: flex;
    gap: 40px;
    li {
      button {
        font-size: 30px;
        border-radius: 8px;
        border: 1px solid rgb(253, 135, 6);
        color: rgb(253, 135, 6);
        padding: 5px 10px;
        &:hover,
        &:focus {
          background-color: rgb(253, 135, 6);
          color: white;
          cursor: pointer;
          outline: none;
        }
        &:active {
          background-color: tomato;
        }
      }
    }
  }
`;
