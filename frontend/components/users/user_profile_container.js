import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { updateUser } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  let user = {
    name: ' ',
    bio: ' ',
    followeeIds: [],
    followerIds: [],
    imageFile: null,
    image_url_m: '' };

  let followeeIds = [];
  const userId = ownProps.match.params.userId;

  if (state.entities.users[userId]) {
    user = state.entities.users[userId];
    followeeIds = user.followeeIds;
  }

  let followees = [];
  followeeIds.forEach((id) => {
    followees.push(state.entities.users[id]);
  });

  let currentUserId = null;

  if(state.session.currentUser) {
    currentUserId = state.session.currentUser.id;
  }

  return { currentUserId, user, followees };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (formData) => dispatch(updateUser(formData)),
    fetchUser: (id) => dispatch(fetchUser(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
