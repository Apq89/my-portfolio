import React, { useState } from 'react';
import '../styles/ProResume.css';

const ProResume = () => {
  const [language, setLanguage] = useState('pt');

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <section id="pro-resume">
      <div className="resume-container">
        <h2>Professional Experience</h2>

        <div className="section summary-section">
          <strong>Front-End Developer | Graphic Design & Digital Marketing</strong>
        </div>

        <div className="section education-experience">
          <p><strong>Education</strong></p>
          <p>Fullstack Developer | Tokio School Portugal (2023-2025)</p>
          <p>Digital Marketing | Master D (2019)</p>
          <p><strong>Experience</strong></p>
          <p>Graphic Designer (2015-Present)</p>
          <p>Digital Marketing Executive (2024-2025)</p>
          <p>Project Manager (2009-2018)</p>
        </div>

        <div className="language-selector">
          <label htmlFor="language">Choose your language: </label>
          <button onClick={() => handleLanguageChange('pt')}>Portuguese</button>
          <button onClick={() => handleLanguageChange('en')}>English</button>
        </div>

        <div className="cv-download">
          {language === 'pt' ? (
            <button><a href="/CV-PT.pdf" target="_blank" rel="noopener noreferrer">Download my full CV (Portuguese)</a></button>
          ) : (
            <button><a href="/CV-EN.pdf" target="_blank" rel="noopener noreferrer">Download my full CV (English)</a></button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProResume;

