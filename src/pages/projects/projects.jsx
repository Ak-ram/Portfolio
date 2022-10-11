import React from "react";
import "./projects.scss";
const Projects = () => {
  return (
    <>
      <div className="projects-page">
        <h2>Projects</h2>
        <div className="projects-stats">
          <div className="leftSide">
            <div className="circle">
              <span>14</span> <span>Projects</span>
            </div>
          </div>
          <div className="rightSide"></div>
        </div>
      </div>
    </>
  );
};

export default Projects;
