import React, { useEffect, useState } from "react";
import { client } from "../../prismic-configuration";
import Utilitybar from "../utilitybar/utilitybar";

import NotFound from "../../pages/NotFound";

import "./header.scss";

const Header = () => {
  const [doc, setDocData] = useState(null);
  const [notFound, toggleNotFound] = useState(false);

  // Get the page document from Prismic
  useEffect(() => {
    const fetchData = async () => {
      // We are using the function to get a single document
      const result = await client.getSingle("header");

      if (result) {
        // We use the State hook to save the document
        return setDocData(result);
      } else {
        // Otherwise show an error message
        console.warn(
          "Page document not found. Make sure it exists in your Prismic repository"
        );
        toggleNotFound(true);
      }
    };
    fetchData();
  }); // Skip the Effect hook if the UID hasn't changed

  if (doc) {
    return (
      <div className="header">
        <Utilitybar />
        <nav
          className="navbar is-black"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="container navbar-brand level is-fluid">
            <a href="/" className="logo-container level-left">
              <img src={doc.data.nav_logo.url} alt={doc.data.nav_logo.alt} />
            </a>
            <a
              className="navbar-burger burger"
              href="/"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>

            <div id="navbarBasicExample" className="navbar-menu level-right">
              <a href="/" className="navbar-item">
                Home
              </a>
              <a href="/about_us" className="navbar-item">
                About Us
              </a>
              <a href="/gallery" className="navbar-item">
                Gallery
              </a>
              <a href="/services" className="navbar-item">
                Services
              </a>
              <a href="/contact" className="navbar-item">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  } else if (notFound) {
    return <NotFound />;
  }
  return null;
};

export default Header;
