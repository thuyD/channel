import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session
  });
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === "signup") ? signup : login;

  return ({
    formType,
    processForm: (user) => dispatch(processForm(user)),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
