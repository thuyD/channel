import React from 'react';
import PostIndexItem from '../posts/post_index_item.jsx';

class UserProfileNav extends React.Component {

  render() {
    let posts = <p className="stories-place-holder">{`${this.props.user.username} has not written any stories.`}</p>;
    let cssClass = "post-items-container";
    if (this.props.posts.length > 0) {
      posts = this.props.posts.map((post) => {
        return <PostIndexItem key={post.id} post={post} />;
      });
      cssClass = "post-items-container flex-center-hor";
    }

    return (
      <div>
        <div className={cssClass}>{posts}</div>
      </div>
    );
  }
}

export default UserProfileNav;
