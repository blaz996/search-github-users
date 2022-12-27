import React from 'react';

import useMediaQuery from '../../hooks/useMediaQuery';

import ProfileInfo from '../../components/profiles/ProfileInfo';
import ProfileAtributes from '../../components/profiles/ProfileAtributes';
import ProfileFollowing from '../../components/profiles/ProfileFollowing';

import './ProfileDetails.scss';

import { PROFILE_LINKS } from './Profile';

const ProfileDetails = () => {
  const matchesMediumScreen = useMediaQuery('(max-width:71.8125em)');
  const matchesSmallScreen = useMediaQuery('(max-width:39.9375em)');

  console.log(matchesSmallScreen);
  if (matchesMediumScreen && !matchesSmallScreen) {
    return (
      <div className='profile-details'>
        <ProfileInfo />
        <ProfileAtributes />
      </div>
    );
  }

  return (
    <div className='profile-details'>
      <ProfileInfo />
      <ProfileAtributes />
      <ProfileFollowing />
    </div>
  );
};

export default ProfileDetails;
