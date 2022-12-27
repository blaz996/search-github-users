import React from 'react';

import { pxToRem } from '../../utils/css-converters';

import './Container.scss';

export type SpacingVal = {
  x: number;
  y: number;
};

export type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

const Container = ({ children, className }: ContainerProps) => {
  return <div className={`container ${className}`}>{children}</div>;
};

export default Container;
