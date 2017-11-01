import {
  RECEIVE_COMMENT,
  REMOVE_COMMENT } from '../../actions/comment_actions';

import { RECEIVE_POST } from '../../actions/post_actions';

import merge from 'lodash/merge';

const CommentsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_COMMENT:
      return merge({}, oldState, { [action.comment.id]: action.comment });
    case RECEIVE_POST:
      return action.payload.comments;
    case REMOVE_COMMENT:
      let newState = merge({}, oldState);
      delete newState[action.commentId];
      return newState;
    default:
      return oldState;
  }
};

export default CommentsReducer;
