import "./educationSubSection.scss";
import { FaUniversity, FcGraduationCap } from "../../../../exporter";
import udacityImg from "../../../../assests/udacity.png";
import bsuImg from "../../../../assests/bsu.png";
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
          <div
            className="school-details"
            style={{ backgroundImage: `url(${udacityImg})` }}
          >
            <div className="school-name">
              <FaUniversity size={15} /> fwd, udacity Program.
            </div>
            <ul className="more-details">
              <li>
                <b>Grade : </b> Nanodegree
              </li>
            </ul>
          </div>
        </div>
        <div className="school bsu">
          <span className="school-date">
            {/* <TbNumber3 color="rgb(0 160 240)" size={20} /> */}
            <span>2019:2022</span>
          </span>
          <div
            className="school-details"
            style={{ backgroundImage: `url(${bsuImg})` }}
          >
            <div className="school-name">
              <FaUniversity size={15} /> BSc, Beni-Suef University.
            </div>
            <ul className="more-details">
              <li>
                <b>Grade : </b> 3.23/5 ( V.Good )
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSubSection;
