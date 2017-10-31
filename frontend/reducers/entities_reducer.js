import { combineReducers } from 'redux';
import PostsReducer from './posts/posts_reducer';
import CommentsReducer from './comments/comments_reducer';

export default combineReducers({
  posts: PostsReducer,
  comments: CommentsReducer,
});
