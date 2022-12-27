import React, { useState } from 'react';

import ProfilePreview from './ProfilePreview';

import { useAppSelector } from '../../store/hooks';

import './Profiles.scss';
import Pagination from '../pagionation/Pagination';

const Profiles = () => {
  const profiles = useAppSelector((state) => state.profiles.profiles);
  const isLoading = useAppSelector((state) => state.profiles.isLoading);
  const [pageActiveIndex, setPageActiveIndex] = useState(0);

  const currentPage = profiles.slice()[pageActiveIndex];

  console.log(profiles);

  const changeActivePage = (index: number) => {
    setPageActiveIndex(index);
  };

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  if (currentPage.length === 0 || !currentPage) {
    return <></>;
  }

  return (
    <section className='profiles'>
      <div className='profiles__container'>
        {currentPage.map((user) => {
          return <ProfilePreview key={user.id} {...user} />;
        })}
      </div>
      <Pagination
        activeIndex={pageActiveIndex}
        changeActivePage={changeActivePage}
      />
    </section>
  );
};

export default Profiles;
