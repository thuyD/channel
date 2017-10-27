import { combineReducers } from 'redux';
import PostsReducer from './posts/posts_reducer';

export default combineReducers({
  posts: PostsReducer,
});
