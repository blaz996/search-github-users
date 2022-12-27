import React from 'react';

import { useToogle } from '../../hooks/useToogle';

import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';

import Button from '../button/Button';
import { BUTTON_CLASS_TYPES } from '../button/Button';

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

      <Button onClick={setIsVisible} classType={BUTTON_CLASS_TYPES.COLLAPSE}>
        {isVisible ? <RiArrowUpSFill /> : <RiArrowDownSFill />}
      </Button>
    </>
  );
};

export default Collapse;
