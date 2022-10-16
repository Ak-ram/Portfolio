import {
  SiGithub,
  SiLinkedin,
  SiDevdotto,
  SkillsSubSection,
  WorkSubSection,
  AboutMeSubSection,
} from "../../exporter.jsx";
import "./profile.scss";
const Profile = () => {
  return (
    <div className="profile-page">
      <div className="banner"></div>
      <div className="profile-info">
        <img
          className="profile-img"
          src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
          alt="profile-img"
        />
        <div className="user-info">
          <strong className="user-name">Akram A. Abdelbasir</strong>
          {/* <span className="user-location">
            <HiOutlineLocationMarker color="#fd79a8" size={15} />
            Beni Suef,Beni Suef, Egypt.
          </span> */}
          <span className="user-title">Front End Web Developer</span>
        </div>
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
      </div>
    </div>
  );
};

export default Profile;
