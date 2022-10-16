import { useState } from "react";
import "./aboutMeSubSection.scss";
const AboutMeSubSection = () => {
  const [isHidden, setHidden] = useState(true);
  return (
    <div className="about-me">
      <h5>📢 About</h5>
      <p className="about">
        I'm happy you're here to hear me out 👋❤, so let me tell you a le bit
        about myself. By the way, prior to beginning front-end
        <span id="dots" className={`${isHidden ? "" : "hide"}`}>
          ...
        </span>
        <span className={`${isHidden ? "hide" : ""}`}>
          , I was a geology student. ⛏ Two years ago, I started learning
          front-end since I had a passion for designing and coding & today, I
          can state with pride that I am a front-end developer. What Can I DO?
          🤔 ⮞ Due to my ability to design clear, reusable, and maintainable
          code, I can contribute to the deployment process of web apps. ⮞ I can
          assist you in building UI because I am skilled in design. What is My
          Tech background? 👀 Since I'm actively tryimprove better at
          programming, I reparticipated in manyunch of programs, including
          Udacity's Nanodegree program, Google Digital Marketing, and the FWD
          scholarship. I learned React, pure JavaScript, Redux, TypeScript, Unit
          Testing, HTML, CSS, SASS, Bootstrap, Tailwind, Ant Design, Git,
          GitHub, and Postman thanks to these programs. What do I do nowadays?
          🧐 I recently published tech articles about front-end topics on my
          blog. ✍ Visit my <a href="https://dev.to/ak_ram">blog</a>
          🚨 Check out my <a href="https://github.com/Ak-ram">GitHub</a> profile
        </span>
        <button onClick={() => setHidden(!isHidden)} className="read-more-btn">
          {isHidden ? " Read more" : " Read less"}
        </button>
      </p>
    </div>
  );
};

export default AboutMeSubSection;
