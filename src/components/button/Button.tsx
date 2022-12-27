import React, { ButtonHTMLAttributes } from 'react';

import './Button.scss';

export enum BUTTON_CLASS_TYPES {
  PRIMARY = 'primary',
  LINK = 'link',
  COLLAPSE = 'collapse',
}

const getClassName = (classType = BUTTON_CLASS_TYPES.PRIMARY): string => {
  return {
    [BUTTON_CLASS_TYPES.PRIMARY]: 'btn--primary',
    [BUTTON_CLASS_TYPES.LINK]: 'btn--link',
    [BUTTON_CLASS_TYPES.COLLAPSE]: 'btn--collapse',
  }[classType];
};

export type ButtonProps = {
  classType?: BUTTON_CLASS_TYPES;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ classType, children, ...otherProps }: ButtonProps) => {
  const className = getClassName(classType);
  return (
    <button className={`btn ${className} `} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
