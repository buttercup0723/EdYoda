import React from "react";
import "./Hero.css";
import { FaBars, FaSearch, FaChevronDown } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faBook,
  faClock,
  faTv,
  faGraduationCap,
  faCertificate,
  faBan
} from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <div className="hero">
      <h1 className="hero-header">
        Access Curated Courses worth <br />{" "}
        <span>
          ₹ <del className="deleted">18,000</del>
        </span>{" "}
        at just
        <span className="price">₹ 99</span> per year!
      </h1>
      <ul className="hero-list">
        <li>
          <p>
            <FontAwesomeIcon icon={faBook} className="icons" />
            <span className="special">100+ </span> Job relevant courses
          </p>
        </li>
        <li>
          <p>
            <FontAwesomeIcon icon={faClock} className="icons" />
            <span className="special">24/7</span> 20,000+ Hours of content
          </p>
        </li>
        <li>
          <p>
            <FontAwesomeIcon icon={faTv} className="icons" />
            <span className="special">Exclusive</span> webinar access
          </p>
        </li>
        <li>
          <p>
            <FontAwesomeIcon icon={faGraduationCap} className="icons" />
            Scholarship worth of <span className="special">₹94,500</span>
          </p>
        </li>
        <li>
          <p>
            <FontAwesomeIcon icon={faBan} className="icons" />
            <span className="special">Ad Free</span> learning experience
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Hero;
