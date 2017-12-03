import { UPDATE_MODAL } from '../actions/modal_actions.js';

// names: followees, followers, session
const initialState = { name: null };

const ModalReducer = (oldState = initialState, action) => {
  switch( action.type ) {
    case UPDATE_MODAL:
      return { name: action.name };
    default:
      return oldState;
  }
};

export default ModalReducer;
