import React, { useState, FormEvent, useEffect } from 'react';

import { getUsers } from '../../store/users/usersSlice';
import { useAppDispatch } from '../../store/hooks';

import { FaSearch } from 'react-icons/fa';

import './SearchBar.scss';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchValue);
    dispatch(getUsers(searchValue));
  };

  return (
    <form onSubmit={handleSubmit} className='search-bar'>
      <input
        placeholder='Search user...'
        type='text'
        className='search-bar__input'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button>
        <FaSearch className='search-bar__icon' />
      </button>
    </form>
  );
};

export default SearchBar;
