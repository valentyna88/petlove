import { createSlice } from '@reduxjs/toolkit';
import { fetchFriends } from './operations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  friends: [],
  isLoading: false,
  error: null,
};

const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchFriends.pending, handlePending)
      .addCase(fetchFriends.fulfilled, (state, action) => {
        state.isLoading = false;
        state.friends = action.payload;
      })
      .addCase(fetchFriends.rejected, handleRejected);
  },
});

export default friendsSlice.reducer;
