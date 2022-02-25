import React from "react";

class Comment extends React.Component {
  render() {
    let comments = this.props.comments;
    let commentComponent = comments.map((comment) => {
      return (
        <div className="comment row">
          <div className="comment__avatar"></div>
          <div className="comment__content">
            <div>
              <h2>{comment.name}</h2>
              <p>{comment.timestamp}</p>
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
