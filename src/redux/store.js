import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './news/slice';

export const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});
