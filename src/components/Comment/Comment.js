import React from "react";
import AvatarComponents from "../avatar/Avatar";
import "./comment.scss";
class Comment extends React.Component {
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
    } else if (hours > 1 && hours <= 24) {
      message = `${hours} hours ago`;
    } else if (days > 1 && days <= 365) {
      message = `${days} days ago`;
    } else if (years >= 1) {
      message = `${years} years ago`;
    }

    return message;
  }

  render() {
    let comments = this.props.comments;
    // this.daysAgo
    let commentComponent = comments.map((comment, index) => {
      return (
        <div className="comment row flex" key={index}>
          <div className="comment__avatar">
            <AvatarComponents />
          </div>
          <div className="comment__content">
            <div className="comment__name-timestamp flex">
              <h4>{comment.name}</h4>
              <p>{this.daysAgo(comment.timestamp)}</p>
            </div>
            {comment.comment}
          </div>
        </div>
      );
    });
    return commentComponent;
  }
}

export default Comment;
