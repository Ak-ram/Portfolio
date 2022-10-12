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
          <h3>Projects List</h3>
          <div className="projects-slider">
            <div className="project">
              <img
                src="https://items.epicpxls.com/uploads/photo/ced316c22c23d8215bf0ebfae3fddb22.jpg"
                alt="moviideck"
              />
              <div className="project-details">
                <h4>Moviideck</h4>
                <span>React, Js, Html</span>
              </div>
            </div>
            <div className="project">
              <img
                src="https://items.epicpxls.com/uploads/photo/ced316c22c23d8215bf0ebfae3fddb22.jpg"
                alt="moviideck"
              />
              <div className="project-details">
                <h4>Moviideck</h4>
                <span>React, Js, Html</span>
              </div>
            </div>
            <div className="project">
              <img
                src="https://items.epicpxls.com/uploads/photo/ced316c22c23d8215bf0ebfae3fddb22.jpg"
                alt="moviideck"
              />
              <div className="project-details">
                <h4>Moviideck</h4>
                <span>React, Js, Html</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;
