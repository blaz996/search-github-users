import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './global/reset.scss';

//REMOVE
import { generateRange } from './utils/range';

import Home from './routes/home/Home';
import Search from './routes/search/SearchProfiles';
import Profile from './routes/profile/Profile';
import SharedLayout from './routes/shared-layout/SharedLayout';
import TrendingRepos from './routes/trending/TrendingRepos';

function App() {
  console.log(generateRange(6, 4));
  return (
    <>
      <Routes>
        <Route element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/profile/:profileName' element={<Profile />} />
          <Route path='/trending-repos' element={<TrendingRepos />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
