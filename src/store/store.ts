import { configureStore } from '@reduxjs/toolkit';
import profileSlice from './profile/profileSlice';
import profilesReducer from './profiles/profilesSlice';
import trendingSlice from './trending/trendingSlice';

export const store = configureStore({
  reducer: {
    profiles: profilesReducer,
    profile: profileSlice,
    trends: trendingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
