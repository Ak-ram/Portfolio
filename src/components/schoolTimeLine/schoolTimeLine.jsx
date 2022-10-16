import "./schoolTimeLine.scss";
import { FaUniversity } from "../../exporter";
const SchoolTimeLine = ({
  schoolName,
  schoolPeriod,
  schoolBrandUrl,
  schoolGrade,
}) => {
  return (
    <div className="school bsu">
      <span className="school-date">
        {/* <TbNumber3 color="rgb(0 160 240)" size={20} /> */}
        <span>{schoolPeriod}</span>
      </span>
      <div
        className="school-details"
        style={{ backgroundImage: `url(${schoolBrandUrl})` }}
      >
        <div className="school-name">
          <FaUniversity size={15} /> {schoolName}
        </div>
        <ul className="more-details">
          <li>
            <b>Grade : </b> {schoolGrade}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SchoolTimeLine;
