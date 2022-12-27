import React from 'react';

import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

import './Charts.scss';

import { BarOptions, ChartData } from 'chart.js';
export type BarChartProps = {
  data: ChartData<'bar'>;
  options?: BarOptions;
  header: string;
};

const BarChart = ({ data, header, options }: BarChartProps) => {
  return (
    <div className='profile-chart'>
      <h1 className='profile-chart__header'>{header}</h1>
      <div className='chart__container'>
        <Bar data={data} options={{}} />
      </div>
    </div>
  );
};

export default BarChart;
