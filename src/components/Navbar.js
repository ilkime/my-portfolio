// Navbar.js
import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Your Logo</div>
      <div className="navbar-links">
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
        <Link to="experience" smooth={true} duration={500}>
          Experience
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
      </div>
      <button className="navbar-resume">Resume</button>
    </nav>
  );
};

export default Navbar;
