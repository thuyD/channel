import * as ApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

const receiveCurrentUser = (currentUser) => {
  return ({
    type: RECEIVE_CURRENT_USER,
    currentUser
  });
};

const receiveSessionErrors = (errors) => {
  return ({
    type: RECEIVE_SESSION_ERRORS,
    errors
  });
};

export const clearSessionErrors = () => {
  return ({
    type: CLEAR_SESSION_ERRORS,
  });
};


export const login = (credentials) => dispatch => {
  return ApiUtil.login(credentials).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (errors) => dispatch(receiveSessionErrors(errors.responseJSON))
  );
};

export const logout = () => dispatch => {
  return ApiUtil.logout().then(
    () => dispatch(receiveCurrentUser(null)),
    (errors) => dispatch(receiveSessionErrors(errors.responseJSON))
  );
};

export const signup = (credentials) => dispatch => {
  return ApiUtil.signup(credentials).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (errors) => dispatch(receiveSessionErrors(errors.responseJSON))
  );
};

export const demoUserInfo = (credentials) => dispatch => {
  return ApiUtil.login(credentials).then(
    (user) => dispatch(receiveCurrentUser(user))
  );
};
