import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <nav className="navbar fixed-navbar">
        <div className="nav-content">
          <div className="nav-logo">
            <span>Paws Connect</span>
          </div>
          <div className="nav-links">
            <Link to="/adopt" className="btn primary">Adopt Now</Link>
            <Link to="/consult" className="btn secondary">Browse Pets</Link>
          </div>
        </div>
      </nav>
      <div className="hero-section">
        <div className="hero-content">
          <p>Give a loving home to pets in need. Browse our available animals and make a difference in their lives 🐾</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
