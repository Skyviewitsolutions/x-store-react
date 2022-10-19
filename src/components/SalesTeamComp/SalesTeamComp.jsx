
import React from 'react';
import './SalesTeamComp.css'
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
const SalesTeamComp = () => {

    const options = {  responsive: true,
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
  
  const labels = ['19-25 sep', '26 sep-2 Oct', '3-9 Oct', '10-16 Oct'];

  const data = {
    labels,
    datasets: [
      {
        label: '',
        data:[50,80,100,200,400,600,800,1000],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
      
    ],
  };

  return (
    <>
    <div className='graphcon'>
        <div className="sales">
            <p>Sales</p>
        </div>
        <div className="buttext">
            <div className="butt">
                <button>Sales Analysis</button>
            </div>
            <div className="qua">
                <p>3 Quotations </p>
                    <p>1 Order to Invoice</p>
            </div>
            <div className="qua">
                <p>24,506.00</p>
            </div>
        </div>
        <Bar options={options} data={data} />
    </div>
    </>
  )
}

export default SalesTeamComp