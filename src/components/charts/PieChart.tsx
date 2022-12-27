import React from 'react';

import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

import { ChartData, ChartOptions } from 'chart.js';

import { pieChartDefaultOptions } from '../../utils/charts/chartOptions';

import './Charts.scss';

export type PieChartProps = {
  data: ChartData<'pie'>;
  options?: ChartOptions;
  header: string;
};

const PieChart = ({
  data,
  options = pieChartDefaultOptions,
  header,
}: PieChartProps) => {
  return (
    <div className='profile-chart profile-chart--pie'>
      <h1 className='profile-chart__header'>{header}</h1>
      <div className='chart__container'>
        <Pie height='300' data={data} options={options}></Pie>
      </div>
    </div>
  );
};

export default PieChart;
