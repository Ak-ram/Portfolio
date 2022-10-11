import React from "react";
import ProjectsStatsBox from "../../components/projectsStatsBox/projectsStatsBox";
import TechnologyBox from "../../components/technologyBox/technologyBox";
import "./projects.scss";
const Projects = () => {
  return (
    <>
      <div className="projects-page">
        <h2>Projects</h2>
        <ProjectsStatsBox />
        <div className="technologyBox-container">
          <TechnologyBox />
          <TechnologyBox />
          <TechnologyBox />
          <TechnologyBox />
          <TechnologyBox />
        </div>
      </div>
    </>
  );
};

export default Projects;
