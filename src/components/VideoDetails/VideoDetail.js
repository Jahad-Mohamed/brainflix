import React from "react";
import "./VideoDetail.scss";
class VideoDetail extends React.Component {
  daysAgo(rawData) {
    let difference = new Date().getTime() - new Date(rawData).getTime();
    let miliseconds = difference;
    let seconds = Math.round(miliseconds / 100);
    let minutes = Math.round(seconds / 60);
    let hours = Math.round(minutes / 60);
    let days = Math.round(hours / 24);
    let years = Math.round(days / 365);
    let message = "";

    if (minute <= 1) {
      message = `Just now`;
    } else if (minutes > 1 && minutes <= 60) {
      message = `${minutes} minutes ago`;
    } else if (hours > 1 && minutes <= 24) {
      message = `${hours} hours ago`;
    } else if (days > 1 && days <= 365) {
      message = `${days} days ago`;
    } else if (years >= 1) {
      message = `${years} year ago`;
    }
    return message;
  }

  handleVideo(id) {
    console.log(id);
  }
  render() {
    return (
      <div className="video row">
        <div className="video__img col-12">
          <video controls>
            <source src={this.props.video.video} type="video/mp4" />
            <source src={this.props.video.video} type="video/webm"></source>
            <img
              src={this.props.video.image}
              class="vide__main-image "
              alt="main-video"
            />
          </video>
        </div>
        <div className="video__details col-7">
          <h1>{this.props.video.title}</h1>
          <div className="video__stats flex">
            <div className="creator__date flex">
              <h2>By {this.props.video.channel}</h2>
              <p className="date">{this.props.video.timestamp}</p>
            </div>
            <div className="views__likes flex">
              <p>{this.props.video.views}</p>
              <p>{this.props.video.likes}</p>
            </div>
          </div>
          <p className="video__description">{this.props.video.description}</p>
        </div>
      </div>
    );
  }
}

export default VideoDetail;
