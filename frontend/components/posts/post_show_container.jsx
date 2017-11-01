import { connect } from 'react-redux';
import PostShow from './post_show';
import { fetchPost } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
  const post = state.entities.posts[ownProps.match.params.postId];
  const commentIds = post ? post.commentIds : [];
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

  return { post, comments };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPost: (id) => dispatch(fetchPost(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostShow);
