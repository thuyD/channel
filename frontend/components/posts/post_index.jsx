import React from 'react';
import { Link } from 'react-router-dom';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  handleClick(field) {
    return (e) => {
      e.preventDefault();
      this.props.history.push(`/${field}`);
    };
  }

  render() {
    const posts = this.props.posts.map((post) => (
      <PostIndexItem key="post.id" post={post} />
    ));

    return (
      <main className="main-body">
        <section className="hero">
          <h2>Join a community of writers and doers.</h2>
          <p>Engage directly with novice to experts from diverse background such as art, politics, tech, and much more.</p>
            <button onClick={this.handleClick("login")}>Sign in</button>
            <br/>
            <button onClick={this.handleClick("signup")}>Get started</button>
        </section>
      </main>
    );
  }

}

export default PostIndex;

//will need to add bookmark to post_index_item
