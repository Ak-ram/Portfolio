import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useGitHubRepos } from "../../exporter";
import Breadcrumb from "../breadcrumb/breadcrumb";
import avatar from "../../assests/avatar.webp";
import "./projectDescription.scss";
const ProjectDescription = () => {
  const { gitHubRepos } = useGitHubRepos();
  const params = useParams();
  const [currentRepo, setCurrentRepo] = useState([]);

  useEffect(() => {
    gitHubRepos?.find((repo) => {
      if (repo.name.toLowerCase() === params.projectName) {
        setCurrentRepo(repo);
        console.log(repo);
      }
    });
  }, []);

  return (
    <>
      <div className="details-page">
        <div className="banner">
          <header className="controls">
            <Breadcrumb />
          </header>
          <div className="page-main-details">
            <div className="publish-info">
              <div className="publisher">
                <img
                  width={50}
                  src={currentRepo?.owner?.avatar_url}
                  alt="publisher-image"
                />
                <span className="publish-date">29/2022</span>
              </div>
              <div className="headline">
                <h2>{currentRepo?.name}</h2>
                <footer>
                  <span>By {currentRepo?.owner?.login}</span>
                  <span>5 Minutes Read</span>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <p>{currentRepo.description}</p> */}
      {/* <Outlet /> */}
    </>
  );
};

export default ProjectDescription;
