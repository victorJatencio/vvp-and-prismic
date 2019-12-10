import React, { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import { client } from "../../prismic-configuration";
import { Link } from "react-router-dom";
import NotFound from "../NotFound";

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
        {/* This is how to get an image into your template */}
        {/* <img src={doc.data.image.url} alt={doc.data.image.alt} /> */}
        {/* This is how to render a Rich Text field as plain text */}
        <h1>{RichText.asText(doc.data.main_title)}</h1>
        <h3>{RichText.asText(doc.data.sub_title)}</h3>

        <Link
          className="button is-primary"
          to={doc.data.cta.url}
          alt="Book Us Now"
        >
          Book Us Now
        </Link>
      </div>
    );
  } else if (notFound) {
    return <NotFound />;
  }
  return null;
};

export default Home;
