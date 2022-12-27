import React, { useEffect, useState } from 'react';

import { IconType } from 'react-icons/lib';
import { AiOutlineStar } from 'react-icons/ai';
import { SiJavascript } from 'react-icons/si';
import { BiGitRepoForked } from 'react-icons/bi';

import { useAppSelector } from '../../store/hooks';
import { useAppDispatch } from '../../store/hooks';

import { setFilteredRepos } from '../../store/profile/profileSlice';
import { updateFilteredRepos } from '../../store/profile/profileSlice';

import { RepoData } from '../../api/profileApi';

import Repo from '../../components/repo/Repo';
import RepoFilter from '../../components/repo/RepoFilter';

import './ProfileRepos.scss';

export type FiltersData = {
  Icon?: IconType;
  filterValue: keyof RepoData;
};

const FILTERS_DATA: FiltersData[] = [
  { filterValue: 'name' },
  { Icon: AiOutlineStar, filterValue: 'stargazers_count' },
  { Icon: BiGitRepoForked, filterValue: 'forks' },
  { Icon: SiJavascript, filterValue: 'language' },
];

export type Filter = {
  filterValue: keyof RepoData;
  order: string;
};

const ProfileRepos = () => {
  const repos = useAppSelector((state) => state.profile.profileRepos);
  const [currFilter, setCurrFilter] = useState<Filter>({
    filterValue: 'name',
    order: 'ascending',
  });
  const dispatch = useAppDispatch();

  const updateCurrFilter = ({ filterValue, order }: Filter) => {
    const updatedOrder = order === 'ascending' ? 'descending' : 'ascending';

    if (filterValue === currFilter.filterValue) {
      setCurrFilter((oldFilter) => ({ ...oldFilter, order: updatedOrder }));
    } else setCurrFilter({ filterValue, order: updatedOrder });
  };

  useEffect(() => {
    if (repos.length !== 0) {
      dispatch(setFilteredRepos());
    }
  }, [repos]);

  const filteredRepos = useAppSelector(
    (state) => state.profile.filteredProfileRepos
  );

  useEffect(() => {
    dispatch(updateFilteredRepos(currFilter));
  }, [currFilter]);
  return (
    <div className='profile-repos'>
      <div className='repos'>
        <div className='repos__filters repos__row'>
          {FILTERS_DATA.map((filter) => (
            <RepoFilter
              {...filter}
              currFilter={currFilter}
              updateCurrFilter={updateCurrFilter}
            />
          ))}
        </div>
        <div className='repos__details'>
          {filteredRepos.map((repo) => {
            const { name, stargazers_count, forks, language } = repo;
            return (
              <Repo
                name={name}
                stars={stargazers_count}
                forks={forks}
                language={language}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileRepos;
