import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
});

const removeComment = (commentId) => ({
  type: REMOVE_COMMENT,
  commentId
});

const receiveCommentErrors = (errors) => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
});

export const fetchComment = (commentId) => (dispatch) => (
  CommentApiUtil.fetchComment(commentId).then(
    (comment) => dispatch(receiveComment(comment))
  )
);

export const deleteComment = (commentId) => (dispatch) => (
  CommentApiUtil.deleteComment(commentId).then(
    () => dispatch(removeComment(commentId)),
    (errors) => dispatch(receiveCommentErrors(errors.responseJSON))
  )
);

export const createComment = (postId, newComment) => (dispatch) => {
  return CommentApiUtil.createComment(postId, newComment).then(
    (comment) => dispatch(receiveComment(comment)),
    (errors) => dispatch(receiveCommentErrors(errors.responseJSON))
  );
};
