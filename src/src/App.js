// App.js
import React from "react";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Awards from "./components/Awards";
import Certifications from "./components/Certifications";
import resumeData from "./kr.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Introduction data={resumeData.introduction} />
      <Skills data={resumeData.skills} />
      <Education data={resumeData.education} />
      <Experience data={resumeData.experience} />
      <Projects data={resumeData.projects} />
      <Awards data={resumeData.awards} />
      <Certifications data={resumeData.certifications} />
    </div>
  );
}

export default App;
