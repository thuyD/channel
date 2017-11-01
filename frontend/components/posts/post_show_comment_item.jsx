import React from 'react';
import Moment from 'react-moment';

const PostShowCommentItem = ({ comment }) => {
  const dateToFormat = comment.created_at;
  return (
    <div className="post-show-comment-items-container flex-center-hor">
      <div className="comment-input">
        <p className="post-date">
          {<Moment format="MMM D">{dateToFormat}</Moment>}  ·  1 min read
        </p>
        <p className="comment-body">{comment.body}</p>
      </div>
    </div>
  );
};

export default PostShowCommentItem;
