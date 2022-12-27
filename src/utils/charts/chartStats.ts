import { RepoData } from '../../api/profileApi';

export const getProfileActivityPerYear = (repos: RepoData[]) => {
  return repos.reduce((acc, currRepo) => {
    const { created_at } = currRepo;
    const creationYear = new Date(created_at).getFullYear();

    if (!acc.hasOwnProperty(creationYear)) acc[creationYear] = 1;
    else acc[creationYear] += 1;

    return acc;
  }, {} as { [key: string]: number });
};

export const getMostUsedLanguages = (repos: RepoData[]) => {
  return repos.reduce((acc, currRepo) => {
    const { language } = currRepo;

    if (!acc.hasOwnProperty(language)) {
      acc[language] = 1;
    } else {
      acc[language] += 1;
    }
    return acc;
  }, {} as { [key: string]: number });
};

export const getStatsPerLanguage = (
  repos: RepoData[],
  stat: keyof RepoData
) => {
  return repos.reduce((acc, currRepo) => {
    const { language } = currRepo;
    const statt = currRepo[stat] as number;
    if (language === null || currRepo[stat] === 0) {
      return acc;
    }
    if (!acc.hasOwnProperty(language)) {
      acc[language] = statt;
    } else {
      acc[language] += statt;
    }

    return acc;
  }, {} as { [key: string]: number });
};
