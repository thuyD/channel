import { RECEIVE_POST } from '../../actions/post_actions';
import merge from 'lodash/merge';

const UsersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_POST:
      return action.payload.commentUsers;
    default:
      return oldState;
  }
};

export default UsersReducer;
