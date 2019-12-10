import React from "react";
import { Link } from "react-router-dom";

// import { ReactComponent as Logo } from "../../assets/favicon.png";
import "./header.scss";

const Header = () => (
  <div className="header">
    {/* <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link> */}
    vvp
    <div className="nav-links">
      <Link className="nav-item" to="/">
        Home
      </Link>
      <Link className="nav-item" to="/about_us">
        About Us
      </Link>
      <Link className="nav-item" to="/gallery">
        Gallery
      </Link>
      <Link className="nav-item" to="/services">
        Services
      </Link>
      <Link className="nav-item" to="/contact">
        Contact
      </Link>
    </div>
  </div>
);

export default Header;
