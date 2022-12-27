import {
  createAsyncThunk,
  createSlice,
  SerializedError,
} from '@reduxjs/toolkit';

import { fetchTrendingRepos } from '../../api/trendingApi';

import { RepoData } from '../../api/profileApi';

export type TrendingState = {
  trendingRepos: RepoData[];

  isLoading: boolean;
  error?: SerializedError;
};

export const trendingInitalState: TrendingState = {
  trendingRepos: [],
  isLoading: false,
  error: {},
};

export const getTrendingRepos = createAsyncThunk(
  'trending/getTrendingItems',
  (language: string) => fetchTrendingRepos(language)
);

const trendingSlice = createSlice({
  name: 'trends',
  initialState: trendingInitalState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTrendingRepos.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getTrendingRepos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.trendingRepos = action.payload;
    });
    builder.addCase(getTrendingRepos.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export default trendingSlice.reducer;
