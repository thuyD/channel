import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchFollowers, fetchFollowees } from '../../actions/user_actions.js';
import FollowModal from './follow_modal.jsx';

const mapStateToProps = (state, ownProps) => {
  const users = state.entities.users;
  const user = users[ownProps.userId] || {};
  const mode = ownProps.follow;
  
  let followees = [];
  const followeeIds = user.followeeIds || [];
  for( let i = 0; i < followeeIds.length; i++ ) {
    if (users[followeeIds[i]]) {
      followees.push(users[followeeIds[i]]);
    } else {
      break;
    }
  }

  let followers = [];
  const followerIds = user.followerIds || [];
  for( let i = 0; i < followerIds.length; i++ ) {
    if (users[followerIds[i]]) {
      followers.push(users[followerIds[i]]);
    } else {
      break;
    }
  }

  return { user, mode, followees, followers };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchFollowees: (id) => dispatch(fetchFollowees(id)),
    fetchFollowers: (id) => dispatch(fetchFollowers(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowModal);
