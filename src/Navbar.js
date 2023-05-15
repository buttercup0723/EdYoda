import React from "react";
import "./Navbar.css";
import { FaBars, FaSearch, FaChevronDown } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>EdYoda</h1>
      </div>
      <div className="navbar-links">
        <a href="#" className="navbar-link-courses">
          Courses
        </a>
        <a href="#" className="navbar-link-programs">
          Programs
        </a>
      </div>
      <div className="navbar-icons">
        <FaSearch className="navbar-icon" />
      </div>
      <ul className="navbar-list">
        <li className="navbar-list-log">
          <a href="#">Log in</a>
        </li>
        <li className="navbar-list-join">
          <a href="#" className="navbar-list-join-style">
            Join Now
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
