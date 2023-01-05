import React from 'react';

import { ProfileData } from '../../api/profileApi';
import { ProfilePreview } from '../../api/profilesApi';

import ProfileFollowingItem from './ProfileFollowingItem';

import { useAppSelector } from '../../store/hooks';

import { Button } from '../Elements';

import './ProfileFollowingList.scss';

export type ProfileFollowingListProps = {
  values: ProfilePreview[];
  title: string;
  url?: string;
};

const ProfileFollowingList = ({
  values,
  url,
  title,
}: ProfileFollowingListProps) => {
  return (
    <div className='profile-following__list'>
      <h1>{title}</h1>
      {values.map((value) => {
        return (
          <ProfileFollowingItem
            link={value.html_url}
            img={value.avatar_url}
            name={value.login}
          />
        );
      })}
      <a href={`${url}?tab=followers`}>
        <Button>View all {title}</Button>
      </a>
    </div>
  );
};

export default ProfileFollowingList;
