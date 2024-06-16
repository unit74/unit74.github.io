// components/Certifications.js
import React from "react";
import "./Certifications.css";

const Certifications = ({ data }) => {
  return (
    <div className="certifications">
      <h2>Certifications.</h2>
      {data.map((cert, index) => (
        <div key={index} className="certifications-item">
          <h3>{cert.name}</h3>
          <p>
            {cert.grade} | {cert.date} | {cert.issuer}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Certifications;
