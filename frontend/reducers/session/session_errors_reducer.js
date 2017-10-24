import {
  RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS
} from '../../actions/session_actions';

const initialState = [];

const SessionErrorsReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return initialState;
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default SessionErrorsReducer;

//want to implement clearErrors so that when a user navigates away from
//the page and then come back that the errors would be unmounted
