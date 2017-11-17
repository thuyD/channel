import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const UserDetails = ({ user, dateToFormat, bookmark, bio, image }) => {
  let date = '';
  if (dateToFormat) {
    date = (
      <div className="post-item-date-time">
        <p className="post-date">
          {<Moment format="MMM D">{dateToFormat}</Moment>}
        </p>
      </div>
    );
  }

  let imageSource;
  if (image === "small") {
    imageSource = user.image_url_t;
  } else {
    imageSource = user.image_url_m;
  }

  return (
    <div className="post-item-details-container flex-row">
      <div className="flex-row">
        <div className="post-item-avatar">
          <Link to={`/${user.id}`}>
            <div className="user-avatar"><img src={imageSource}/></div>
          </Link>
        </div>
        <div className="post-item-details flex-col">
          <div className="post-item-author">
            <Link to={`/${user.id}`} className="author-link-color">
              <p>{user.name}</p>
            </Link>
          </div>
          { bio ? <p>{user.bio}</p> : '' }
          { date }
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
