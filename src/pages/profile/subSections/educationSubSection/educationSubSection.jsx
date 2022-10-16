import "./educationSubSection.scss";
import { FaUniversity, FcGraduationCap } from "../../../../exporter";
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
          <div className="school-details">
            <div className="school-name">
              <FaUniversity size={15} /> BSc, Beni-Suef University.
            </div>
            <ul className="more-details">
              <li>
                <b>Grade : </b> 3.23/5 ( V.Good )
              </li>
              <li>
                <b>Relevent Courses : </b>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSubSection;
