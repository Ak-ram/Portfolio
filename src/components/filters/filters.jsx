import React from "react";
import "./filters.scss";
const Filters = ({ filters }) => {
  return (
    <ul className="topics">
      {filters?.map((filter) => (
        <li className="filter" key={filter}>
          {filter}
        </li>
      ))}
    </ul>
  );
};

export default Filters;
