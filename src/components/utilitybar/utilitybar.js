import React, { useEffect, useState } from "react";
import { RichText, Link } from "prismic-reactjs";
import { client, linkResolver } from "../../prismic-configuration";

import NotFound from "../../pages/NotFound";

import "./utilitybar.scss";

const Utilitybar = () => {
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
      <div className="navbar utilitybar">
        <div className="container level is-fluid">
          <div className="navbar-menu level-left">
            <a href="tel:1-973-555-1234" className="gen-link">
              <i className="fas fa-phone"></i>
              <span className="phone-info">
                {RichText.asText(doc.data.phone_number)}
              </span>
            </a>
          </div>
          <div className="navbar-menu level-right">
            <a
              href={Link.url(doc.data.social_channel_1, linkResolver)}
              target="_blank"
              rel="noopener noreferrer"
              className="gen-link"
            >
              <i className="fab fa-facebook-square"></i>
            </a>
            <a
              href={Link.url(doc.data.social_channel_2, linkResolver)}
              target="_blank"
              rel="noopener noreferrer"
              className="gen-link"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href={Link.url(doc.data.social_channel_3, linkResolver)}
              target="_blank"
              rel="noopener noreferrer"
              className="gen-link"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    );
  } else if (notFound) {
    return <NotFound />;
  }
  return null;
};

export default Utilitybar;
