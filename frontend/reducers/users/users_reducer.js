import { RECEIVE_POST, RECEIVE_ALL_POSTS } from '../../actions/post_actions';
import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_FOLLOWING, RECEIVE_USER } from '../../actions/user_actions';

import merge from 'lodash/merge';

const UsersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_POST:
      newState = merge({}, oldState, action.payload.commentUsers);
      return newState;
    // add current user to the users store
    case RECEIVE_CURRENT_USER:
      if (action.currentUser) {
        newState = merge({}, oldState,
          { [action.currentUser.id]: action.currentUser }
        );
      }
      return newState;
    case RECEIVE_ALL_POSTS:
      if (action.currentUserId) {
        const currentUser = merge({}, oldState[action.currentUserId]);
        currentUser.feedPostIds = action.feedPostIds;
        newState = merge({}, oldState, { [action.currentUserId]: currentUser });
      }
      return newState;
    case RECEIVE_USER:
      return merge({}, oldState, { [action.user.id]: action.user });
    case RECEIVE_FOLLOWING:
      const users = action.users.users || {};
      const usersIds = Object.keys(users);
      usersIds.forEach((id) => {
        newState[id] = users[id];
      });
      return newState;
    default:
      return oldState;
  }
};

export default UsersReducer;
