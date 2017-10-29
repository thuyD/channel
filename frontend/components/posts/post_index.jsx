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
    this.props.fetchPosts();
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

    return (
      <main className="main-body">

        <StickyContainer style={{ height: "auto" }}>
          <Sticky className="main-nav-box">
            {
              ({ style }) => {
                return (
                  <nav style={style} className="main-nav flex-center-hor">
                    <a>For you</a>
                    <a>Popular on Channel</a>
                    <a>Politics</a>
                    <a>Power</a>
                    <a>Poetry</a>
                    <a>Culture</a>
                    <a>Technology</a>
                  </nav>
                );
              }
            }
          </Sticky>

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

          <div className="post-items-container">{posts}</div>
          <footer className="main-footer main-nav">
            <a>Help</a>
            <a>Status</a>
            <a>Blog</a>
            <a>Careers</a>
            <a>Privacy</a>
            <a>Terms</a>
            <a>About</a>
          </footer>
        </StickyContainer>
      </main>
    );
  }

}

export default PostIndex;

//will need to add bookmark to post_index_item
