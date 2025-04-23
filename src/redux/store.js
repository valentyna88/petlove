import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './news/slice';
import friendsReducer from './friends/slice';
import noticesReducer from './notices/slice';

export const store = configureStore({
  reducer: {
    news: newsReducer,
    friends: friendsReducer,
    notices: noticesReducer,
  },
});
