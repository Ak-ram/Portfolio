import React from "react";
import { GoLinkExternal } from "react-icons/go";
import "./projectCard.scss";
const ProjectCard = ({ topics, createdDate, githubUrl, icon, name }) => {
  return (
    <>
      <div className="projectCard">
        {/* <div className="top">{icon}</div> */}
        <div className="details">
          <span className="createdDate">{createdDate.substr(0, 10)}</span>
          <span className="projectName">{name.replaceAll("-", " ").toUpperCase()}</span>
          <footer>
            <span className="projectTopics">{topics[0]}</span>
            <a href={githubUrl}>
              <GoLinkExternal />
            </a>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
