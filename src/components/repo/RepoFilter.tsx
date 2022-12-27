import React, { useState, ComponentType, useEffect } from 'react';

import { IconBaseProps } from 'react-icons';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

import { Filter } from '../../routes/profile/ProfileRepos';
import { RepoData } from '../../api/profileApi';

import './RepoFilter.scss';

export type RepoFilterProps = {
  Icon?: ComponentType<IconBaseProps>;
  filterValue: keyof RepoData;
  currFilter: Filter;
  updateCurrFilter: (arg: Filter) => void;
};

const RepoFilter = ({
  Icon,
  filterValue,
  currFilter,
  updateCurrFilter,
}: RepoFilterProps) => {
  const [filterOrder, setFilterOrder] = useState('');

  const isCurrentFilter = filterValue === currFilter.filterValue ? true : false;

  useEffect(() => {
    if (isCurrentFilter) setFilterOrder(currFilter.order);
    else setFilterOrder('');
  }, [currFilter]);

  return (
    <div className='repo__icon'>
      <button
        onClick={() => updateCurrFilter({ filterValue, order: filterOrder })}
        className={`icon__btn ${isCurrentFilter && 'icon__btn--active'}`}
      >
        {Icon ? <Icon className='icon__btn--stat' /> : filterValue}
        {filterOrder &&
          (filterOrder === 'ascending' ? (
            <AiOutlineArrowUp className='icon__btn--arrow' />
          ) : (
            <AiOutlineArrowDown className='icon__btn--arrow' />
          ))}
      </button>
    </div>
  );
};

export default RepoFilter;
