import React from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineController,
  BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineController,
  BarController,
);
const options = {
  responsive: true,         
 plugins: {
   legend: {
    display: false,
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
        type: 'line' as const,
        label: '$ Baseline Cost',
        borderColor: 'rgb(255,140,0)',
        backgroundColor: 'rgb(255,140,0)',
        borderWidth: 2,
        borderDash: [5, 5],
        fill: false,
        data:[10,20,30,40,50,60],
      },
      {
         type: 'line' as const,
          label: '$ Actual Cost',
          borderColor: 'rgb(255, 191, 0)',
          backgroundColor: 'rgb(255, 191, 0)',
          borderWidth: 2,
          fill: true,
          data:[5,15,25,35,45,50],
      },
    {
      type: 'bar' as const,
      label: 'thm Baseline',
      backgroundColor: 'rgb(128, 128, 128)',
      data: [5,15,25,35,45,55,65],
      borderColor: 'rgb(128, 128, 128)',
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
  ],
  options:{options}
  };
export function MixedChart() {
return<div style={{width:"980px", margin:"auto",backgroundColor:"#343434"}}> 
<h4 style={{ textAlign: "left" , width:"980px"}}>Gas Performance</h4>   
<Chart  type='bar' data={data} ></Chart>
{/* <p>
    <label>thm Baseline</label>
    <label>thm Actual</label>
    <label>$ BaseLine Cost</label>
    <label>$ Actual Cost</label>
</p> */}
</div>;
// return <Chart  type='bar' data={data} options={options}></Chart>
}
