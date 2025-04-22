import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './news/slice';
import friendsReducer from './friends/slice';

export const store = configureStore({
  reducer: {
    news: newsReducer,
    friends: friendsReducer,
  },
});
