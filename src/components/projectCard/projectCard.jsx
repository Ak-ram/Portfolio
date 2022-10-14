import React from "react";

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
          <div className="topics">
            {topics?.map((topic) => (
              <span>{topic}</span>
            ))}
          </div>
          <a href={githubUrl}>Live Demo</a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
