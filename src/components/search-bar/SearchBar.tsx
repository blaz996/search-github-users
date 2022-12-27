import React, { useState, FormEvent } from 'react';

import { getProfiles } from '../../store/profiles/profilesSlice';
import { useAppDispatch } from '../../store/hooks';

import { FaSearch } from 'react-icons/fa';

import './SearchBar.scss';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchValue);
    dispatch(getProfiles(searchValue));
  };

  return (
    <form onSubmit={handleSubmit} className='search-bar'>
      <input
        placeholder='Search user...'
        type='text'
        className='search-bar__input'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value.trim())}
      />
      <button>
        <FaSearch className='search-bar__icon' />
      </button>
    </form>
  );
};

export default SearchBar;
