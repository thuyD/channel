import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const UserDetails = ({ author, dateToFormat, bookmark }) => {
  return (
    <div className="post-item-details-container flex-row">
      <div className="flex-row">
        <div className="post-item-avatar">
          <Link to={`/${author.id}`}>
            <div className="user-avatar"><img src={author.image_url_t}/></div>
          </Link>
        </div>
        <div className="post-item-details flex-col">
          <div className="post-item-author">
            <Link to={`/${author.id}`} className="author-link-color">
              <p>{author.name}</p>
            </Link>
          </div>
          <div className="post-item-date-time">
            <p className="post-date">
              {<Moment format="MMM D">{dateToFormat}</Moment>}
            </p>
          </div>
        </div>
      </div>
      {
        bookmark ?
        <i className="fa fa-bookmark-o fa-lg" aria-hidden="true"></i> : ''
      }
    </div>
  );
};

export default UserDetails;
