import React from 'react';

import useMediaQuery from '../../hooks/useMediaQuery';

import './ProfileFollowingItem.scss';

export type ProfileFollowingItemProps = {
  link: string;
  img: string;
  name: string;
};

const ProfileFollowingItem = ({
  link,
  img,
  name,
}: ProfileFollowingItemProps) => {
  const matchesSmallScreen = useMediaQuery('(max-width:39.9375em)');
  return (
    <div className='profile-following__item'>
      <img src={img} alt='' />
      <div className='item__details'>
        <p>{name}</p>
        <a href={link}>{matchesSmallScreen ? 'View on Github' : link}</a>
      </div>
    </div>
  );
};

export default ProfileFollowingItem;
