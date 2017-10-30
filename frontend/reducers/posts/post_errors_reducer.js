import { RECEIVE_ALL_POSTS,
         RECEIVE_POST,
         REMOVE_POST,
         RECEIVE_NEW_POST,
         RECEIVE_POST_ERRORS} from '../../actions/post_actions';
import merge from 'lodash/merge';

const initialState = [];

const PostsErrorsReducer = (oldState = initialState, action) => {
  switch(action.type) {
    case RECEIVE_ALL_POSTS:
      return initialState;
    case RECEIVE_POST:
      return initialState;
    case REMOVE_POST:
      return initialState;
    case RECEIVE_NEW_POST:
      return initialState;
    case RECEIVE_POST_ERRORS:
      return action.errors;
    default:
      return oldState;
  }
};

export default PostsErrorsReducer;
