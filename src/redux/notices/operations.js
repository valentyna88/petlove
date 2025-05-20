import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://petlove.b.goit.study/api';

export const fetchNotices = createAsyncThunk(
  'notices/fetchAll',
  async ({ page = 1, limit = 6, searchQuery, filters = {} }, thunkAPI) => {
    try {
      const params = new URLSearchParams();
      params.append('page', page);
      params.append('limit', limit);

      if (searchQuery) params.append('keyword', searchQuery);
      if (filters.category) params.append('category', filters.category);
      if (filters.petType) params.append('species', filters.petType);
      if (filters.locationId) params.append('locationId', filters.locationId);
      if (filters.gender) params.append('sex', filters.gender);

      if (filters.sort) {
        switch (filters.sort) {
          case 'popular':
            params.append('byPopularity', true);
            break;
          case 'unpopular':
            params.append('byPopularity', false);
            break;
          case 'cheap':
            params.append('byPrice', true);
            break;
          case 'expensive':
            params.append('byPrice', false);
            break;
          default:
            break;
        }
      }

      const { data } = await axios.get(`/notices?${params.toString()}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const fetchCategories = createAsyncThunk(
  'notices/fetchCategories',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/notices/categories');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchGenders = createAsyncThunk(
  'notices/fetchGenders',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/notices/sex');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchPetTypes = createAsyncThunk(
  'notices/fetchPetTypes',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/notices/species');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchLocations = createAsyncThunk(
  'notices/fetchLocations',
  async (searchTerm = '', thunkAPI) => {
    try {
      if (searchTerm.trim().length < 3) {
        return [];
      }

      const params = new URLSearchParams();
      params.append('keyword', searchTerm.trim());

      const { data } = await axios.get(`/cities/?${params.toString()}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
