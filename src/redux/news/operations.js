import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://petlove.b.goit.study/api';

export const fetchNews = createAsyncThunk(
  'news/fetchAll',
  async ({ page = 1, limit = 6, searchQuery }, thunkAPI) => {
    try {
      const params = new URLSearchParams({
        page,
        limit,
        ...(searchQuery ? { keyword: searchQuery } : {}),
      });

      const response = await axios.get(`/news?${params.toString()}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
