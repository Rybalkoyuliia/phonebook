import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import {
  RegisterPage,
  PhonebookPage,
  NotFound,
  LoginPage,
} from '../pages/index';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<PhonebookPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
