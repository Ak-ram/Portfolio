import React from "react";
import ProjectsStatsBox from "../../components/projectsStatsBox/projectsStatsBox";

import "./projects.scss";
const Projects = () => {


  return (
    <>
      <div className="projects-page">
        <h2>Projects</h2>
        <ProjectsStatsBox />
        <section className="technologyes">
          <h3>Technologies</h3>
          {/* <div className="technologyBox-container">
           
          </div> */}
        </section>
      </div>
    </>
  );
};

export default Projects;
