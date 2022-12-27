import React from 'react';

import { useAppSelector } from '../../store/hooks';

import { getMostUsedLanguages } from '../../utils/charts/chartStats';
import { getProfileActivityPerYear } from '../../utils/charts/chartStats';
import { getStatsPerLanguage } from '../../utils/charts/chartStats';

import { constructDefaultChartData } from '../../utils/charts/chartsData';

import PieChart from '../../components/charts/PieChart';
import BarChart from '../../components/charts/BarChart';
import Container from '../../components/container/Container';

import './ProfileStats.scss';
import LineChart from '../../components/charts/LineChart';

const ProfileStats = () => {
  const repos = useAppSelector((state) => state.profile.profileRepos);

  const mostUsedLanguages = getMostUsedLanguages(repos);
  const starsPerLanguage = getStatsPerLanguage(repos, 'stargazers_count');
  const forksPerLanguage = getStatsPerLanguage(repos, 'forks');
  const profileActivityPerYear = getProfileActivityPerYear(repos);

  return (
    <Container>
      <div className='profile-stats'>
        <PieChart
          header='repos per language'
          data={constructDefaultChartData(mostUsedLanguages)}
        />
        <BarChart
          header='stars per language'
          data={constructDefaultChartData(starsPerLanguage)}
        />
        <BarChart
          header='forks per language'
          data={constructDefaultChartData(forksPerLanguage)}
        />
        <LineChart
          header='commits per language'
          data={constructDefaultChartData(profileActivityPerYear)}
        />
      </div>
    </Container>
  );
};

export default ProfileStats;
