import { createSlice } from '@reduxjs/toolkit';
import {
  loginUserThunk,
  logoutUserThunk,
  registerUserThunk,
} from './operations';

const initialState = {
  user: {
    name: '',
    email: '',
    password: '',
  },
  token: null,
  isLoading: false,
  error: null,
  isLogedIn: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  selectors: {
    selectIsLogedIn: state => state.isLogedIn,
  },
  extraReducers: builder =>
    builder
      .addCase(registerUserThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.token = payload.token;
        state.isLoading = false;
        state.isLogedIn = true;
      })
      .addCase(loginUserThunk.fulfilled, (state, { payload }) => {
        state.user.email = payload.user.email;
        state.user.password = payload.user.password;
        state.token = payload.token;
        state.isLoading = false;
        state.isLogedIn = true;
      })
      .addCase(logoutUserThunk.fulfilled, state => {
        return initialState;
      }),
});

export const authReducer = slice.reducer;
export const { selectIsLogedIn } = slice.selectors;
