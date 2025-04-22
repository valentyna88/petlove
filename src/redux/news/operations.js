import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://petlove.b.goit.study/api';

export const fetchNews = createAsyncThunk(
  'news/fetchAll',
  async ({ page = 1, limit = 6 }, thunkAPI) => {
    try {
      const { data } = await axios.get(`/news?page=${page}&limit=${limit}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
