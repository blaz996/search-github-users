import React from 'react';

import { PROFILE_LINKS } from '../../routes/profile/Profile';

import './ProfilePage.scss';

export type ProfilePageProps = {
  activePage: PROFILE_LINKS;
  targetPage: PROFILE_LINKS;
  children: React.ReactNode;
};

const ProfilePage = ({
  activePage,
  targetPage,
  children,
}: ProfilePageProps) => {
  return (
    <div
      className={`profile-page ${
        activePage === targetPage
          ? 'profile-page--active'
          : 'profile-page--hidden'
      }`}
    >
      {children}
    </div>
  );
};

export default ProfilePage;
