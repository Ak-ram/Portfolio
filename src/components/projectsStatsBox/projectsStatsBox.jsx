// import React from "react";
import "./projectsStatsBox.scss";
// import { useGitHubRepos } from "../../contexts/GitHubAPIContext";
import {
  useReactGitHubRepos,
  useJSGitHubRepos,
  useVSCodeExtensionGitHubRepos,
  useGitHubRepos,
} from "../../exporter";

const ProjectsStatsBox = () => {
  const { gitHubRepos } = useGitHubRepos();
  const reactProjectsArray = useReactGitHubRepos(gitHubRepos);
  const jsGitHubReposArray = useJSGitHubRepos(gitHubRepos);
  const vscodeExtensionGitHubReposArray =
    useVSCodeExtensionGitHubRepos(gitHubRepos);
  const reactColor = "rgb(0 160 240)";
  const jsColor = "#F0DB4F";
  const vscColor = "#ff419d";
  const othersColor = "#8585859c";
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
              jsGitHubReposArray?.length * (360 / gitHubRepos.length) +
              reactProjectsArray?.length * (360 / gitHubRepos.length)
            }deg, ${vscColor} ${
              jsGitHubReposArray?.length * (360 / gitHubRepos.length) +
              reactProjectsArray?.length * (360 / gitHubRepos.length)
            }deg ${
              jsGitHubReposArray?.length * (360 / gitHubRepos.length) +
              reactProjectsArray?.length * (360 / gitHubRepos.length) +
              vscodeExtensionGitHubReposArray?.length *
                (360 / gitHubRepos.length)
            }deg, ${othersColor} ${
              jsGitHubReposArray?.length * (360 / gitHubRepos.length) +
              reactProjectsArray?.length * (360 / gitHubRepos.length) +
              vscodeExtensionGitHubReposArray?.length *
                (360 / gitHubRepos.length)
            }deg )`,
          }}
        >
          <div className="circle-content">
            <span>{gitHubRepos.length}</span> <span>Projects</span>
          </div>
        </div>
      </div>
      <div className="rightSide">
        {/* <div className="top">
          <span className="top_part1">Latest Project</span>
          <span className="top_part2">Portfolio</span>
        </div> */}
        <div className="bottom">
          <div className="index">
            <span
              className="key"
              style={{ background: `${reactColor}` }}
            ></span>
            <span className="technology">React</span>
            <span className="projectsCount">{reactProjectsArray.length}</span>
          </div>

          <div className="index">
            <span className="key" style={{ background: `${jsColor}` }}></span>
            <span className="technology">JS</span>
            <span className="projectsCount">{jsGitHubReposArray.length}</span>
          </div>

          <div className="index">
            <span className="key" style={{ background: `${vscColor}` }}></span>
            <span className="technology">VS code</span>
            <span className="projectsCount">
              {vscodeExtensionGitHubReposArray.length}
            </span>
          </div>

          <div className="index">
            <span
              className="key"
              style={{ background: `${othersColor}` }}
            ></span>
            <span className="technology">Others</span>
            <span className="projectsCount">
              {gitHubRepos.length -
                (vscodeExtensionGitHubReposArray.length +
                  jsGitHubReposArray.length +
                  reactProjectsArray.length)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsStatsBox;
