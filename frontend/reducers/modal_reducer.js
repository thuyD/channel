import { UPDATE_MODAL } from '../actions/modal_actions.js';

const initialState = { openModal: false };

const ModalReducer = (oldState = initialState, action) => {
  switch( action.type ) {
    case UPDATE_MODAL:
      return { openModal: action.state };
    default:
      return oldState;
  }
};

export default ModalReducer;
