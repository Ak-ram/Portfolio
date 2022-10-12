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
} from "react-icons/si";
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
    <>
      <h1>Profile </h1>
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
    </>
  );
};

export default Profile;
