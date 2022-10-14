import React from "react";
import { GoLinkExternal } from "react-icons/go";
import "./projectCard.scss";
const ProjectCard = ({
  topics,
  createdDate,
  githubUrl,
  description,
  icon,
  name,
}) => {
  return (
    <>
      <div className="project-card">
        <div className="top">{icon}</div>
        <div className="bottom">
          <span className="createdDate">{createdDate}</span>
          <span className="techName">{name}</span>
          <p className="description">{description}</p>
          <span>{topics[0]}</span>
          <a href={githubUrl}>
            <GoLinkExternal />
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
