import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

export const authInstance = axios.create({
  baseURL: 'https://petlove.b.goit.study/api',
});

export const setToken = token => {
  authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearToken = () => {
  authInstance.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await authInstance.post('/users/signup', credentials);
      setToken(data.token);
      return data;
    } catch (e) {
      if (e.response?.status === 409) {
        toast.error('This email is already in use. Try logging in.');
      } else {
        toast.error(e.response?.data?.message || 'Error, Invalid data');
      }
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await authInstance.post('/users/signin', credentials);
      setToken(data.token);
      return data;
    } catch (e) {
      toast.error(e.response?.data?.message || 'Error, Invalid data');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
