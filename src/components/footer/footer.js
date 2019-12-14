import React from "react";
import { Link } from "react-router-dom";

import "../footer/footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="container is-fluid">
      <div className="columns">
        <div className="column">
          <div>logo</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nemo
            quibusdam id iure fugit ipsa quaerat dolorem? Commodi, non molestiae
            illum modi ut temporibus, obcaecati aut dolores perspiciatis dicta
            eveniet!
          </p>
        </div>
        <div className="column quick-footer-links">
          <Link to="/">Home</Link>
          <Link to="/about_us">About Us</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/services">Services</Link>
        </div>
        <div className="column">
          <p>123 St.Lorence Ville Street, Suite 5, ZIP 09928 Example</p>
          <div>
            <Link to="mailto:velisvideoproduction@example.com">
              Email: velisvideoproduction@example.com
            </Link>
          </div>
          <div>
            <Link to="tel:1-973-555-1234">Phone:[973]555-1234</Link>
          </div>
        </div>
      </div>
      <div className="columns mini-footer">
        <div className="column copy-right">
          &copy;2019 Velis Video Productions LLC, All Rights Reserved
        </div>
        <div className="column footer-social">
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
  </footer>
);

export default Footer;
