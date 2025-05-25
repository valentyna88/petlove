import { createAsyncThunk } from '@reduxjs/toolkit';
import { authInstance } from '../auth/operations';
import toast from 'react-hot-toast';

export const addNoticeToFavorites = createAsyncThunk(
  'favorites/add',
  async (noticeId, thunkAPI) => {
    try {
      const { data } = await authInstance.post(
        `/notices/favorites/add/${noticeId}`
      );
      return data;
    } catch (e) {
      if (e.response && e.response.status === 409) {
        toast('This notice is already in your favorites!');
        const state = thunkAPI.getState();
        return state.favorites.favorites;
      }
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeNoticeFromFavorites = createAsyncThunk(
  'favorites/remove',
  async (noticeId, thunkAPI) => {
    try {
      const { data } = await authInstance.delete(
        `/notices/favorites/remove/${noticeId}`
      );
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
