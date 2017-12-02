import * as ApiUserUtil from '../util/user_api_util';

export const RECEIVE_FOLLOWING = "RECEIVE_FOLLOWING";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const CLEAR_USER_ERRORS = "CLEAR_USER_ERRORS";

const receiveFollowing = (users) => ({
  type: RECEIVE_FOLLOWING,
  users
});

const receiveUser = (payload) => ({
  type: RECEIVE_USER,
  user: payload.user,
  posts: payload.posts,
});

const receiveUserErrors = ({status}) => ({
  type: RECEIVE_USER_ERRORS,
  errors: status
});

export const clearUserErrors = () => ({
  type: CLEAR_USER_ERRORS
});

export const followUser = (id) => (dispatch) => {
  return ApiUserUtil.followUser(id).then(
    (users) => dispatch(receiveFollowing(users))
  );
};

export const unfollowUser = (id) => (dispatch) => {
  return ApiUserUtil.unfollowUser(id).then(
    (users) => dispatch(receiveFollowing(users))
  );
};

export const fetchUser = (id) => (dispatch) =>  {
  return ApiUserUtil.fetchUser(id).then(
    (payload) => dispatch(receiveUser(payload)),
    (errors) => dispatch(receiveUserErrors(errors))
  );
};

export const fetchFollowers = (id) => (dispatch) => {
  return ApiUserUtil.fetchFollowers(id).then(
    (users) => dispatch(receiveFollowing(users))
  );
};

export const fetchFollowees = (id) => (dispatch) => {
  return ApiUserUtil.fetchFollowees(id).then(
    (users) => dispatch(receiveFollowing(users))
  );
};
