import React from "react";
import "./video.scss";

const Video = (props) => {
  return (
    <div className="video__container">
      <img className="video__image" src={props.thumbnail} />
      <div className="video__title-channel-container">
        <h2 className="card__title">{props.title}</h2>
        <p className="card__channel">{props.channel}</p>
      </div>
    </div>
  );
};

export default Video;
