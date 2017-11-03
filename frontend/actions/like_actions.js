import * as ApiLikeUtil from '../util/like_api_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKES = 'REMOVE_LIKES';
export const RECEIVE_LIKE_ERRORS = 'RECEIVE_LIKE_ERRORS';
export const RECEIVE_LIKE_CONFIRM = 'RECEIVE_LIKE_CONFIRM';

const receiveLike = (like) => (
  { type: RECEIVE_LIKE, like }
);

const removeLikes = () => (
  { type: REMOVE_LIKES }
);

const receiveLikeErrors = (errors) => (
  { type: RECEIVE_LIKE_ERRORS, errors }
);

const receiveLikeConfirm = (bool) => (
  { type: RECEIVE_LIKE_CONFIRM, likedPost: bool }
);

export const createLike = (postId) => (dispatch) => {
  return ApiLikeUtil.createLike(postId).then(
    (like) => dispatch(receiveLike(like)),
    (errors) => dispatch(receiveLikeErrors(errors.responseJSON))
  );
};

export const deleteLike = (postId) => (dispatch) => {
  return ApiLikeUtil.deleteLike(postId).then(
    () => dispatch(removeLikes()),
    (errors) => dispatch(receiveLikeErrors(errors.responseJSON))
  );
};

export const likedPost = (postId) => (dispatch) => {
  return ApiLikeUtil.likedPost(postId).then(
    (bool) => dispatch(receiveLikeConfirm(bool))
  );
};
