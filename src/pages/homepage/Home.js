import React, { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import { client } from "../../prismic-configuration";
import { Link } from "react-router-dom";
import NotFound from "../NotFound";

import "./Home.scss";

import VideoBackground from "../../components/videobackground/VideoBackground";
import Hero from "../../components/hero/Hero";
import EventsComponent from "../../components/events_component/EventsComponent";

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

  // {doc.data.body.map((slice, index) => {
  //   if (slice.text === "text") {
  //     return (
  //       <div className="text" key={index}>
  //         {RichText.render(slice.text.section_text)}
  //       </div>
  //     );
  //   } else {
  //     return null;
  //   }
  // })}

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
        <div className="section">
          <div className="container is-fluid">
            <div className="columns">
              <div className="column">
                <div>
                  {doc.data.body.map((slice, index) => {
                    // console.log(slice, index);
                    if (slice.slice_type === "text") {
                      return (
                        <div className="secondary-body overtext" key={index}>
                          {RichText.render(slice.primary.overline)}
                        </div>
                      );
                    } else {
                      return null;
                    }
                  })}
                </div>
                <div>
                  {doc.data.body.map((slice, index) => {
                    // console.log(slice, index);
                    if (slice.slice_type === "text") {
                      return (
                        <div className="is-size-4 primary" key={index}>
                          {RichText.render(slice.primary.section_title)}
                        </div>
                      );
                    } else {
                      return null;
                    }
                  })}
                </div>
                <div>
                  {doc.data.body.map((slice, index) => {
                    // console.log(slice, index);
                    if (slice.slice_type === "text") {
                      return (
                        <div className="is-size-4" key={index}>
                          {RichText.render(slice.primary.section_sub_title)}
                        </div>
                      );
                    } else {
                      return null;
                    }
                  })}
                </div>
                <div>
                  {doc.data.body.map((slice, index) => {
                    // console.log(slice, index);
                    if (slice.slice_type === "text") {
                      return (
                        <div className="site-text" key={index}>
                          {RichText.render(slice.primary.section_text)}
                        </div>
                      );
                    } else {
                      return null;
                    }
                  })}
                </div>
                <div className="cta-section">
                  <a
                    className="button is-primary"
                    href={doc.data.cta.url}
                    alt="Book Us Now"
                  >
                    Read More
                  </a>
                </div>
              </div>
              <div className="column">
                <div className="film">
                  <div className="icons-lg">
                    <i className="fas fa-film"></i>
                  </div>
                  <div>
                    {doc.data.body.map((slice, index) => {
                      console.log(slice, index);
                      if (slice.slice_type === "video") {
                        return (
                          <div key={index}>
                            <div className="is-size-4">
                              {RichText.render(slice.primary.title)}
                            </div>
                            <div className="site-text">
                              {RichText.render(slice.primary.text)}
                            </div>
                          </div>
                        );
                      } else {
                        return null;
                      }
                    })}
                  </div>
                </div>
                <div className="photography">
                  <div className="icons-lg">
                    <i className="far fa-images"></i>
                  </div>
                  <div>
                    {doc.data.body.map((slice, index) => {
                      // console.log(slice, index);
                      if (slice.slice_type === "photography") {
                        return (
                          <div key={index}>
                            <div className="is-size-4">
                              {RichText.render(slice.primary.title)}
                            </div>
                            <div className="site-text">
                              {RichText.render(slice.primary.text)}
                            </div>
                          </div>
                        );
                      } else {
                        return null;
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-section">
          <div>
            <EventsComponent />
            <div>
              <div className="preview-item">
                <h3>Events</h3>
                <p>
                  When we are talking about any kind of a personal event, be it
                  a private party, a bachelorette party, birthday or what not,
                  it is never a bad idea to bring in experts who will capture
                  the best moments of your special event.
                </p>
                <p>
                  This is exactly what our creative video and photography craft
                  is all about. With a range of skills up our sleeves.
                </p>
              </div>
            </div>
            <div>
              <div className="thumb-previews">
                <div className="preview-item">
                  <h3>Birthdays</h3>
                </div>
                <div className="preview-item">
                  <h3>Weddings</h3>
                </div>
              </div>
              <div className="thumb-previews">
                <div className="preview-item">
                  <h3>Personal Events</h3>
                </div>
                <div className="preview-item">
                  <h3>Bachelorette</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (notFound) {
    return <NotFound />;
  }
  return null;
};

export default Home;
