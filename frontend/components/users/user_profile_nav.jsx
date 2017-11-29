import React from 'react';
import PostIndexItem from '../posts/post_index_item.jsx';

class UserProfileNav extends React.Component {

  render() {
    let posts = "";
    if (this.props.posts.length > 0) {
      posts = this.props.posts.map((post) => {
        return <PostIndexItem key={post.id} post={post} />;
      });
    }

    return (
      <div>
        <div className="post-items-container flex-center-hor">{posts}</div>
      </div>
    );
  }
}

export default UserProfileNav;
