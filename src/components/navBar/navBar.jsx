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
    e.currentTarget.querySelector("span").classList.toggle("hide");
  };
  return (
    <div className="navbar-container">
      <ul className="navbar">
        <li onClick={(e) => handleNavLink(e)}>
          <ImHome />
          <span className="linkText">Home</span>
        </li>
        <li onClick={(e) => handleNavLink(e)}>
          <BsFillGridFill />
          <span className="hide linkText">Works</span>
        </li>
        <li onClick={(e) => handleNavLink(e)}>
          <BsVectorPen />
          <span className="hide linkText">Blog</span>
        </li>
        <li onClick={(e) => handleNavLink(e)}>
          <BsPersonBoundingBox />
          <span className="hide linkText">Me</span>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
