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
      return <p>Are you new to Channel? <Link to="/signup">Sign Up</Link></p>;
    } else {
      return <p>Already have an account? <Link to="/login">Log In</Link></p>;
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
    let message;

     if (formType === "signup") {
       text = "Sign Up";
       greeting = "Join Channel.";
       signup = (
         <label>Full Name
           <input type='text'
             onChange={this.handleChange('name')}
             value={this.state.name}/>
         </label>
      );
     } else {
       text = " Log In";
       greeting = "Welcome Back.";
       message = "Sign in to engage with the authors that you love and read stories that matter to you.";
     }

    return (
      <section className="login-form-container">
        <main className="login-form-box">
          <section className="login-message">
            <h3>{greeting}</h3>
            <div><p>{message}</p></div>
          </section>
          {this.renderErrors()}
          <form onSubmit={this.handleSubmit} className="login-form">
            {signup}
            <div className="login-details">
              <br/>
              <label for="login-username">Username</label>
                <input
                  id="login-username"
                  type='text'
                  onChange={this.handleChange('username')}
                  value={this.state.username} />
              <br/>
              <label for="login-password">Password</label>
              <input
                id="login-password"
                type='password'
                onChange={this.handleChange('password')}
                value={this.state.password} />
              <br/>
              <button className="login-button">{text}</button>
            </div>
          </form>
          {this.navLink()}
        </main>
      </section>
    );
  }
}

//need to conditionally render link
//need to add new input when signing up

export default withRouter(SessionForm);
