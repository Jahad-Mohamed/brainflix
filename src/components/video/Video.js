import React from "react";
import "./video.scss";

const Video = (props) => {
  return (
    <div className="card__container">
      <img className="card__image" src={props.thumbnail} />
      <h2 className="">{props.title}</h2>
      <p className="">{props.channel}</p>
    </div>
  );
};

export default Video;
