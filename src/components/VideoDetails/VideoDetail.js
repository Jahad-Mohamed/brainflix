import React from "react";
import Video from "../video/Video";
import VideoList from "../../data/video-details.json";
import "./VideoDetail.scss";
import Comment from "../Comment/Comment";
import likeIcon from "../../assets/Icons/likes.svg";
import viewIcon from "../../assets/Icons/views.svg";
import AddCommentIcon from "../../assets/Icons/add_comment.svg";
import AvatarComponents from "../Avatar";
import axios from "axios";
import { GET_VIDEO_INFO_API_URL } from "../../api/endpoints";

class VideoDetail extends React.Component {
  state = {
    comments: [],
  };

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

  componentDidMount() {
    axios.get(GET_VIDEO_INFO_API_URL(this.props.video.id)).then((res) => {
      this.setState({ comments: res.data.comments });
    });
  }
  render() {
    return (
      <div className="video row">
        <div className="video__block">
          <div className="video__img flex">
            <video controls poster={this.props.video.image}>
              <source src={this.props.video.video} type="video/mp4" />
              <source src={this.props.video.video} type="video/webm"></source>
            </video>
          </div>
        </div>
        <div className="video__full-container flex">
          <div className="video__details col-7">
            <h1>{this.props.video.title}</h1>
            <div className="video__stats flex">
              <div className="video__creator-date flex">
                <h2>By {this.props.video.channel}</h2>
                <p className="video__date">
                  {this.daysAgo(this.props.video.timestamp)}
                </p>
              </div>
              <div className="video__views-likes flex">
                <div className="video__views-icon flex">
                  <img src={viewIcon} alt="like-icon" />

                  <p>{this.props.video.views}</p>
                </div>
                <div className="video__like-icon flex">
                  <img src={likeIcon} alt="like-icon" />
                  <p>{this.props.video.likes}</p>
                </div>
              </div>
            </div>
            <div className="video__description">
              {this.props.video.description}
            </div>
            <div className="video__comments">
              <div className="video__comments-length">
                <h3>{`${VideoList[0].comments.length} Comments`}</h3>
              </div>
              <div className="video__comment-bar flex">
                <AvatarComponents />
                <div className="video__input-comment">
                  <p className="">Join the Conversation</p>
                  <input type="text" placeholder="Add a new comment" />
                </div>
                <button>
                  <img src={AddCommentIcon} alt="comment-icon" />
                  COMMENT
                </button>
              </div>
              <Comment comments={this.props.comments} />
            </div>
          </div>
          <div className="video__sec-Video col-5">
            <h4 className="video__next-title">NEXT VIDEOS</h4>
            {this.props.videos
              .filter((videoslist) => videoslist.id !== this.props.video.id)
              .map((video) => {
                return (
                  <Video
                    id={video.id}
                    thumbnail={video.image}
                    title={video.title}
                    channel={video.channel}
                    handleVideo={this.props.handleVideo}
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
