import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment } from '../../actions/comment_actions';
import { toggleModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  let currentUser = false;
  if (state.session.currentUser) {
    currentUser = state.session.currentUser;
  }

  return { currentUser };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createComment: (postId, comment) => dispatch(createComment(postId, comment)),
    toggleModal: (state) => dispatch(toggleModal(state)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
