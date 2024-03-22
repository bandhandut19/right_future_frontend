import {
  BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title,
  Tooltip
} from 'chart.js';
import React from "react";
import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  elements:{
    bar:{
      borderWidth: 2
    }
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['Direct', 'Matching', 'ROI', 'Level', 'Generation', 'Auto Pool'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Today',
      data: ["487", "578","784","136","857","268"],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Yesterday',
      data: ["487", "578","784","136","857","268"],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
const TodayBonusChart = () => {
  return (
    <>
       <Bar options={options} data={data} />
    </>
  );
};

export default TodayBonusChart;
