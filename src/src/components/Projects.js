// components/Projects.js
import React from "react";
import Chip from "./Chip";
import "./Projects.css";

const Projects = ({ data }) => {
  return (
    <div className="projects">
      <h2>Side Projects.</h2>
      {data.map((project, index) => (
        <div key={index} className="projects-container">
          <div className="projects-item">
            <h3>{project.name}</h3>
            <p>{project.organization}</p>
            <p>{project.participants}</p>
            <p>
              {project.startDate} ~ {project.endDate}
            </p>
            <p>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub README
              </a>
            </p>
          </div>
          <div className="projects-details">
            {project.details.map((detail, idx) => (
              <div key={idx} className="projects-detail">
                {detail.link ? (
                  <h3>
                    <a href={detail.link} target="_blank" rel="noopener noreferrer">
                      {detail.title}
                    </a>
                  </h3>
                ) : (
                  <h3>{detail.title}</h3>
                )}
                <h4>{detail.firstTitle}</h4>
                <p>{detail.firstDescription}</p>
                <h4>{detail.secondTitle}</h4>
                <ul>
                  {detail.secondWorks.map((work, i) => (
                    <li key={i}>{work}</li>
                  ))}
                </ul>
                {detail.thirdTitle && <h4>{detail.thirdTitle}</h4>}
                {detail.thirdWorks && (
                  <ul>
                    {detail.thirdWorks.map((work, i) => (
                      <li key={i}>{work}</li>
                    ))}
                  </ul>
                )}
                <div>
                  {detail.skills.map((skill, i) => (
                    <Chip key={i} label={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
