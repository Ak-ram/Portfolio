import React from "react";
import ProjectsStatsBox from "../../components/projectsStatsBox/projectsStatsBox";

import "./projects.scss";
const Projects = () => {
  return (
    <>
      <div className="projects-page">
        <h2>Projects</h2>
        <ProjectsStatsBox />
        <section className="technologyes">
          <h3>Projects List</h3>
          <div className="projects-slider">
            <div className="project">
              <img
                src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2021/04/image_processing20201217-23502-cx8xv8.gif?auto=format&q=60&fit=max&w=930"
                alt="moviideck"
              />
              <div className="project-details">
                <h4>Moviideck</h4>
                <span>React, Js, Html</span>
              </div>
            </div>
            <div className="project">
              <img
                src="https://htmlburger.com/blog/wp-content/uploads/2022/04/Contact-US-Page-Example-Freelance-Web-Developer-Portfolio-Contact-Page.gif"
                alt="moviideck"
              />
              <div className="project-details">
                <h4>Moviideck</h4>
                <span>React, Js, Html</span>
              </div>
            </div>
            
            <div className="project">
              <img
                src="https://extendthemes.com/wp-content/uploads/2018/06/great.gif"
                alt="moviideck"
              />
              <div className="project-details">
                <h4>Moviideck</h4>
                <span>React, Js, Html</span>
              </div>
            </div>
                   <div className="project">
              <img
                src="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60107f6d2368c291a6ab4992_6002086f72b72705be01e2c5_StVwfpeF7eIFN6jqqKVqEnD77WJV8qxkG39DEBtS3ZJyTf6gz2CAkReH-JbFG4_P009xYimtRJ49W_9QKIb9LZZBHkPFwlRs_bUQPRgIayepfBo5DNEJSBoFkQ9-qQSzT38rmglU.gif"
                alt="moviideck"
              />
              <div className="project-details">
                <h4>Moviideck</h4>
                <span>React, Js, Html</span>
              </div>
            </div>
            
             <div className="project">
              <img
                src="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60107f6fdd7ce834543ca3b1_6002086f72b727842001e2de_hSdQz9B6-x9R-qtVE2_0Q-PFVl-erXJvz9xgNAv51sASE2kC9gpEGWMlsutEGcdv_yIvZwYGrh7hGUjiDvFxmiuIeoidWNNX7FVj5rxoLiH6LZVuOJ6HfZJCv5JaOkjdXf3z9Uix.gif"
                alt="moviideck"
              />
              <div className="project-details">
                <h4>Moviideck</h4>
                <span>React, Js, Html</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;
