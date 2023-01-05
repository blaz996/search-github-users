import React, { ReactElement } from 'react';
import { IconBaseProps, IconType } from 'react-icons';

import { Atribute } from './ProfileAtributes';

import './ProfileAtribute.scss';

interface ProfileAtributeProps {
  value: number;
  icon: any;
  color?: string;
  iconBgColor?: string;
  label?: string;
}

const ProfileAtribute = ({
  value,
  icon,
  color,
  iconBgColor,
  label,
}: ProfileAtributeProps) => {
  return (
    <div
      className='profile-atribute'
      style={{ backgroundColor: `hsl(${color})` }}
    >
      <div
        className='profile-atribute__icon'
        style={{
          color: `hsl(${color})`,
          backgroundColor: `hsl(${iconBgColor})`,
        }}
      >
        {icon}
      </div>
      <div className='profile-atribute__value'>
        <span>{label}</span>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default ProfileAtribute;
