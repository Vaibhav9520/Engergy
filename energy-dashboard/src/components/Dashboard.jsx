import React from 'react';
import { Link } from 'react-router-dom';
import Weather from '../components/Weather';
import EnergyGraph from '../components/EnergyGraph';

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-2 bg-dark text-light vh-100 p-3">
          {/* <h4 className="text-center">⚡ Energy Dashboard</h4> */}
          <ul className="list-group">
            <li className="list-group-item bg-dark text-light border-0">
              <Link to="/" className="text-light text-decoration-none">
                Home
              </Link>
            </li>
            <li className="list-group-item bg-dark text-light border-0">
              <Link to="/analytics" className="text-light text-decoration-none">
                Analytics
              </Link>
            </li>
            <li className="list-group-item bg-dark text-light border-0">
              <Link to="/predictions" className="text-light text-decoration-none">
                Predictions
              </Link>
            </li>
            <li className="list-group-item bg-dark text-light border-0">
              <Link to="/community" className="text-light text-decoration-none">
                Community
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="col-md-10 p-4">
          <h2>Welcome to the Energy Dashboard</h2>
          
          <div className="row">
            {/* Weather Component */}
            <div className="col-md-6">
              <Weather />
            </div>

            {/* Energy Graph Component */}
            <div className="col-md-6">
              <EnergyGraph />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
