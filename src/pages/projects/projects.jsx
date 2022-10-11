import React from "react";
import ProjectsStatsBox from "../../components/projectsStatsBox/projectsStatsBox";
import TechnologyBox from "../../components/technologyBox/technologyBox";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import "./projects.scss";
const Projects = () => {
  const techs = [
    {
      React: <FaReact color="rgb(0 160 240)" size={25} />,
    },
    { Javscript: <SiJavascript color="yellow" size={25} /> },
  ];

  return (
    <>
      <div className="projects-page">
        <h2>Projects</h2>
        <ProjectsStatsBox />
        <section className="technologyes">
          <h3>Categories</h3>
          <div className="technologyBox-container">
            {/* <TechnologyBox
              techIcon={<FaReact color="rgb(0 160 240)" size={25} />}
              techName="React"
            />
            <TechnologyBox
              techIcon={<SiJavascript color="yellow" size={25} />}
              techName="Javascript"
            /> */}
            {techs.map((tech) => {
              return (
                <TechnologyBox
                  techIcon={Object.values(tech)}
                  techName={Object.keys(tech)}
                />
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;
