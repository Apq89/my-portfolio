import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Skills.css";

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="soft-skills">
          <h3>Soft Skills</h3>
          <div className="soft-skills-list">
            <button>Communication</button>
            <button>Problem Solving</button>
            <button>Process Automation</button>
            <button>Project Management</button>
          </div>
        </div>
        <div className="tech-skills">
          <h3>Tech Skills</h3>
          <div className="tech-skills-list">
            <button>HTML</button>
            <button>CSS</button>
            <button>JavaScript</button>
            <button>Node.js</button>
            <button>React.js</button>
            <button>MongoDB</button>
          </div>
        </div>
      </div>
      <button className="more-button">
        <Link to="/professional-resume">
        <span className="plus-sign">+  MORE</span>
        </Link>
      </button>
    </section>    
  );
};

export default Skills;
