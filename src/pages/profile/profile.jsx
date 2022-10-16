import React, { useState } from "react";
import {
  FaReact,
  FaSass,
  FaHtml5,
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
  SiLinkedin,
  SiDevdotto,
  TechnologyBox,
} from "../../exporter.jsx";
import "./profile.scss";
const Profile = () => {
  const [isHidden, setHidden] = useState(true);
  const techs = [
    { React: <FaReact color="rgb(0 160 240)" size={23} /> },
    { Javscript: <SiJavascript color="yellow" size={23} /> },
    { Css: <SiCss3 color="#4285F4" size={23} /> },
    { Sass: <FaSass color="#CD6799" size={23} /> },
    { Html: <FaHtml5 color="#f06529" size={23} /> },
    { Tailwind: <SiTailwindcss color="#36b7f0" size={23} /> },
    { Bootstrap: <SiBootstrap color="#563d7c" size={23} /> },
    { Postman: <SiPostman color="#EF5B23" size={23} /> },
    { GitHub: <SiGithub color="#fff" size={23} /> },
    { AntDesign: <SiAntdesign color="#e16260" size={23} /> },
    { MUI: <SiMaterialui color="#28b0ee" size={23} /> },
    { Firebase: <SiFirebase color="#f7c52e" size={23} /> },
    { Git: <SiGit color="#e94e31" size={23} /> },
    { Webstorm: <SiWebstorm color="#fff" size={23} /> },
    { VSC: <SiVisualstudio color="#0074d0" size={23} /> },
  ];
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
        <div className="about-me">
          <h5>📢 About</h5>
          <p className="about">
            I'm happy you're here to hear me out 👋❤, so let me tell you a le
            bit about myself. By the way, prior to beginning front-end
            <span id="dots" className={`${isHidden ? "" : "hide"}`}>
              ...
            </span>
            <span className={`${isHidden ? "hide" : ""}`}>
              , I was a geology student. ⛏ Two years ago, I started learning
              front-end since I had a passion for designing and coding & today,
              I can state with pride that I am a front-end developer. What Can I
              DO? 🤔 ⮞ Due to my ability to design clear, reusable, and
              maintainable code, I can contribute to the deployment process of
              web apps. ⮞ I can assist you in building UI because I am skilled
              in design. What is My Tech background? 👀 Since I'm actively
              tryimprove better at programming, I reparticipated in manyunch of
              programs, including Udacity's Nanodegree program, Google Digital
              Marketing, and the FWD scholarship. I learned React, pure
              JavaScript, Redux, TypeScript, Unit Testing, HTML, CSS, SASS,
              Bootstrap, Tailwind, Ant Design, Git, GitHub, and Postman thanks
              to these programs. What do I do nowadays? 🧐 I recently published
              tech articles about front-end topics on my blog. ✍ Visit my{" "}
              <a href="https://dev.to/ak_ram">blog</a>
              🚨 Check out my <a href="https://github.com/Ak-ram">
                GitHub
              </a>{" "}
              profile
            </span>
            <button
              onClick={() => setHidden(!isHidden)}
              className="read-more-btn"
            >
              {isHidden ? " Read more" : " Read less"}
            </button>
          </p>
        </div>
        <div className="skills">
          <h5>✨ Skills </h5>
          <div className="technology-container">
            {techs.map((tech) => {
              return (
                <TechnologyBox
                  key={Object.keys(tech)}
                  techIcon={Object.values(tech)}
                  techName={Object.keys(tech)}
                />
              );
            })}
          </div>
        </div>
        <div className="works">
          <h5>
            🔨 Works
          </h5>
          <div className="works-examples">
            <div className="small-grid">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="large-grid">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
