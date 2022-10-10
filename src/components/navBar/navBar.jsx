import React from "react";
import "./navBar.scss";
import { ImHome } from "react-icons/im";
import { Link } from "react-router-dom";
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
    e.currentTarget.classList.add("active");
    e.currentTarget.querySelector("span").classList.remove("hide");
  };
  return (
    <div className="navbar-container">
      <ul className="navbar">
        <li className="active link" onClick={(e) => handleNavLink(e)}>
          <Link to={"./"}>
            <ImHome />
            <span className="linkText">Home</span>
          </Link>
        </li>

        <li className="link" onClick={(e) => handleNavLink(e)}>
          <Link to={"./projects"}>
            <BsFillGridFill />
            <span className="hide linkText">Projects</span>
          </Link>
        </li>
        <li className="link" onClick={(e) => handleNavLink(e)}>
          <Link to={"./blog"}>
            <BsVectorPen />
            <span className="hide linkText">Blog</span>
          </Link>
        </li>
        <li className="link" onClick={(e) => handleNavLink(e)}>
          <Link to={"./profile"}>
            <BsPersonBoundingBox />
            <span className="hide linkText">Profile</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
