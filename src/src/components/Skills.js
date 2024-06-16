// components/Skills.js
import React from "react";
import Chip from "./Chip";
import "./Skills.css";

const Skills = ({ data }) => {
  return (
    <div className="skills">
      <h2>Tech Skills.</h2>
      {data.map((skill, index) => (
        <Chip key={index} label={skill} />
      ))}
    </div>
  );
};

export default Skills;
