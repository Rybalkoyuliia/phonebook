import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefreshing } from '../redux/auth/slice';

const PublicRoute = ({ children, restricted = false }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  if (isRefreshing) {
    return <h1>Loading</h1>;
  }

  if (isLoggedIn && restricted) {
    return <Navigate to="/contacts" replace />;
  }

  return children;
};

export default PublicRoute;
