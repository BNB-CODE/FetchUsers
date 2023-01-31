import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import type { ChartData, ChartOptions } from 'chart.js';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

// const options = {
//     responsive: true,         
//    plugins: {
//      legend: {
//        position: "bottom",            
//      },
//      title: {
//        display: true,
//        text: 'Gas Performance',
//      },
//    },
//   };

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      type: 'line' as const,
      label: 'Dataset 1',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      fill: false,
      data:[10,20,30,40,50,60],
    },
    {
        type: 'line' as const,
        label: 'Dataset 2',
        borderColor: 'rgb(55, 99, 125)',
        borderWidth: 2,
        fill: false,
        data:[5,15,25,35,45,50],
      },
    {
      type: 'bar' as const,
      label: 'Dataset 3',
      backgroundColor: 'rgb(75, 192, 192)',
      data: [5,15,25,35,45,55,65],
      borderColor: 'white',
      borderWidth: 2,
    },
    {
      type: 'bar' as const,
      label: 'Dataset 4',
      backgroundColor: 'rgb(53, 162, 235)',
      data:[1,11,21,31,41,51,61],
    },
  ],
  options:{
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  }
  };
export function GasBarChart() {
  return<div style={{ width: "1200px", margin: "auto auto" }}>
    <Chart type='bar' data={data} />
    </div>;
}
