// components/Experience.js
import React from "react";
import Chip from "./Chip";
import "./Experience.css";

const Experience = ({ data }) => {
  return (
    <div className="experience">
      <h2>Work Experience.</h2>
      {data.map((exp, index) => (
        <div key={index} className="experience-container">
          <div className="experience-item">
            <h3>{exp.company}</h3>
            <p>{exp.department}</p>
            <p>{exp.job}</p>
            <p>{exp.position}</p>
            <p>
              {exp.startDate} ~ {exp.endDate}
            </p>
          </div>
          <div className="experience-details">
            {exp.details.map((detail, idx) => (
              <div key={idx} className="experience-detail">
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
                  {detail.secondWorks &&
                    detail.secondWorks.map((work, i) => <li key={i}>{work}</li>)}
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
                  {detail.skills && detail.skills.map((skill, i) => <Chip key={i} label={skill} />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
