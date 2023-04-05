import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

export default function Navbar(props) {
  let location = useLocation();

  return (
    <nav
      className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" title="Wordify">
          {props.title}
        </Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 list-group-horizontal">
            <li className="nav-item space">
              <Link className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item space">
              <Link className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`} to="/about">
                {props.aboutText}
              </Link>
            </li>
            <li className="nav-item space">
                <Link
                  className={`nav-link ${
                    location.pathname === "/contact" ? "active" : ""
                  }`}
                  to="/contact"
                >
                  Contact Us
                </Link>
              </li>
          </ul>
        <div
          className={`form-check form-switch text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          <input
            className="form-check-input"
            onClick={props.toggleMode}
            type="checkbox"
            id="toggleSwitch"
            checked={props.mode === "dark"}
          />
          <label className="form-check-label" htmlFor="toggleSwitch">
            {props.mode === "light" ? "Enable Dark Mode" : "Disable Dark Mode"}
          </label>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};
