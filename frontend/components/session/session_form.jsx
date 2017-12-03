import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      name: "",
      mode: props.formType,
    };


    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }

  componentWillReceiveProps(newProps) {
    if(this.state.mode !== newProps.formType) {
      this.props.clearSessionErrors();
      this.setState({
        username: "",
        password: "",
        name: "",
        mode: newProps.formType });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    if (this.state.mode === "signup") {
      this.props.signup(user).then(
        () => { this.props.toggleModal("session"); }
      );
    } else {
      this.props.login(user).then(
        () => { this.props.toggleModal(null); }
      );
    }
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  demoLogin(e) {
    e.preventDefault();
    this.props.demoUserInfo(
      {username: "Chirps", password: "catnip"}
    ).then(
      () => { this.props.toggleModal(null); }
    );
  }

  navigateToSignUp() {
    if (this.props.shouldNavigate) {
      this.props.history.push("/signup");
    } else {
      this.setState({ mode: 'signup' });
    }
  }

  navigateToSignIn() {
    if (this.props.shouldNavigate) {
      this.props.history.push("/login");
    } else {
      this.setState({ mode: 'login' });
    }
  }

  navLink() {
    if (this.state.mode === 'login') {
      return <p>Are you new to Channel? <a onClick={this.navigateToSignUp.bind(this)}>Sign Up</a></p>;
    } else {
      return <p>Already have an account? <a onClick={this.navigateToSignIn.bind(this)}>Log In</a></p>;
    }
  }

  renderErrors() {
    const errors = this.props.errors.map((error, idx) => {
      return (<li key={idx}>{error}</li>);
    });

    return(
      <ul>
        {errors}
      </ul>
    );
  }

  render(){
    const { mode } = this.state;
    let text;
    let greeting;
    let signup;
    let loginMessage;
    let signupMessage;
    let padding = "login-form-container";
     if (mode === "signup") {
       text = "Sign Up";
       greeting = "Join Channel.";
       signup = (
         <div className="login-details flex-col">
           <label htmlFor="login-fullname">Full Name</label>
           <br />
           <input
             id="login-fullname"
             type='text'
             onChange={this.handleChange('name')}
             value={this.state.name}/>
         </div>
        );
        signupMessage = "Create an account to applaud your favorite stories, follow authors you love, and share your writing.";
     } else {
       text = "Log In";
       greeting = "Welcome Back.";
       loginMessage = "Sign in to express yourself, engage with the authors that you love, and read stories that matter to you.";
     }


     if (!this.props.shouldNavigate) {
       padding = "login-form-container-no-padding";
       if (mode === "signup") {
         greeting = "Create an account."
         signupMessage = "Build on this story’s ideas with your own or show the author your support."
       } else if (mode === 'login') {
         greeting = "Welcome back."
         loginMessage = "Sign in to keep the conversation moving with a response or follow your favorite authors."
       }
     }

    return (
      <section className={padding}>
        <main className="login-form-box flex-col">
          <section className="login-message flex-col">
            <h3>{greeting}</h3>
            <div><p>{loginMessage}</p></div>
            <div><p>{signupMessage}</p></div>
          </section>
          <div className="errors">{this.renderErrors()}</div>
          <br/>
          <form onSubmit={this.handleSubmit} className="login-form">
            <div className="login-details flex-col">
              {signup}
              <br/>
              <label htmlFor="login-username">Username</label>
              <br/>
                <input
                  id="login-username"
                  type='text'
                  onChange={this.handleChange('username')}
                  value={this.state.username} />
              <br/>
              <label htmlFor="login-password">Password</label>
              <br/>
              <input
                id="login-password"
                type='password'
                onChange={this.handleChange('password')}
                value={this.state.password} />
              <br/>
              <button className="login-button">{text}</button>
            </div>
          </form>
          <div className="login-link">{this.navLink()}</div>
          <button className="demo-login" onClick={this.demoLogin}>Demo Login</button>
        </main>
      </section>
    );
  }
}

export default withRouter(SessionForm);
