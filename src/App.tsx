import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './global/reset.scss';

import Home from './routes/home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
