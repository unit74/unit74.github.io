// components/Education.js
import React from "react";
import "./Education.css";

const Education = ({ data }) => {
  return (
    <div className="education">
      <h2>Education.</h2>
      {data.map((edu, index) => (
        <div key={index} className="education-item">
          <h3>{edu.school}</h3>
          <p>
            {edu.subtitle} | {edu.startDate} ~ {edu.endDate}
          </p>
          <p>
            {edu.gpa} | {edu.category} | {edu.status}
          </p>
          {edu.description && <p>{edu.description}</p>}
        </div>
      ))}
    </div>
  );
};

export default Education;
