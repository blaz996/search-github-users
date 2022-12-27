import React, { useState } from 'react';

import './Pagionation.scss';

export type PaginationProps = {
  activeIndex: number;
  changeActivePage: (i: number) => void;
};

export const itemsPerPage = 10;

const Pagination = ({ changeActivePage, activeIndex }: PaginationProps) => {
  const paginationArr = Array.from({ length: itemsPerPage }, (_, i) => i + 1);
  return (
    <div className='pagination'>
      {paginationArr.map((num, i) => (
        <button
          className={activeIndex === i ? 'active' : ''}
          key={i}
          onClick={() => changeActivePage(i)}
        >
          {num}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
