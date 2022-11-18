import {
  createSlice,
  createAsyncThunk,
  SerializedError,
} from '@reduxjs/toolkit';

import { fetchUsers } from '../../api/usersApi';

export type usersState = {
  users: User[];
  isLoading: boolean;
  error: SerializedError;
};

export type User = {
  avatar_url: string;
  login: string;
  score: number;
  id: number;
};

export const initialState: usersState = {
  users: [],
  isLoading: false,
  error: {},
};

export const getUsers = createAsyncThunk(
  'users/getUsers',
  (searchName: string) => fetchUsers(searchName)
);

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    });

    builder.addCase(getUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export default userSlice.reducer;
