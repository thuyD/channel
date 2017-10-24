import { combineReducers } from 'redux';
import ErrorsReducer from './session/errors_reducer';
import SessionReducer from './session/session_reducer';

export default combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
});
