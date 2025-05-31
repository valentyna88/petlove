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
      console.log('LOGIN DATA:', data);
      setToken(data.token);
      return data;
    } catch (e) {
      toast.error(e.response?.data?.message || 'Error, Invalid data');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue('No valid token to refresh user data');
    }
    try {
      setToken(token);
      const { data } = await authInstance.get('/users/current/full');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await authInstance.post('/users/signout');
      clearToken();
      return {};
    } catch (e) {
      toast.error('Error, server not answer');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editUser = createAsyncThunk(
  'auth/edit',
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    if (!token) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setToken(token);
      const { data } = await authInstance.patch(
        '/users/current/edit',
        credentials
      );
      return data;
    } catch (e) {
      toast.error(e.response?.data?.message || 'Error, Invalid data');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
