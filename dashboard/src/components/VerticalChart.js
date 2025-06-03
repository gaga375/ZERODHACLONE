import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function VerticalChart({backenddata}) {

    const names = backenddata.map(item => item.name);
const prices = backenddata.map(item => item.price);

console.log(names,prices)
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels =names;

 const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data:prices,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};


  return <Bar options={options} data={data} />;
}
