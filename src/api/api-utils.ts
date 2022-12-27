import axios from 'axios';
export const GITHUBAPI_BASE_URL = 'https://api.github.com/';

const GITHUB_TOKEN = process.env.REACT_APP_TOKEN;

export const authHeader = {
  Authorization: GITHUB_TOKEN,
};

export const fetchGitHubData = async (
  url: string,
  searchId: string = '',
  searchRoute: string = '',
  queries: string = ''
) => {
  console.log(`${url}${searchId}${searchRoute}${queries}`);
  const response = await axios.get(
    `${url}${searchId}${searchRoute}${queries}`,
    {
      headers: {
        ...authHeader,
      },
    }
  );
  console.log(response.data);
  return response.data;
};
