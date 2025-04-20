import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const shake = keyframes`
  0% { transform: rotate(0deg); }
  20% { transform: rotate(-15deg); }
  40% { transform: rotate(15deg); }
  60% { transform: rotate(-10deg); }
  80% { transform: rotate(10deg); }
  100% { transform: rotate(0deg); }
`;

export const Wrapper = styled.div`
  background-color: #fef4ec;
  color: #333;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  margin: 0;
`;

export const Icon = styled.svg`
  width: 80px;
  margin-bottom: 20px;
  animation: ${shake} 1.5s infinite;
`;

export const Title = styled.h1`
  font-size: 120px;
  margin: 0;
  color: rgb(253, 135, 6);
`;

export const SubTitle = styled.h2`
  font-size: 28px;
  margin: 10px 0;
`;

export const Text = styled.p`
  font-size: 18px;
  margin: 5px 0 20px;
`;

export const BackButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: rgb(253, 135, 6);
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c45500;
  }
`;
