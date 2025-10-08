import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import icon_logo from "../assets/icon_logo.png";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <NavLink to="/" onClick={closeMenu}>
          <img src={icon_logo} alt="Westampton logo" />
        </NavLink>
      </div>

      {/* Hamburger (visible on mobile) */}
      <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
        </li>
        <li>
          <NavLink to="/advisory" onClick={closeMenu}>Advisory</NavLink>
        </li>
        <li>
          <NavLink to="/consulting" onClick={closeMenu}>Consulting</NavLink>
        </li>
        <li className="contact-btn">
          <NavLink to="/contact-us" onClick={closeMenu}>Contact Us</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
