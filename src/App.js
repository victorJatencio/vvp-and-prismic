import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Route, Switch, Redirect } from "react-router-dom";
import { apiEndpoint } from "./prismic-configuration";
import { NotFound, Home, AboutUs, Gallery, Contact } from "./pages";
import "./App.scss";
/**
 * Main application componenet
 */
const App = props => {
  const repoNameArray = /([^/]+)\.cdn.prismic\.io\/api/.exec(apiEndpoint);
  const repoName = repoNameArray[1];

  return (
    <Fragment>
      <Helmet>
        <script
          async
          defer
          src={`//static.cdn.prismic.io/prismic.js?repo=${repoName}&new=true`}
        />
      </Helmet>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about_us" component={AboutUs} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
};

export default App;
