import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup, clearSessionErrors, demoUserInfo } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return ({
    errors: state.errors.session
  });
};

const mapDispatchToProps = (dispatch, { location }) => {
  let formType = "signup";
  let processForm = signup;
  let shouldNavigate = false;
  let padding = false;

  if (location) {
    formType = location.pathname.slice(1);
    processForm = (formType === "signup") ? signup : login;
    shouldNavigate = true;
    padding = true;
  }
  console.log(padding, '!!!!!!!!!!!!')
  return ({
    formType,
    shouldNavigate,
    padding,
    processForm: (user) => dispatch(processForm(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    demoUserInfo: (user) => dispatch(demoUserInfo(user)),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
