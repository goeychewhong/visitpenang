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
      <div className="header bg-FBF4E2">
        <h1 className="title text-4xl text-gray-900">VISIT PENANG</h1>
        <nav className="nav text-l">
          <a href="#home" className="text-2xl text-gray-900">Home</a>
          <a href="#food-and-beverages" className="text-2xl text-gray-900">Food and Beverages</a>
          <a href="#accommodations" className="text-2xl text-gray-900">Accommodations</a>
          <a href="#tourist-spots" className="text-2xl text-gray-900">Tourist</a>
        </nav>
      </div>
      <HomePage />
      <footer className="footer bg-FBF4E2">
        <div className="footer-content">
          <div className="footer-description">
            <h2 className="footer-title text-gray-900">About Visit Penang</h2>
            <p className="footer-text text-gray-700">
              Visit Penang is your ultimate guide to exploring the beautiful island of Penang. Discover the best tourist spots, food and beverages, and accommodations to make your trip unforgettable.
            </p>
          </div>
          <div className="footer-links">
            <h2 className="footer-title text-gray-900">Quick Links</h2>
            <nav className="footer-nav">
              <a href="#home" className="text-gray-900">Home</a>
              <a href="#tourist-spots" className="text-gray-900">Tourist</a>
              <a href="#food-and-beverages" className="text-gray-900">Food and Beverages</a>
              <a href="#accommodations" className="text-gray-900">Accommodations</a>
            </nav>
          </div>
          <div className="footer-contact">
            <h2 className="footer-title text-gray-900">Contact Us</h2>
            <p className="footer-text text-gray-700">Email: goeychewhong2003@gmail.com</p>
            <p className="footer-text text-gray-700">Phone: +60 124609110</p>
            <p className="footer-text text-gray-700">Address: Penang, Malaysia</p>
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