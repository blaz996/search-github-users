import {
  createSlice,
  createAsyncThunk,
  SerializedError,
  EmptyObject,
} from '@reduxjs/toolkit';

import { itemsPerPage } from '../../components/pagionation/Pagination';

import { fetchUsers, ProfilePreview } from '../../api/profilesApi';

import paginate from '../../utils/paginate';

export type ProfilesState = {
  profiles: ProfilePreview[][];
  isLoading: boolean;
  error: SerializedError;
};

export const initialState: ProfilesState = {
  profiles: [[]],
  isLoading: false,
  error: {},
};

export const getProfiles = createAsyncThunk(
  'users/getUsers',
  (searchName: string) => fetchUsers(searchName)
);

const profilesSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getProfiles.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(getProfiles.fulfilled, (state, action) => {
      state.isLoading = false;
      state.profiles = paginate(action.payload, itemsPerPage);
    });

    builder.addCase(getProfiles.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export default profilesSlice.reducer;
