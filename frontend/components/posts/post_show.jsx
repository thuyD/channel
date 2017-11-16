import React from 'react';
import Moment from 'react-moment';
import { StickyContainer, Sticky } from 'react-sticky';
import CommentFormContainer from '../comments/comment_form_container';
import PostShowCommentItem from  './post_show_comment_item';
import ReactModal from 'react-modal';
import SessionFormContainer from '../session/session_form_container';
import ToggleFollowContainer from '../users/toggle_follow_container';
import { Link } from 'react-router-dom';

class PostShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openModal: false, liked: false, hover: false };
    this.openModal = this.openModal.bind(this);
    this.handleLikes = this.handleLikes.bind(this);
    this.handleUnlikes = this.handleUnlikes.bind(this);
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId);
    this.props.likedPost(this.props.match.params.postId).then(
      (res) => {
        this.setState({ liked: res.likedPost });
      }
    );
  }

  componentWillReceiveProps(newProps) {
    const oldPropsPostId = this.props.match.params.postId;
    if (newProps.match.params.postId !== oldPropsPostId) {
      this.props.fetchPost(newProps.match.params.postId);
    }
  }

  handleLikes() {
    this.props.createLike(this.props.match.params.postId);
    this.setState({ liked: true });
  }

  handleUnlikes() {
    this.props.deleteLike(this.props.match.params.postId).then(
      () => this.props.fetchPost(this.props.match.params.postId)
    );
    this.setState({ liked: false });
  }

  openModal() {
    this.setState({ openModal: true });
  }

  closeModal(e) {
    this.setState({ openModal: false });
  }

  render() {
    let comments = '';
    if (this.props.comments.length) {
      comments = this.props.comments.map((comment) => {
        return <PostShowCommentItem
          comment={comment}
          key={comment.id}
          author={this.props.commentUsers[comment.author_id]}/>;
      });
    }

    //like
    let likeIcon = this.state.liked ? "fa fa-heart fa-lg" : "fa fa-heart-o fa-lg";
    let like;
    if (this.props.currentUser) {
      like = (
        <div className="claps-container">
          <div className="claps" onClick={this.handleLikes}>
            <i className={likeIcon} aria-hidden="true"></i>
          </div>
          <div className="unclap" onClick={this.handleUnlikes}>✕</div>
        </div>
      );
    } else {
      like = (
        <div className="claps" onClick={this.openModal}>
          <i className={likeIcon} aria-hidden="true"></i>
        </div>
      );
    }

    if (this.props.post) {
      const richText = () => ({__html: this.props.post.body});
      const dateToFormat = this.props.post.created_at;
      const followButton = <ToggleFollowContainer followeeId={this.props.post.author_id} closeModal={this.closeModal}/>;

      return (
        <main className="post-show-container">
          <section className="post-show-details-container">
            <div className="post-show-details">
              <div className="user-avatar-m">
                <Link to={`/${this.props.post.author_id}`}>
                  <img src={this.props.post.author_image_s} />
                </Link>
              </div>
              <div className="show-details">
                <Link to={`/${this.props.post.author_id}`} className="author-link">
                  <p>{this.props.post.author_name}</p>
                </Link>
                <p id="2nd">{this.props.post.author_bio}</p>
                <p className="post-date">
                  {<Moment format="MMM D">{dateToFormat}</Moment>}  ·  9 min read
                </p>
              </div>
              {followButton}
            </div>
          </section>

          <section className="post-show-title flex-center-hor">
            <h1>{this.props.post.title}</h1>
          </section>

            <section className="post-show-hero">
              <img src={this.props.post.image_url_reg} />
            </section>

            <StickyContainer style={{display: "flex"}}>
            <Sticky>
              {
                ({style}) => {
                  return(
                    <span style={style} className="post-show-sidebar">
                      <div className="sidebar">
                        <div className="post-show-claps-container2">
                          <p>{this.props.totalLikes}</p>
                          {like}
                        </div>
                        <i className="fa fa-twitter fa-lg" aria-hidden="true"></i>
                        <i className="fa fa-facebook fa-lg" aria-hidden="true"></i>
                        <i className="fa fa-bookmark-o fa-lg" aria-hidden="true"></i>
                      </div>
                    </span>
                  );
                }
              }
            </Sticky>
            <section className="post-show-body">
              <div dangerouslySetInnerHTML={richText()}/>
            </section>
          </StickyContainer>

          <section className="post-show-menu flex-center-ver">
            <div className="post-show-claps-container flex-center-ver">
              {like}
              <p>{this.props.totalLikes}</p>

              <ReactModal
                isOpen={this.state.openModal}
                onRequestClose={this.closeModal.bind(this)}
                className="Modal"
                overlayClassName="Overlay"
                >

                <SessionFormContainer />
              </ReactModal>
            </div>
            <div className="post-show-connect">
              <i className="fa fa-comment fa-lg" aria-hidden="true"></i>
              <i className="fa fa-twitter fa-lg" aria-hidden="true"></i>
              <i className="fa fa-facebook fa-lg" aria-hidden="true"></i>
              <i className="fa fa-bookmark-o fa-lg" aria-hidden="true"></i>
              <i className="fa fa-ellipsis-h fa-lg" aria-hidden="true"></i>
            </div>
          </section>

          <section className="post-show-details-container flex-center-ver">
            <div className="post-show-details post-show-details-last">
              <div className="user-avatar-m">
                <Link to={`/${this.props.post.author_id}`}>
                  <img src={this.props.post.author_image_s} />
                </Link>
              </div>
              <div className="show-details">
                <Link to={`/${this.props.post.author_id}`} className="author-link">
                  <p>{this.props.post.author_name}</p>
                </Link>
                <p id="2nd">{this.props.post.author_bio}</p>
              </div>
            </div>
            {followButton}
          </section>

          <section className="comments-container">
              {this.props.match.params.postId ?
                <CommentFormContainer
                  postId={this.props.match.params.postId}/> : ''}
              {comments}
          </section>

        </main>
      );
    } else {
      return <div className="loader">Loading...</div>;
    }
  }
}

export default PostShow;
