import React from 'react';

import { useAppSelector } from '../../store/hooks';

import { useToogle } from '../../hooks/useToogle';
import useMediaQuery from '../../hooks/useMediaQuery';

import { FaUser, FaBuilding } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';

import ProfileAditionalInfo from './ProfileAditionalInfo';
import ProfileFollowing from './ProfileFollowing';
import Collapse from '../collapse/Collapse';
import ProfileHead from './ProfileHead';

import './ProfileInfo.scss';

const ProfileInfo = () => {
  const profile = useAppSelector((state) => state.profile.profile);

  const matchesMediumScreen = useMediaQuery('(max-width:71.8125em)');
  const matchesSmallScreen = useMediaQuery('(max-width:39.9375em)');

  if (matchesMediumScreen && !matchesSmallScreen) {
    return (
      <div className='profile-info'>
        <div className='profile-info__top'>
          <ProfileHead
            avatar_url={profile.avatar_url}
            userName={profile.login}
            name={profile.name}
          />
          <div className='profile-info__aditional-info'>
            <ProfileAditionalInfo icon={<FaUser />} text={profile.bio} />
            <ProfileAditionalInfo
              icon={<FaBuilding />}
              text={profile.company}
            />

            <ProfileAditionalInfo
              icon={<HiLocationMarker />}
              text={profile.location}
            />
          </div>
        </div>

        <Collapse>
          <ProfileFollowing />
        </Collapse>
      </div>
    );
  }

  return (
    <div className='profile-info'>
      <ProfileHead
        avatar_url={profile.avatar_url}
        userName={profile.login}
        name={profile.name}
      />
      <Collapse>
        <ProfileAditionalInfo icon={<FaUser />} text={profile.bio} />
        <ProfileAditionalInfo icon={<FaBuilding />} text={profile.company} />
        <ProfileAditionalInfo
          icon={<HiLocationMarker />}
          text={profile.location}
        />
      </Collapse>
    </div>
  );
};

export default ProfileInfo;
