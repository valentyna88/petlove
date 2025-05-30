import { createSlice } from '@reduxjs/toolkit';
import { fetchNews } from './operations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  news: [],
  currentPage: 1,
  totalPages: 0,
  limit: 6,
  searchQuery: '',
  isLoading: false,
  error: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchNews.pending, handlePending)
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.news = action.payload.results;
        state.currentPage = action.payload.page;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchNews.rejected, handleRejected);
  },
});

export const { setSearchQuery } = newsSlice.actions;
export default newsSlice.reducer;
