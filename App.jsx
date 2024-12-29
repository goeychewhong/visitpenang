import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import HomePage from './pages/Home';
import TouristSpotPage from './pages/TouristSpot';
import Accommodations from './pages/Accomodations';
import FnBPage from './pages/FnB';
import './styles/App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="header">
        <h1 className="title">VISIT PENANG</h1>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/tourist-spots">Tourist</Link>
          <Link to="/food-and-beverages">Food and Beverages</Link>
          <Link to="/accommodations">Accommodations</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tourist-spots" element={<TouristSpotPage />} />
        <Route path="/food-and-beverages" element={<FnBPage />} />
        <Route path="/accommodations" element={<Accommodations />} />
      </Routes>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-description">
            <h2 className="footer-title">About Visit Penang</h2>
            <p className="footer-text">
              Visit Penang is your ultimate guide to exploring the beautiful island of Penang. Discover the best tourist spots, food and beverages, and accommodations to make your trip unforgettable.
            </p>
          </div>
          <div className="footer-links">
            <h2 className="footer-title">Quick Links</h2>
            <nav className="footer-nav">
              <Link to="/">Home</Link>
              <Link to="/tourist-spots">Tourist</Link>
              <Link to="/food-and-beverages">Food and Beverages</Link>
              <Link to="/accommodations">Accommodations</Link>
            </nav>
          </div>
        </div>
      </footer>
    </Router>
  );
}

export default App;
