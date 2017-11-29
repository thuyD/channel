import * as ApiUserUtil from '../util/user_api_util';

export const RECEIVE_FOLLOWING = "RECEIVE_FOLLOWING";
export const RECEIVE_USER = "RECEIVE_USER";

const receiveFollowing = (users) => ({
  type: RECEIVE_FOLLOWING,
  users
});

const receiveUser = (payload) => ({
  type: RECEIVE_USER,
  user: payload.user,
  posts: payload.posts,
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
    (payload) => dispatch(receiveUser(payload))
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
