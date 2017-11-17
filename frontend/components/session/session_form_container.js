import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup, clearSessionErrors, demoUserInfo } from '../../actions/session_actions';
import { toggleModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  const modalState = state.ui;
  return ({
    errors: state.errors.session,
    modalState
  });
};

const mapDispatchToProps = (dispatch, { location }) => {
  let formType = "signup";
  let shouldNavigate = false;

  if (location) {
    formType = location.pathname.slice(1);
    shouldNavigate = true;
  }

  return ({
    formType,
    shouldNavigate,
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    demoUserInfo: (user) => dispatch(demoUserInfo(user)),
    toggleModal: (state) => dispatch(toggleModal(state)),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
