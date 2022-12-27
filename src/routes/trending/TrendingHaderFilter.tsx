import React from 'react';

import Select from '../../components/input/Select';

import './TrendingHeaderFilter.scss';

export type TrendingHaderFlterProps = {
  filters: string[];
  setCurrFilter: (val: string) => void;
  title: string;
};

const TrendingHaderFilter = ({
  filters,
  setCurrFilter,
  title,
}: TrendingHaderFlterProps) => {
  return (
    <div className='trending__header'>
      <h1 className='heading--trending'>{title}</h1>
      <Select
        label='language'
        defaultOption='javascript'
        options={filters}
        onChange={(e) => setCurrFilter(e.target.value)}
      />
    </div>
  );
};

export default TrendingHaderFilter;
