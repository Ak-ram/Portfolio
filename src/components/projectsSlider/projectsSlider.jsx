import React from "react";
import Loader from "../../components/loader/loader";
import "./projectsSlider.scss";

const ProjectsSlider = () => {
  const [projectImgs, setProjectImgs] = useState(null);
  const baseURL = "http://myjson.dit.upm.es/api/bins/e06w";

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setProjectImgs(response.data);
    });
  }, []);
  if (!projectImgs) return <Loader />;

  return (
    <div className="projects-slider">
      <div className="project">
        <img
          src="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60107f6dc0c29a14c9eb3d56_6002086f72b7276fe601e2b5_louie-steller.gif"
          alt="moviideck"
        />
      </div>
    </div>
  );
};

export default ProjectsSlider;
