import { connect } from 'react-redux';
import ToggleFollow from './toggle_follow';
import { followUser, unfollowUser } from '../../actions/user_actions';

const mapStateToProps = (state) => {
  let currentUser = {};
  if (state.session.currentUser) {
    currentUser = state.entities.users[state.session.currentUser.id];
  }

  return { currentUser };
};

const mapDispatchToProps = (dispatch) => {
  return ({
    followUser: (id) => dispatch(followUser(id)),
    unfollowUser: (id) => dispatch(unfollowUser(id))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToggleFollow);
