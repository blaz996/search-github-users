import {
  createSlice,
  createAsyncThunk,
  SerializedError,
  PayloadAction,
} from '@reduxjs/toolkit';

import { ProfileData } from '../../api/profileApi';
import { ProfilePreview } from '../../api/profilesApi';
import { RepoData } from '../../api/profileApi';

import { Filter } from '../../routes/profile/ProfileRepos';

import { fetchUser } from '../../api/profileApi';

import { sortByRepoString } from '../../utils/sort';
import { sortByRepoStat } from '../../utils/sort';

export type Profile = {
  followers: ProfilePreview[];
  following: ProfilePreview[];
  totalStars: number;
} & ProfileData;

export type ProfileState = {
  profile: Profile;
  profileRepos: RepoData[];
  filteredProfileRepos: RepoData[];
  isLoading: boolean;
  error?: SerializedError;
};

const profileInitalState: ProfileState = {
  profile: {} as Profile,
  profileRepos: [],
  filteredProfileRepos: [],
  isLoading: false,
  error: {},
};

export const getProfile = createAsyncThunk(
  'profile/getProfile',
  (userName: string) => fetchUser(userName)
);

const profileSlice = createSlice({
  name: 'profile',
  initialState: profileInitalState,
  reducers: {
    setFilteredRepos(state) {
      state.filteredProfileRepos = sortByRepoString(
        state.profileRepos.slice(),
        'name',
        'ascending'
      );
    },
    updateFilteredRepos(state, action: PayloadAction<Filter>) {
      const { filterValue, order } = action.payload;
      if (filterValue === 'name' || filterValue === 'language') {
        state.filteredProfileRepos = sortByRepoString(
          state.filteredProfileRepos.slice(),
          filterValue,
          order
        );
      } else {
        state.filteredProfileRepos = sortByRepoStat(
          state.filteredProfileRepos.slice(),
          order,
          filterValue
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProfile.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getProfile.fulfilled, (state, action) => {
      const { profile, profileFollowers, profileFollowing, profileRepos } =
        action.payload;
      state.isLoading = false;

      const totalStars = profileRepos.reduce(
        (acc, currRepo: RepoData) => (acc += currRepo.stargazers_count),
        0
      );

      const formatedRepos = profileRepos.map((repo) =>
        !repo.language ? { ...repo, language: 'Unknown' } : { ...repo }
      );

      state.profile = {
        ...profile,
        followers: profileFollowers,
        following: profileFollowing,
        totalStars,
      };
      state.profileRepos = formatedRepos;
    });
  },
});

export const { setFilteredRepos, updateFilteredRepos } = profileSlice.actions;

export default profileSlice.reducer;
