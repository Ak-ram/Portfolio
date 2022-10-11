import React from "react";
import "./technologyBox.scss";
const TechnologyBox = ({ techIcon, techName }) => {
  return (
    <div className="tech">
      <span>{techIcon}</span>
      <span className="tech-name">{techName}</span>
    </div>
  );
};

export default TechnologyBox;
