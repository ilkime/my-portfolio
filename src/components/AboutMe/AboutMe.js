import React from 'react';
import styled from 'styled-components';
import aboutImage from '../../static/images/about-me.png'; // Update the image path
import './AboutMe.css'; // Import the separate CSS file
import landing from '../../static/images/landing-image.png'; 

const AboutMe = () => {
  return (
    <section className="AboutContainer">
      <div className="ImageContainer">
      <img src={landing} alt="Landing" className="landing-img" />
      </div>
      <div className="ContentContainer">
        <h2 id="h2-title">ABOUT ME</h2>
        <h2 id="h2-subtitle">Who Am I?</h2>
        <p id="p-aboutme">
        Hello there! I'm a passionate individual with a strong background in Computer Engineering and a Bachelor of Science degree from Universität Duisburg-Essen, Duisburg. My journey through academia and beyond has bestowed upon me a diverse set of skills that span across UI/UX design, web development, technology consulting, and the intriguing realm of cloud technologies.
        My technical repertoire includes proficiency in web development tools like ReactJS, JavaScript, HTML5, and CSS3, allowing me to craft visually appealing and user-centric experiences. </p>
      </div>
    </section>
  );
};

export default AboutMe;