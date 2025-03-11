import React, { useState, useEffect } from "react";
import "../styles/Projects.CSS";
import project1Img1 from "../assets/project1-1.jpg";
import project1Img2 from "../assets/project1-2.jpg";
import project1Img3 from "../assets/project1-3.jpg";
import project2Img1 from "../assets/project2-1.jpg";
import project2Img2 from "../assets/project2-2.jpg";
import project3Img1 from "../assets/project3-1.jpg";
import project3Img2 from "../assets/project3-2.jpg";
import project3Img3 from "../assets/project3-3.jpg";

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      name: "Event Company Website",
      description:
        "An informational website for an event company, featuring company information, a blog page with photos from past events, and an inquiry form, providing an interactive experience for visitors and facilitating contact with clients.",
      year: 2018,
      technologies: ["HTML", "CSS"],
      images: [project1Img1, project1Img2, project1Img3],
    },
    {
      name: "Promotional Landing Page",
      description:
        "A promotional landing page with an eye-catching design, created to showcase special offers and promotions. The page includes an email signup form for the possibility of receiving a newsletter with future promotions. These features not only help increase the company's CRM but also capture the customer's attention.",
      year: 2019,
      technologies: ["HTML", "CSS"],
      images: [project2Img1, project2Img2],
    },
    {
      name: "Frontend Final Project",
      description:
        "A website for a fictional restaurant, designed using real information and images to enhance realism. The project includes the integration of various APIs, such as weather, geolocation, and email server, providing a complete and interactive experience. It was created to showcase a functional and comprehensive product capable of meeting diverse customer needs.",
      year: 2025,
      technologies: ["HTML", "CSS", "JavaScript", "React.js"],
      images: [project3Img1, project3Img2, project3Img3],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % projects[currentProjectIndex].images.length
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [currentProjectIndex]);

  const changeProject = (index) => {
    setCurrentProjectIndex(index);
    setCurrentImageIndex(0);
  };

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-buttons">
        {projects.map((project, index) => (
          <button key={index} onClick={() => changeProject(index)}>
            {project.name}
          </button>
        ))}
      </div>
      <div className="projects-container">
        <div className="slideshow">
          <div className="image-container">
            <img
              src={projects[currentProjectIndex].images[currentImageIndex]}
              alt={`${projects[currentProjectIndex].name} - Slide ${currentImageIndex + 1}`}
            />
          </div>
        </div>
        <div className="project-details">
          <h3>{projects[currentProjectIndex].name}</h3>
          <p>{projects[currentProjectIndex].description}</p>
          <p className="year">Year: {projects[currentProjectIndex].year}</p>
          <p className="tech">
            Technologies: {projects[currentProjectIndex].technologies.join(", ")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
