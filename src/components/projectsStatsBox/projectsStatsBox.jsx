import React from "react";
import "./projectsStatsBox.scss";
const ProjectsStatsBox = () => {
  return (
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
          <div className="index">
            <span className="key"></span>
            <span className="technology">React</span>
            <span className="projectsCount">4</span>
          </div>

          <div className="index">
            <span className="key"></span>
            <span className="technology">React</span>
            <span className="projectsCount">4</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsStatsBox;
