import React from 'react';
import styled from 'styled-components';
import aboutImage from '../../images/about-me.png'; // Update the image path
import './AboutMe.css'; // Import the separate CSS file

const AboutMe = () => {
  return (
    <section className="AboutContainer">
      <div className="ImageContainer">
       {/* <img src={aboutImage} alt="About Me" /> */}
      </div>
      <div className="ContentContainer">
        <h2 style={{"font-size":"20px", color:"white","font-weight":"200"}}>ABOUT ME</h2>
        <h2 style={{color:"white"}}>Who Am I?</h2>
        <p style={{color:"white"}}>
        Hello there! I'm a passionate individual with a strong background in Computer Engineering and a Bachelor of Science degree from Universität Duisburg-Essen, Duisburg. My journey through academia and beyond has bestowed upon me a diverse set of skills that span across UI/UX design, web development, technology consulting, and the intriguing realm of cloud technologies.

My technical repertoire includes proficiency in web development tools like ReactJS, JavaScript, HTML5, and CSS3, allowing me to craft visually appealing and user-centric experiences. I'm also well-versed in programming languages and tools such as Python, SQL, and Git, giving me the ability to architect and engineer robust solutions. I find joy in creating wireframes using Figma and Miro, as well as utilizing Graphical Development Tools like Node-RED. My expertise extends to A/B testing with Optimizely and leveraging the capabilities of Microsoft Azure and Docker.        </p>
      </div>
    </section>
  );
};

export default AboutMe;