// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   favorites: [],
// };

// const favoritesSlice = createSlice({
//   name: 'favorites',
//   initialState,
//   reducers: {
//     addFavorite(state, action) {
//       const exists = state.favorites.some(
//         notice => notice.id === action.payload.id
//       );

//       if (!exists) {
//         state.favorites.push(action.payload);
//       }
//     },
//     removeFavorite(state, action) {
//       state.favorites = state.favorites.filter(
//         notice => notice.id !== action.payload
//       );
//     },
//   },
// });

// export const { addFavorite, removeFavorite } = favoritesSlice.actions;
// export const favoritesReducer = favoritesSlice.reducer;

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
