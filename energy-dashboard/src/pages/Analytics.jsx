import React from 'react';
import { Link } from 'react-router-dom';

// Correct way to import images in Vite
import heatmap from '../assets/images/heatmap.png';
import featureImportance from '../assets/images/feature_importance.png';
import energyConsumption from '../assets/images/energy_consumption_distribution.png';
import actualVsPredicted from '../assets/images/actual_vs_predicted.png';

const Analytics = () => {
  return (
    <div className="container-fluid p-0">
      {/* Header Section with Background Image */}
      <header className="py-3 shadow-lg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1501594907353-3b3070dce92e)', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white' }}>
        <nav className="navbar navbar-expand-lg navbar-light container">
          <Link className="navbar-brand" to="/" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <h3 className="text-white">EnergyFlow</h3>
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
      <div className="container py-5">
        <h1 className="text-center mb-4">Energy Consumption Analysis</h1>

        {/* Heatmap Section */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2>Feature Correlation Heatmap</h2>
            <p>This heatmap visualizes the correlation between different features in the dataset. Darker shades indicate stronger positive or negative relationships, helping to identify highly correlated variables that may impact energy consumption.</p>
            <img src={heatmap} alt="Feature Correlation Heatmap" className="img-fluid rounded" />
          </div>
        </div>

        {/* Actual vs Predicted Section */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2>Actual vs Predicted Energy Consumption</h2>
            <p>This scatter plot compares the actual energy consumption values with the model’s predicted values. A strong alignment along the diagonal line suggests accurate predictions, whereas deviations indicate errors.</p>
            <img src={actualVsPredicted} alt="Actual vs Predicted" className="img-fluid rounded" />
          </div>
        </div>

        {/* Feature Importance Section */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2>Feature Importance</h2>
            <p>This bar chart highlights the most influential features in predicting energy consumption. Features with higher importance contribute significantly to the model’s decision-making, guiding optimization efforts.</p>
            <img src={featureImportance} alt="Feature Importance" className="img-fluid rounded" />
          </div>
        </div>

        {/* Energy Consumption Distribution Section */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2>Energy Consumption Distribution</h2>
            <p>This histogram shows the frequency distribution of energy consumption values in the dataset. The curve provides insights into the overall consumption pattern, helping to detect skewness or anomalies.</p>
            <img src={energyConsumption} alt="Energy Consumption Distribution" className="img-fluid rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
