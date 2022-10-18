import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useGitHubRepos, Breadcrumb } from "../../exporter";
// import  from "../breadcrumb/breadcrumb";
import "./projectDescription.scss";
import Filters from "../filters/filters";
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
        <div className="content">
          <div className="tags-container">
            <div className="tag">
              <b>Tags:</b> <Filters filters={currentRepo.topics} />
            </div>
            <div className="description">
              <p>{currentRepo.description}</p>
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default ProjectDescription;
