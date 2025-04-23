import { createSlice } from '@reduxjs/toolkit';
import { fetchNotices } from './operations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  notices: [],
  currentPage: 1,
  totalPages: 0,
  limit: 6,
  isLoading: false,
  error: null,
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchNotices.pending, handlePending)
      .addCase(fetchNotices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.notices = action.payload.results;
        state.currentPage = action.payload.page;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchNotices.rejected, handleRejected);
  },
});

export default noticesSlice.reducer;
