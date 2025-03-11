import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import '../styles/Home.css';

const Home = () => {
  return (
    <div id="home" className="home-container">
      <div className="profile">
        <img src="/photo.jpg" alt="Profile" className="profile-img" />
        <p className="about-me">
        "I’m André, a Developer passionate about technology and design. I specialize in creating web applications that blend aesthetics and functionality, focusing on user experience. With a strong admiration for JavaScript, I constantly explore new ways to improve my skills. I believe in growing beyond code, investing in soft skills like communication, creativity, and problem-solving."
        </p>
      </div>

      <div className="social-links">
        <a href="https://www.linkedin.com/in/andre-quintanilha/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a>
        <a href="https://github.com/Apq89" target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon" />
        </a>
      </div>

      <div className="contact-btn-container">
        <Link to="/contact">
          <button className="contact-btn">Contact Me</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
