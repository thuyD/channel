import {
  RECEIVE_LIKE_ERRORS,
  RECEIVE_LIKE
} from '../../actions/like_actions';

const initialState = [];

const LikesErrorsReducer = (oldState = initialState, action) => {
  switch(action.type) {
    case RECEIVE_LIKE:
    return initialState;
    case RECEIVE_LIKE_ERRORS:
      return action.errors;
    default:
      return oldState;
  }
};

export default LikesErrorsReducer;
