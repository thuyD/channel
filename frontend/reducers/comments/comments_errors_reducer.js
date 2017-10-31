import {
  RECEIVE_COMMENT,
  REMOVE_COMMENT,
  RECEIVE_COMMENT_ERRORS
} from '../../actions/comment_actions';

const initialState = [];

const CommentsErrorsReducer = (oldState = initialState, action) => {
  switch(action.type) {
    case RECEIVE_COMMENT:
    return initialState;
    case REMOVE_COMMENT:
      return initialState;
    case RECEIVE_COMMENT_ERRORS:
      return action.errors;
    default:
      return oldState;
  }
};

export default CommentsErrorsReducer;
