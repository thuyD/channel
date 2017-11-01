import { RECEIVE_ALL_POSTS,
         RECEIVE_POST,
         REMOVE_POST } from '../../actions/post_actions';
import { RECEIVE_COMMENT } from '../../actions/comment_actions';
import merge from 'lodash/merge';

const PostsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return merge({}, action.posts);
    case RECEIVE_POST:
      return merge({}, oldState, {[action.payload.post.id]: action.payload.post});
    case REMOVE_POST:
      newState = merge({}, oldState);
      delete newState[action.postId];
      return newState;
    case RECEIVE_COMMENT:
      newState = merge({}, oldState);
      debugger
      const comment = action.comment;
      const post = newState[comment.post_id];
      post.commentIds.push(comment.id);
      return newState;
    default:
      return oldState;
  }
};

export default PostsReducer;
