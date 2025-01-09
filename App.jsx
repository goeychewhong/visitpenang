import { useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './styles/styles.css';
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div>
      <ScrollToTop />
      <div className="header">
        <h1 className="title text-4xl">VISIT PENANG</h1>
        <nav className="nav text-l">
          <a href="#home" className="text-2xl">Home</a>
          <a href="#food-and-beverages" className="text-2xl">Food and Beverages</a>
          <a href="#accommodations" className="text-2xl">Accommodations</a>
          <a href="#tourist-spots" className="text-2xl">Tourist</a>
        </nav>
      </div>
      <HomePage />
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
              <a href="#home">Home</a>
              <a href="#tourist-spots">Tourist</a>
              <a href="#food-and-beverages">Food and Beverages</a>
              <a href="#accommodations">Accommodations</a>
            </nav>
          </div>
          <div className="footer-contact">
            <h2 className="footer-title">Contact Us</h2>
            <p className="footer-text">Email: goeychewhong2003@gmail.com</p>
            <p className="footer-text">Phone: +60 124609110</p>
            <p className="footer-text">Address: Penang, Malaysia</p>
          </div>
        </div>
        <div className="footer-bottom"></div>
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