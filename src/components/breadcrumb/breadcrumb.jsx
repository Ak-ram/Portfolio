import { IoIosArrowBack } from "../../exporter";
import { useNavigate } from "react-router-dom";
import "./breadcrumb.scss";
const Breadcrumb = () => {
  const navigate = useNavigate();
  return (
    <div className="breadcrumb-container" onClick={() => navigate(-1)}>
      <IoIosArrowBack className="backIcon" />
      <span>back</span>
    </div>
  );
};

export default Breadcrumb;
