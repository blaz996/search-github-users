import React from 'react';

import { useToogle } from '../../hooks/useToogle';

import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';

import { Button } from '../Elements';

import './Collapse.scss';

export type Collapse = {
  height?: number;
  children: React.ReactNode;
};

const Collapse = ({ height, children }: Collapse) => {
  const [isVisible, setIsVisible] = useToogle();
  const modalHeight = height ? `${height}px` : '100%';
  return (
    <>
      <div
        className={isVisible ? 'collapse--visible' : 'collapse--hidden'}
        style={{ height: isVisible ? modalHeight : '0' }}
      >
        {children}
      </div>

      <Button onClick={setIsVisible}>
        {isVisible ? <RiArrowUpSFill /> : <RiArrowDownSFill />}
      </Button>
    </>
  );
};

export default Collapse;
