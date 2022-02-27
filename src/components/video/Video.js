import React, { Component } from "react";
import "./video.scss";

class Video extends Component {
  render() {
    return (
      <div className="video__container" key={this.props.id}>
        <div className="img-container">
          <img
            className="video__image"
            src={this.props.thumbnail}
            alt={this.props.title}
            width="170"
            height="120"
          />
        </div>

        <div className="video__title-channel-container">
          <h2
            className="video__title"
            onClick={() => this.props.handleVideo(this.props.id)}
          >
            {this.props.title}
          </h2>
          <p className="video__channel">{this.props.channel}</p>
        </div>
      </div>
    );
  }
}

export default Video;
