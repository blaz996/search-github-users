import React, { ReactElement } from 'react';
import { IconType } from 'react-icons/lib';

import './ProfileAditionalInfo.scss';

export type ProfileAditionalInfoProps = {
  icon: ReactElement<IconType>;
  text: string;
};

const ProfileAditionalInfo = ({ icon, text }: ProfileAditionalInfoProps) => {
  return (
    <div className='aditional-info'>
      <>{icon}</>
      <p>{text ? text : 'Unknown'}</p>
    </div>
  );
};

export default ProfileAditionalInfo;
