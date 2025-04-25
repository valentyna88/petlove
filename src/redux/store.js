import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/slice';
import newsReducer from './news/slice';
import friendsReducer from './friends/slice';
import noticesReducer from './notices/slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    news: newsReducer,
    friends: friendsReducer,
    notices: noticesReducer,
  },
});
