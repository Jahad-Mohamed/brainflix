import React, { Component } from "react";
import { Link } from "react-router-dom";
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
            width="140"
            height="100"
          />
        </div>
        <div className="video__title-channel-container">
          {/* ADDED LINK TO VIDEO */}
          <Link to={{ pathname: `/${this.props.id}` }}>
            <h5
              className="card__title"
              onClick={() => this.props.handleVideo(this.props.id)}
            >
              {this.props.title}
            </h5>
          </Link>
          <p className="card__channel">{this.props.channel}</p>
        </div>
      </div>
    );
  }
}

export default Video;
