import {
  SiGithub,
  SiLinkedin,
  SiDevdotto,
  SkillsSubSection,
  WorkSubSection,
  AboutMeSubSection,
  EducationSubSection,
  Breadcrumb,
  useGitHubRepos,
} from "../../exporter.jsx";
import "./profile.scss";
const Profile = () => {
  const { gitHubRepos } = useGitHubRepos();
  return (
    <div className="profile-page">
      <div className="banner">
        <Breadcrumb />
        <div className="user-info">
          <img
            className="profile-img"
            src={gitHubRepos[0]?.owner?.avatar_url}
            alt="profile-img"
          />
          <strong className="user-name">Akram A. Abdelbasir</strong>
          {/* <span className="user-location">
            <HiOutlineLocationMarker color="#fd79a8" size={15} />
            Beni Suef,Beni Suef, Egypt.
          </span> */}
          <span className="user-title">Front End Web Developer</span>
        </div>
      </div>
      <div className="profile-info">
        <div className="socials">
          <span className="linkedin">
            <SiLinkedin /> LinkedIn
          </span>
          <span className="dev">
            <SiDevdotto /> DEV
          </span>
          <span className="github">
            <SiGithub /> GitHub
          </span>
        </div>
        <hr />
        <AboutMeSubSection />
        <SkillsSubSection />
        <WorkSubSection />
        <EducationSubSection />
      </div>
    </div>
  );
};

export default Profile;
