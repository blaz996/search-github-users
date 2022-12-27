import React, { useEffect, useState } from 'react';

import { useAppSelector } from '../../store/hooks';
import { useAppDispatch } from '../../store/hooks';

import { getTrendingRepos } from '../../store/trending/trendingSlice';

import { useTransition, animated } from 'react-spring';

import { RepoData } from '../../api/profileApi';

import Container from '../../components/container/Container';
import TrendingRepo from './TrendingRepo';
import TrendingHaderFilter from './TrendingHaderFilter';

import './TrendingRepos.scss';

const LANGUAGE_FILTERS = [
  'c',
  'c#',
  'c++',
  'css',
  'java',
  'javascript',
  'python',
  'r',
  'ruby',
  'rust',
  'perl',
  'php',
  'sql',
  'swift',
];

const TrendingRepos = () => {
  const [currFilter, setCurrFilter] = useState('javascript');

  const dispatch = useAppDispatch();
  const trendingRepos = useAppSelector((state) => state.trends.trendingRepos);
  const isLoading = useAppSelector((state) => state.trends.isLoading);

  const transitions = useTransition(trendingRepos, {
    keys: (val) => val.id,
    from: {
      x: -80,
      opacity: 0,
    },
    enter: { x: 0, opacity: 1 },
    trail: 400,
  });

  useEffect(() => {
    dispatch(getTrendingRepos(currFilter));
  }, [currFilter]);

  return (
    <Container className='trending-repos'>
      <div className='trending-repos__container'>
        <TrendingHaderFilter
          filters={LANGUAGE_FILTERS}
          setCurrFilter={setCurrFilter}
          title='trending repos'
        />
        <div className='trending-repos__list'>
          {transitions((styles, value, {}, i) => (
            <animated.div style={styles}>
              <TrendingRepo index={i} {...value} />
            </animated.div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default TrendingRepos;
