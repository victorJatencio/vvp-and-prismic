import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { apiEndpoint } from "./prismic-configuration";
import { NotFound, Home, AboutUs, Gallery, Services, Contact } from "./pages";
import "./App.scss";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";

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

      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about_us" component={AboutUs} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Fragment>
  );
};

export default App;
