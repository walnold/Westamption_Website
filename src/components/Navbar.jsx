import React from "react";
import icon_logo from "../assets/icon_logo.png";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <NavLink to="/">
          <img src={icon_logo} alt="logo" />
        </NavLink>
      </div>
      <div className="navlinks">
        <ul className="navs">
          <li className="nav-link">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/services">Services</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/advisory">Advisory</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/consulting">Consulting</NavLink>
          </li>
        </ul>
      </div>
      <div className="contact-us btn">
        <NavLink to="/contact-us">Contact Us</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
