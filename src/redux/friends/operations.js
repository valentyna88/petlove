import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://petlove.b.goit.study/api';

export const fetchFriends = createAsyncThunk(
  'friends/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/friends');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
