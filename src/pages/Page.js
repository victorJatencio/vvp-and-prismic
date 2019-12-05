import React, { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import { client, linkResolver } from "../prismic-configuration";
import NotFound from "./NotFound";

const Page = ({ match }) => {
  const [doc, setDocData] = useState(null);
  const [notFound, toggleNotFound] = useState(false);

  const uid = match.params.uid;

  // Get the page document from Prismic
  useEffect(() => {
    const fetchData = async () => {
      // We are using the function to get a document by its UID
      const result = await client.getByUID("page", uid);

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
        {/* <h1>{RichText.asText(doc.data.title)}</h1> */}
        {/* This is how to render a Rich Text field into your template as HTML */}
        {/* <RichText render={doc.data.description} linkResolver={linkResolver} /> */}
        <h1 className="title">Title h1</h1>
        <h2 className="title">Title h2</h2>
        <h3 className="title">Title h3</h3>
        <h4 className="title">Title h4</h4>
        <h5 className="title">Title h5</h5>
        <h6 className="title">Title h6</h6>
        <br />
        <p className="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum natus
          aperiam reprehenderit optio ducimus ipsum, harum nemo cupiditate
          nesciunt illum molestiae, beatae ipsa provident impedit reiciendis eum
          quae. Corrupti, impedit.
          <a href="#">This is a link</a>
        </p>
        <br />
        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Input" />
          </div>
        </div>
        <br />
        <div className="field">
          <p className="control">
            <span className="select">
              <select>
                <option>Select dropdown</option>
              </select>
            </span>
          </p>
        </div>
        <br />
        <div className="buttons">
          <a className="button is-primary">Primary</a>
          <a className="button is-link">Link</a>
        </div>
      </div>
    );
  } else if (notFound) {
    return <NotFound />;
  }
  return null;
};

export default Page;
