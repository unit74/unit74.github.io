// components/Awards.js
import React from "react";
import "./Awards.css";

const Awards = ({ data }) => {
  return (
    <div className="awards">
      <h2>Awards.</h2>
      {data.map((award, index) => (
        <div key={index} className="awards-item">
          <h3>{award.contest}</h3>
          {award.github && (
            <a href={award.github} target="_blank" rel="noopener noreferrer">
              GitHub README
            </a>
          )}
          <p>
            {award.award} | {award.date} | {award.institution}
          </p>
          {award.descriptions && (
            <ul>
              {award.descriptions.map((des, idx) => (
                <li key={idx}>{des}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Awards;
