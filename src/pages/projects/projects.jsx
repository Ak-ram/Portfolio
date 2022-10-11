import React from "react";
import ProjectsStatsBox from "../../components/projectsStatsBox/projectsStatsBox";
import TechnologyBox from "../../components/technologyBox/technologyBox";
import { FaReact } from "react-icons/fa";
import "./projects.scss";
const Projects = () => {
  return (
    <>
      <div className="projects-page">
        <h2>Projects</h2>
        <ProjectsStatsBox />
        <section className="technologyes">
          <h3>Categories</h3>
          <div className="technologyBox-container">
            <TechnologyBox techIcon={<FaReact />} techName="React" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;
