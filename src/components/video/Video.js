import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./video.scss";

class Video extends Component {
  render() {
    return (
      <div className="video__container" key={this.props.id}>
        <div>
          <Link to={{ pathname: `/videos/${this.props.id}` }}>
            <img
              className="video__image"
              src={this.props.thumbnail}
              alt={this.props.title}
              width="140"
              height="100"
            />
          </Link>
        </div>
        <div className="video__title-channel-container">
          <h4 className="video__title">{this.props.title}</h4>
          <p className="video__channel">{this.props.channel}</p>
        </div>
      </div>
    );
  }
}

export default Video;
