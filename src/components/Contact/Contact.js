import React from 'react';
import './Contact.css'
const Contact = () => {
  const handleContactClick = () => {
    window.location.href = 'mailto:ilkimersem@gmail.com';
  };

  return (
    <div className='contact-section'>
    <div className="contact-container">
      <div className="contact-title">CONTACT</div>
      <div className="contact-subtitle">Get in Touch!</div>
      <div className="contact-text">
        Have an exciting project you need help with? <br />
        Send me an email or contact me via instant message!
      </div>
      <button className="contact-button" onClick={handleContactClick}>
        CONTACT ME 
      </button>
    </div>
    </div>
  );
};

export default Contact;
