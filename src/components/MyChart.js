import React, {useEffect, useState} from 'react'
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
        position: 'top',
      },
      title: {
        display: true,
        text: '2022年の各国の人口とGDP',
      },
    },
  };
  
  const labels = ['日本', 'アメリカ', 'イギリス', 'フランス', 'ドイツ', 'イタリア', 'カナダ'];

  export function MyChart(props) {
    const [receiveData, setReceiveData] = useState([0,0,0,0,0,0,0,]);

    useEffect(() => {
        setReceiveData(props.senddata);
    }, [props.senddata]);
  


  const data = {
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
        {
        label: '入力した値',
        data: receiveData,
        backgroundColor: 'rgba(255, 5, 0, 0.7)',
        },
    ],
  };

    return <Bar options={options} data={data} />;

  }
