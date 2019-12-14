import React from "react";
import { Link } from "react-router-dom";

import "./utilitybar.scss";

const Utilitybar = () => (
  <div className="navbar utilitybar">
    <div className="container level is-fluid">
      <div className="navbar-menu level-left">
        <Link to="tel:1-973-555-1234" className="navbar-item">
          <i className="fas fa-phone"></i>
          <span className="phone-info">Phone:[973]555-1234</span>
        </Link>
      </div>
      <div className="navbar-menu level-right">
        <Link to="/" className="navbar-item">
          <i className="fab fa-facebook-square"></i>
        </Link>
        <Link to="/" className="navbar-item">
          <i className="fab fa-instagram"></i>
        </Link>
        <Link to="/" className="navbar-item">
          <i className="fab fa-linkedin"></i>
        </Link>
      </div>
    </div>
  </div>
);

export default Utilitybar;
