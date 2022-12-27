import axios from 'axios';
import { ProfilePreview } from './profilesApi';

import { GITHUBAPI_BASE_URL } from './api-utils';
import { authHeader } from './api-utils';
import { fetchGitHubData } from './api-utils';
import { Profile } from '../store/profile/profileSlice';

export type ProfileData = {
  email?: string;
  followers_num: number;
  following_num: number;
  name: string;
  bio: string;
  location: string;
  public_repos: number;
  company: string;
} & ProfilePreview;

export type RepoData = {
  forks: number;
  language: string;
  description?: string;
  html_url: string;
  id: number;
  name: string;
  stargazers_count: number;
  watchers: number;
  topics?: string[];
  commits_url: string;
  created_at: string;
  owner: ProfileData;
};

const SEARCH_USER_URL = GITHUBAPI_BASE_URL + 'users/';

const fetchUserData = async (userName: string): Promise<ProfileData> => {
  const profile = await fetchGitHubData(SEARCH_USER_URL, userName);
  return {
    ...profile,
    followers_num: profile.followers,
    following_num: profile.following,
  };
};
/*
export const fetchUserData = async (userName: string): Promise<ProfileData> => {
  console.log('CALLED');
  const response = await axios.get(`${SEARCH_USER_URL}${userName}`, {
    headers: {
      ...authHeader,
    },
  });
  const profile = response.data;
  return {
    ...profile,
    followers_num: profile.followers,
    following_num: profile.following,
  };
};
*/

const fetchUserFollowers = async (
  userName: string
): Promise<ProfilePreview[]> =>
  fetchGitHubData(SEARCH_USER_URL, userName, '/followers');

const fetchUserFollowing = async (
  userName: string
): Promise<ProfilePreview[]> =>
  fetchGitHubData(SEARCH_USER_URL, userName, '/following');

const fetchUserRepos = async (userName: string): Promise<RepoData[]> =>
  fetchGitHubData(SEARCH_USER_URL, userName, '/repos');

export const fetchUser = async (userName: string) => {
  const [profile, profileFollowers, profileFollowing, profileRepos] =
    await Promise.all([
      fetchUserData(userName),
      fetchUserFollowers(userName),
      fetchUserFollowing(userName),
      fetchUserRepos(userName),
    ]);
  console.log(profileRepos);

  return { profile, profileFollowers, profileFollowing, profileRepos };
};
