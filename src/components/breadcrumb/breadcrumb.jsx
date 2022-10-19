import { IoIosArrowBack, MdUnfoldMore } from "../../exporter";
import { useNavigate } from "react-router-dom";
import "./breadcrumb.scss";
const Breadcrumb = () => {
  const navigate = useNavigate();
  return (
    <div className="breadcrumb-container">
      <IoIosArrowBack className="backIcon" onClick={() => navigate(-1)} />
      <MdUnfoldMore />
    </div>
  );
};

export default Breadcrumb;
