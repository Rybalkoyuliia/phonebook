import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import {
  RegisterPage,
  PhonebookPage,
  NotFound,
  LoginPage,
} from '../pages/index';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUserThunk } from '../redux/auth/operations';
import PrivatRoute from '../routes/PrivatRoute';
import PublicRoute from '../routes/PublicRoute';
import { selectIsLoggedIn, selectIsRefreshing } from '../redux/auth/slice';
import Loader from './Loader/Loader';
import { fetchContactsThunk } from '../redux/phonebook/operations';

const App = () => {
  const isRefresh = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(refreshUserThunk());
    }
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContactsThunk());
    }
  }, [dispatch, isLoggedIn]);

  if (isRefresh) {
    return <Loader />;
  }

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute restricted={true}>
              <Layout />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute restricted={true}>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute restricted={true}>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivatRoute>
              <PhonebookPage />
            </PrivatRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
