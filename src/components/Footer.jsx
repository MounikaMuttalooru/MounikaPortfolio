import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h5>Contact Info</h5>
            <p><i className="fas fa-envelope"></i> your.email@example.com</p>
            <p><i className="fas fa-phone"></i> +1 234 567 8900</p>
            <p><i className="fas fa-map-marker-alt"></i> Your Location</p>
          </div>
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h5>Social Links</h5>
            <div className="social-links">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <h5>Quick Links</h5>
            <ul className="quick-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/experience">Experience</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/resume">Resume</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Mounika. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 