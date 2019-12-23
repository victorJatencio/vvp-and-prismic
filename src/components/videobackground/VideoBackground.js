import React, { Component } from "react";

import "./VideoBackground.scss";

export class VideoBackground extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    if (this.video) {
      this.video.addEventListener("loadeddata", () => {
        this.setState({ loading: false });
      });
    }
  }

  componentWillMount() {
    if (this.video) {
      this.video.removeEventListener("loadeddata", () => {});
    }
  }

  render() {
    const { videoUrl } = this.props;

    return (
      <div className="video-component">
        <video
          ref={ref => (this.video = ref)}
          autoPlay
          muted
          loop
          style={{
            width: "100%",
            opacity: this.state.loading ? 0 : 1,
            transition: "opacity, 2s ease-in-out"
          }}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default VideoBackground;
