import React, { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import { client } from "../../prismic-configuration";
import { Link } from "react-router-dom";
import NotFound from "../NotFound";

import VideoBackground from "../../components/videobackground/VideoBackground";
import Hero from "../../components/hero/Hero";

const Home = ({ match }) => {
  const [doc, setDocData] = useState(null);
  const [notFound, toggleNotFound] = useState(false);

  const uid = match.params.uid;

  // Get the page document from Prismic
  useEffect(() => {
    const fetchData = async () => {
      // We are using the function to get a document by its UID
      const result = await client.getSingle("home");

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
  }, [uid]); // Skip the Effect hook if the UID hasn't changed

  if (doc) {
    return (
      <div className="page">
        {/* <img src={doc.data.image.url} alt={doc.data.image.alt} /> */}
        <Hero>
          <VideoBackground videoUrl={doc.data.video.url} />
          <div className="container is-fluid">
            <div className="hero-inner">
              <div className="important-content">
                <h2 className="is-size-2">
                  {RichText.asText(doc.data.main_title)}
                </h2>
                <h4 className="is-size-4">
                  {RichText.asText(doc.data.sub_title)}
                </h4>

                <div className="cta-section">
                  <Link
                    className="button is-primary"
                    to={doc.data.cta.url}
                    alt="Book Us Now"
                  >
                    Book Us Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Hero>
        <div>And here comes another div...</div>
      </div>
    );
  } else if (notFound) {
    return <NotFound />;
  }
  return null;
};

export default Home;
