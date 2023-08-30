import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css'
import logo from '../../static/images/my-logo.png'; 
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <img src={logo} alt="Logo" className="footer-logo" />
      </div>
      <div className="footer-middle">
        <a href="https://github.com/ilkime" target="_blank" rel="noopener noreferrer">
          <FaGithub className="footer-icon" />
        </a>
        <a href="https://www.linkedin.com/in/ilkim-ersem/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="footer-icon" />
        </a>
      </div>
      <div className="footer-right">All rights reserved,2023</div>
    </footer>
  );
};

export default Footer;
