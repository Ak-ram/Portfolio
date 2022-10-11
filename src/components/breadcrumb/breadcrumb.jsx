import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import "./breadcrumb.scss";
const Breadcrumb = () => {
  return (
    <div className="breadcrumb-container">
      <IoIosArrowBack className="backIcon" /> Back
    </div>
  );
};

export default Breadcrumb;
