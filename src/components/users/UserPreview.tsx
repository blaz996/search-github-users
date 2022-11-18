import React from 'react';

import Button from '../button/Button';
import { BUTTON_CLASS_TYPES } from '../button/Button';

import './UserPreview.scss';

export type UserPreviewProps = {
  login: string;
  avatar_url: string;
  score: number;
};

const UserPreview = ({ login, avatar_url, score }: UserPreviewProps) => {
  return (
    <div className='user-preview'>
      <img className='user-preview__avatar' src={avatar_url} alt='' />
      <h3 className='user-preview__name'>{login}</h3>
      <Button classType={BUTTON_CLASS_TYPES.PRIMARY}>View user</Button>
    </div>
  );
};

export default UserPreview;
