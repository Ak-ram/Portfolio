import React from "react";
import ProjectsStatsBox from "../../components/projectsStatsBox/projectsStatsBox";
import ProjectsSlider from "../../components/projectsSlider/projectsSlider.jsx";
import "./projects.scss";
const Projects = () => {
  return (
    <>
      <div className="projects-page">
        <h2>Projects</h2>
        <ProjectsStatsBox />
        <section className="technologyes">
          <h3>Projects List</h3>
          <ProjectsSlider />
        </section>
      </div>
    </>
  );
};

export default Projects;
