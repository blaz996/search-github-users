import React, { useEffect, useState } from 'react';

import { useAppSelector } from '../../store/hooks';
import { useAppDispatch } from '../../store/hooks';

import { setFilteredRepos } from '../../store/profile/profileSlice';

import Container from '../../components/container/Container';
import ProfileDetails from './ProfileDetails';
import ProfileRepos from './ProfileRepos';
import ProfilePage from '../../components/profiles/ProfilePage';
import { Button } from '@/components/Elements';

import ProfileStats from './ProfileStats';

import './Profile.scss';

export enum PROFILE_LINKS {
  PROFILE_DETAILS = 'profile-details',
  PROFILE_REPOS = 'profile-repos',
  PROFILE_STATS = 'profile-stats',
}

const Profile = () => {
  const isLoading = useAppSelector((state) => state.profile.isLoading);
  const repos = useAppSelector((state) => state.profile.profileRepos);

  const [activePage, setActivePage] = useState<PROFILE_LINKS>(
    PROFILE_LINKS.PROFILE_DETAILS
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (repos.length !== 0) {
      dispatch(setFilteredRepos());
    }
  }, [repos]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container className='profile'>
      <ul className='profile-links'>
        <li>
          <span
            className={`profile-links__link ${
              activePage === PROFILE_LINKS.PROFILE_DETAILS ? 'link--active' : ''
            }`}
            onClick={() => setActivePage(PROFILE_LINKS.PROFILE_DETAILS)}
          >
            details
          </span>
        </li>
        <li>
          <span
            className={`profile-links__link ${
              activePage === PROFILE_LINKS.PROFILE_STATS ? 'link--active' : ''
            }`}
            onClick={() => setActivePage(PROFILE_LINKS.PROFILE_STATS)}
          >
            stats
          </span>
        </li>
        <li>
          <span
            className={`profile-links__link ${
              activePage === PROFILE_LINKS.PROFILE_REPOS ? 'link--active' : ''
            }`}
            onClick={() => setActivePage(PROFILE_LINKS.PROFILE_REPOS)}
          >
            repos
          </span>
        </li>
      </ul>

      <ProfilePage
        activePage={activePage}
        targetPage={PROFILE_LINKS.PROFILE_DETAILS}
      >
        <ProfileDetails />
      </ProfilePage>

      <ProfilePage
        activePage={activePage}
        targetPage={PROFILE_LINKS.PROFILE_STATS}
      >
        <ProfileStats />
      </ProfilePage>

      <ProfilePage
        activePage={activePage}
        targetPage={PROFILE_LINKS.PROFILE_REPOS}
      >
        <ProfileRepos />
      </ProfilePage>
    </Container>
  );
};

export default Profile;
