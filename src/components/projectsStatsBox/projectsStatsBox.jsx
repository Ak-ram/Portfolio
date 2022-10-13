import React from "react";
import "./projectsStatsBox.scss";
import { useGitHubRepos } from "../../contexts/GitHubAPIContext";
import { useReactGitHubRepos } from "../../contexts/sub_GitHubAPIContext";
const ProjectsStatsBox = () => {
  const { gitHubRepos } = useGitHubRepos();
  const reactProjectsArray = useReactGitHubRepos(gitHubRepos);
  return (
    <div className="projects-stats">
      <div className="leftSide">
        <div className="circle">
          <div className="circle-content">
            <span>{gitHubRepos.length}</span> <span>Projects</span>
          </div>
        </div>
      </div>
      <div className="rightSide">
        <div className="top">
          <span className="top_part1">Latest Project</span>
          <span className="top_part2">Portfolio</span>
        </div>
        <div className="bottom">
          <div className="index">
            <span className="key"></span>
            <span className="technology">React</span>
            <span className="projectsCount">{reactProjectsArray.length}</span>
          </div>

          <div className="index">
            <span className="key"></span>
            <span className="technology">JS</span>
            <span className="projectsCount">4</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsStatsBox;
