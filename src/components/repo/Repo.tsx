import React from 'react';

import './Repo.scss';

export type RepoProps = {
  name: string;
  stars: number;
  forks: number;
  language: string;
};

const Repo = ({ name, stars, forks, language }: RepoProps) => {
  return (
    <div className='repos__row repo'>
      <p className='repo__name'>{name}</p>
      <p className='repo__stat'>{stars}</p>
      <p className='repo__stat'>{forks}</p>
      <p className='repo__stat'>{language ? language : 'Uknown'}</p>
    </div>
  );
};

export default Repo;
