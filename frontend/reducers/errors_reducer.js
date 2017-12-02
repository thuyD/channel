import { combineReducers } from 'redux';
import SessionErrorsReducer from './session/session_errors_reducer';
import PostsErrorsReducer from './posts/posts_errors_reducer';
import CommentsErrorsReducer from './comments/comments_errors_reducer';
import LikesErrorsReducer from './likes/likes_errors_reducer';
import UsersErrorsReducer from './users/users_errors_reducer';

const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer,
  post: PostsErrorsReducer,
  comment: CommentsErrorsReducer,
  user: UsersErrorsReducer,
});

export default ErrorsReducer;
