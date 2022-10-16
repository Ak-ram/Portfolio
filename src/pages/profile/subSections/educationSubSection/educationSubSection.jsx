import "./educationSubSection.scss";
import { BiMessageAltCheck } from "../../../../exporter";
const EducationSubSection = () => {
  return (
    <div className="education">
      <h5>🎓 Education</h5>
      <div className="school-container">
        <div className="school bsu">
          <span className="school-date">
            <BiMessageAltCheck color="rgb(0 160 240)" size={20} />
            2019:2022
          </span>
          <div className="school-details"></div>
        </div>
        <div className="school bsu">
          <span className="school-date">
            <BiMessageAltCheck color="rgb(0 160 240)" size={20} />
            2019:2022
          </span>
          <div className="school-details"></div>
        </div>
      </div>
    </div>
  );
};

export default EducationSubSection;
