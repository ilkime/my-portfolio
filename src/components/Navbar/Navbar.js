// // Navbar.js
// import React from 'react';
// import { Link, ScrollLink } from 'react-scroll';
// import './Navbar.css';


// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">Your Logo</div>
//       <div className="navbar-links">
//         <Link to="about" smooth={true} duration={500}>
//           About
//         </Link>
//         <Link to="experience" smooth={true} duration={500}>
//           Experience
//         </Link>
//         <Link to="projects" smooth={true} duration={500}>
//           Projects
//         </Link>
//         <Link to="contact" smooth={true} duration={500}>
//           Contact
//         </Link>
//         testtt
//         <ScrollLink 
//         to="example-destination" 
//         spy={true} 
//         smooth={true} 
//         duration={500} 
//         className='content' 
//         activeClass='content'
//       >
//         Why not appear
//       </ScrollLink>
//       </div>
//       <button className="navbar-resume">Resume</button>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { Link, Element } from 'react-scroll'; // Import Element from react-scroll
import './Navbar.css';
import logo from '../../static/images/my-logo.png';
import Loader from '../Loader/Loader';
const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <div className="navbar-logo">Your Logo</div> */}
      <img src={logo} alt="Logo" className="footer-logo" />
    
      <div className="navbar-links">
      <Link to="landing" smooth={true} duration={500}>
          Home
        </Link>
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

      {/* Add this Element to wrap the content you want to scroll to
      <Element name="example-destination" className="example-destination">
        This is an example destination
      </Element> */}
    </nav>
  );
};

export default Navbar;
