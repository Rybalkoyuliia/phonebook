import { createAsyncThunk } from '@reduxjs/toolkit';
import { authAPI, clearAuthHeader, setAuthHeader } from 'axiosConfig/authApi';

export const registerUserThunk = createAsyncThunk(
  'registerUser',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await authAPI.post('/users/signup', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUserThunk = createAsyncThunk(
  'loginUser',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await authAPI.post('/users/login', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUserThunk = createAsyncThunk(
  'logoutUser',
  async (_, thunkAPI) => {
    try {
      await authAPI.post('/users/logout');
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  'refreshUser',
  async (_, thunkAPI) => {
    const userToken = thunkAPI.getState().auth.token;
    if (!userToken) {
      return thunkAPI.rejectWithValue('Token is not exist!');
    }

    try {
      setAuthHeader(userToken);
      const { data } = await authAPI.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
