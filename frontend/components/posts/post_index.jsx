import React from 'react';
import { Link } from 'react-router-dom';
import PostIndexItem from './post_index_item';
import { StickyContainer, Sticky } from 'react-sticky';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const currentUser = this.props.currentUser;
    if (currentUser && currentUser.followeeIds.length > 0) {
      this.props.fetchFeed(this.props.currentUser.id);
    } else {
      this.props.fetchPosts();
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.currentUser.id !== this.props.currentUser.id) {
      this.props.fetchPosts();
    }
  }

  handleClick(field) {
    return (e) => {
      e.preventDefault();
      this.props.history.push(`/${field}`);
    };
  }

  render() {
    const posts = this.props.posts.map((post) => {
      return <PostIndexItem key={post.id} post={post} />;
    });

    let hero;

    if (this.props.currentUser) {
      hero = <div></div>;
    } else {
      hero = (
        <section className="hero flex-center-hor">

          <section className="hero-left flex-col">
            <h2>Join a community of writers and doers.</h2>
            <p>Engage directly with novice to experts from diverse background such as art, politics, tech, and much more.</p>
            <div className="hero-buttons">
              <button onClick={this.handleClick("signup")}>Get started</button>
              <br/>
              <button onClick={this.handleClick("login")}>Sign in</button>
            </div>
          </section>

          <section className="hero-right">
          </section>

        </section>
      )
    }

    return (
      <main className="main-body">
        <StickyContainer style={{ height: "auto" }}>

          {hero}

          <div className="post-items-container flex-center-hor">{posts}</div>
          <footer className="main-footer main-nav"></footer>
        </StickyContainer>
      </main>
    );
  }

}

export default PostIndex;

//will need to add bookmark to post_index_item
