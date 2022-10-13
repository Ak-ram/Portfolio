import React from "react";
import "./projectsStatsBox.scss";
import { useGitHubRepos } from "../../contexts/GitHubAPIContext";
import {
  useReactGitHubRepos,
  useJSGitHubRepos,
  useVSCodeExtensionGitHubRepos,
} from "../../contexts/sub_GitHubAPIContext";
const ProjectsStatsBox = () => {
  const { gitHubRepos } = useGitHubRepos();
  const reactProjectsArray = useReactGitHubRepos(gitHubRepos);
  const jsGitHubReposArray = useJSGitHubRepos(gitHubRepos);
  const vscodeExtensionGitHubReposArray =
    useVSCodeExtensionGitHubRepos(gitHubRepos);
  const reactColor = "rgb(0 160 240)";
  const jsColor = "#F0DB4F";
  return (
    <div className="projects-stats">
      <div className="leftSide">
        <div
          className="circle"
          style={{
            background: `conic-gradient(${reactColor} ${
              reactProjectsArray?.length * (360 / gitHubRepos.length)
            }deg, ${jsColor} ${
              reactProjectsArray?.length * (360 / gitHubRepos.length)
            }deg ${
              jsGitHubReposArray?.length * (360 / gitHubRepos.length)
            }deg, #0078d7 ${
              jsGitHubReposArray?.length * (360 / gitHubRepos.length)
            }deg)`,
          }}
        >
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
            <span
              className="key key-1"
              style={{ background: `${reactColor}` }}
            ></span>
            <span className="technology">React</span>
            <span className="projectsCount">{reactProjectsArray.length}</span>
          </div>

          <div className="index">
            <span
              className="key key-2"
              style={{ background: `${jsColor}` }}
            ></span>
            <span className="technology">JS</span>
            <span className="projectsCount">{jsGitHubReposArray.length}</span>
          </div>

          <div className="index">
            <span className="key key-3"></span>
            <span className="technology">VS code</span>
            <span className="projectsCount">
              {vscodeExtensionGitHubReposArray.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsStatsBox;
