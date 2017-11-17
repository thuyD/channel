import React from 'react';
import Moment from 'react-moment';
import UserDetails from '../users/user_details';

const PostShowCommentItem = ({ comment, author }) => {
  const dateToFormat = comment.created_at;
  return (
    <div className="post-show-comment-items-container flex-center-hor">
      <div className="comment-input">
        <UserDetails
          user={author}
          dateToFormat={dateToFormat}
          bookmark={false}
          bio={false}
          image="small" />
        <p className="comment-body">{comment.body}</p>
      </div>
    </div>
  );
};

export default PostShowCommentItem;
