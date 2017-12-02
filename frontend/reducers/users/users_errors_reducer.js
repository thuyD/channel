import {
  RECEIVE_USER_ERRORS,
  CLEAR_USER_ERRORS,
  RECEIVE_USER } from '../../actions/user_actions';

const initialState = [];

const UsersErrorsReducer = (state = initialState, action) => {
  switch(action.type) {
    case CLEAR_USER_ERRORS:
      return initialState;
    case RECEIVE_USER:
      return initialState;
    case RECEIVE_USER_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default UsersErrorsReducer;
