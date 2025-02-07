import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/images/img.png'; // Make sure this path is correct
import '../styles/home.css'; // Import external CSS file

const Home = () => {
  return (
    <>
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





      {/* Main Home Section with Background Color */}
      <div className="home-container mt-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <h1 className="home-title">Efficient Management of Renewable & Sustainable Energy</h1>
            <p className="home-description">
              Optimize your energy sources, reduce waste, and contribute to a greener world using real-time analytics and AI-based predictions.
            </p>
            <Link to="/dashboard" className="btn btn-light btn-lg mt-3">
              Get Started
            </Link>
          </div>
          <div className="col-md-6 text-center">
            <img
              src={img}
              alt="Renewable Energy"
              className="home-image"
              style={{ width: '90%', borderRadius: '10px' }}
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-5">
          <h2 className="text-center fw-bold mb-4" style={{ color: '#3a5a40' }}>
            🌱 Why Choose Us?
          </h2>
          <div className="row">
            <div className="col-md-4">
              <div className="features-card mb-4" style={{ padding: '20px', borderRadius: '8px', backgroundColor: '#f0f8f4', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', height: '100%' }}>
                <h4 className="text-success">📊 Real-Time Analytics</h4>
                <p>Track your solar panels, wind energy, and energy consumption with live data.</p>
                <Link to="/analytics" className="btn btn-outline-success btn-sm mt-3">Learn More</Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="features-card mb-4" style={{ padding: '20px', borderRadius: '8px', backgroundColor: '#fff8e1', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', height: '100%' }}>
                <h4 className="text-warning">🔮 AI-Based Predictions</h4>
                <p>Leverage AI models to forecast energy usage and optimize efficiency.</p>
                <Link to="/predictions" className="btn btn-outline-warning btn-sm mt-3">Learn More</Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="features-card mb-4" style={{ padding: '20px', borderRadius: '8px', backgroundColor: '#d1f7e5', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', height: '100%' }}>
                <h4 className="text-info">⚡ Smart Energy Grids</h4>
                <p>Balance supply & demand through smart grid integration and automation.</p>
                <Link to="/community" className="btn btn-outline-info btn-sm mt-3">Learn More</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="call-to-action text-center mt-5 p-4 rounded shadow" style={{ backgroundColor: '#2c3e50', color: '#fff' }}>
          <h2 className="fw-bold">Join the Renewable Energy Revolution 🌍</h2>
          <p>Take control of your energy usage and contribute to a greener future.</p>
          <Link to="/dashboard" className="btn btn-light btn-lg">
            Start Managing Now 🚀
          </Link>
        </div>

        {/* Customer Testimonials */}
        <div className="testimonials mt-5">
          <h2 className="text-center fw-bold mb-4" style={{ color: '#fff' }}>
            🗣️ What Our Users Say
          </h2>
          <div className="row">
            <div className="col-md-4">
              <div className="testimonial-card text-center p-4" style={{ backgroundColor: '#ffffff', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
                <p style={{ color: '#333' }}>"EnergyFlow has helped us optimize our energy usage and save costs. The real-time analytics are invaluable!"</p>
                <h5 style={{ color: '#2c3e50' }}>- Sarah L., Sustainability Advocate</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card text-center p-4" style={{ backgroundColor: '#f7f7f7', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
                <p style={{ color: '#333' }}>"The AI-based predictions feature is a game-changer. It’s helping us make smarter decisions for the future."</p>
                <h5 style={{ color: '#2c3e50' }}>- John D., Tech Enthusiast</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card text-center p-4" style={{ backgroundColor: '#eaf2f4', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
                <p style={{ color: '#333' }}>"The integration with smart energy grids has been seamless. Our energy management has never been more efficient!"</p>
                <h5 style={{ color: '#2c3e50' }}>- Emma R., Business Owner</h5>
              </div>
            </div>
          </div>
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
