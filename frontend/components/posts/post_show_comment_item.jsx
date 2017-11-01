import React from 'react';
import Moment from 'react-moment';
import UserDetails from '../users/user_details';

const PostShowCommentItem = ({ comment, author }) => {
  const dateToFormat = comment.created_at;
  return (
    <div className="post-show-comment-items-container flex-center-hor">
      <div className="comment-input">
        <UserDetails
          author={author}
          dateToFormat={dateToFormat}
          bookmark={false}/>
        <p className="comment-body">{comment.body}</p>
      </div>
    </div>
  );
};

export default PostShowCommentItem;





//
// <img src={ author.image_url_t } />
// <p>{ author.name }</p>
// <p className="post-date">
//   {<Moment format="MMM D">{dateToFormat}</Moment>}  ·  1 min read
// </p>
