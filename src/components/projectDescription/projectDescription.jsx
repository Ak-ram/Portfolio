import { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useGitHubRepos } from "../../exporter";
import "./projectDescription.scss";
const ProjectDescription = () => {
  const { gitHubRepos } = useGitHubRepos();
  const params = useParams();
  const [currentRepo, setRepo] = useState([]);
  return (
    <>
      <h1>{params.projectName}</h1>
      {gitHubRepos?.find((repo) => {
        if (repo.name.toLowerCase() === params.projectName) {
          console.log(repo);
          // return <p>{des}</p>;
        }
      })}
      {/* <Outlet /> */}
    </>
  );
};

export default ProjectDescription;
