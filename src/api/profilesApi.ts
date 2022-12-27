import { queries } from '@testing-library/react';
import axios from 'axios';

import { GITHUBAPI_BASE_URL } from './api-utils';
import { authHeader } from './api-utils';

import { fetchGitHubData } from './api-utils';

export const SEARCH_USERS_URL = GITHUBAPI_BASE_URL + 'search/users';

export interface ProfilePreview {
  avatar_url: string;
  login: string;
  id: number;
  html_url: string;
}

export const fetchUsers = async (searchName: string) => {
  const { items } = await fetchGitHubData(
    GITHUBAPI_BASE_URL,
    '',
    'search/users',
    `?q=${searchName}&per_page=${100}`
  );
  return items;
};

/*

export const fetchUsers = async (
  searchName: string
): Promise<ProfilePreview[]> => {
  const searchQueries = `?q=${searchName}&per_page=${100}`;

  const response = await axios.get(`${SEARCH_USERS_URL}${searchQueries}`, {
    headers: {
      ...authHeader,
    },
  });
  const { items } = response.data;

  return items;
};
*/
