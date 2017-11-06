import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { updateUser } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  let currentUser = {
    name: '',
    bio: '',
    followeeIds: [],
    imageFile: null,
    image_url_m: '' };

  let followeeIds = [];
  const userId = ownProps.match.params.userId;

  if (state.entities.users[userId]) {
    currentUser = state.entities.users[userId];
    followeeIds = currentUser.followeeIds;
  }

  let followees = [];
  followeeIds.forEach((id) => {
    followees.push(state.entities.users[id]);
  });

  return { currentUser, followees };
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
