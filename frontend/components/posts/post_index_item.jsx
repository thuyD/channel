import React from 'react';

const PostIndexItem = ({ post }) => {
  const description = (`${post.body.slice(0, 140)}...`);
  return (
    <div className="post-item-box">
      <div className="post-item-photo">
        <img src={post.image_url}/>
      </div>
      <div className="post-item-info">
        <div className="post-item-summary">
          <h3>{post.title}</h3>
          <p>{description}</p>
        </div>
        <div className="post-item-details ">
          <p>{post.author_name}</p>
          <p>{post.author_id}</p>
          <p>{post.created_at}</p>
        </div>
      </div>
    </div>
  );

};

export default PostIndexItem;
