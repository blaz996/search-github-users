import { RepoData } from '../api/profileApi';

export const sortByRepoString = (
  arr: RepoData[],
  sortValue: 'name' | 'language',
  order: string
): RepoData[] => {
  return arr.sort((a, b) => {
    const valA = a[sortValue].toLowerCase();
    const valB = b[sortValue].toLowerCase();
    if (order === 'ascending') {
      if (valA > valB) return 1;
      if (valA < valB) return -1;
      return 0;
    } else {
      if (valA > valB) return -1;
      if (valA < valB) return 1;
      return 0;
    }
  });
};

export const sortByRepoStat = (
  arr: RepoData[],
  order: string,
  stat: keyof RepoData
) => {
  return arr.sort((a, b) => {
    const statA = a[stat] as number;
    const statB = b[stat] as number;
    return order === 'ascending' ? statB - statA : statA - statB;
  });
};
