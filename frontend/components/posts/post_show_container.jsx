import { connect } from 'react-redux';
import PostShow from './post_show';
import { fetchPost, clearPostErrors } from '../../actions/post_actions';
import { createLike, deleteLike, likedPost } from '../../actions/like_actions';
import { toggleModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  const post = state.entities.posts[ownProps.match.params.postId];
  const commentIds = post ? post.commentIds : [];
  let totalLikes = 0;

  if (post) {
    totalLikes = post.totalLikes;
  }

  let comments = [];

  if (commentIds.length) {
    comments = commentIds.map((id) => {
      return state.entities.comments[id];
    });
  }

  comments.forEach((el) => {
    if (typeof el === 'undefined') {
      comments = [];
    }
  });

  let commentUsers = {};

  if (comments.length) {
    comments.forEach((comment) => {
      const authorId = comment.author_id;
      commentUsers[authorId] = state.entities.users[authorId];
    });
  }

  let currentUser = false;
  if (state.session.currentUser) { currentUser = true; }

  let errors = state.errors.post;

  return { post, comments, commentUsers, totalLikes, currentUser, errors };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPost: (id) => dispatch(fetchPost(id)),
  createLike: (id) => dispatch(createLike(id)),
  deleteLike: (id) => dispatch(deleteLike(id)),
  likedPost: (id) => dispatch(likedPost(id)),
  toggleModal: (state) => dispatch(toggleModal(state)),
  clearPostErrors: () => dispatch(clearPostErrors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostShow);
