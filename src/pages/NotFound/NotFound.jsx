import React from 'react';
import {
  BackButton,
  Icon,
  SubTitle,
  Text,
  Title,
  Wrapper,
} from './NotFound.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/slice';

export const NotFound = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Wrapper>
      <Icon viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="32"
          cy="32"
          r="30"
          fill="rgb(253, 135, 6)"
          stroke="#c45500"
          strokeWidth="4"
        />
        <path
          d="M44 40C42.5 41.5 38 45 36 45C30 42 22 34 19 28C19 26 22.5 22.5 24 21L27 24C27 24 25 26 25 27C26.5 30.5 33.5 37.5 37 39C38 39 40 37 40 37L44 40Z"
          fill="white"
        />
      </Icon>
      <Title>404</Title>
      <SubTitle>Oops, contact not found!</SubTitle>
      <Text>Looks like you dialed the wrong URL.</Text>
      <BackButton to={isLoggedIn ? '/contacts' : '/login'}>
        Go back home
      </BackButton>
    </Wrapper>
  );
};
