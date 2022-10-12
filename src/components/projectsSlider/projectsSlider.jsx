import React from "react";
import Loader from "../../components/loader/loader";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import "./projectsSlider.scss";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const ProjectsSlider = ({ projects }) => {
  const projectsSliderRef = useRef();
  const [Xoffset, setXoffset] = useState(0);
  useEffect(() => {
    projectsSliderRef.current.onscroll = () => {
      let scrollAmount = projectsSliderRef.current.scrollLeft;
      setXoffset(scrollAmount);
      // setOffsetStyle({
      //   ...offsetStyle,
      //   transform: `scale(${scrollAmount / 700})`,
      // });
    };
  }, [Xoffset]);
  if (!projects?.length) return <Loader />;

  return (
    <div className="projects-slider" ref={projectsSliderRef}>
      {projects.map((project) => {
        return (
          <div key={Object.keys(project)} className="project">
            <img src={Object.values(project)} alt={Object.keys(project)} />
          </div>
        );
      })}
      <FaChevronRight
        className="nextArrow"
        onClick={() => (projectsSliderRef.current.scrollLeft += 100)}
      />
      <FaChevronLeft
        className="prevArrow"
        onClick={() => (projectsSliderRef.current.scrollLeft -= 100)}
      />
    </div>
  );
};

export default ProjectsSlider;
