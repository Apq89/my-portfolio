import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/andre-quintanilha/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="footer-icon" />
        </a>
        <a href="https://github.com/Apq89" target="_blank" rel="noopener noreferrer">
          <FaGithub className="footer-icon" />
        </a>
      </div>
      <p>© 2025 Designed and developed by André Quintanilha. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
