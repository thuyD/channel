import { RECEIVE_POST } from '../../actions/post_actions';
import merge from 'lodash/merge';

const UsersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_POST:
      newState = merge({}, oldState, action.payload.commentUsers);
      return newState;
    default:
      return oldState;
  }
};

export default UsersReducer;
