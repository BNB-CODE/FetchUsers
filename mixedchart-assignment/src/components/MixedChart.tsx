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
  //InteractionItem as Mixedtype
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import  { InteractionItem } from 'chart.js';

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

const options = {
  responsive: true,         
 plugins: {
   legend: {
     position: "bottom",            
   },
   title: {
     display: true,
     text: 'Gas Performance',
   },
 },
};
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      type: 'bar' as const,
      label: 'thm Baseline',
      backgroundColor: 'rgb(192,192,192)',
      data: [5,15,25,35,45,55,65],
      borderColor: 'rgb(192,192,192)',
      borderWidth: 2,
    },
    {
      type: 'bar' as const,
      label: 'thm Actual',
      backgroundColor: 'rgb(0,191,255)',
      borderColor: 'rgb(0,191,255)',
      data:[1,11,21,31,41,51,61],
      borderWidth: 2,
    },
    {
      type: 'line' as const,
      label: '$ Baseline Cost',
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      fill: false,
      data:[10,20,30,40,50,60],
    },
    {
       type: 'line' as const,
        label: '$ Actual Cost',
        borderColor: 'rgb(255, 191, 0)',
        backgroundColor: 'rgb(255, 191, 0)',
        borderWidth: 2,
        fill: false,
        data:[5,15,25,35,45,50],
      },
  ]
  };
export function MixedChart() {
  return<div style={{ width: "1200px", margin: "auto auto" }}>
   {/* <Chart type='bar' data={data} />  */}
    {/* <Chart type='bar' data={data} options={options}></Chart> */}
    {/* <Chart
      type='bar'
      options={options}
      data={data}
    /> */}
    <Chart options={options} type='bar' data={data}>
  </Chart>
    </div>;
}
