import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  loginUserThunk,
  logoutUserThunk,
  refreshUserThunk,
  registerUserThunk,
} from './operations';
import { toast } from 'react-toastify';

const initialState = {
  user: {
    name: '',
    email: '',
    password: '',
  },
  token: null,
  isLoading: false,
  error: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  selectors: {
    selectIsLoggedIn: state => state.isLoggedIn,
    selectIsRefreshing: state => state.isRefreshing,
    selectIsLoading: state => state.isLoading,
  },
  extraReducers: builder =>
    builder
      .addCase(logoutUserThunk.pending, (state, { payload }) => {
        state.isLoading = true;
        // state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(logoutUserThunk.fulfilled, state => {
        return initialState;
      })
      .addCase(logoutUserThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.error = payload;
        toast.error(payload);
      })
      .addCase(refreshUserThunk.pending, state => {
        state.isRefreshing = true;
        state.isLoading = true;
      })
      .addCase(refreshUserThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(refreshUserThunk.rejected, state => {
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(registerUserThunk.pending, loginUserThunk.pending),
        state => {
          state.isLoading = true;
          state.isLoggedIn = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(registerUserThunk.fulfilled, loginUserThunk.fulfilled),
        (state, { payload }) => {
          state.user.name = payload.user.name;
          state.user.email = payload.user.email;
          state.token = payload.token;
          state.isLoading = false;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        isAnyOf(registerUserThunk.rejected, loginUserThunk.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.isLoggedIn = false;
          state.error = payload;
          toast.error(payload);
        }
      ),
});

export const authReducer = slice.reducer;
export const { selectIsLoggedIn, selectIsRefreshing, selectIsLoading } =
  slice.selectors;
