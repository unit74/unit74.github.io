// components/Introduction.js
import React from "react";
import "./Introduction.css";

const Introduction = ({ data }) => {
  return (
    <div className="introduction">
      <div className="App-header">
        <h1>{data.name}</h1>
        <div className="icon-container">
          <a href={data.github} target="_blank" rel="noopener noreferrer">
            <img src="/images/github.png" alt="GitHub" className="icon" />
          </a>
          <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedin.png" alt="LinkedIn" className="icon" />
          </a>
          <a href={data.website} target="_blank" rel="noopener noreferrer">
            <img src="/images/language.png" alt="Language" className="icon" />
          </a>
        </div>
      </div>
      <div className="introduction-content">
        <div className="image-container">
          <img src="/images/about.jpg" alt="About" className="profile-photo" />
        </div>
        <div className="text-container">
          <h2>{data.jobTitle}</h2>
          <ul>
            {data.descriptions.map((description, index) => (
              <li key={index}>{description}</li>
            ))}
          </ul>
          <p>
            {data.email} / {data.contact}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
