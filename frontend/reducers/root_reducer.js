import { combineReducers } from 'redux';
import ErrorsReducer from './errors_reducer';
import SessionReducer from './session/session_reducer';
import PostsReducer from './posts/posts_reducer';
import EntitiesReducer from './entities_reducer';
import ModalReducer from './modal_reducer';

export default combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  entities: EntitiesReducer,
  ui: ModalReducer,
});
