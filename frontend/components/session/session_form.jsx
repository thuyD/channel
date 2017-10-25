import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      name: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleChange(field){
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <p>Are you new to Channel?  <Link to="/signup">Sign Up</Link></p>;
    } else {
      return <p>Already have an account?  <Link to="/login">Log In</Link></p>;
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
    const formType = this.props.formType;
    let text;
    let greeting;
    let signup;
    let loginMessage;
    let signupMessage;

     if (formType === "signup") {
       text = "Sign Up";
       greeting = "Join Channel.";
       signup = (
         <div className="login-details">
           <label htmlFor="login-fullname">Full Name</label>
           <br />
           <input
             id="login-fullname"
             type='text'
             onChange={this.handleChange('name')}
             value={this.state.name}/>
         </div>
        );
        signupMessage = "Create an account to applaud your favorite stories, follow authors you love, and share your writing."
     } else {
       text = " Log In";
       greeting = "Welcome Back.";
       loginMessage = "Sign in to express yourself, engage with the authors that you love, and read stories that matter to you.";
     }

    return (
      <section className="login-form-container">
        <main className="login-form-box">
          <section className="login-message">
            <h3>{greeting}</h3>
            <iframe src="https://giphy.com/embed/3ov9jSGHr0FrsJfRgQ"
              width="110" height="110" frameBorder="0" className="giphy-embed"
              allowFullScreen></iframe>
            <div><p>{loginMessage}</p></div>
            <div><p>{signupMessage}</p></div>
          </section>
          <br/>
          <div className="errors">{this.renderErrors()}</div>
          <form onSubmit={this.handleSubmit} className="login-form">
            <div className="login-details">
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
        </main>
      </section>
    );
  }
}

export default withRouter(SessionForm);
