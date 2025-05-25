import { createSlice } from '@reduxjs/toolkit';
import {
  fetchNotices,
  fetchCategories,
  fetchGenders,
  fetchPetTypes,
  fetchLocations,
  fetchNoticeById,
} from './operations';

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
  categories: [],
  genders: [],
  petTypes: [],
  locations: [],
  noticeDetails: null,
  currentPage: 1,
  totalPages: 0,
  limit: 6,
  searchQuery: '',
  filters: {
    category: '',
    gender: '',
    petType: '',
    location: '',
    sort: '',
  },
  isLoading: false,
  error: null,
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
      if (action.payload.locationId === '') {
        state.locations = [];
      }
    },
    clearNoticeDetails(state) {
      state.noticeDetails = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchNotices.pending, handlePending)
      .addCase(fetchNotices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.notices = action.payload.results;
        state.currentPage = action.payload.page;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchNotices.rejected, handleRejected)

      .addCase(fetchCategories.pending, handlePending)
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, handleRejected)

      .addCase(fetchGenders.pending, handlePending)
      .addCase(fetchGenders.fulfilled, (state, action) => {
        state.genders = action.payload;
      })
      .addCase(fetchGenders.rejected, handleRejected)

      .addCase(fetchPetTypes.pending, handlePending)
      .addCase(fetchPetTypes.fulfilled, (state, action) => {
        state.petTypes = action.payload;
      })
      .addCase(fetchPetTypes.rejected, handleRejected)

      .addCase(fetchLocations.pending, handlePending)
      .addCase(fetchLocations.fulfilled, (state, action) => {
        state.locations = action.payload;
      })
      .addCase(fetchLocations.rejected, handleRejected)

      .addCase(fetchNoticeById.fulfilled, (state, action) => {
        state.noticeDetails = action.payload;
      });
  },
});
export const { setFilters, setSearchQuery, clearNoticeDetails } =
  noticesSlice.actions;

export default noticesSlice.reducer;
