import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useGitHubRepos } from "../../exporter";
import "./projectDescription.scss";
const ProjectDescription = () => {
  const { gitHubRepos } = useGitHubRepos();
  const params = useParams();
  const [currentRepo, setCurrentRepo] = useState([]);

  useEffect(() => {
    gitHubRepos?.find((repo) => {
      if (repo.name.toLowerCase() === params.projectName) {
        setCurrentRepo(repo);
      }
    });
  }, []);

  return (
    <>
      <h1>{currentRepo.id}</h1>
      <p>{currentRepo.description}</p>
      {/* <Outlet /> */}
    </>
  );
};

export default ProjectDescription;
