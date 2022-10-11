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
              <div className="circle-content">
                <span>14</span> <span>Projects</span>
              </div>
            </div>
          </div>
          <div className="rightSide">
            <div className="top">
              <span className="top_part1">Total Space</span>
              <span className="top_part2">512 GB</span>
            </div>
            <div className="bottom">
              <span className="bottom_part1">Used Space</span>
              <span className="bottom_part2">312 GB</span>
              <span className="key"></span>
              <span className="key"></span>
              <span className="key"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
