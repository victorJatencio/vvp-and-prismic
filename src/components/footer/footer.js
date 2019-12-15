import React, { useEffect, useState } from "react";
import { RichText, Link } from "prismic-reactjs";
import { client, linkResolver } from "../../prismic-configuration";

import NotFound from "../../pages/NotFound";

import "../footer/footer.scss";

const Footer = () => {
  const [doc, setDocData] = useState(null);
  const [notFound, toggleNotFound] = useState(false);

  // Get the page document from Prismic
  useEffect(() => {
    const fetchData = async () => {
      // We are using the function to get a document by its UID
      const result = await client.getSingle("footer");

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
      <footer className="footer">
        <div className="container is-fluid">
          <div className="columns">
            <div className="column">
              <div className="footer-logo">
                <img
                  src={doc.data.footer_logo.url}
                  alt={doc.data.footer_logo.alt}
                />
              </div>
              <p>{RichText.asText(doc.data.left_content)}</p>
            </div>
            <div className="column quick-footer-links">
              <div>
                <a href="/" alt="Home" className="footer-link">
                  Home
                </a>
              </div>
              <div>
                <a href="/about_us" alt="About Us" className="footer-link">
                  About Us
                </a>
              </div>
              <div>
                <a href="/gallery" alt="Gallery" className="footer-link">
                  Gallery
                </a>
              </div>
              <div>
                <a href="/services" alt="Services" className="footer-link">
                  Services
                </a>
              </div>
            </div>
            <div className="column">
              <p>{RichText.asText(doc.data.company_address)}</p>
              <div>
                <a
                  href="mailto:velisvideoproduction@example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  {RichText.asText(doc.data.email_addess_link)}
                </a>
              </div>
              <div>
                <a href="tel:1-973-555-1234" className="footer-link">
                  {RichText.asText(doc.data.phone_number)}
                </a>
              </div>
            </div>
          </div>
          <div className="columns mini-footer">
            <div className="column copy-right">
              &copy;{RichText.asText(doc.data.copy_right)}
            </div>
            <div className="column footer-social">
              <a
                href={Link.url(doc.data.social_channel_1, linkResolver)}
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-item"
              >
                <i className="fab fa-facebook-square"></i>
              </a>
              <a
                href={Link.url(doc.data.social_channel_2, linkResolver)}
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-item"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href={Link.url(doc.data.social_channel_3, linkResolver)}
                target="_blank"
                rel="noopener noreferrer"
                className="navbar-item"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  } else if (notFound) {
    return <NotFound />;
  }
  return null;
};

export default Footer;
