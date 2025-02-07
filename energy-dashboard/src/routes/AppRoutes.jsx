import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Analytics from '../pages/Analytics';
import Predictions from '../pages/Predictions';
import Community from '../pages/Community';
import Dashboard from '../components/Dashboard';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/predictions" element={<Predictions />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
