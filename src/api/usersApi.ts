import axios from 'axios';
import { BASE_URL } from './api-utils';
import { authHeader } from './api-utils';

const SEARCH_USERS_URL = BASE_URL + 'search/users?q=';

export const fetchUsers = async (searchName: string) => {
  console.log('CALLED');
  const response = await axios.get(`${SEARCH_USERS_URL}${searchName}`);
  const { items } = response.data;

  return items;
};
