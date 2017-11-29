import { RECEIVE_ALL_POSTS,
         RECEIVE_POST,
         REMOVE_POST } from '../../actions/post_actions';
import { RECEIVE_COMMENT } from '../../actions/comment_actions';
import { RECEIVE_LIKE } from '../../actions/like_actions';
import { RECEIVE_USER } from '../../actions/user_actions';
import merge from 'lodash/merge';

const PostsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  let postId;
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return merge({}, action.posts);
    case RECEIVE_POST:
      return merge(
        {}, oldState, {[action.payload.post.id]: action.payload.post}
      );
    case REMOVE_POST:
      delete newState[action.postId];
      return newState;
    case RECEIVE_COMMENT:
      const comment = action.comment;
      const post = newState[comment.post_id];
      post.commentIds.push(comment.id);
      return newState;
    case RECEIVE_LIKE:
      postId = action.like.post_id;
      newState[postId].totalLikes += 1;
      return newState;
    case RECEIVE_USER:
      return merge({}, oldState, action.posts);
    default:
      return oldState;
  }
};

export default PostsReducer;
