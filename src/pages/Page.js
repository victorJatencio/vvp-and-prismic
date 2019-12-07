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
        <h4>
          All of these are essential components, any cards, image tiles etc will
          be built as we go.
        </h4>
        <br />
        <br />
        <p>Titles</p>
        <br />
        <h1 className="is-size-1">Title h1</h1>
        <h2 className="is-size-2">Title h2</h2>
        <h3 className="is-size-3">Title h3</h3>
        <h4 className="is-size-4">Title h4</h4>
        <h5 className="is-size-5">Title h5</h5>
        <h6 className="is-size-6">Title h6</h6>
        <br />
        <br />
        <p className="subtitle">This is a Subtitle 1</p>
        <br />
        ...
        <br />
        <br />
        <p>Paragraph</p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum natus
          aperiam reprehenderit optio ducimus ipsum, harum nemo cupiditate
          nesciunt illum molestiae, beatae ipsa provident impedit reiciendis eum
          quae. Corrupti, impedit.
          <a href="#">This is a link</a>
        </p>
        <br />
        <p className="secondary-body">This is a Secondary paragraph text</p>
        <br />
        <p>Buttons</p>
        <br />
        <br />
        <div className="buttons">
          <a className="button is-primary">book us now</a>
          <a className="button is-outlined">Link</a>
        </div>
        <br />
        <p>Input Fields</p>
        <br />
        <div className="field">
          <div className="control">
            <input
              className="input is-hovered"
              type="text"
              placeholder="Hovered input"
            />
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
        <p>Breadcrums</p>
        <br />
        <nav className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <a href="#">Bulma</a>
            </li>
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
              <a href="#">Components</a>
            </li>
            <li className="is-active">
              <a href="#" aria-current="page">
                Breadcrumb
              </a>
            </li>
          </ul>
        </nav>
        <br />
        <br />
        <br />
        <nav
          className="navbar is-black"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                width="112"
                height="28"
              />
            </a>
            <a
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>

            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <a className="navbar-item">Home</a>

                <a className="navbar-item">Documentation</a>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">More</a>
                <div className="navbar-dropdown">
                  <a className="navbar-item">About</a>
                  <a className="navbar-item">Jobs</a>
                  <a className="navbar-item">Contact</a>
                  <hr className="navbar-divider"></hr>
                  <a className="navbar-item">Report an issue</a>
                </div>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary is-rounded">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light is-rounded">Log in</a>
              </div>
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

export default Page;
