import { combineReducers } from 'redux';
import SessionErrorsReducer from './session/session_errors_reducer';
import PostsErrorsReducer from './posts/post_errors_reducer';

const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer,
  post: PostsErrorsReducer,
});

export default ErrorsReducer;
