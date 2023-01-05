import React from 'react';

import { useAppDispatch } from '../../store/hooks';

import { getProfile } from '../../store/profile/profileSlice';

import { fetchUser } from '../../api/profileApi';

import { Link } from 'react-router-dom';

import { Button } from '../Elements';

import './ProfilePreview.scss';

export type ProfilePreviewProps = {
  login: string;
  avatar_url: string;
};

const ProfilePreview = ({
  login: loginName,
  avatar_url,
}: ProfilePreviewProps) => {
  const dispatch = useAppDispatch();
  const navigateToProfile = () => {
    dispatch(getProfile(loginName));
  };
  return (
    <div className='profile-preview'>
      <img className='profile-preview__avatar' src={avatar_url} alt='' />
      <h3 className='profile-preview__name'>{loginName}</h3>
      <Link to={`/profile/${loginName}`}>
        <Button onClick={() => dispatch(getProfile(loginName))} size='small'>
          View Profile
        </Button>
      </Link>
    </div>
  );
};

export default ProfilePreview;
