import React from "react";
import Loader from "../../components/loader/loader";
import { BsChevronRight } from "react-icons/bs";
import "./projectsSlider.scss";

const ProjectsSlider = ({ projects }) => {
  if (!projects?.length) return <Loader />;

  return (
    <div className="projects-slider">
      {projects.map((project) => {
        return (
          <div key={Object.keys(project)} className="project">
            <img src={Object.values(project)} alt={Object.keys(project)} />
          </div>
        );
      })}
      <BsChevronRight className="nextArrow" />
    </div>
  );
};

export default ProjectsSlider;
