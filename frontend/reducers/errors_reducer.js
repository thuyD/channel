import { combineReducers } from 'redux';
import SessionErrorsReducer from './session/session_errors_reducer';
import PostsErrorsReducer from './posts/posts_errors_reducer';
import CommentsErrorsReducer from './comments/comments_errors_reducer';

const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer,
  post: PostsErrorsReducer,
  comment: CommentsErrorsReducer,
});

export default ErrorsReducer;
