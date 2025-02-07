import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/images/img.png';
import '../styles/home.css'; // Import external CSS file

const Home = () => {
  return (
    <>
      {/* Header Section */}
      <header className="py-3 shadow-lg">
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
                <Link className="nav-link text-white" to="/dashboard">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/analytics">Analytics</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/predictions">Predictions</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/community">Community</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Main Home Section */}
      <div className="home-container mt-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <h1 className="home-title">Efficient Management of Renewable & Sustainable Energy</h1>
            <p className="home-description">
              Optimize your energy sources, reduce waste, and contribute to a greener world using real-time analytics and AI-based predictions.
            </p>
            <Link to="/dashboard" className="btn btn-light btn-lg mt-3">Get Started</Link>
          </div>
          <div className="col-md-6 text-center">
            <img src={img} alt="Renewable Energy" className="home-image" />
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-5">
          <h2 className="text-center fw-bold mb-4" style={{ color: '#3a5a40' }}>Why Choose Us?</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="features-card mb-4">
                <h4 className="text-success">📊 Real-Time Analytics</h4>
                <p>Track your solar panels, wind energy, and energy consumption with live data.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="features-card mb-4">
                <h4 className="text-warning">🔮 AI-Based Predictions</h4>
                <p>Leverage AI models to forecast energy usage and optimize efficiency.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="features-card mb-4">
                <h4 className="text-info">⚡ Smart Energy Grids</h4>
                <p>Balance supply & demand through smart grid integration and automation.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="call-to-action text-center mt-5 p-4 rounded shadow">
          <h2 className="fw-bold">Join the Renewable Energy Revolution 🌍</h2>
          <p>Take control of your energy usage and contribute to a greener future.</p>
          <Link to="/dashboard" className="btn btn-light btn-lg">Start Managing Now</Link>
        </div>
      </div>

      {/* Footer Section */}
      <footer>
        <p>© 2025 EnergyFlow. All Rights Reserved.</p>
        <p>
          <Link to="/terms">Terms of Service</Link> |{' '}
          <Link to="/privacy">Privacy Policy</Link>
        </p>
      </footer>
    </>
  );
};

export default Home;
