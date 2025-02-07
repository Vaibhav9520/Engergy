import React from 'react';
import { Link } from 'react-router-dom';

const Predictions = () => {
  return (
    <div className="container mt-4">
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
      
      <div className="mt-5">
        <h2 className="text-center text-primary">🔮 AI Predictions for Energy Consumption</h2>
        <p className="text-center text-muted">Using advanced AI algorithms, we predict future energy usage patterns based on historical data, weather forecasts, and consumption trends. Understand energy needs and optimize your usage for a sustainable future.</p>

        <div className="row justify-content-center mt-4">
          <div className="col-md-6">
            <div className="card shadow-lg">
              <div className="card-body">
                <h5 className="card-title">Upcoming Energy Consumption</h5>
                <p className="card-text">The AI model predicts a surge in energy consumption during the upcoming summer months. It suggests optimizing energy usage during peak hours to avoid grid overload.</p>
                <Link to="/" className="btn btn-primary">View Predictions</Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow-lg">
              <div className="card-body">
                <h5 className="card-title">Energy Saving Recommendations</h5>
                <p className="card-text">Based on the predictions, we recommend using renewable energy sources during high-demand periods to cut down on carbon emissions and reduce dependency on fossil fuels.</p>
                <Link to="/" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 text-center">
        <p className="lead">For more detailed predictions and insights, explore our analytics page!</p>
        <Link to="/analytics" className="btn btn-outline-primary">Go to Analytics</Link>
      </div>

      {/* Chatbot Link */}
      <div className="mt-4 text-center">
        <p>If you have any questions or need assistance, feel free to talk to our chatbot!</p>
        <Link to="/chatbot" className="btn btn-outline-info">Chat with our Bot</Link>
      </div>
    </div>
  );
};

export default Predictions;
