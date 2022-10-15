import React from "react";
import { FaReact, FaSass, FaHtml5 } from "react-icons/fa";
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
  SiLinkedin,
  SiDevdotto,
} from "react-icons/si";

import { HiOutlineLocationMarker } from "react-icons/hi";
import "./profile.scss";
const Profile = () => {
  const techs = [
    { React: <FaReact color="rgb(0 160 240)" size={25} /> },
    { Javscript: <SiJavascript color="yellow" size={25} /> },
    { Css3: <SiCss3 color="#4285F4" size={25} /> },
    { Sass: <FaSass color="#CD6799" size={25} /> },
    { Html5: <FaHtml5 color="#f06529" size={25} /> },
    { Tailwind: <SiTailwindcss color="#36b7f0" size={25} /> },
    { Bootstrap: <SiBootstrap color="#563d7c" size={25} /> },
    { Postman: <SiPostman color="#EF5B25" size={25} /> },
    { GitHub: <SiGithub color="#fff" size={25} /> },
    { AntDesign: <SiAntdesign color="#e16260" size={25} /> },
    { Materialui: <SiMaterialui color="#28b0ee" size={25} /> },
    { Firebase: <SiFirebase color="#f7c52e" size={25} /> },
    { Git: <SiGit color="#e94e31" size={25} /> },
    { Webstorm: <SiWebstorm color="#fff" size={25} /> },
    { Visualstudio: <SiVisualstudio color="#0074d0" size={25} /> },
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
      </div>
      {/* <div className="banner"></div>
      <header className="profile-info">
        <div className="top">
          <img
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
            alt="profile-image"
          />
          <div className="contact-me">
            <span>
              <SiLinkedin />
            </span>
            <span>
              <SiDevdotto />
            </span>
            <span>
              <SiGithub />
            </span>

            <button className="follow-me">Follow</button>
          </div>
        </div>
        <div className="details">
          <h3>Akram A. Abdelbasir</h3>
          <strong>
            Front-End Web Developer 🎨 | JavaScript | ReactJs | FWD Graduate |
            Blogger ✍
          </strong>
          <p className="about">
            I'm happy you're here to hear me out 👋❤, so let me tell you a le
            bit about myself. By the way, prior to beginning front-end
            programming, I was a geology student. ⛏ Two years ago, I started
            learning front-end since I had a passion for designing and coding &
            today, I can state with pride that I am a front-end developer. What
            Can I DO? 🤔 ⮞ Due to my ability to design clear, reusable, and
            maintainable code, I can contribute to the deployment process of web
            apps. ⮞ I can assist you in building UI because I am skilled in
            design. What is My Tech background? 👀 Since I'm actively tryimprove
            better at programming, I reparticipated in manyunch of programs,
            including Udacity's Nanodegree program, Google Digital Marketing,
            and the FWD scholarship. I learned React, pure JavaScript, Redux,
            TypeScript, Unit Testing, HTML, CSS, SASS, Bootstrap, Tailwind, Ant
            Design, Git, GitHub, and Postman thanks to these programs. What do I
            do nowadays? 🧐 I recently published tech articles about front-end
            topics on my blog. ✍ Visit my blog: https://dev.to/ak_ram 🚨 Check
            out my GitHub profile: https://github.com/Ak-ram
          </p>
        </div>
      </header> */}
      <div className="technology-container">
        {/* {techs.map((tech) => {
          return (
            <TechnologyBox
              key={Object.keys(tech)}
              techIcon={Object.values(tech)}
              techName={Object.keys(tech)}
            />
          );
        })} */}
      </div>
    </div>
  );
};

export default Profile;
