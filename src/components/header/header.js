import React from "react";
import { Link } from "react-router-dom";

// import { ReactComponent as Logo } from "../../assets/favicon.png";
import "./header.scss";

const Header = () => (
  <div className="header">
    <nav
      className="navbar is-black"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container navbar-brand level">
        <Link className="logo-container navbar-item level-left" to="/">
          vvp
        </Link>
        <Link
          className="navbar-burger burger"
          to="/"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Link>

        <div id="navbarBasicExample" className="navbar-menu level-right">
          <Link className="navbar-item" to="/">
            Home
          </Link>
          <Link className="navbar-item" to="/about_us">
            About Us
          </Link>
          <Link className="navbar-item" to="/gallery">
            Gallery
          </Link>
          <Link className="navbar-item" to="/services">
            Services
          </Link>
          <Link className="navbar-item" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  </div>
);

export default Header;
