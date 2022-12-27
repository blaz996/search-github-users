import { GITHUBAPI_BASE_URL } from './api-utils';

import { fetchGitHubData } from './api-utils';

import { getPrevMonthDate } from '../utils/dates';

import { RepoData } from './profileApi';

export const fetchTrendingRepos = async (
  language: string
): Promise<RepoData[]> => {
  const { items } = await fetchGitHubData(
    GITHUBAPI_BASE_URL,
    '',
    'search/repositories',
    `?q=language:${language}+created:>${getPrevMonthDate()}&sort=stars&order=desc`
  );
  return items;
};
