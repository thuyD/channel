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

  let commentUsers = {};

  if (comments.length) {
    comments.forEach((comment) => {
      const authorId = comment.author_id;
      commentUsers[authorId] = state.entities.users[authorId];
    });
  }
  return { post, comments, commentUsers };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPost: (id) => dispatch(fetchPost(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostShow);
