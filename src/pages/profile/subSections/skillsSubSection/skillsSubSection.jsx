import {
  TechnologyBox,
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
} from "../../../../exporter";

import "./skillsSubSection.scss";
const SkillsSubSection = () => {
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
  );
};

export default SkillsSubSection;
