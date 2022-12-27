import React from 'react';

import { useAppSelector } from '../../store/hooks';

import Card from '../card/Card';
import ProfileFollowingList from './ProfileFollowingList';

import './ProfileFollowing.scss';

const ProfileFollowing = () => {
  const profile = useAppSelector((state) => state.profile.profile);

  const profileFollowers = useAppSelector(
    (state) => state.profile.profile.followers
  );
  const profileFollowing = useAppSelector(
    (state) => state.profile.profile.following
  );
  return (
    <div className='profile-following'>
      <ProfileFollowingList
        title='followers'
        values={profileFollowers}
        url={profile.html_url}
      />

      <ProfileFollowingList
        title='following'
        values={profileFollowing}
        url={profile.html_url}
      />
    </div>
  );
};

export default ProfileFollowing;
