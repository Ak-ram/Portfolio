import React from "react";
import "./navBar.scss";
import {
  MdEmail,
  BsFillGridFill,
  BsFillPersonFill,
  BsFillGearFill,
  FaPenNib,
} from "../../exporter";
import { Link } from "react-router-dom";

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
            <BsFillPersonFill size={16} />
            <span className="linkText">Profile</span>
          </Link>
        </li>

        <li className="link" onClick={(e) => handleNavLink(e)}>
          <Link to={"./projects"}>
            <BsFillGridFill size={16} />
            <span className="hide linkText">Projects</span>
          </Link>
        </li>
        <li className="link" onClick={(e) => handleNavLink(e)}>
          <Link to={"./blog"}>
            {/* <BsVectorPen /> */}
            <FaPenNib size={16} />
            <span className="hide linkText">Blog</span>
          </Link>
        </li>
        <li className="link" onClick={(e) => handleNavLink(e)}>
          <Link to={"./newsletter"}>
            <MdEmail size={16} />
            <span className="hide linkText">Newsletter</span>
          </Link>
        </li>
        <li className="link" onClick={(e) => handleNavLink(e)}>
          <Link to={"./settings"}>
            <BsFillGearFill size={16} />
            <span className="hide linkText">Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
