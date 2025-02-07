import React from 'react';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the components with ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const EnergyGraph = () => {
  // Sample data for the energy graph (time vs energy consumption)
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // X-axis (Time/Months)
    datasets: [
      {
        label: 'Energy Consumption (kWh)',
        data: [120, 150, 180, 130, 160, 140, 170], // Y-axis (Energy Consumption)
        borderColor: '#4bc0c0', // Line color
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Background fill color
        pointBackgroundColor: '#4bc0c0', // Point color
        borderWidth: 2,
        fill: true, // Fill the area under the graph
        tension: 0.4, // Smoothness of the curve
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Monthly Energy Consumption',
        font: {
          size: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.dataset.label + ': ' + context.raw + ' kWh'; // Formatting the tooltip
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Energy Consumption (kWh)',
        },
        beginAtZero: true, // Ensures the Y-axis starts at 0
      },
    },
  };

  return (
    <div className="container-fluid p-4">
      <h3 className="text-center mb-4">Energy Overview</h3>
      <div className="row">
        <div className="col-md-12">
          <div className="card shadow-sm rounded mb-4"> {/* Added mb-4 for margin between cards */}
            <div className="card-body">
              <h5 className="card-title text-center">Energy Consumption Over Time</h5>
              <div className="chart-container">
                <Line data={data} options={options} />
              </div>
            </div>
          </div>
          <div className="card shadow-sm rounded mb-4"> {/* Added mb-4 for margin between cards */}
            <div className="card-body">
              <h5 className="card-title text-center">Energy Consumption Over Time</h5>
              <div className="chart-container">
                <Line data={data} options={options} />
              </div>
            </div>
          </div>
          <div className="card shadow-sm rounded mb-4"> {/* Added mb-4 for margin between cards */}
            <div className="card-body">
              <h5 className="card-title text-center">Energy Consumption Over Time</h5>
              <div className="chart-container">
                <Line data={data} options={options} />
              </div>
            </div>
          </div>
          <div className="card shadow-sm rounded mb-4"> {/* Added mb-4 for margin between cards */}
            <div className="card-body">
              <h5 className="card-title text-center">Energy Consumption Over Time</h5>
              <div className="chart-container">
                <Line data={data} options={options} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyGraph;
