import React from "react";
import { FaReact, FaSass, FaHtml5, FaArrowRight } from "react-icons/fa";
import { MdHorizontalRule, MdDoneAll } from "react-icons/md";
import TechnologyBox from "../../components/technologyBox/technologyBox";
import {
  SiJavascript,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiPostman,
  SiAntdesign,
  SiGithub,
  SiMaterialui,
  SiFirebase,
  SiGit,
  SiWebstorm,
  SiVisualstudio,
  SiReact,
  SiHtml5,
} from "react-icons/si";
import { BsArrowRightShort } from "react-icons/bs";
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
        <section className="technologies">
          <h3>Top Projects</h3>
          <ProjectsSlider
            projects={[
              "https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60107f70fca649c0406c7e61_6002086f72b7277a3c01e2fd_interactions-gif.gif",
              "https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60107f6d2368c291a6ab4992_6002086f72b72705be01e2c5_StVwfpeF7eIFN6jqqKVqEnD77WJV8qxkG39DEBtS3ZJyTf6gz2CAkReH-JbFG4_P009xYimtRJ49W_9QKIb9LZZBHkPFwlRs_bUQPRgIayepfBo5DNEJSBoFkQ9-qQSzT38rmglU.gif",
              "https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60107f6dc0c29a14c9eb3d56_6002086f72b7276fe601e2b5_louie-steller.gif",
            ]}
          />
        </section>
        <div className="projects-categories">
          <div className="continue-scrolling">
            <MdHorizontalRule />
            <span style={{ fontSize: "12px" }}> continue scrolling </span>
          </div>

          <div className="categories">
            <BsArrowRightShort size={20} className="scroll-arrow" />
            <TechnologyBox
              techIcon={<MdDoneAll color="#e84393" size={20} />}
              techName={"All"}
            />
            <TechnologyBox
              techIcon={<SiReact color="#74b9ff" size={20} />}
              techName={"React"}
            />
            <TechnologyBox
              techIcon={<SiJavascript color="#fdcb6e" size={20} />}
              techName={"JS"}
            />
            <TechnologyBox
              techIcon={<SiVisualstudio color="rgb(56 167 229)" size={20} />}
              techName={"VSC"}
            />
            <TechnologyBox
              techIcon={<SiCss3 color="rgb(56 167 229)" size={20} />}
              techName={"CSS"}
            />
          </div>
          <div className="projects-list">
            {gitHubRepos?.map((repo) => (
              <TechnologyBox
                topics={repo.topics}
                createdDate={repo.pushed_at}
                githubUrl={repo.clone_url}
                size={repo.size}
                techIcon={""}
                techName={repo.name}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
