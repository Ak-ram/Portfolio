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
                src="https://miro.medium.com/max/1400/0*HZZrSYhmFsITWBC8.jpg"
                alt="moviideck"
              />
              <div className="project-details">
                <h4>Moviideck</h4>
                <span>React, Js, Html</span>
              </div>
            </div>
            <div className="project">
              <img
                src="https://i.ytimg.com/vi/eTfVcagDbPg/hqdefault.jpg"
                alt="moviideck"
              />
              <div className="project-details">
                <h4>Moviideck</h4>
                <span>React, Js, Html</span>
              </div>
            </div>
            <div className="project">
              <img
                src="https://static.wixstatic.com/media/c0fd69_7aea5f068bf244d382426d164f1150b4~mv2.gif/v1/fill/w_320,h_240,q_90/c0fd69_7aea5f068bf244d382426d164f1150b4~mv2.gif"
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
