import { Loader } from "../../exporter";
import "./projectsSlider.scss";
import { useRef } from "react";

const ProjectsSlider = ({ projects }) => {
  const projectsSliderRef = useRef();

  if (!projects?.length) return <Loader />;

  return (
    <div className="projects-slider" ref={projectsSliderRef}>
      {projects.map((project) => {
        return (
          <div key={Object.keys(project)} className="project">
            <img src={project} alt="sm" />
          </div>
        );
      })}
      {/* <FaChevronRight
        className="nextArrow"
        onClick={() => (projectsSliderRef.current.scrollLeft += 100)}
      /> */}
    </div>
  );
};

export default ProjectsSlider;
