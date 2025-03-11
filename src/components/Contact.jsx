import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import '../styles/Contact.css';

const ContactInfo = () => {
  return (
    <section className="contact-info">
      <h2>Contact Information</h2>
      <div className="info">
        <p><strong>Name:</strong> André Quintanilha</p>
        <p><strong>City:</strong> Faro, Portugal</p>
        <p><strong>Phone:</strong> +351 916 711 719</p>
      </div>
      
      <div className="social-links">
        <p><strong>Contact me via social media:</strong></p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/andre-quintanilha/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://www.instagram.com/andrequintanilha89/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
        </div>
      </div>
      
      <div className="email-button">
      <p><strong>Email:</strong> a_p_quintanilha@hotmail.com</p>
        <a href="mailto:a_p_quintanilha@hotmail.com" className="btn-email">
          Send Me an Email
        </a>
      </div>
    </section>
  );
};

export default ContactInfo;

