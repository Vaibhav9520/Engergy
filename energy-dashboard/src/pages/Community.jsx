import React from 'react';
import { Link } from 'react-router-dom'; 

const Community = () => {
  // Sample data for community discussions with an Indian focus
  const discussions = [
    {
      title: 'Solar Energy Adoption in Rural India',
      description: 'Explore the challenges and opportunities of solar energy adoption in rural India to provide sustainable and affordable energy.',
      author: 'Amit Sharma',
      comments: 120,
      likes: 250,
    },
    {
      title: 'Wind Energy in Gujarat: Success Stories',
      description: 'Join the conversation about the growth of wind energy in Gujarat, the state leading the nation in wind power generation.',
      author: 'Priya Desai',
      comments: 80,
      likes: 190,
    },
    {
      title: 'Electric Vehicles in India: A Step Towards Clean Energy',
      description: 'Discuss the rise of electric vehicles in India, and how they are playing a role in reducing pollution and fostering green transportation.',
      author: 'Raj Kumar',
      comments: 200,
      likes: 450,
    },
    {
      title: 'Challenges of Smart Grids in Indian Cities',
      description: 'A conversation on the implementation of smart grids in Indian cities and their potential to optimize energy usage and reduce wastage.',
      author: 'Neha Verma',
      comments: 95,
      likes: 210,
    },
    {
      title: 'Sustainable Energy Solutions for Indian Farmers',
      description: 'Explore the integration of solar and wind energy in agriculture, and how it can help farmers reduce costs and improve yields sustainably.',
      author: 'Vinay Reddy',
      comments: 150,
      likes: 320,
    },
    {
      title: 'India’s Solar Power Potential: A Green Revolution',
      description: 'A deep dive into India’s vast solar energy potential and how it can revolutionize the country’s energy landscape.',
      author: 'Arvind Patel',
      comments: 110,
      likes: 240,
    },
    {
      title: 'Waste-to-Energy Solutions in Indian Urban Areas',
      description: 'Discuss the viability and benefits of waste-to-energy technologies in India’s growing cities and their role in urban waste management.',
      author: 'Sonal Gupta',
      comments: 60,
      likes: 180,
    },
    {
      title: 'Biomass Energy for Rural India',
      description: 'How biomass energy can be harnessed in rural India to create sustainable energy solutions and improve livelihoods.',
      author: 'Karan Mehta',
      comments: 75,
      likes: 220,
    },
    {
      title: 'Renewable Energy in India’s Industrial Sector',
      description: 'A discussion on how industries in India are adopting renewable energy sources like solar and wind to reduce carbon footprints and increase efficiency.',
      author: 'Rina Joshi',
      comments: 90,
      likes: 250,
    },
    {
      title: 'Government Initiatives to Promote Clean Energy in India',
      description: 'Join the discussion on various government policies and initiatives aimed at accelerating the adoption of renewable energy in India.',
      author: 'Manish Yadav',
      comments: 140,
      likes: 300,
    },
  ];

  return (
    <div className="container-fluid">
      {/* Sidebar */}
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

      {/* Main Content Area */}
      <div className="container mt-4">
        <h2 className="text-center mb-4">🗣️ Community Discussions on Sustainable Energy</h2>
        <p className="text-center mb-4">Join conversations about sustainable energy, share your insights, and learn from others in the Indian context!</p>

        <div className="row">
          {discussions.map((discussion, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">{discussion.title}</h5>
                  <p className="card-text">{discussion.description}</p>
                  <p className="card-text"><strong>Author:</strong> {discussion.author}</p>
                  <div className="d-flex justify-content-between">
                    <span><i className="bi bi-chat-left-dots"></i> {discussion.comments} Comments</span>
                    <span><i className="bi bi-heart-fill"></i> {discussion.likes} Likes</span>
                  </div>
                </div>
                <div className="card-footer text-center">
                  <button className="btn btn-primary w-100">Join Discussion</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
