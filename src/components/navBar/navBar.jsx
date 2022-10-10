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
    const links = document.querySelectorAll(".link");
    for (let i = 0; i < links.length; i++) {
      links[i].querySelector("span").classList.add("hide");
      links[i].classList.remove("active");
    }
    e.currentTarget.classList.toggle("active");
    e.currentTarget.querySelector("span").classList.remove("hide");
  };
  return (
    <div className="navbar-container">
      <ul className="navbar">
        <li className="active link" onClick={(e) => handleNavLink(e)}>
          <ImHome />
          <span className="linkText">Home</span>
        </li>
        <li className="link" onClick={(e) => handleNavLink(e)}>
          <BsFillGridFill />
          <span className="hide linkText">Works</span>
        </li>
        <li className="link" onClick={(e) => handleNavLink(e)}>
          <BsVectorPen />
          <span className="hide linkText">Blog</span>
        </li>
        <li className="link" onClick={(e) => handleNavLink(e)}>
          <BsPersonBoundingBox />
          <span className="hide linkText">Me</span>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
