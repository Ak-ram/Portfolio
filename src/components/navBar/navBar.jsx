import React, { useEffect, useState } from "react";
import "./navBar.scss";
import { ImHome } from "react-icons/im";
import {
  BsVectorPen,
  BsFillGridFill,
  BsPersonBoundingBox,
} from "react-icons/bs";
const NavBar = () => {
  const handleNavLink = (e) => {
    const links = document.querySelectorAll(".linkText");
    for (let i = 0; i < links.length; i++) {
      links[i].classList.add("hide");
    }
    e.currentTarget.querySelector("i").classList.toggle("hide");
  };
  return (
    <div className="navbar-container">
      <ul className="navbar">
        <li onClick={(e) => handleNavLink(e)}>
          <ImHome />
          <i className=" linkText">Home</i>
        </li>
        <li onClick={(e) => handleNavLink(e)}>
          <BsFillGridFill />
          <i className="hide linkText">Works</i>
        </li>
        <li onClick={(e) => handleNavLink(e)}>
          <BsVectorPen />
          <i className="hide linkText">Blog</i>
        </li>
        <li onClick={(e) => handleNavLink(e)}>
          <BsPersonBoundingBox />
          <i className="hide linkText">Me</i>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
