import { connect } from 'react-redux';
import ToggleFollow from './toggle_follow';
import { followUser, unfollowUser } from '../../actions/user_actions';
import { toggleModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  let currentUser = {};
  if (state.session.currentUser) {
    currentUser = state.entities.users[state.session.currentUser.id];
  }

  const modalState = state.ui;
  return { currentUser, modalState };
};

const mapDispatchToProps = (dispatch) => {
  return ({
    followUser: (id) => dispatch(followUser(id)),
    unfollowUser: (id) => dispatch(unfollowUser(id)),
    toggleModal: (state) => dispatch(toggleModal(state)),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToggleFollow);
