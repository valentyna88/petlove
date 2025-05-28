import { createSlice } from '@reduxjs/toolkit';
import { addNoticeToFavorites, removeNoticeFromFavorites } from './operations';

const initialState = {
  favorites: [],
  isLoading: false,
  error: null,
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addNoticeToFavorites.pending, state => {
        state.isLoading = true;
      })
      .addCase(addNoticeToFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.favorites = action.payload;
      })
      .addCase(addNoticeToFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(removeNoticeFromFavorites.pending, state => {
        state.isLoading = true;
      })
      .addCase(removeNoticeFromFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.favorites = action.payload;
      })
      .addCase(removeNoticeFromFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const favoritesReducer = favoritesSlice.reducer;
