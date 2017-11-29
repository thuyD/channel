import { connect } from 'react-redux';
import UserProfileNav from './user_profile_nav';
import { deletePost } from '../../actions/post_actions';
import { deleteComment } from '../../actions/comment_actions';
import { deleteLike } from '../../actions/like_actions';

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[ownProps.userId];
  let posts = [];

  if(user) {
    const postIds = user.posts;
    console.log("id:", posts)
    postIds.forEach((id) => {
      posts.push(state.entities.posts[id]);
    });
  }
  console.log("posts:", posts)
  let likes = [];
  let responses = [];

  return { posts, likes, responses };
};

const mapDispatchToProps = (dispatch) => {
  return ({
    deletePost: (postId) => dispatch(deletePost(postId)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    deleteLike: (postId) => dispatch(deleteLike(postId)),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileNav);
