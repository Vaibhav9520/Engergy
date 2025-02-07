import React from 'react';
import { Link } from 'react-router-dom';
import Weather from '../components/Weather';
import EnergyGraph from '../components/EnergyGraph';

const Dashboard = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row">

        {/* Sidebar (if you add it later) */}

        {/* Header Section with Background Image */}
        <header className="py-3 shadow-lg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1501594907353-3b3070dce92e)', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white' }}>
          <nav className="navbar navbar-expand-lg navbar-light container">
            <Link className="navbar-brand" to="/" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <h3 className="text-white text-center">EnergyFlow</h3>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/analytics">
                    Analytics
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/predictions">
                    Predictions
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/community">
                    Community
                  </Link>
                </li>

                {/* Login Button */}
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/login">
                    <button className="btn btn-outline-light">Login</button>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <div className="col-12 py-5">
          <div className="text-center mb-5">
            <h2 className="text-dark">Welcome to the Energy Dashboard</h2>
          </div>
          
          <div className="row justify-content-center">
            {/* Weather Component */}
            <div className="col-md-6 mb-4">
              <Weather />
            </div>

            {/* Energy Graph Component */}
            <div className="col-md-6 mb-4">
              <EnergyGraph />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
