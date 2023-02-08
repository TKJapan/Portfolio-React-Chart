import React from 'react'
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

  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'left',
      },
      title: {
        display: true,
        text: '各国の人口',
      },
    },
  };
  
  const labels = ['日本', 'アメリカ', 'イギリス', 'フランス', 'ドイツ', 'イタリア', 'カナダ'];

  export const data = {
    labels,
    datasets: [
      {
        label: '人口',
        data: [125.6, 334.8, 68.5, 65.6, 83.9, 60.3, 38.4],
        backgroundColor: 'rgba(255, 99, 132, 0.7)',
      },
      {
        label: 'GDP',
        data: [49.12, 253.46, 33.76, 29.36, 42.56, 20.58, 22.21],
        backgroundColor: 'rgba(255, 165, 0, 0.7)',
      },
    ],
  };
  
  export function GdpChart() {
    return <Bar options={options} data={data} />;
  }

