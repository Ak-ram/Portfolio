import "./educationSubSection.scss";
import {
  FaUniversity,
  FcGraduationCap,
  SchoolTimeLine,
} from "../../../../exporter";
import udacityImg from "../../../../assests/udacity.png";
import bsuImg from "../../../../assests/bsu.png";
const EducationSubSection = () => {
  return (
    <div className="education">
      <h5>
        <FcGraduationCap /> Education
      </h5>
      <div className="school-container">
        <SchoolTimeLine
          schoolName={"FWD, Udacity Progam"}
          schoolPeriod={"8/2022 : 9/2022"}
          schoolBrandUrl={udacityImg}
          schoolGrade={"Nanodegree"}
        />
        <SchoolTimeLine
          schoolName={"BSc, Beni-Suef University"}
          schoolPeriod={"9/2019 : 7/2022"}
          schoolBrandUrl={bsuImg}
          schoolGrade={"3.24/5 (V.Good)"}
        />
      </div>
    </div>
  );
};

export default EducationSubSection;
