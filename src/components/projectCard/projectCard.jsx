import { SiGithub, GoLinkExternal } from "../../exporter";
import { Link } from "react-router-dom";
import "./projectCard.scss";
const ProjectCard = ({ topics, createdDate, githubUrl, homepage, name }) => {
  return (
    <>
      <Link to={name.toLowerCase()} className="projectCard">
        {/* <div className="top">{icon}</div> */}
        <div className="details">
          <span className="createdDate">{createdDate.substr(0, 10)}</span>
          <span className="projectName">{name.replaceAll("-", " ")}</span>
          <footer>
            <span className="projectTopics">
              {topics[0]} {topics[1]} {topics[2]}
            </span>
            <div className="external-links">
              <a href={githubUrl}>
                <SiGithub size={16} />
              </a>
              {homepage ? (
                <a href={homepage}>
                  <GoLinkExternal size={16} />
                </a>
              ) : (
                ""
              )}
            </div>
          </footer>
        </div>
      </Link>
    </>
  );
};

export default ProjectCard;
