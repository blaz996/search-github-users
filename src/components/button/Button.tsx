import React from 'react';

import './Button.scss';

export enum BUTTON_CLASS_TYPES {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

const getClassName = (classType = BUTTON_CLASS_TYPES.PRIMARY): string => {
  return {
    [BUTTON_CLASS_TYPES.PRIMARY]: 'btn--primary',
    [BUTTON_CLASS_TYPES.SECONDARY]: 'btn--secondary',
  }[classType];
};

export type ButtonProps = {
  classType?: BUTTON_CLASS_TYPES;
  children: React.ReactNode;
};

const Button = ({ classType, children, ...otherProps }: ButtonProps) => {
  const className = getClassName(classType);
  return <button className={`btn ${className} `}>{children}</button>;
};

export default Button;
