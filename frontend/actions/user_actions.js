import * as ApiUserUtil from '../util/user_api_util';

export const RECEIVE_FOLLOWING = "RECEIVE_FOLLOWING";

const receiveFollowing = (users) => ({
  type: RECEIVE_FOLLOWING,
  users
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
