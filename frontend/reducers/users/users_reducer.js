import { RECEIVE_POST } from '../../actions/post_actions';
import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
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
        newState = merge({}, oldState, { [action.currentUser.id]: action.currentUser });
      }
      return newState;
    default:
      return oldState;
  }
};

export default UsersReducer;
