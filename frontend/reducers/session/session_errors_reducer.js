import {
  RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS, CLEAR_SESSION_ERRORS
} from '../../actions/session_actions';

const initialState = [];

const SessionErrorsReducer = (state = initialState, action) => {
  switch(action.type) {
    case CLEAR_SESSION_ERRORS:
      return initialState;
    case RECEIVE_CURRENT_USER:
      return initialState;
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default SessionErrorsReducer;
