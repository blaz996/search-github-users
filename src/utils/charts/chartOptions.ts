import { Chart, ChartOptions, LegendItem, PluginChartOptions } from 'chart.js';

const generateOptionLabels = (chart: Chart): LegendItem[] => {
  const datasets = chart.data.datasets;
  return datasets[0].data.map((data, i) => ({
    text: `${chart.data.labels ? chart.data?.labels[i] : null}`,
    // @ts-ignore
    fillStyle: `${datasets[0].backgroundColor[i]}`,
    value: data,
  }));
};

export const pieChartDefaultOptions: ChartOptions<'pie'> = {
  responsive: true,
  aspectRatio: 1 / 1,

  plugins: {
    legend: {
      display: true,
      position: 'bottom',

      labels: {
        usePointStyle: true,
        generateLabels(chart) {
          return generateOptionLabels(chart);
        },

        sort(
          a: LegendItem & { value: number },
          b: LegendItem & { value: number }
        ) {
          return b.value - a.value;
        },
      },
    },
  },
};
