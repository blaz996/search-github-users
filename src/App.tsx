import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './global/reset.scss';

import Home from './routes/home/Home';
import Profile from './routes/profile/Profile';
import SharedLayout from './routes/shared-layout/SharedLayout';
import TrendingRepos from './routes/trending/TrendingRepos';

function App() {
  return (
    <>
      <Routes>
        <Route element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='/profile/:profileName' element={<Profile />} />
          <Route path='/trending-repos' element={<TrendingRepos />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
