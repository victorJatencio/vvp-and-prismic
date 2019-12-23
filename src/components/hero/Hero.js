import React from "react";

import "../hero/hero.scss";

const Hero = props => {
  return <div className="hero-banner">{props.children}</div>;
};

export default Hero;
