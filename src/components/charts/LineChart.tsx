import { Line } from 'react-chartjs-2';

import { ChartData, LineOptions } from 'chart.js';

import 'chart.js/auto';

export type LineChartProps = {
  data: ChartData<'line'>;
  options?: LineOptions;
  header: string;
};

const LineChart = ({ data, options, header }: LineChartProps) => {
  return (
    <div className='profile-chart'>
      <h1 className='profile-chart__header'>{header}</h1>
      <div className='chart__container'>
        <Line data={data} options={{}} />
      </div>
    </div>
  );
};

export default LineChart;
