import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import striptags from 'striptags';

const PostIndexItem = ({ post }) => {
  const text = striptags(post.body, [], '\n');
  const description = (`${text.slice(0, 140)}...`);
  const dateToFormat = post.created_at;
  return (
    <div className="post-item-box">
      <Link to={`/posts/${post.id}`}>
        <div className="post-item-photo">
          <img src={post.image_url_m}/>
        </div>
      </Link>
      <div className="post-item-info flex-col">
        <Link className="link-route" to={`/posts/${post.id}`}>
          <div className="post-item-summary">
            <h3>{post.title}</h3>
            <p>{description}</p>
          </div>
        </Link>

        <div className="post-item-details-container flex-row">
          <div className="flex-row">
            <div className="post-item-avatar">
              <div className="user-avatar"><img src={post.author_image_t}/></div>
            </div>
            <div className="post-item-details flex-col">
              <div className="post-item-author"><p>{post.author_name}</p></div>
              <div className="post-item-date-time">
                <p className="post-date">
                  {<Moment format="MMM D">{dateToFormat}</Moment>} · 9 min read
                </p>
              </div>
            </div>
          </div>

          <i className="fa fa-bookmark-o fa-lg" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );

};

export default PostIndexItem;
