import React, { ReactElement } from 'react';

import { useAppSelector } from '../../store/hooks';
import { Profile } from '../../store/profile/profileSlice';
import { FaStar } from 'react-icons/fa';
import { BsPersonCheckFill, BsPersonFill } from 'react-icons/bs';
import { RiGitRepositoryLine } from 'react-icons/ri';
import ProfileAtribute from './ProfileAtribute';
import { IconType } from 'react-icons';

import ProfileFollowing from './ProfileFollowing';

import './ProfileAtributes.scss';

export interface Atribute {
  valuea: keyof Profile;
  icon: any;
  color: string;
  iconBgColor: string;
  label: string;
}

const ATRIBUTES_DATA: Atribute[][] = [
  [
    {
      valuea: 'followers_num',
      icon: <BsPersonCheckFill />,
      color: '120, 86%, 43%',
      iconBgColor: '120, 100%, 78%',
      label: 'Followers',
    },
    {
      valuea: 'following_num',
      icon: <BsPersonFill />,
      color: '300, 100%, 28%',
      iconBgColor: '300, 100%, 80%',
      label: 'Following',
    },
  ],
  [
    {
      valuea: 'public_repos',
      icon: <RiGitRepositoryLine />,
      color: '210, 100%, 56%',
      iconBgColor: '210, 100%, 80%',
      label: 'Repos',
    },

    {
      valuea: 'totalStars',
      icon: <FaStar />,
      color: '60, 100%, 46%',
      iconBgColor: '60, 100%, 65%',
      label: 'Stars',
    },
  ],
];

const ProfileAtributes = () => {
  const profile = useAppSelector((state) => state.profile.profile);
  return (
    <div className='profile-atributes'>
      {ATRIBUTES_DATA.map((atribute) => {
        return (
          <div key={atribute[0].valuea} className='profile-atributes__col'>
            <ProfileAtribute
              value={profile[atribute[0].valuea] as number}
              {...atribute[0]}
            />
            <ProfileAtribute
              value={profile[atribute[1].valuea] as number}
              {...atribute[1]}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProfileAtributes;
