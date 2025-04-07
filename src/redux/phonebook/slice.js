import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from './operations';
import { logoutUserThunk } from '../auth/operations';

const initialState = {
  contacts: [],
  filter: '',
};

const slice = createSlice({
  name: 'phonebook',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts = payload;
      })
      .addCase(logoutUserThunk.fulfilled, state => {
        return initialState;
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.push(payload);
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload
        );
      }),
  reducers: {
    filterContacts: (state, { payload }) => {
      state.filter = payload;
    },
  },
  selectors: {
    filterValue: state => state.filter,
    getContacts: state => state.contacts,
  },
});

export const phonebookReducer = slice.reducer;
export const { filterValue, getContacts } = slice.selectors;
export const { filterContacts } = slice.actions;
