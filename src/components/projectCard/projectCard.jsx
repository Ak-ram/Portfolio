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
      <div className="projectCard">
        <div className="top">{icon}</div>
        <div className="bottom">
          <span className="createdDate">{createdDate.substr(0, 10)}</span>
          <span className="projectName">{name}</span>
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
