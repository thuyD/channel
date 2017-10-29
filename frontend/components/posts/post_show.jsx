import React from 'react';
import Moment from 'react-moment';

class PostShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId);
  }

  render() {
    if (this.props.post) {
      const dateToFormat = this.props.post.created_at
      return (
        <main className="post-show-container">
          <section className="post-show-details-container flex-center-hor">
            <div className="post-show-details">
              <div className="user-avatar">
                <img src={this.props.post.author_image_s} />
              </div>
              <div className="show-details">
                <p>{this.props.post.author_name}</p>
                <p id="2nd">{this.props.post.author_bio}</p>
                <p className="post-date">
                  {<Moment format="MMM D">{dateToFormat}</Moment>}  ·  9 min read
                </p>
              </div>
            </div>
          </section>
          <section className="post-show-title flex-center-hor">
            <h1>{this.props.post.title}</h1>
          </section>
          <section className="post-show-hero">
            <img src={this.props.post.image_url_reg} />
          </section>
          <section className="post-show-body">
            <p>{this.props.post.body}</p>
          </section>

          <section className="post-show-menu flex-center-ver">
            <div className="post-show-claps">
              <i class="fa fa-heart-o fa-lg" aria-hidden="true"></i>
            </div>
            <div className="post-show-connect">
              <i class="fa fa-comment fa-lg" aria-hidden="true"></i>
              <i class="fa fa-twitter fa-lg" aria-hidden="true"></i>
              <i class="fa fa-facebook fa-lg" aria-hidden="true"></i>
              <i class="fa fa-bookmark fa-lg" aria-hidden="true"></i>
              <i class="fa fa-ellipsis-h fa-lg" aria-hidden="true"></i>
            </div>
          </section>
          <section className="post-show-details-container flex-center-ver">
            <div className="post-show-details">
              <div className="user-avatar">
                <img src={this.props.post.author_image_s} />
              </div>
              <div className="show-details">
                <p>{this.props.post.author_name}</p>
                <p id="2nd">{this.props.post.author_bio}</p>
              </div>
            </div>
            <button className="gen-button">Follow</button>
          </section>
        </main>
      );
    } else {
      return <div className="loader">Loading...</div>;
    }
  }
}

export default PostShow;
