import { useAppDispatch } from '../../store/hooks';

import { RepoData } from '../../api/profileApi';

import {
  ChartData,
  ChartTypeRegistry,
  DefaultDataPoint,
  ChartType,
  TypedRegistry,
} from 'chart.js';

const DATA_COLORS = [
  'red',
  'lime',
  'blue',
  'yellow',
  'purple',
  'orange',
  'aqua',
  'crimson',
  'hotpink',
  'lightgreen',
  'lightgrey',
  'lightsalmon',
  'magenta',
];

const formatDataForChart = (dataObj: {
  [key: string]: number;
}): { labels: string[]; data: number[] } => {
  const labels = Object.keys(dataObj);
  const data = Object.values(dataObj);
  return { labels, data };
};

type ChartTypes = keyof ChartTypeRegistry;

export const constructDefaultChartData = (stat: { [key: string]: number }) => {
  const { labels, data } = formatDataForChart(stat);
  return {
    labels: labels,
    datasets: [
      // @ts-ignore
      {
        data: data,
        backgroundColor: DATA_COLORS.slice(0, data.length),
      },
    ],
  };
};
