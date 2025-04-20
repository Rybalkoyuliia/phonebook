import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  editContactThunk,
  fetchContactsThunk,
} from './operations';
import { logoutUserThunk } from '../auth/operations';

const initialState = {
  contacts: [],
  loading: false,
  isError: null,
  filter: '',
};

const slice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    filterContacts: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts = payload;
        state.loading = false;
        state.isError = false;
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.push(payload);
        state.loading = false;
        state.isError = false;
      })
      .addCase(editContactThunk.fulfilled, (state, { payload }) => {
        const contact = state.contacts.find(
          contact => contact.id === payload.id
        );
        if (contact) {
          if (payload.name) contact.name = payload.name;
          if (payload.number) contact.number = payload.number;
        }
        state.loading = false;
        state.isError = false;
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload
        );
        state.loading = false;
        state.isError = false;
      })
      .addCase(logoutUserThunk.fulfilled, () => initialState)
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.pending,
          addContactThunk.pending,
          editContactThunk.pending,
          deleteContactThunk.pending
        ),
        state => {
          state.loading = true;
          state.isError = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.rejected,
          addContactThunk.rejected,
          deleteContactThunk.rejected
        ),
        (state, { payload }) => {
          state.loading = false;
          state.isError = payload;
        }
      ),
  selectors: {
    selectFilterValue: state => state.filter,
    selectContacts: state => state.contacts,
    selectLoading: state => state.loading,
    selectIsError: state => state.isError,
  },
});

export const phonebookReducer = slice.reducer;
export const {
  selectFilterValue,
  selectContacts,
  selectLoading,
  selectIsError,
} = slice.selectors;
export const { filterContacts } = slice.actions;
