export const BASE_URL = 'https://api.github.com/';

const GITHUB_TOKEN = process.env.REACT_APP_TOKEN;

export const authHeader = {
  Authorization: GITHUB_TOKEN,
};
