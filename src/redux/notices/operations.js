import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://petlove.b.goit.study/api';

export const fetchNotices = createAsyncThunk(
  'notices/fetchAll',
  async ({ page = 1, limit = 6 }, thunkAPI) => {
    try {
      const { data } = await axios.get(`/notices?page=${page}&limit=${limit}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
