import React from "react";
import ProjectsStatsBox from "../../components/projectsStatsBox/projectsStatsBox";
import ProjectsSlider from "../../components/projectsSlider/projectsSlider.jsx";
import { useGitHubRepos } from "../../contexts/GitHubAPIContext";
import "./projects.scss";
const Projects = () => {
  const { gitHubRepos } = useGitHubRepos();
  return (
    <>
      <div className="projects-page">
        {console.log(gitHubRepos)}
        <h2>Projects</h2>
        <ProjectsStatsBox />
        <section className="technologyes">
          <h3>Projects List</h3>
          <ProjectsSlider
            projects={[
              {
                Moviideck:
                  "https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60107f70fca649c0406c7e61_6002086f72b7277a3c01e2fd_interactions-gif.gif",
              },
              {
                Flexbox:
                  "https://htmlburger.com/blog/wp-content/uploads/2022/04/Contact-US-Page-Example-Freelance-Web-Developer-Portfolio-Contact-Page.gif",
              },
              {
                "Scss-helpers vs code extension":
                  "https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60107f70fca649c0406c7e61_6002086f72b7277a3c01e2fd_interactions-gif.gif",
              },
              {
                Dropit:
                  "https://extendthemes.com/wp-content/uploads/2018/06/great.gif",
              },
              {
                Portfolio:
                  "https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60107f6d2368c291a6ab4992_6002086f72b72705be01e2c5_StVwfpeF7eIFN6jqqKVqEnD77WJV8qxkG39DEBtS3ZJyTf6gz2CAkReH-JbFG4_P009xYimtRJ49W_9QKIb9LZZBHkPFwlRs_bUQPRgIayepfBo5DNEJSBoFkQ9-qQSzT38rmglU.gif",
              },
              {
                ZoomEffect:
                  "https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60107f6dc0c29a14c9eb3d56_6002086f72b7276fe601e2b5_louie-steller.gif",
              },
            ]}
          />
        </section>
      </div>
    </>
  );
};

export default Projects;
