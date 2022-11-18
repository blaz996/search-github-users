import React from 'react';

import SearchBar from '../../components/search-bar/SearchBar';
import Users from '../../components/users/Users';

const Home = () => {
  return (
    <div className='home-page__container'>
      <SearchBar />
      <Users />
    </div>
  );
};

export default Home;
