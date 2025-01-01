import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import HomePage from './pages/HomePage';
import TouristSpotPage from './pages/TouristPage';
import Accommodations from './pages/AccomodationsPage';
import FnBPage from './pages/FnBPage';
import './styles/styles.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const location = useLocation();

  return (
    <div>
      <ScrollToTop />
      <div className="header">
        <h1 className="title text-2xl">VISIT PENANG</h1>
        <nav className="nav text-l ">
          <Link to="/">Home</Link>
          <Link to="/food-and-beverages">Food and Beverages</Link>
          <Link to="/accommodations">Accommodations</Link>
          <Link to="/tourist-spots">Tourist</Link>
        </nav>
      </div>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/tourist-spots" element={<TouristSpotPage />} />
            <Route path="/food-and-beverages" element={<FnBPage />} />
            <Route path="/accommodations" element={<Accommodations />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
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
          <div className="footer-contact">
            <h2 className="footer-title">Contact Us</h2>
            <p className="footer-text">Email: goeychewhong2003@gmail.com</p>
            <p className="footer-text">Phone: +60 124609110</p>
            <p className="footer-text">Address: Penang, Malaysia</p>
          </div>
        </div>
        <div className="footer-bottom">
        </div>
      </footer>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;