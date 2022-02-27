import React from "react";
import "./video.scss";

class Video extends Comment {
  render() {
    return (
      <div className="video__container" key={this.props.id}>
        <img
          className="video__image"
          src={this.props.thumbnail}
          alt={this.props.title}
        />
        <div className="video__title-channel-container">
          <h2
            className="video__title"
            onClick={() => this.props.handleVideo(this.props.id)}
          >
            {this.props.title}
          </h2>
          <p className="video__channel">{props.channel}</p>
        </div>
      </div>
    );
  }
}

export default Video;
