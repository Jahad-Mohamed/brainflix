import React from "react";
import Video from "../video/Video";
import "./VideoDetail.scss";
import Comment from "../Comment/Comment";
import likeIcon from "../../assets/Icons/likes.svg";
import viewIcon from "../../assets/Icons/views.svg";
import Avatar from "../avatar/Avatar";

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

    if (minutes <= 1) {
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

  render() {
    const { video, videos, handleVideo, comments } = this.props;

    return (
      <div className="video">
        <div className="video__block">
          <div className="video__img">
            <video controls poster={video.image}>
              <source src={video.video} type="video/mp4" />
              <source src={video.video} type="video/webm"></source>
            </video>
          </div>
        </div>
        <div className="video__full-container">
          <div className="video__details">
            <h1>{video.title}</h1>
            <div className="video__stats">
              <div className="video__creator-date">
                <h2>By {video.channel}</h2>
                <p className="video__date">{this.daysAgo(video.timestamp)}</p>
              </div>
              <div className="video__views-likes">
                <div className="video__views-icon flex">
                  <img src={viewIcon} alt="like-icon" />

                  <p>{video.views}</p>
                </div>
                <div className="video__like-icon flex">
                  <img src={likeIcon} alt="like-icon" />
                  <p>{video.likes}</p>
                </div>
              </div>
            </div>
            <div className="video__description">{video.description}</div>
            <div className="video__comments">
              <div className="video__comments-length">
                <h3>{`${comments.length} Comments`}</h3>
              </div>
              <div className="video__comment-bar">
                <div className="video__avatar-input">
                  <Avatar />
                  <div className="video__input-comment">
                    <p className="video__comments-para">
                      Join the Conversation
                    </p>
                    <input
                      type="text"
                      className="video__input-field"
                      placeholder="Add a new comment"
                    />
                  </div>
                </div>
                <button className="video__comment-btn">
                  {/* <img src={AddCommentIcon} alt="comment-icon" /> */}
                  COMMENT
                </button>
              </div>
              <Comment comments={comments} />
            </div>
          </div>
          <div className="video__sec-Video col-5">
            <h4 className="video__next-title">NEXT VIDEOS</h4>
            {videos
              .filter((videoslist) => videoslist.id !== video.id)
              .map((video) => {
                return (
                  <Video
                    id={video.id}
                    thumbnail={video.image}
                    title={video.title}
                    channel={video.channel}
                    handleVideo={handleVideo}
                  />
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default VideoDetail;
