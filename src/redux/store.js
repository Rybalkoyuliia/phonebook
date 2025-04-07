import { configureStore } from '@reduxjs/toolkit';
import { phonebookReducer } from './phonebook/slice';
import { authReducer } from './auth/slice';

export const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
    auth: authReducer,
  },

  devTools: process.env.NODE_ENV !== 'production',
});
