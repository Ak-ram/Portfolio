import "./educationSubSection.scss";
import { BiMessageAltCheck, FcGraduationCap } from "../../../../exporter";
import { TbNumber1, TbNumber2, TbNumber3 } from "react-icons/tb";
const EducationSubSection = () => {
  return (
    <div className="education">
      <h5>
        <FcGraduationCap /> Education
      </h5>
      <div className="school-container">
        <div className="school bsu">
          <span className="school-date">
            {/* <TbNumber3 color="rgb(0 160 240)" size={20} /> */}
            <span>2019:2022</span>
          </span>
          <div className="school-details"></div>
        </div>
        <div className="school bsu">
          <span className="school-date">
            {/* <TbNumber2 color="rgb(0 160 240)" size={20} /> */}
            <span>2019:2022</span>
          </span>
          <div className="school-details"></div>
        </div>
        <div className="school bsu">
          <span className="school-date">
            {/* <TbNumber1 color="rgb(0 160 240)" size={20} /> */}
            <span>2019:2022</span>
          </span>
          <div className="school-details"></div>
        </div>
      </div>
    </div>
  );
};

export default EducationSubSection;
