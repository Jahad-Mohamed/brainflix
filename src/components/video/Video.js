import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./video.scss";

class Video extends Component {
  render() {
    const { id, thumbnail, title, channel } = this.props;
    return (
      <div className="video__container" key={id}>
        <div className="video-image-container">
          <Link to={{ pathname: `/videos/${id}` }}>
            <img className="video__image" src={thumbnail} alt={title} />
          </Link>
        </div>
        <div className="video__title-channel-container">
          <span className="video__title">{title}</span>
          <p className="video__channel">{channel}</p>
        </div>
      </div>
    );
  }
}

export default Video;
