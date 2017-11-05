import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { deletePost } from '../../actions/post_actions';
import { deleteComment } from '../../actions/comment_actions';
import { deleteLike } from '../../actions/like_actions';
import { updateUser } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  let currentUser = { name: '', bio: '', imageFile: null, image_url_m: '', formType: 'norm' };
  if (state.session.currentUser) {
    currentUser = state.entities.users[state.session.currentUser.id];
  }

  return { currentUser };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (postId) => dispatch(deletePost(postId)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    deleteLike: (postId) => dispatch(deleteLike(postId)),
    updateUser: (formData) => dispatch(updateUser(formData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
