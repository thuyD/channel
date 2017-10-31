import React from 'react';
import Moment from 'react-moment';

const PostShowCommentItem = ({ comment }) => {
  const dateToFormat = comment.created_at;
  return (
    <div className="comment-container">
      <p className="post-date">
        {<Moment format="MMM D">{dateToFormat}</Moment>}  ·  1 min read
      </p>
      <p>{comment.body}</p>
    </div>
  );
};

export default PostShowCommentItem;
