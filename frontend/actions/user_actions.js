import * as ApiUserUtil from '../util/user_api_util';

export const RECEIVE_FOLLOWING = "RECEIVE_FOLLOWING";
export const RECEIVE_USER = "RECEIVE_USER";

const receiveFollowing = (users) => ({
  type: RECEIVE_FOLLOWING,
  users
});

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user: user.user
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
    (user) => dispatch(receiveUser(user))
  );
};
