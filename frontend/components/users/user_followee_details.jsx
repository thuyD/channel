import React from 'react';

const UserFolloweeDetails = ({ user }) => {
  return (
    <div className="post-item-details-container flex-row">
      <div className="flex-row">
        <div className="post-item-avatar">
          <div className="user-avatar"><img src={user.image_url_t}/></div>
        </div>
        <div className="post-item-details flex-col">
          <p>{user.name}</p>
          <p>{user.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default UserFolloweeDetails;
