import React from 'react';

import { useAppDispatch } from '../../store/hooks';

import { getProfile } from '../../store/profile/profileSlice';

import { fetchUser } from '../../api/profileApi';

import { Link } from 'react-router-dom';

import Button from '../button/Button';
import { BUTTON_CLASS_TYPES } from '../button/Button';

import './ProfilePreview.scss';

export type ProfilePreviewProps = {
  login: string;
  avatar_url: string;
};

const ProfilePreview = ({ login, avatar_url }: ProfilePreviewProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className='profile-preview'>
      <img className='profile-preview__avatar' src={avatar_url} alt='' />
      <h3 className='profile-preview__name'>{login}</h3>
      <Link to={`profile/${login}`}>
        <Button
          onClick={() => dispatch(getProfile(login))}
          classType={BUTTON_CLASS_TYPES.PRIMARY}
        >
          View Profile
        </Button>
      </Link>
    </div>
  );
};

export default ProfilePreview;
