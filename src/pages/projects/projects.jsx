import React from "react";
import ProjectsStatsBox from "../../components/projectsStatsBox/projectsStatsBox";
import "./projects.scss";
const Projects = () => {
  return (
    <>
      <div className="projects-page">
        <h2>Projects</h2>
        <ProjectsStatsBox />
      </div>
    </>
  );
};

export default Projects;
